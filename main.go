package main

import (
	"bufio"
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"math/rand"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"
)

// Config holds all configuration constants
type Config struct {
	LeetCodeSession      string
	CSRFToken            string
	MaxQ                 int
	TargetSuccess        int
	MaxRandomAttempts    int
	DelayBetweenAttempts time.Duration
	OverallAttemptLimit  int
	ProgressFile         string
	SkippedFile          string
}

// Problem represents a LeetCode problem
type Problem struct {
	ID          int    `json:"id"`
	LeetCodeURL string `json:"leetcode_url"`
	WalkccURL   string `json:"walkcc_url"`
}

// LeetCodeSubmitter handles the submission logic
type LeetCodeSubmitter struct {
	config              Config
	progress            map[string]bool
	doneQuestions       []int
	cloudflareRejections int
	excludeSet          map[string]bool
	headers             map[string]string
	problems            []Problem
}

var (
	premiumQuestions = []int{156, 157, 158, 159, 161, 163, 170, 186, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 259, 261, 265, 266, 267, 269, 270, 271, 272, 276, 277, 280, 281, 285, 286, 288, 291, 293, 294, 296, 298, 302, 305, 308, 311, 314, 317, 320, 323, 325, 333, 339, 340, 346, 348, 351, 353, 356, 358, 359, 360, 361, 362, 364, 366, 369, 370, 379, 408, 411, 418, 422, 425, 426, 428, 431, 439, 444, 465, 469, 471, 484, 487, 489, 490, 499, 505, 510, 512, 527, 531, 533, 534, 536, 544, 545, 548, 549, 555, 562, 568, 569, 571, 573, 574, 578, 579, 580, 582, 588, 597, 603, 604, 612, 613, 614, 615, 616, 618, 625, 631, 634, 635, 642, 644, 651, 656, 660, 663, 666, 681, 683, 694, 702, 708, 711, 716, 723, 727, 734, 737, 742, 750, 751, 755, 758, 759, 760, 772, 774, 776, 800}
	dbQuestions = []int{175, 176, 177, 178, 180, 181, 182, 183, 184, 185, 196, 197, 262, 511, 512, 534, 550, 569, 570, 571, 574, 577, 578, 579, 580, 584, 585, 586, 595, 596, 597, 601, 602, 603, 607, 608, 610, 612, 613, 614, 615, 618, 619, 620, 626, 627}
)

func NewLeetCodeSubmitter(config Config) *LeetCodeSubmitter {
	ls := &LeetCodeSubmitter{
		config:     config,
		progress:   make(map[string]bool),
		excludeSet: make(map[string]bool),
		headers: map[string]string{
			"Content-Type": "application/json",
			"Origin":       "https://leetcode.com",
			"User-Agent":   "Mozilla/5.0",
			"x-csrftoken":  config.CSRFToken,
			"Cookie":       fmt.Sprintf("LEETCODE_SESSION=%s; csrftoken=%s;", config.LeetCodeSession, config.CSRFToken),
		},
	}
	return ls
}

func (ls *LeetCodeSubmitter) LoadProgress() {
	data, err := os.ReadFile(ls.config.ProgressFile)
	if err != nil {
		return
	}
	json.Unmarshal(data, &ls.progress)
}

func (ls *LeetCodeSubmitter) SaveProgress() {
	data, _ := json.MarshalIndent(ls.progress, "", "  ")
	os.WriteFile(ls.config.ProgressFile, data, 0644)
}

func (ls *LeetCodeSubmitter) LogSkip(qnum int, reason string) {
	msg := fmt.Sprintf("%d: %s\n", qnum, reason)
	f, _ := os.OpenFile(ls.config.SkippedFile, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if f != nil {
		f.WriteString(msg)
		f.Close()
	}
	fmt.Printf("⚠️  Skipping #%d: %s\n", qnum, reason)
}

func (ls *LeetCodeSubmitter) DecodeString(encoded string) (string, string) {
	length := ""
	i := 0
	for i < len(encoded) && encoded[i] >= '0' && encoded[i] <= '9' {
		length += string(encoded[i])
		i++
	}
	lenVal, _ := strconv.Atoi(length)
	if i+lenVal > len(encoded) {
		return "", ""
	}
	original := encoded[i:i+lenVal]
	return original, encoded[i+lenVal:]
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Go implementation - smaller executable size!")
	fmt.Print("Enter Merge Token: ")
	token, _ := reader.ReadString('\n')
	token = strings.TrimSpace(token)

	config := Config{
		MaxQ:                 3691,
		TargetSuccess:        1,
		MaxRandomAttempts:    4,
		DelayBetweenAttempts: 1500 * time.Millisecond,
		OverallAttemptLimit:  2000,
		ProgressFile:         "progress.json",
		SkippedFile:          "skipped.log",
	}

	submitter := NewLeetCodeSubmitter(config)
	session, remaining := submitter.DecodeString(token)
	config.LeetCodeSession = session
	csrf, _ := submitter.DecodeString(remaining)
	config.CSRFToken = csrf
	submitter.config = config

	fmt.Println("Successfully transitioned to Golang!")
	fmt.Println("Press Enter to exit...")
	reader.ReadString('\n')
}

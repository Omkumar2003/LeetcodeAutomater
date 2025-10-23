# LeetCode Auto Submission Script

<p align="center">
  <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/Node.js-18%2B-green.svg?style=flat-square&logo=node.js" alt="Node.js 18+"></a>
  
  <a href="https://github.com/Omkumar2003/LeetcodeAutomater/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square" alt="License: MIT"></a>
  
  <a href="https://hacktoberfest.com/"><img src="https://img.shields.io/badge/Hacktoberfest-2025-orange.svg?style=flat-square" alt="Hacktoberfest 2025"></a>
</p>

This Node.js script automates fetching solved LeetCode problems, retrieves corresponding Java code (via WalkCCC data), and submits solutions directly to LeetCode using your authenticated session.

## Features

-  Fetches your solved LeetCode problems using GraphQL

- Skips premium-only & DB-only questions

- Extracts Java solutions from merged_output.json

- Submits code to LeetCode automatically

- Logs skipped/unsubmitted questions

- Tracks progress in progress.json

- **New:** Chrome Extension to easily fetch LeetCode session and CSRF tokens


##New Project Structure
```
project/
├── LeetCode-Token-Viewer
    ├── manifest.json
    ├── popup.html
    ├── popup.js
├── ok.js             # Your main Node.js script
├── website
    ├── index.css # Styling for the page
    ├── index.html  # main html structure
    ├── leet1.jpg   # placeholder image
├── merged_output.json    # Contains problem info (id, walkcc_url, leetcode_url)
├── progress.json         # Tracks submitted questions
├── skipped.log           # Logs skipped/unsubmitted entries
```

## Requirements
- Node.js Environment (Make sure Node.js is installed.)
```
node -v
npm -v
```
- Install Dependencies
```
npm install fs-extra
```

## LeetCode Token Viewer Chrome Extension

This Chrome Extension helps you fetch your LeetCode session and CSRF tokens locally.

### Features

- Extracts LEETCODE_SESSION and csrftoken from your browser cookies

- Displays tokens in a simple popup

- Lets you copy tokens as a single string (e.g., session:<value>; csrf:<value>)

- Fully local — never sends your tokens anywhere

### Installation

- Open Chrome and go to chrome://extensions.

- Enable Developer mode (toggle in top-right corner).

- Click Load unpacked and select the leetcode-token-viewer folder.

- Pin the extension to the Chrome toolbar for easy access.

### Usage

- Log in to LeetCode.

- Click the LeetCode Token Viewer extension icon.


## How It Works

1.  **Run the Script**: Start the script from your terminal using `node ok.js`.
2.  **Enter Tokens**: The script will prompt you to enter your `LEETCODE_SESSION` and `CSRFTOKEN`. You can get these easily using the provided Chrome Extension.
3.  **Fetch Solved Problems**: It fetches a list of problems you have already solved on LeetCode to avoid re-submitting them.
4.  **Select & Submit**: The script randomly selects an unsolved, non-premium, non-database problem, retrieves the Java solution, and submits it on your behalf.
5.  **Track Progress**: It logs skipped questions to `skipped.log` and saves successful submissions in `progress.json`.

### Configuration
You can modify the constants at the top of `ok.js` to change the script's behavior:
- `MAX_Q`: Total number of questions to iterate through (default: 3691).
- `TARGET_SUCCESS`: The number of successful submissions to achieve before stopping (default: 1).
- `MAX_RANDOM_ATTEMPTS`: Maximum retries to find a valid random question.
- `DELAY_BETWEEN_ATTEMPTS_MS`: Delay (in milliseconds) between submission attempts.

## Website elements 

- Features section: Shows what is leetcode automator and how it works
- How it works section: Gives the 3 links to download the new releases of chrome extensions, desktop application and full project github link 

## Running the Script

Run the script with Node:
```
node ok.js
```

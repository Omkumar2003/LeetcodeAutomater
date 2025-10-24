# LeetCode Auto Submission Script

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

- Copy the token string displayed:

## Update Credentials in Script

Fill in these fields at the top of the file:
```
const LEETCODE_SESSION = "<your-session-cookie>";
const CSRFTOKEN = "<your-csrf-token>";
```

## How It Works
- Constants
```
MAX_Q: Total number of questions to iterate (default: 3691)

TARGET_SUCCESS: Required success count (1 means first submission victory)

MAX_RANDOM_ATTEMPTS: Max retries per question

DELAY_BETWEEN_ATTEMPTS_MS: Delay between submissions

premiumQues: List of paid-only questions to skip

dbQues: List of SQL/DB-based questions to skip
```

## Website elements 

- Home section: Introduces the leetcode automator with a get started button to download the script
- Features section: Shows what is leetcode automator and how it works
- How it works section: Gives the 3 links to download the new releases of chrome extensions, desktop application and full project github link 

## Running the Script

Run the script with Node:
```
node ok.js
```
<!-- issue-3 of .exe file from ok.js -->
## Building the Executable

To create a standalone `.exe` file from this project, first install the dependencies:

```bash
npm install -g pkg

Then, use pkg to build the executable:

pkg --targets node18-win-x64 ok.js
in leetcodeautomater

This will create an ok.exe file in the root directory.

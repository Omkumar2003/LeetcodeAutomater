# LeetCode Automater

The **LeetCodeAutomater** project provides an easy way to automate the submission of solutions to LeetCode using your LeetCode session and CSRF token. **This repository includes both a Chrome Extension to fetch the required session data and an Executable to run the automation process.**

## 🧩 Features

- **Automatic Code Submission:** Submits your Java solutions directly to LeetCode.

- **Skip Premium & Database-Only Questions:** Filters out premium-only and database-based problems.

- **Progress Tracking:** Keeps track of submitted and skipped questions via progress.json and skipped.log.

- **Chrome Extension for Token Fetching:** Fetches your LeetCode session and CSRF tokens locally for secure authentication.

- **Easy Setup & Use:** Includes both a Chrome extension and an executable for quick deployment.

## 📂 Project Structure
```
LeetcodeAutomater
|   ok.js                     # Main Node.js script (if running from source)
|   .gitignore
|   CODE_OF_CONDUCT.md
|   LICENSE
|   merged_output.json        # Contains problem info (id, walkcc_url, leetcode_url)
|   README.md
|   
+---LeetCode-Token-Viewer     # Chrome extension files
|   |   manifest.json
|   |   popup.html
|   |   popup.js
|   |
|   \---icons
|           icon128.png
|           icon16.png
|           icon32.png
|           icon48.png
|
\---website                     # for website of this project
        index.css
        index.html
        leet1.jpg
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **Google Chrome** browser
- **LeetCode Account** - Make sure you're logged in to [LeetCode](https://leetcode.com/)
- **Git** (optional, for cloning the repository)

---


## 🧑‍💻 How to Run the LeetCodeAutomater

 **1. Download the Chrome extension**

There are **two options**:
- **Option 1:** Download directly from the release page

    [👉 LeetCode Token Viewer (Download Link)](https://github.com/Omkumar2003/LeetcodeAutomater/releases/download/1.04/LeetCode-Token-Viewer.zip)

    and **Extract** the zip File
    
- **Option 2:** Clone the GitHub repository:
    
    
    git clone https://github.com/Omkumar2003/LeetcodeAutomater.git
    
    Inside the repo, find the folder named LeetCode Token Viewer

**2. Load the Extension in Chrome**

- Open Chrome and go to: chrome://extensions

- Enable **Developer Mode** (toggle at top-right)

- Click **Load unpacked**

- Select the folder LeetCode Token Viewer

**3. Run the Program**

You can run it in **two ways**:

- **Option 1:** Run the executable

    [💻 LeetcodeAutomater.exe (Download)](https://github.com/Omkumar2003/LeetcodeAutomater/releases/download/1.04/LeetcodeAutomater.exe)

- **Option 2:** Run from source

    ```
    git clone https://github.com/Omkumar2003/LeetcodeAutomater.git
    cd LeetcodeAutomater
    node ok.js
    ```


**4. Get & Use Your Merge Token**

When you run the program, it will prompt for your Merge Token.
- Make sure you’re **logged into LeetCode** in your browser.
- Open the **Chrome Extension** → click *Copy Merge Token.
- **Paste** the token into the program when prompted.

## ⚙ Executable(.exe) — LeetCode Automater

The LeetCode Automater executable automates the process of submitting your solutions to LeetCode, powered by the Merge Token you fetch with the Chrome Extension.

## 🛠 How to Build the Executable(.exe) (Optional)

If you'd prefer to build the executable manually:

```
npm install -g pkg
pkg ok.js --targets node18-win-x64  --output LeetcodeAutomater.exe
```

This is how the provided executable [LeetcodeAutomater.exe](https://github.com/Omkumar2003/LeetcodeAutomater/releases/download/1.04/LeetcodeAutomater.exe) was created.


## 🔧 Troubleshooting

### Common Issues and Solutions:

**Issue 1: Extension not loading in Chrome**
- Make sure Developer Mode is enabled in `chrome://extensions`
- Check if you selected the correct folder (LeetCode-Token-Viewer)
- Try reloading the extension

**Issue 2: "Merge Token not found" error**
- Ensure you're logged into LeetCode in your browser
- Open the Chrome Extension and click "Copy Merge Token"
- The token is only valid while you're logged in

**Issue 3: Node.js errors when running from source**
- Make sure you have Node.js v14 or higher installed
- Run `npm install -g pkg` before building
- Check that all dependencies are installed

**Issue 4: Executable not working**
- Make sure you've extracted the zip file completely
- On Mac/Linux, you may need to give execution permission: `chmod +x LeetcodeAutomater.exe`
- Try running from source instead (Option 2)

If you encounter other issues, please [open an issue](https://github.com/Omkumar2003/LeetcodeAutomater/issues) on GitHub.

---

# ⭐ Support

If you like this project or found it useful, please consider giving it a ⭐ on GitHub!
Your support motivates further improvements and updates. 💖

---

## 👥 Contributors

We appreciate all the amazing people who have contributed to this project! 🚀

<a href="https://github.com/Omkumar2003/LeetcodeAutomater/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Omkumar2003/LeetcodeAutomater" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

### How to Contribute

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/YourFeature`)
6. Open a Pull Request

Please read our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

async function getLeetCodeTokens() {
  try {
    const tokenBox = document.getElementById("token");
    const status = document.getElementById("status");
    const copyBtn = document.getElementById("copy");
    const buttonRow = document.querySelector(".button-row"); // flex container for buttons

    const cookies = await chrome.cookies.getAll({ domain: "leetcode.com" });
    const session = cookies.find(c => c.name === "LEETCODE_SESSION");
    const csrftoken = cookies.find(c => c.name === "csrftoken");

    if (session && csrftoken) {
      const encode = (str) => str.length.toString().padStart(4, "0") + str;
      const combinedToken = encode(session.value) + encode(csrftoken.value);

      // Remove loading effect smoothly
      tokenBox.classList.remove("loading");
      tokenBox.style.opacity = "0";
      tokenBox.textContent = `Merge Token: ${combinedToken}`;
      setTimeout(() => (tokenBox.style.opacity = "1"), 50);

      // Apply truncation
      tokenBox.style.display = "-webkit-box";
      tokenBox.style.webkitLineClamp = "5";
      tokenBox.style.webkitBoxOrient = "vertical";
      tokenBox.style.overflow = "hidden";

      // Add Show More button only if token is long
      if (combinedToken.length > 200) {
        const toggleBtn = document.createElement("button");
        toggleBtn.id = "toggleBtn";
        toggleBtn.innerHTML = 'Show More &#9662;'; // ▼ symbol

        // Append it to the button row (flex row)
        if (buttonRow) buttonRow.insertBefore(toggleBtn, copyBtn);

        let expanded = false;
        toggleBtn.addEventListener("click", () => {
          expanded = !expanded;
          tokenBox.style.webkitLineClamp = expanded ? "unset" : "5";
          toggleBtn.innerHTML = expanded ? "Show Less &#9652;" : "Show More &#9662;"; // ▲ symbol
        });
      }

      // Copy handler
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(combinedToken);
        status.textContent = "✅ Merge token copied!";
        setTimeout(() => (status.textContent = ""), 2000);
      };
    } else {
      tokenBox.classList.remove("loading");
      tokenBox.textContent = "⚠️ Please log in to leetcode.com first.";
      copyBtn.disabled = true;
    }
  } catch (err) {
    console.error("Error fetching cookies:", err);
    const tokenBox = document.getElementById("token");
    tokenBox.classList.remove("loading");
    tokenBox.textContent = "Error fetching tokens.";
  }
}

getLeetCodeTokens();

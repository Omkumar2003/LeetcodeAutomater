// Helper function to handle the copy-to-clipboard logic
function copyToClipboard(text, buttonElement) {
  if (!text) return; // Don't copy if text is "Not Found"

  navigator.clipboard.writeText(text).then(() => {
    // Give visual feedback
    const originalText = buttonElement.textContent;
    buttonElement.textContent = 'Copied!';
    setTimeout(() => {
      buttonElement.textContent = originalText;
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}

// Run this code after the popup.html page has loaded
document.addEventListener('DOMContentLoaded', () => {
  const sessionInput = document.getElementById('session-token');
  const csrfInput = document.getElementById('csrf-token');
  const sessionCopyBtn = document.getElementById('copy-session');
  const csrfCopyBtn = document.getElementById('copy-csrf');

  // 1. Send a message to the background script to get the tokens
  chrome.runtime.sendMessage({ message: 'getTokens' }, (response) => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
      sessionInput.value = "Error";
      csrfInput.value = "Error";
      return;
    }

    const sessionToken = response.session;
    const csrfToken = response.csrf;

    // 2. Display the tokens in the input fields
    sessionInput.value = sessionToken || "Not Found (Are you logged in?)";
    csrfInput.value = csrfToken || "Not Found (Are you logged in?)";

    // 3. Add click listeners to the copy buttons
    sessionCopyBtn.addEventListener('click', () => {
      copyToClipboard(sessionToken, sessionCopyBtn);
    });

    csrfCopyBtn.addEventListener('click', () => {
      copyToClipboard(csrfToken, csrfCopyBtn);
    });
  });
});
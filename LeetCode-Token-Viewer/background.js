// Function to get a specific cookie from LeetCode
function getCookie(name) {
  return new Promise((resolve) => {
    chrome.cookies.get({
      url: 'https://leetcode.com',
      name: name
    }, (cookie) => {
      resolve(cookie ? cookie.value : null);
    });
  });
}

// Listen for a message from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'getTokens') {
    // Fetch both cookies at the same time
    Promise.all([
      getCookie('LEETCODE_SESSION'),
      getCookie('csrftoken')
    ]).then(([sessionToken, csrfToken]) => {
      // Send the tokens back to the popup
      sendResponse({
        session: sessionToken,
        csrf: csrfToken
      });
    });

    // This 'return true' is very important.
    // It tells Chrome that we will send a response asynchronously.
    return true;
  }
});
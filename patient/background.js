chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  {urls: ["*://www.youtube.com/*"]},
  ["blocking"]
);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'login') {
    if (request.email === 'test@gmail.com')
      sendResponse({message: "success"})
  } /* else if (request.message === 'logout') {
      flip_user_status(false, null)
          .then(res => sendResponse(res))
          .catch(err => console.log(err));

      return true;
    }  */

  return true;
});

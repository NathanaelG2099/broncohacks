localStorage.setItem("blocked_urls", JSON.stringify(["*://*.google.com/*"]));

var client_code = "XtykL9";

var site_entry_times = {};

// Get the blocked URLs
setInterval(() => {
    fetch('http://localhost:3000/restrictions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code: client_code
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data.fullBlock)
        localStorage.setItem("blocked_urls", JSON.stringify(data.fullBlock));
        console.log(JSON.parse(localStorage.getItem("blocked_urls")))
    })
}, 2000)

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { 
        console.log(details.url)
        return {cancel: true}; 
    },
    {urls: JSON.parse(localStorage.getItem("blocked_urls"))},
  ["blocking"]
);


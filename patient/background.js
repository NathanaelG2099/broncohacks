localStorage.setItem("blocked_urls", JSON.stringify(["*://*.google.com/*"]));

const matchPatternToRegex = (pattern) => {
    return new RegExp('^' + pattern
        .replace(/\./g, '\\.')
        .replace(/\*/g, '.*')
        .replace(/\//g, '\\/') + '$');
}

var client_code = "XtykL9";

var site_entry_times = {};

const update_blocked = () => {
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
}

update_blocked()
// Get the blocked URLs
setInterval(update_blocked, 2000)

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { 
        var blocked_list = JSON.parse(localStorage.getItem("blocked_urls"));

        for (let url of blocked_list) {
            let pattern = matchPatternToRegex(url);
            if (pattern.test(details.url)) {
                console.log("Blocked:", details.url);
                return { cancel: true };
            }
        }
        return { cancel: false }; 
    },
    {urls: ["<all_urls>"]},
  ["blocking"]
);


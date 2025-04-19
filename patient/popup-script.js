let sync = document.getElementById("sync");

document.addEventListener('DOMContentLoaded', function(){
    var userCode = document.getElementById('sync').innerText;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            code: userCode
        })
    }

    fetch('http://localhost:3000/restrictions', options)
    .then(response => {
        if(!response.ok){
            throw new Error("HTTP Error")
        }   
        return response.json();     
    })
    .then(data => {
        console.log(data.fullBlock)
        console.log(JSON.stringify(data.fullBlock));
        const siteList = JSON.stringify(data.fullBlock).split(",");

        const newDiv = document.createElement("div");

        for (const site of data.fullBlock) {
            const newContent = document.createElement('p')
            newContent.textContent = site;
            newDiv.appendChild(newContent);
        };

        console.log(data.timedBlock)
        for (const site of data.timedBlock){
            const newContent = document.createElement('p')
            const urlPattern = Object.keys(site);
            const timeLimit = site[urlPattern];

            newContent.textContent = urlPattern + "\n" + "Time: " + timeLimit;
            newDiv.appendChild(newContent);
        }

        for (const site of data.hourBlock){
            const newContent = document.createElement('p')
            const urlPattern = Object.keys(site);
            const timeLimit = site[urlPattern];

            newContent.textContent = urlPattern + "\n" + "Allowed Times: " + timeLimit;
            newDiv.appendChild(newContent);
        }

        
        
        const curDiv = document.getElementById("websiteDiv");
        curDiv.replaceWith(newDiv);
    })
})


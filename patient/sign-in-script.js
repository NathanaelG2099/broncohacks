let email = document.getElementById('email')
let login = document.getElementById('login')

login.addEventListener('click', userLogin)

function userLogin(){
    
    if (email) {
        // send message to background script with email and password
        chrome.runtime.sendMessage(
            { 
            message: 'login', 
            payload: { email}
            },
            function (response) {
                if (response === 'success'){
                    window.location.replace('./mainMenu.html');
                }
            }
        );
    }
}
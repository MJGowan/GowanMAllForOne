let nameInput = document.getElementById("nameInput");
let helloReturn = document.getElementById("helloReturn");
let lastReturn = document.getElementById("lastReturn");
let slackReturn = document.getElementById("slackReturn");
let emailReturn = document.getElementById("emailReturn");
let hobbiesReturn = document.getElementById("hobbiesReturn");
let helloSubBtn = document.getElementById("helloSubBtn");
console.log(nameInput, helloReturn, helloSubBtn);

let savedInput = "";
let sayHelloUrl = "";

helloSubBtn.addEventListener("click", function () {
    helloApi(nameInput)
})

function urlCall(url) {
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            helloReturn.textContent = "First Name: " + data.firstName;
            lastReturn.textContent = "Last Name: " + data.lastName;
            slackReturn.textContent = "Slack Name: " + data.slackName;
            emailReturn.textContent = "Email: " + data.email;
            hobbiesReturn.textContent = "Hobbies: " + data.hobbies;
            console.log(data.firstName, data.lastName, data.slackName, data.email, data.hobbies);
        }
    )
}

function helloApi(nameInput) {
    if (nameInput.value) {
        savedInput = nameInput.value;
        sayHelloUrl = "https://maddiesallforone.azurewebsites.net/Challenge/GetStudent/" + savedInput;
        urlCall(sayHelloUrl);
    } else {
        helloReturn.textContent = "Enter a valid response";
    }
}
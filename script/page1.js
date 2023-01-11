let nameInput = document.getElementById("nameInput");
let helloReturn = document.getElementById("helloReturn");
let helloSubBtn = document.getElementById("helloSubBtn");
//console.log(nameInput, helloReturn, helloSubBtn);

let savedInput = "";
let sayHelloUrl = "";

helloSubBtn.addEventListener("click", function () {
    helloApi(nameInput)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            helloReturn.textContent = data;
            console.log(data);
        }
    )
}

function helloApi(nameInput) {
    if (nameInput.value) {
        savedInput = nameInput.value;
        sayHelloUrl = "https://maddiesallforone.azurewebsites.net/Challenge/Hello/" + savedInput;
        urlCall(sayHelloUrl);
    } else {
        helloReturn.textContent = "Enter a valid response";
    }
}
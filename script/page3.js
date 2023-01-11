let questionInput = document.getElementById("questionInput");
let questionSubBtn = document.getElementById("questionSubBtn");
let questionReturn = document.getElementById("questionReturn");

let animalInput = "";
let questionUrl = "";

questionSubBtn.addEventListener("click", function () {
    questionApi(questionInput)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            questionReturn.textContent = data;
            console.log(data);
        }
    )
}

function questionApi(questionInput) {
    if (questionInput.value) {
        animalInput = questionInput.value;
        questionUrl = "https://maddiesallforone.azurewebsites.net/Challenge/Favorite/" + animalInput;
        urlCall(questionUrl);
    } else {
        questionReturn.textContent = "Enter a valid response";
    }
}
let numOneInput = document.getElementById("numOneInput");
let numSubBtn = document.getElementById("numSubBtn");
let numTwoInput = document.getElementById("numTwoInput");
let numReturn = document.getElementById("numReturn");
//console.log(numOneInput, numSubBtn, numTwoInput, numReturn);

let oneInput = "";
let twoInput = "";
let numUrl = "";

numSubBtn.addEventListener("click", function () {
    numApi(numOneInput, numTwoInput)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            numReturn.textContent = data;
            console.log(data);
        }
    )
}

function numApi(oneInput, twoInput) {
    if (oneInput.value && twoInput.value) {
        oneInput = numOneInput.value;
        twoInput = numTwoInput.value;
        numUrl = "https://maddiesallforone.azurewebsites.net/Challenge/Adding/" + oneInput + "/" + twoInput;
        urlCall(numUrl);
    } else {
        numReturn.textContent = "Enter a valid response";
    }
}
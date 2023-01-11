let pOneInput = document.getElementById("pOneInput");
let aTwoInput = document.getElementById("aTwoInput");
let aThreeInput = document.getElementById("aThreeInput");
let vFourInput = document.getElementById("vFourInput");
let pFiveInput = document.getElementById("pFiveInput");
let vSixInput = document.getElementById("vSixInput");
let nSevenInput = document.getElementById("nSevenInput");
let pEightInput = document.getElementById("pEightInput");
let oNineInput = document.getElementById("oNineInput");
let vTenInput = document.getElementById("vTenInput");

let subBtn = document.getElementById("subBtn");
let madReturn = document.getElementById("madReturn");

let pOne = "";
let aTwo = "";
let aThree = "";
let vFour = "";
let pFive = "";
let vSix = "";
let nSeven = "";
let pEight = "";
let oNine = "";
let vTen = "";

let madUrl = "";


subBtn.addEventListener("click", function () {
    madApi(pOneInput, aTwoInput, aThreeInput, vFourInput, pFiveInput, vSixInput, nSevenInput, pEightInput, oNineInput, vTenInput)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            madReturn.textContent = data;
            console.log(data);
        }
    )
}

function madApi(pOneInput, aTwoInput, aThreeInput, vFourInput, pFiveInput, vSixInput, nSevenInput, pEightInput, oNineInput, vTenInput) {
    if (pOneInput.value && aTwoInput.value && aThreeInput.value && vFourInput.value && pFiveInput.value && vSixInput.value && nSevenInput.value && pEightInput.value && oNineInput.value && vTenInput.value) {
        pOne = pOneInput.value;
        aTwo = aTwoInput.value;
        aThree = aThreeInput.value;
        vFour = vFourInput.value;
        pFive = pFiveInput.value;
        vSix = vSixInput.value;
        nSeven = nSevenInput.value;
        pEight = pEightInput.value;
        oNine = oNineInput.value;
        vTen = vTenInput.value;
        madUrl = "https://maddiesallforone.azurewebsites.net/Challenge/Input/" + pOne + "/" + aTwo + "/" + aThree + "/" + vFour + "/" + pFive + "/" + vSix + "/" + nSeven + "/" + pEight + "/" + oNine + "/" + vTen;
        urlCall(madUrl);
    } else {
        madReturn.textContent = "Enter a valid response";
    }
}
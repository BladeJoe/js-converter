var usdRate = 10870.50;
var eurRate = 11068.25;
var rubRate = 170.00;
var currency = document.querySelector("#currency")
var preconvert = document.querySelector("#preconvert");
var postconvert = document.querySelector("#postconvert");
var form = document.querySelector(".form");
form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    var inputValue = preconvert.value;

    switch (currency.value) {
        case "usd":
            postconvert.value = inputValue * usdRate;
            break;
        case "eur":
            postconvert.value = inputValue * eurRate;
            break;
        case "rub":
            postconvert.value = inputValue * rubRate;
            break;

    }
});
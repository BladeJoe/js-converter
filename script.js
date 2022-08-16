const buttons = document.querySelectorAll('[role="tab"]');
const tabPanel = Array.from(document.querySelectorAll('[role="tabpanel"]'));

function hideTabContent(e) {
    tabPanel.forEach((panels) => {
        panels.hidden = true;
    });
    buttons.forEach((tab) => {
        tab.setAttribute("aria-selected", false);
    });
    e.currentTarget.setAttribute("aria-selected", true);

    const {
        id
    } = event.currentTarget;
    const tabPanels = tabPanel.find(
        (tabContent) => tabContent.getAttribute("aria-labelledby") === id
    );
    tabPanels.hidden = false;
}
buttons.forEach((button) => button.addEventListener("click", hideTabContent));



let img = document.querySelector(".img");
let btn = document.querySelector(".btn");

fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
    .then((response) => response.json())
    .then((data) => {
        img.src = data.image_link
    });

btn.addEventListener("click", function () {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
        .then((response) => response.json())
        .then((data) => {
            img.src = data.image_link
        });
})



let btnCurrency = document.querySelector(".btncurrency")
let currencyWrapper = document.querySelector(".currency-wrapper")




fetch("https://nbu.uz/en/exchange-rates/json/")
    .then((response1) => response1.json())
    .then((data) => {


        currencyWrapper.innerHTML = null;
        let tempFragment = document.createDocumentFragment();
        let dataNew = data.sort((b, a) => a.cb_price - b.cb_price)
        for (const item of dataNew) {


            let newLi = document.createElement("li");
            let newH3 = document.createElement("span");
            newH3.textContent = item.title;

            let newH5 = document.createElement("span")
            newH5.innerHTML = item.cb_price;
            newLi.appendChild(newH3)
            newLi.appendChild(newH5)
            tempFragment.appendChild(newLi)
        }
        currencyWrapper.appendChild(tempFragment)
    });


let excuses = document.querySelector(".excuses")
let excusesbtn = document.querySelector(".excusesbtn")


fetch("https://excuser.herokuapp.com/v1/excuse")
    .then((response1) => response1.json())
    .then((data) => {
        excuses.innerHTML = data[0].excuse;
    })

excusesbtn.addEventListener("click", function () {
    btn.addEventListener("click", function () {
        fetch("https://excuser.herokuapp.com/v1/excuse")
            .then((response1) => response1.json())
            .then((data) => {
                excuses.innerHTML = null
                excuses.innerHTML = data[1].excuse;
            })
    })

})
let img = document.querySelector(".img");
let btn = document.querySelector(".btn");


fetch("https://forza-api.tk/")
    .then((response) => response.json())
    .then((data) => {
        img.src = data.image
    });


btn.addEventListener("click", function () {
    fetch("https://forza-api.tk/")
        .then((response1) => response1.json())
        .then((data) => {
            img.src = data.image
        });
})
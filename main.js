let img = document.querySelector(".img");


fetch("https://forza-api.tk/")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        img.src = data.image
    });
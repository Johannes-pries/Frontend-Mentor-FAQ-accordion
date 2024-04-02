"use strict";


let paragraph = document.querySelectorAll(".content > p");
let button = document.querySelectorAll(".content > a");
let img = document.querySelectorAll(".content>a>img");


for (let i=0; i<button.length; i++) {
    button[i].addEventListener("click", (e) => {
        for (let j=0; j<paragraph.length; j++){
            if (j!==i)
            {
                paragraph[j].style.display = "none";
            }
        }

        if (paragraph[i].style.display === "none")
        {
            paragraph[i].style.display = "block";
            img[i].src = "./assets/images/icon-minus.svg";
        } 
        else {
            paragraph[i].style.display = "none";
            img[i].src = "./assets/images/icon-plus.svg";
        }
    });
}
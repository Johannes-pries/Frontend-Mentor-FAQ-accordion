"use strict";


let paragraph = document.querySelectorAll(".content > p");
let button = document.querySelectorAll(".content > a");


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
        } 
        else {
            paragraph[i].style.display = "none";
        }
    });
}
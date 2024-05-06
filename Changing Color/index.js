let box = document.getElementById('color-box');
let btn = document.getElementById('change-color-btn');

const setBg = () => {
     const randomColor = Math.floor(Math.random()*16777215).toString(16);
     box.style.backgroundColor = "#" + randomColor;
     color.innerHTML = "#" + randomColor;
   }

btn.addEventListener("click", setBg);
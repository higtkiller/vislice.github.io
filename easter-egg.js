const image = document.getElementById("easter-image");
const button1 = document.getElementById("easter-egg1");
const button2 = document.getElementById("easter-egg2");
image.style.display = "none";

button1.addEventListener("click",function(){
    image.style.display = "block";
})
button2.addEventListener("click",function(){
    image.style.display = "none";
})
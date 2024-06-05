const hamburger = document.querySelector("#drop");

hamburger.addEventListener("click", function(){
    document.querySelector(".dropdown").classList.toggle("drop");
})
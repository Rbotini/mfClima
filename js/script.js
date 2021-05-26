var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
document.querySelector(".container-fluid").classList.toggle("show-menu");
});
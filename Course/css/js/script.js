//Selecting the side navbar

let menuIcon = document.getElementById("menuicon");
let sideNavbar = document.getElementById("sidenavbar");
let closeNav = document.getElementById("close-nav");

menuIcon.addEventListener("click",function(){
  sideNavbar.style.right = "0";
});

closeNav.addEventListener("click",function(){
  sideNavbar.style.right = "-100%";
});


//Hide side icon in Laptop view 

window.addEventListener("resize",function(){
  if(window.innerWidth > 550){
    sideNavbar.style.right = "-100%";
  }
});




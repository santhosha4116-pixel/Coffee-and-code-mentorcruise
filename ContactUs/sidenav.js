var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menuicon")
var closenav = document.getElementById("close-nav")

menu.addEventListener("click",function()
{
    sidenav.style.right=0
})

closenav.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})
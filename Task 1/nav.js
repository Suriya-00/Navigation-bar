const navbar = document.getElementById("Home");
function changeNavbarColor(){
    if(window.scrollY >=70){
    navbar.classList.add('scrolled');
    }
    else{
    navbar.classList.remove('scrolled');
    }
}
window.addEventListener('scroll',changeNavbarColor);
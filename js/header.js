let hamburgueza = document.getElementById("toggle");
let body = document.querySelector("body");
let header = document.querySelector("header");
let menu = document.getElementById("menu");
let menuMovil = document.getElementById("menuMovil");
let itemTrabajar1 = document.getElementById("itemTrabajar1");
let itemTrabajar2 = document.getElementById("itemTrabajar2");
let itemTrabajar3 = document.getElementById("itemTrabajar3");
let mostrar = false;






window.addEventListener("scroll", function(){
    /* let header = document.querySelector('header'); */
    header.classList.toggle("sticky", window.scrollY > 0);
    if (window.scrollY > 0) {
        header.classList.add('sticky');
        
    } else {
        header.classList.remove('sticky');
        
    }
    
  
});
window.addEventListener("scroll", function(){

    let itemTrabajarTop1 = itemTrabajar1.getBoundingClientRect().top;
    let itemTrabajarTop2 = itemTrabajar2.getBoundingClientRect().top;
    let itemTrabajarTop3 = itemTrabajar3.getBoundingClientRect().top;
    let tamanoPantalla = window.innerHeight/2;
    if (itemTrabajarTop1 < tamanoPantalla && itemTrabajarTop2 < tamanoPantalla && itemTrabajarTop3 < tamanoPantalla ) {
        
        itemTrabajar1.classList.add('animated', 'zoomIn', 'slow');
        itemTrabajar2.classList.add('animated', 'zoomIn', 'fast');
        itemTrabajar3.classList.add('animated', 'zoomIn', 'slow');
        itemTrabajar1.style.opacity = 1;
        itemTrabajar2.style.opacity = 1;
        itemTrabajar3.style.opacity = 1;

    }
   
});


hamburgueza.addEventListener("click", function(){
    hamburgueza.classList.toggle('active');
    mostrar = !mostrar;
    if (screen.width > 1199) {
        console.log(screen.width);
        if (mostrar) {
            menu.style.boxShadow = "none";
            menu.style.display = "flex";
            menu.style.animation = "menuIn 1s ease-in-out";
            
            
        } else {
            menu.style.animation = "menuOut 1s ease-in-out";
    
            setTimeout(() => {
                menu.style.display = "none";            
            }, 800);
                    
        }
    } else {

        if (mostrar) {
            menuMovil.style.display = "flex";
            menuMovil.style.animation = "menuIn 1s ease-in-out";
            
            
        } else {
            menuMovil.style.animation = "menuOut 1s ease-in-out";
    
            setTimeout(() => {
                menuMovil.style.display = "none";            
            }, 800);
                    
        }
    }
    

    /* if (screen.width < 1200) {
        body.appendChild(header);
        header.after(menu);
        menu.style.zindex = "100000";

    } */
})
/* document.getElementById('toggle').addEventListener('click', function () {
    classList.toggle('active');
  }); */
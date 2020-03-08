let hamburgueza = document.getElementById("toggle");
let body = document.querySelector("body");
let header = document.querySelector("header");
let menu = document.getElementById("menu");
let menuMovil = document.getElementById("menuMovil");
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
let hamburgueza = document.getElementById("toggle");
let body = document.querySelector("body");
let header = document.querySelector("header");
let menu = document.getElementById("menu");
let menuMovil = document.getElementById("menuMovil");
let menuMovilEnlaces = document.querySelectorAll(".menuMovil li");
let itemTrabajar1 = document.getElementById("itemTrabajar1");
let itemTrabajar2 = document.getElementById("itemTrabajar2");
let itemTrabajar3 = document.getElementById("itemTrabajar3");
const servicio = document.getElementsByClassName("servicio");
const imgSobreMi = document.getElementById("av-img-sobreMi");
const textoSobreMi = document.getElementById("av-texto-sobreMi");
const sections = document.querySelectorAll("section");
let mostrar = false;



window.addEventListener("scroll", function(){
    
    sections.forEach(element => {

        let elementTop = element.getBoundingClientRect().top;
        let tamanoPantalla = window.innerHeight/3;
        
        if (element.id == "sobreMi") {
            if (elementTop < tamanoPantalla) {
                
                imgSobreMi.classList.add('animated', 'fadeInLeft', 'slow');
                textoSobreMi.classList.add('animated', 'fadeInRight', 'slow');
                imgSobreMi.style.opacity = 1;
                textoSobreMi.style.opacity = 1;       
        
            }
           
        }else if (element.id == "porqueTrabajar") {
            if (elementTop < tamanoPantalla) {

                itemTrabajar1.classList.add('animated', 'zoomIn', 'slow');
                itemTrabajar2.classList.add('animated', 'zoomIn', 'fast');
                itemTrabajar3.classList.add('animated', 'zoomIn', 'slow');
                itemTrabajar1.style.opacity = 1;
                itemTrabajar2.style.opacity = 1;
                itemTrabajar3.style.opacity = 1;                
                
            }
            
        }else if (element.id == "servicios") {
            if (elementTop < tamanoPantalla) {

                for (let i = 0; i < servicio.length; i++) {

                    servicio[i].classList.add('animated', 'fadeInUp', 'slow');
                    servicio[i].style.opacity = 1;
                    
                }
                
            }
            
        };
    });
});

/**************************************************************/
/*********** AGREGANDO CLASE ACTIVE AL MENU (JQUERY)***********/
/**************************************************************/

$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
})


/*************************************/
/*********** EFECTOS SCROLL***********/
/*************************************/

/******* Efecto Scroll Menu Fixed */

window.addEventListener("scroll", function(){
    /* let header = document.querySelector('header'); */
    header.classList.toggle("sticky", window.scrollY > 0);
    if (window.scrollY > 0) {
        header.classList.add('sticky');
        
    } else {
        header.classList.remove('sticky');
        
    }
      
});

/******* Efecto Scroll Menu Hamburgueza */

hamburgueza.addEventListener("click", function(){
    hamburgueza.classList.toggle('active');
    mostrar = !mostrar;

    if (mostrar) {
        menuMovil.style.display = "flex";
        menuMovil.style.animation = "menuIn 1s ease-in-out";
        
        
    } else {
        menuMovil.style.animation = "menuOut 1s ease-in-out";

        setTimeout(() => {
            menuMovil.style.display = "none";           
        }, 800);
                
    }
   

})

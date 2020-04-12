const scrollEfect = Array.from(document.getElementsByClassName("scrollEfect"));
const sections = Array.from(document.querySelectorAll("section"));
console.log(sections);
let serviciosScrollTop = scrollEfect.map( item => item.getBoundingClientRect().top - (innerHeight/2))
console.log(serviciosScrollTop);

window.addEventListener('scroll', () =>{
    serviciosScrollTop.forEach((ele, i) => {

        if (scrollY >= ele) {
        
            console.log(scrollEfect[i].classList[0]);
            if (scrollEfect[i].classList[0] == "av-sobreMi") {
                
                scrollEfect[i].classList.add('animated', 'fadeInLeft', 'slow');
                
                scrollEfect[i].style.opacity = 1;       
            }
            if (scrollEfect[i].classList[0] == "servicio") {
                
            scrollEfect[i].classList.add('animated', 'fadeInUp', 'slow');
            
            scrollEfect[i].style.opacity = 1;       
            }
            if (scrollEfect[i].classList[0] == "item") {
                
                scrollEfect[i].classList.add('animated', 'zoomIn', 'slow');
                
                scrollEfect[i].style.opacity = 1;       
            }
        }

    })
})
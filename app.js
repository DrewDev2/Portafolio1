const secciones = document.querySelectorAll('.seccion');
const enlaces = document.querySelectorAll('.menu li a');

const observer = new IntersectionObserver((entradas, observador) => {
    entradas.forEach(entrada =>{
        if(entrada.isIntersecting){
            const id = '#' + entrada.target.id;
            history.pushState({}, entrada.target.innerText, id);

            enlaces.forEach(enlace => {
                enlace.classList.remove('active')

                const href = enlace.attributes.href.nodeValue;
                if (href === id){
                    enlace.classList.add('active')
                }
            })
        }
    })
}, {
    threshold: 0.3,
    rootMargin: '0px 0px -50% 0px'
});

secciones.forEach(seccion =>{
    observer.observe(seccion);
})


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("header").style.background = "#11162A";
  } else {
    document.getElementById("header").style.background = "transparent";
  }
}
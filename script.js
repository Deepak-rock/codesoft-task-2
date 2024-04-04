/* ================== Nav icon section ================*/
let menuIconEl = document.querySelector('#menuIcon');
let navbarEl = document.querySelector('.navbar');

menuIconEl.onclick = () => {
    menuIconEl.classList.toggle("bx-x");
    navbarEl.classList.toggle("active");
};
/* ================== scrolling section ================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    let header = document.querySelector('header');
    header.classList.toggle('attach', window.scrollY > 100);

    menuIconEl.classList.remove("bx-x");
    navbarEl.classList.remove("active");
};

/* ================== scroll reveal ================*/
ScrollReveal({ 
   // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-container, .heading ,.skills-heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .project-box,.skill-left h3,.skill-right h3, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-container h1, .about-img img, .skill-bar' ,{ origin: 'left' });
ScrollReveal().reveal('.about-container, .right, .left ' ,{ origin: 'right' });
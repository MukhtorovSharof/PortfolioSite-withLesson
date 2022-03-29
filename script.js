window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', function(){
        const navbar = document.querySelector('nav');
        navbar.classList.toggle('navbar1', window.scrollY > 300);
    });

    const scrollBtn = document.querySelector('.scrollToTop-btn');
    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('active', window.scrollY > 630);
    });

    scrollBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    window.addEventListener('scroll', () => {
        let reveals = document.querySelectorAll('.reveal');

        for (let i = 0; i < reveals.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if (revealTop < windowHeight - revealPoint){
                reveals[i].classList.add('active');
            }
        }
    });
});
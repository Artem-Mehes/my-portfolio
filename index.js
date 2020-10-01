const navHighlight = document.querySelector('#nav-highlight'),
    sections = document.querySelectorAll('.section'),
    burgerWrapper = document.querySelector('#burger-wrapper'),
    burger = document.querySelector('#burger'),
    nav = document.querySelector('#nav');

const windowHeight = document.documentElement.clientHeight;

const moveNavHighlight = () => {
    const scrolledSections = [...sections].filter(section => {
        const coords = section.getBoundingClientRect();

        if (coords.top < windowHeight / 2.1) return true
        else return false;
    });
    const lastScrolled = scrolledSections[scrolledSections.length - 1];
    if (!lastScrolled) return;
    
    switch(lastScrolled.id) {
        case 'general':
            navHighlight.style.top = '5%';
            break;
        case 'skills':
            navHighlight.style.top = '27%';
            break;
        case 'projects':
            navHighlight.style.top = '49%';
            break;
        case 'certification':
            navHighlight.style.top = '71%';
            break;
        case 'education':
            navHighlight.style.top = '93%';
            break;            
    } 
}

const checkScreenWidth = () => {
    if (!window.matchMedia('(max-width: 1080px)').matches) {
        window.addEventListener('scroll', moveNavHighlight);
    } else {
        window.removeEventListener('scroll', moveNavHighlight);
    }
}

window.addEventListener('resize', checkScreenWidth);
burgerWrapper.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
});

checkScreenWidth();
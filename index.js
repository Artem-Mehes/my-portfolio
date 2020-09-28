const navHighlight = document.querySelector('#nav-highlight'),
    sections = document.querySelectorAll('.section');

const windowHeight = document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
    const scrolledSections = [...sections].filter(section => {
        const coords = section.getBoundingClientRect();

        if (coords.top < windowHeight / 2) return true
        else return false;
    });

    const lastScrolled = scrolledSections[scrolledSections.length - 1];

    switch(lastScrolled.id) {
        case 'general':
            navHighlight.style.top = '14px';
            break;
        case 'skills':
            navHighlight.style.top = '69px';
            break;
        case 'projects':
            navHighlight.style.top = '123px';
            break;
        case 'certification':
            navHighlight.style.top = '176px';
            break;
        case 'education':
            navHighlight.style.top = '230px';
            break;            
    } 
});

const navHighlight = document.querySelector('#nav-highlight'),
    sections = document.querySelectorAll('.section');

const windowHeight = document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
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
            navHighlight.style.top = '101px';
            break;
        case 'certification':
            navHighlight.style.top = '71%';
            break;
        case 'education':
            navHighlight.style.top = '93%';
            break;            
    } 
});

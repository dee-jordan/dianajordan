// TOGGLE SCRIPT
const icon = document.getElementById('icon');
const mainContent = document.querySelector('main');
const introImage = document.querySelector('.hand');
const footerImage = document.querySelector('.bottom-image');

icon.addEventListener('click', () => {
mainContent.classList.toggle('dark-mode');

if (mainContent.classList.contains('dark-mode')) {
    icon.src = 'media/sun.png';
    introImage.src = 'media/smoke.gif' + '?v=' + Date.now();;
    footerImage.src = 'media/swim.gif' + '?v=' + Date.now();;
} else {
    icon.src = 'media/moon.png';
    introImage.src = 'media/hand.png' + '?v=' + Date.now();;
    footerImage.src = 'media/black.jpg' + '?v=' + Date.now();;
}
});


// HOME

const homeLink = document.querySelector('.nav-link[href="#main"]');
    const mainElement = document.getElementById('main');

    homeLink.addEventListener('click', (event) => {
    event.preventDefault();
    mainElement.classList.add('fade-in');

      // Remove the 'fade-in' class after a short delay (e.g., 1 second)
    setTimeout(() => {
        mainElement.classList.remove('fade-in');
    }, 500);
    });


// ABOUT ME
const aboutMeLink = document.querySelector('.nav-link[href="#about-me"]');

    aboutMeLink.addEventListener('click', (event) => {
    event.preventDefault();
    const targetElement = document.getElementById('about-me');
    targetElement.scrollIntoView({
        behavior: 'smooth'
    });
    });
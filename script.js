// Select the sections
const aboutSection = document.querySelector('.about');

// Function to handle scrolling
function handleScroll() {
    const aboutPosition = aboutSection.getBoundingClientRect().top;

    // If the about section is in view, add the in-view class
    if (aboutPosition <= window.innerHeight / 1.5) {
        aboutSection.classList.add('in-view');
    } else {
        aboutSection.classList.remove('in-view');
    }
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check in case the user reloads the page halfway
handleScroll();

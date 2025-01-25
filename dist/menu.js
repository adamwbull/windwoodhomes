// Wait for the navbar and footer to be loaded before initializing menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initial setup
    initializeMenu();
    loadFooter();

    // Also reinitialize when navbar content changes
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        const observer = new MutationObserver(initializeMenu);
        observer.observe(navbarPlaceholder, { childList: true });
    }
});

function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('/dist/components/footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            });
    }
}

function initializeMenu() {
    // Getting hamburger menu in small screens
    const menu = document.getElementById("menu");
    const ulMenu = document.getElementById("ulMenu");

    if (!menu || !ulMenu) return; // Exit if elements aren't loaded yet

    // Browser resize listener
    window.addEventListener("resize", menuResize);

    // Resize menu if user changing the width with responsive menu opened
    function menuResize() {
        // First get the size from the window
        const window_size = window.innerWidth || document.body.clientWidth;
        if (window_size > 1138) {  // Matches the nav breakpoint
            menu.classList.remove("h-48");
        }
    }
}

// This function needs to be global as it's called from the HTML
window.menuToggle = function() {
    const menu = document.getElementById("menu");
    if (menu) {
        menu.classList.toggle("h-48");
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Get the current path to determine if we're in dist/ or root
    const isInDist = window.location.pathname.includes('/dist/');
    const navbarPath = isInDist ? 'components/navbar.html' : 'dist/components/navbar.html';
    
    // Load navbar
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        fetch(navbarPath)
            .then(response => response.text())
            .then(data => {
                navbarPlaceholder.innerHTML = data;
            });
    }
}); 
function showSection(sectionId, buttonElement) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    const buttons = document.querySelectorAll('.nav-links button');
    buttons.forEach(button => button.classList.remove('active'));

    document.getElementById(sectionId).classList.add('active');
    buttonElement.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (window.innerWidth <= 1020) {
        const nav = document.getElementById('mainNav');
        nav.classList.remove('menu-open');
    }
}

function toggleMobileMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('menu-open');
}

document.addEventListener('click', function(event) {
    const nav = document.getElementById('mainNav');
    const isClickInsideNav = nav.contains(event.target);
    
    if (!isClickInsideNav && nav.classList.contains('menu-open') && window.innerWidth <= 1020) {
        nav.classList.remove('menu-open');
    }
});

window.showSection = showSection;
window.toggleMobileMenu = toggleMobileMenu;
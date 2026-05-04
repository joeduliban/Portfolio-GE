document.addEventListener("DOMContentLoaded", () => {
    // Load with French by default
    changeLanguage('fr');

    // Scroll animations
    initScrollAnimations();
});

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-anim');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.hidden-anim').forEach(el => observer.observe(el));
}

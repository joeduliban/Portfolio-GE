function toggleLanguageBar() {
    const wrapper = document.querySelector('.language-selector-wrapper');
    if (wrapper) {
        wrapper.classList.toggle('open');
    }
}

function handleClickOutside(event) {
    const wrapper = document.querySelector('.language-selector-wrapper');
    if (wrapper && !wrapper.contains(event.target) && wrapper.classList.contains('open')) {
        wrapper.classList.remove('open');
    }
}

function selectLanguage(lang, element) {
    if (typeof changeLanguage === 'function') {
        changeLanguage(lang);
    } else {
        console.error('La fonction changeLanguage(lang) est introuvable.');
    }

    const allButtons = document.querySelectorAll(`.language-bar button[data-lang="${lang}"]`);
    
    document.querySelectorAll('.language-bar button').forEach(btn => btn.classList.remove('active'));

    allButtons.forEach(btn => btn.classList.add('active'));
}


function moveLanguageSelectorForMobile() {
    const languageBar = document.querySelector('.language-bar');
    const desktopContainer = document.querySelector('.language-selector-wrapper');
    const mobileContainer = document.getElementById('mobile-lang-container');

    if (!languageBar || !desktopContainer || !mobileContainer) return;

    if (window.innerWidth <= 1020) {
        if (!mobileContainer.contains(languageBar)) {
            languageBar.classList.add('mobile-language-bar');
            mobileContainer.appendChild(languageBar);
        }
    } else {
        if (!desktopContainer.contains(languageBar)) {
            languageBar.classList.remove('mobile-language-bar');
            desktopContainer.appendChild(languageBar);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const initialLang = document.documentElement.lang || 'fr';
    selectLanguage(initialLang, document.querySelector(`.language-bar button[data-lang="${initialLang}"]`));

    moveLanguageSelectorForMobile();

    window.addEventListener('resize', moveLanguageSelectorForMobile);

    document.addEventListener('click', handleClickOutside);
});

window.toggleLanguageBar = toggleLanguageBar;
window.selectLanguage = selectLanguage;
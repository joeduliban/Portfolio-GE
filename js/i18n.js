let currentLanguage = 'fr';

function changeLanguage(lang) {
    currentLanguage = lang;

    // Update page title
    document.title = translations[lang].title || 'Portfolio GE';

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);
        if (translation !== undefined && translation !== null) {
            element.innerHTML = formatMarkdown(translation);
        }
    });
}

function formatMarkdown(text) {
    if (typeof text !== 'string') return text;
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

function getNestedTranslation(obj, key) {
    return key.split('.').reduce((o, k) => (o || {})[k], obj);
}

window.changeLanguage = changeLanguage;
window.currentLanguage = currentLanguage;

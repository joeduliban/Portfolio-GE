function loadProjectVideos() {
    const videoContainers = document.querySelectorAll('.project-video-container[data-youtube]');
    
    videoContainers.forEach(container => {
        const youtubeId = container.getAttribute('data-youtube');
        
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${youtubeId}`;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        
        container.innerHTML = '';
        container.appendChild(iframe);
    });
}

function loadProjectImages() {
    const placeholders = document.querySelectorAll('.project-image-placeholder[data-image]');
    
    placeholders.forEach(placeholder => {
        const imagePath = placeholder.getAttribute('data-image');
        let altText = placeholder.getAttribute('data-description') || placeholder.textContent;
        
        const img = new Image();
        
        img.onload = function() {
            placeholder.style.backgroundImage = `url('${imagePath}')`;
            placeholder.style.backgroundSize = 'cover';
            placeholder.style.backgroundPosition = 'center';
            placeholder.style.backgroundColor = 'transparent';
            placeholder.style.border = 'none';
            placeholder.textContent = '';
            placeholder.style.cursor = 'pointer';
            placeholder.classList.add('loaded');
            
            if (!placeholder.getAttribute('data-description')) {
                placeholder.setAttribute('data-description', altText);
            }
            
            const newPlaceholder = placeholder.cloneNode(true);
            placeholder.parentNode.replaceChild(newPlaceholder, placeholder);
            
            newPlaceholder.addEventListener('click', function() {
                const description = newPlaceholder.getAttribute('data-description');
                openLightbox(imagePath, description);
            });
        };
        
        img.src = imagePath;
    });
}

function openLightbox(imagePath, description) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" onclick="closeLightbox()" aria-label="Fermer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <img src="${imagePath}" alt="${description}">
            <p class="lightbox-description">${description}</p>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    document.addEventListener('keydown', handleEscapeKey);
    
    setTimeout(() => lightbox.classList.add('active'), 10);
}

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox-overlay');
    if (lightbox) {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.remove();
            document.body.style.overflow = '';
        }, 300);
    }
    document.removeEventListener('keydown', handleEscapeKey);
}

function handleEscapeKey(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
}

window.loadProjectVideos = loadProjectVideos;
window.loadProjectImages = loadProjectImages;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
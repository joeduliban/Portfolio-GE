function initProfileFlip() {
    const profileBubble = document.getElementById('profileBubble');
    const flipper = profileBubble ? profileBubble.querySelector('.profile-bubble-flipper') : null;
    
    if (!profileBubble || !flipper) return;
    
    let touchStartX = 0;
    let touchStartY = 0;
    let isFlipped = false;

    profileBubble.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    profileBubble.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const touchEndY = e.changedTouches[0].screenY;
        const diffX = Math.abs(touchStartX - touchEndX);
        const diffY = Math.abs(touchStartY - touchEndY);

        if (diffX > 50 && diffX > diffY) {
            isFlipped = !isFlipped;
            flipper.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
        }
    }, { passive: true });
}

window.initProfileFlip = initProfileFlip;
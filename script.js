// Wait for the HTML to load, then find the important elements
document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openPopup');
    const closeBtn = document.getElementById('closePopup');
    const overlay = document.getElementById('popupOverlay');

    // Function to show the popup by adding the 'show' class
    const openPopup = () => {
        overlay.classList.add('show');
        // Prevent scrolling on the main page while the popup is open
        document.body.style.overflow = 'hidden';
    };

    // Function to hide the popup by removing the 'show' class
    const closePopup = () => {
        overlay.classList.remove('show');
        // Re-enable scrolling on the main page
        document.body.style.overflow = '';
    };

    // Add click event listeners
    openBtn.addEventListener('click', openPopup);
    closeBtn.addEventListener('click', closePopup);

    // Also close the popup if the user clicks anywhere on the dark background
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closePopup();
        }
    });

    // Also close the popup if they press the 'Escape' key on the keyboard
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && overlay.classList.contains('show')) {
            closePopup();
        }
    });
});
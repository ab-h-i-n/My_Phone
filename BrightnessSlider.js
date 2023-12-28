const slider = document.querySelector('.slider');

slider.addEventListener('input', () => {
    console.log(slider.value);
    updateThumbWidth(slider);
});

function updateThumbWidth(slider) {
    // Calculate the width based on the slider's value
    const thumbWidth = slider.value + '%';

    // Apply the width to the thumb
    slider.style.setProperty('--thumb-width', thumbWidth);
}

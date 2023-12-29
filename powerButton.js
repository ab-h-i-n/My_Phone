var powerBtn = document.querySelector('.power_btn');
var powerScreen = document.querySelector('.power-screen');
var powerMenu = document.querySelector('.power-menu');
var clickAndHoldTimeout;

powerBtn.addEventListener('mousedown', () => {
    clickAndHoldTimeout = setTimeout(() => {
        powerScreen.style.display = 'flex';
        powerScreen.style.opacity = '1';
    }, 3000); // 3000 milliseconds (3 seconds)
});

document.addEventListener('mousedown', (event) => {
    // Check if the click is outside the power menu
    if (!powerMenu.contains(event.target) && powerScreen.style.display === 'flex') {
        powerScreen.style.display = 'none';
        powerScreen.style.opacity = '0';
    }
});

powerBtn.addEventListener('mouseup', () => {
    clearTimeout(clickAndHoldTimeout);
    powerScreen.style.display = 'none';
    powerScreen.style.opacity = '0';
});

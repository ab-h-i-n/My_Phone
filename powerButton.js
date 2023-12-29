var powerBtn = document.querySelector('.power_btn');
var powerScreen = document.querySelector('.power-screen');
var powerMenu = document.querySelector('.power-menu');

powerBtn.addEventListener('dblclick', () => {
        powerScreen.style.display = 'flex';
        powerScreen.style.opacity = '1';
    
});


document.addEventListener('click', (event) => {
    if (powerScreen.contains(event.target) && !powerMenu.contains(event.target)) {
        powerScreen.style.opacity = '0';
        powerScreen.style.display = 'none';
    }
});

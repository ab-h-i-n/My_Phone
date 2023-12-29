var powerBtn = document.querySelector('.power_btn');
var powerScreen = document.querySelector('.power-screen');
var powerMenu = document.querySelector('.power-menu');
var clickAndHoldTimeout;


powerBtn.addEventListener('mousedown', () => {
    clickAndHoldTimeout = setTimeout(() => {
        powerScreen.style.display = 'flex';
        powerScreen.style.opacity = '1';
        wasClicked = false; // Reset the flag in case of a click-and-hold
    }, 3000); // 3000 milliseconds (3 seconds)
});

//for touch screen

powerBtn.addEventListener('touchstart', (event) => {
    event.preventDefault(); // Prevents the default touch behavior (e.g., scrolling)
    
    clickAndHoldTimeout = setTimeout(() => {
        powerScreen.style.display = 'flex';
        powerScreen.style.opacity = '1';
    }, 3000); // 3000 milliseconds (3 seconds)
});


document.addEventListener('click',(event)=>{

    if(powerScreen.contains(event.target) & !powerMenu.contains(event.target)){
        powerScreen.style.opacity = '0';
        powerScreen.style.display ='none';
        clearTimeout(clickAndHoldTimeout);
    }
})
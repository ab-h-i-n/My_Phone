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

var lockScreen = document.querySelector('.lock-screen');
var lockIcon = document.querySelector('.lock');
var timeText = document.querySelectorAll('.time-lock div');
var swipeUpText = document.querySelector('.swipe-up-text');
var lockGlance = document.querySelector('.lock-screen .glance');



powerBtn.addEventListener('click',()=>{
    setTimeout(() => {
        lockScreen.style.display = 'block';
        lockScreen.style.animation = 'fadein 0.2s ease forwards';
      }, 200);
    lockScreen.style.animation = 'none';
    lockIcon.style.animation = 'none'; 
    swipeUpText.style.animation = 'none';
    lockGlance.style.opacity = '100%';
    timeText.forEach(element => {
      element.style.animation = 'none';
    });

    lockScreenUnlocked = false;
})

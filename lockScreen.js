var lockScreen = document.querySelector('.lock-screen');
var lockIcon = document.querySelector('.lock');
var timeText = document.querySelectorAll('.time-lock div');
var swipeUpText = document.querySelector('.swipe-up-text');
var lockGlance = document.querySelector('.lock-screen .glance');

var lockScreenUnlocked = false;

lockIcon.addEventListener('dblclick', () => {
  lockScreen.style.animation = 'none'; // Reset animation
  void lockScreen.offsetWidth; // Trigger reflow to restart the animation
  lockScreen.style.animation = 'moveUp 0.5s ease forwards';
  lockIcon.style.animation = 'SizeReduce 0.5s ease forwards';  // Set animation again
  swipeUpText.style.animation = 'SizeReduce 0.5s ease forwards';
  lockGlance.style.opacity = '0%';
  timeText.forEach(element => {
    element.style.animation = 'SizeReduce 0.5s ease forwards';
  });

  lockScreenUnlocked = true
  // Hide the lock screen after the animation
  setTimeout(() => {
    lockScreen.style.display = 'none';
  }, 1000); // 500 milliseconds (0.5 seconds)
});


var powerBtn = document.querySelector('.power_btn');

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


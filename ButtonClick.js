const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener("click", () => {
        handleBtnClick(button);
    });
});

function handleBtnClick(elem) {
    if (elem.classList.contains('active')) {
        elem.classList.remove('active');
    } else {
        elem.classList.add('active');
    }
}

const autoB = document.querySelector('.autob');
const slider = document.querySelector('.slider-track');

autoB.addEventListener("click", () => {
    if (autoB.classList.contains('active')) {
        autoB.classList.remove('active');
        slider.style.width = '50%';
    } else {
        autoB.classList.add('active');
        slider.style.width = '100%';
        
    }
});

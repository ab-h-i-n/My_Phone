const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener("click", () => {
        handleBtnClick(button);
    });
});

function handleBtnClick(elem) {

    const navBar = document.querySelector('.nav .right .enabled_icons');
    if (elem.classList.contains('active')) {
        elem.classList.remove('active');
        if(elem.id == 'bluetooth'){
            const symbol = document.querySelector('#bluetooth');
            navBar.removeChild(symbol);
        }else if(elem.id == 'wifi'){
            const symbol = document.querySelector('#wifi');
            navBar.removeChild(symbol);
        }else if(elem.id == 'net'){
            const symbol = document.querySelector('#net');
            navBar.removeChild(symbol);
        }else{
            const symbol = document.querySelector('#flashlight');
            navBar.removeChild(symbol);
        }

    } else {
        elem.classList.add('active');
        if(elem.id == 'bluetooth'){
            const i = document.createElement('i');
            i.classList.add('material-icons');
            i.innerText = 'bluetooth';
            i.id = 'bluetooth';

            navBar.appendChild(i);
        }else if(elem.id == 'wifi'){
            const i = document.createElement('i');
            i.classList.add('material-icons');
            i.innerText = 'wifi';
            i.id = 'wifi';

            navBar.appendChild(i);
        }else if(elem.id == 'net'){
            const i = document.createElement('i');
            i.classList.add('material-icons');
            i.innerText = 'signal_cellular_4_bar';
            i.id = 'net';

            navBar.appendChild(i);
        }else{
            const i = document.createElement('i');
            i.classList.add('material-icons');
            i.innerText = 'flashlight_on';
            i.id = 'flashlight';

            navBar.appendChild(i);
        }
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

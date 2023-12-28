
const nav = document.querySelector('.nav');
const statusBar = document.querySelector('.status_bar');
const navDate = document.querySelector('.nav .date');
const brightness = document.querySelector('.brightness-control');
nav.addEventListener('click',handleEx);

function handleEx(){
    statusBar.style.opacity = '100%';
    statusBar.style.height = '100%';
    brightness.style.opacity = '100%';
    nav.removeEventListener('click',handleEx);
    nav.addEventListener('click',handleRe);
    navDate.style.opacity = '100%';
}

function handleRe() {
    statusBar.style.opacity = '0%';
    statusBar.style.height = '0%';
    navDate.style.opacity = '0%';
    brightness.style.opacity = '0%';
    nav.removeEventListener('click', handleRe);
    nav.addEventListener('click', handleEx);
}

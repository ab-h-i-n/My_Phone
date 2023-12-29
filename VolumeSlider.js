var slider = document.querySelector('.vertical-slider');
var track = document.querySelector('.slider-thumb');
var isDragging = false;

var volumeUp = document.querySelector('.volume_btn_1');
var volumeDown = document.querySelector('.volume_btn_2');

var volumeControl = document.querySelector('.volume-control');

var volumeControlTimeout;

window.onload = () =>{
    track.style.height = '50%';
}

volumeUp.addEventListener("click" , ()=>{
    showVolumeControl();
    var currentPercentage = parseInt(track.style.height);
    var newPercentage = currentPercentage + 5;
    if(newPercentage > 100){
        newPercentage = 100;
    }
    track.style.height = `${newPercentage}%`;
});
volumeDown.addEventListener("click" , ()=>{
    showVolumeControl();
    var currentPercentage = parseInt(track.style.height);
    var newPercentage = currentPercentage - 5;
    if(newPercentage < 0){
        newPercentage = 0;
    }
    track.style.height = `${newPercentage}%`;
});

slider.addEventListener("mousedown", function(event){
    isDragging = true;
    updateTrackHeight(event.clientY);
});

document.addEventListener("mouseup", function(){
    isDragging = false;
})

document.addEventListener("mousemove", function(event){
    if(isDragging){
        updateTrackHeight(event.clientY);
    }
})

function updateTrackHeight(y){
    var sliderRect = slider.getBoundingClientRect();
    var newY = y - sliderRect.top;
    var percentage = Math.round((newY / sliderRect.height) * 100);

    //to get 100 at top
    var invPercentage = (100 - percentage);

    if(invPercentage < 0){
        invPercentage = 0;
    }else if(invPercentage > 100){
        invPercentage = 100;
    }

    track.style.height = invPercentage + '%';
}

function showVolumeControl() {
    volumeControl.style.opacity = '1';
    volumeControl.style.transform = 'scale(1)';
    volumeControl.style.width = '50px';
    volumeControl.style.height = '30%';
}

function hideVolumeControl() {
    volumeControl.style.opacity = '0';
    volumeControl.style.transform = 'scale(.1)';
    volumeControl.style.width = '1px';
    volumeControl.style.height = '1%';

}

document.addEventListener("click", function (event) {
    if (!volumeControl.contains(event.target) && !volumeUp.contains(event.target) && !volumeDown.contains(event.target)) {
        hideVolumeControl();
    }
});

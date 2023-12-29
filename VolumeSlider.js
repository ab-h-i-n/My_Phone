var slider = document.querySelector('.vertical-slider');
var track = document.querySelector('.slider-thumb');
var isDragging = false;

var volumeUp = document.querySelector('.volume_btn_1');
var volumeDown = document.querySelector('.volume_btn_2');

window.onload = () =>{
    track.style.height = '50%';
}

volumeUp.addEventListener("click" , ()=>{
    var currentPercentage = parseInt(track.style.height);
    var newPercentage = currentPercentage + 5;
    if(newPercentage > 100){
        newPercentage = 100;
    }
    track.style.height = `${newPercentage}%`;
});
volumeDown.addEventListener("click" , ()=>{
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


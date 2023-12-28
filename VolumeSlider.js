var slider = document.getElementById("vslider");
var track = document.getElementById("vtrack");
var isDragging = false;

window.onload = () => {
    track.style.height = "50%";
}

slider.addEventListener("mousedown", function (event) {
    isDragging = true;
    updateTrackHeight(event.clientY);
});

slider.addEventListener("mousemove", function (event) {
    if (isDragging) {
        updateTrackHeight(event.clientY);
    }
});

document.addEventListener("mouseup", function () {
    isDragging = false;
});

function updateTrackHeight(y) {
    var sliderRect = slider.getBoundingClientRect();
    var newY = sliderRect.bottom - y;  // Adjusted to be relative to the bottom
    var percentage = (newY / sliderRect.height) * 100;

    if (percentage < 0) {
        percentage = 0;
    } else if (percentage > 100) {
        percentage = 100;
    }

    track.style.height = percentage + "%";
}

var slider = document.getElementById("slider");
var track = document.getElementById("track");
var isDragging = false;


slider.addEventListener("mousedown", function(event) {
  isDragging = true;
  updateTrackWidth(event.clientX);
});

document.addEventListener("mousemove", function(event) {
  if (isDragging) {
    updateTrackWidth(event.clientX);
  }
});

document.addEventListener("mouseup", function() {
  isDragging = false;
});

function updateTrackWidth(x) {
  var sliderRect = slider.getBoundingClientRect();
  var newX = x - sliderRect.left;
  var percentage = (newX / sliderRect.width) * 100;

  if (percentage < 0) {
    percentage = 0;
  } else if (percentage > 100) {
    percentage = 100;
  }

  track.style.width = percentage + "%";

}



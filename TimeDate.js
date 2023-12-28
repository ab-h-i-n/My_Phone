addEventListener("DOMContentLoaded",()=>{



function setTime(){
    const timeText = document.querySelector('.time');
    var time = getCurrentTime12hr();
    console.log(time);

    timeText.innerText = time;
}

function getCurrentTime12hr() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours is 0, set it to 12

    // Add leading zero to single-digit minutes
    minutes = minutes < 10 ? '0' + minutes : minutes;

    var time12hr = hours + ':' + minutes;

    return time12hr;
}

function setDate(){

const dateText = document.querySelector('.date');
var currentDate = getFormattedDate();
console.log(currentDate);

dateText.innerText = currentDate;


}


function getFormattedDate() {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    var now = new Date();
    var dayOfWeek = daysOfWeek[now.getDay()];
    var month = months[now.getMonth()];
    var day = now.getDate();

    var formattedDate = `${dayOfWeek}, ${month} ${day}`;
    
    return formattedDate;
}

setDate();
setTime();

})
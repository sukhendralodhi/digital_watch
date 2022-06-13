const time = document.getElementById('output');
// console.log(time);
setInterval(showTime, 1000);

function showTime() {
    let clock = new Date();
    let hour = clock.getHours();
    let minute = clock.getMinutes();
    let second = clock.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour = hour - 12;
        am_pm = "PM";
    } if (hour < 12) {
        hr = 12;
        am_pm = "AM"; 
    }
    hour = hour < 10 ? "0" + hour : hour;
    minute = hour < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    let currentTime = hour + ":" + minute + ":" + second + " " + am_pm;

    time.innerHTML = currentTime;
}
showTime;
document.addEventListener("DOMContentLoaded", function () {
    let day = new Date().getDate();
    let dayPage = document.querySelector("#widget__real-time-staff_day");
    dayPage.innerHTML = day;

    moveTimeLine();
    let timerId = setInterval(() => moveTimeLine(), 10000);
});

function moveTimeLine() {
    let nowDate = new Date();
    let nowMinutes = nowDate.getHours() * 60 + nowDate.getMinutes();
    // let nowMinutes = nowDate.getSeconds() * 1000 + nowDate.getMilliseconds();

    const profileIcon = document.querySelector(".staff-icon");
    let profileIconW = profileIcon.getBoundingClientRect().width;

    const timeTrack = document.querySelector(".staff-item");
    let timeTrackW = timeTrack.getBoundingClientRect().width - profileIconW;

    let timeLine = document.querySelector(".timeline");

    console.log(timeTrackW, nowMinutes, profileIconW);
    let leftShiftTimeline = (timeTrackW * nowMinutes) / (24 * 60);
    // let leftShiftTimeline = (timeTrackW * nowMinutes) / (1000 * 60);
    timeLine.style.left = profileIconW + leftShiftTimeline + 'px';
}
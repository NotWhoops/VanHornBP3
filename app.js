import Data from "./data.json" with { type: "json" };

let daily = document.getElementById("daily")
let weekly = document.getElementById("weekly")
let monthly = document.getElementById("monthly")
let workHours = document.getElementById("workHours")
let workWeek = document.getElementById("workWeek")
let playHours = document.getElementById("playHours")
let playWeek = document.getElementById("playWeek")
let studyHours = document.getElementById("studyHours")
let studyWeek = document.getElementById("studyWeek")
let exerciseHours = document.getElementById("exerciseHours")
let exerciseWeek = document.getElementById("exerciseWeek")
let socialHours = document.getElementById("socialHours")
let socialWeek = document.getElementById("socialWeek")
let selfHours = document.getElementById("selfHours")
let selfWeek = document.getElementById("selfWeek")


daily.addEventListener('click', function () {
    workHours.innerText = Data.timeframes.daily.current[0];
    workWeek.innerText = Data.timeframes.daily.previous[0];
    playHours.innerText = Data.timeframes.daily.current[1];
    playWeek.innerText = Data.timeframes.daily.previous[1];
    studyHours.innerText = Data.timeframes.daily.current[2];
    studyWeek.innerText = Data.timeframes.daily.previous[2];
    exerciseHours.innerText = Data.timeframe.daily.current[3];
    exerciseWeek.innerText = Data.timeframes.daily.previous[3];
    socialHours.innerText = Data.timeframes.daily.current[4];
    socialWeek.innerText = Data.timeframes.daily.previous[4];
    selfHours.innerText = Data.timeframes.daily.current[5];
    selfWeek.innerText = Data.timeframes.daily.previous[5];
})
weekly.addEventListener('click', function () {
    workHours.innerText = Data.timeframes.weekly.current[0];
    workWeek.innerText = Data.timeframes.weekly.previous[0];
    playHours.innerText = Data.timeframes.weekly.current[1];
    playWeek.innerText = Data.timeframes.weekly.previous[1];
    studyHours.innerText = Data.timeframes.weekly.current[2];
    studyWeek.innerText = Data.timeframes.weekly.previous[2];
    exerciseHours.innerText = Data.timeframes.weekly.current[3];
    exerciseWeek.innerText = Data.timeframes.weekly.previous[3];
    socialHours.innerText = Data.timeframes.weekly.current[4];
    socialWeek.innerText = Data.timeframes.weekly.previous[4];
    selfHours.innerText = Data.timeframes.weekly.current[5];
    selfWeek.innerText = Data.timeframes.weekly.previous[5];
})
monthly.addEventListener('click', function () {
    workHours.innerText = Data.timeframes.monthly.current[0];
    workWeek.innerText = Data.timeframes.monthly.previous[0];
    playHours.innerText = Data.timeframes.monthly.current[1];
    playWeek.innerText = Data.timeframes.monthly.previous[1];
    studyHours.innerText = Data.timeframes.monthly.current[2];
    studyWeek.innerText = Data.timeframes.monthly.previous[2];
    exerciseHours.innerText = Data.timeframes.monthly.current[3];
    exerciseWeek.innerText = Data.timeframes.monthly.previous[3];
    socialHours.innerText = Data.timeframes.monthly.current[4];
    socialWeek.innerText = Data.timeframes.monthly.previous[5];
    selfHours.innerText = Data.timeframes.monthly.current[5];
    selfWeek.innerText = Data.timeframes.monthly.previous[5];
})
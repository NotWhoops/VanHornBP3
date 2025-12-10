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
    workHours.innerText = Data[0].timeframes.daily.current + " hrs";
    workWeek.innerText = Data[0].timeframes.daily.previous + " Last Week";
    playHours.innerText = Data[1].timeframes.daily.current + " hrs";
    playWeek.innerText = Data[1].timeframes.daily.previous + " Last Week";
    studyHours.innerText = Data[2].timeframes.daily.current + " hrs";
    studyWeek.innerText = Data[2].timeframes.daily.previous + " Last Week";
    exerciseHours.innerText = Data[3].timeframes.daily.current + " hrs";
    exerciseWeek.innerText = Data[3].timeframes.daily.previous + " Last Week";
    socialHours.innerText = Data[4].timeframes.daily.current + " hrs";
    socialWeek.innerText = Data[4].timeframes.daily.previous + " Last Week";
    selfHours.innerText = Data[5].timeframes.daily.current + " hrs";
    selfWeek.innerText = Data[5].timeframes.daily.previous + " Last Week";
})
weekly.addEventListener('click', function () {
    workHours.innerText = Data[0].timeframes.weekly.current + " hrs";
    workWeek.innerText = Data[0].timeframes.weekly.previous + " Last Week";
    playHours.innerText = Data[1].timeframes.weekly.current + " hrs";
    playWeek.innerText = Data[1].timeframes.weekly.previous + " Last Week";
    studyHours.innerText = Data[2].timeframes.weekly.current + " hrs";
    studyWeek.innerText = Data[2].timeframes.weekly.previous + " Last Week";
    exerciseHours.innerText = Data[3].timeframes.weekly.current + " hrs";
    exerciseWeek.innerText = Data[3].timeframes.weekly.previous + " Last Week";
    socialHours.innerText = Data[4].timeframes.weekly.current + " hrs";
    socialWeek.innerText = Data[4].timeframes.weekly.previous + " Last Week";
    selfHours.innerText = Data[5].timeframes.weekly.current + " hrs";
    selfWeek.innerText = Data[5].timeframes.weekly.previous + " Last Week";
})
monthly.addEventListener('click', function () {
    workHours.innerText = Data[0].timeframes.monthly.current + " hrs";
    workWeek.innerText = Data[0].timeframes.monthly.previous + " Last Week";
    playHours.innerText = Data[1].timeframes.monthly.current + " hrs";
    playWeek.innerText = Data[1].timeframes.monthly.previous + " Last Week";
    studyHours.innerText = Data[2].timeframes.monthly.current + " hrs";
    studyWeek.innerText = Data[2].timeframes.monthly.previous + " Last Week";
    exerciseHours.innerText = Data[3].timeframes.monthly.current + " hrs";
    exerciseWeek.innerText = Data[3].timeframes.monthly.previous + " Last Week";
    socialHours.innerText = Data[4].timeframes.monthly.current + " hrs";
    socialWeek.innerText = Data[4].timeframes.monthly.previous + " Last Week";
    selfHours.innerText = Data[5].timeframes.monthly.current + " hrs";
    selfWeek.innerText = Data[5].timeframes.monthly.previous + " Last Week";
})
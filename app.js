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
    console.log(Data);
    workHours.innerText = Data.timestamps[0].daily;
    workWeek.innerText = Data[0].daily;
    playHours.innerText = Data[0].daily;
    playWeek.innerText = Data[0].daily;
    studyHours.innerText = Data[0].daily;
    studyWeek.innerText = Data[0].daily;
    exerciseHours.innerText = Data[0].daily;
    exerciseWeek.innerText = Data[0].daily;
    socialHours.innerText = Data[0].daily;
    socialWeek.innerText = Data[0].daily;
    selfHours.innerText = Data[0].daily;
    selfWeek.innerText = Data[0].daily;
})
weekly.addEventListener('click', function () {
    workHours.innerText = Data[0].weekly;
    workWeek.innerText = Data[0].weekly;
    playHours.innerText = Data[0].weekly;
    playWeek.innerText = Data[0].weekly;
    studyHours.innerText = Data[0].weekly;
    studyWeek.innerText = Data[0].weekly;
    exerciseHours.innerText = Data[0].weekly;
    exerciseWeek.innerText = Data[0].weekly;
    socialHours.innerText = Data[0].weekly;
    socialWeek.innerText = Data[0].weekly;
    selfHours.innerText = Data[0].weekly;
    selfWeek.innerText = Data[0].weekly;
})
monthly.addEventListener('click', function () {
    workHours.innerText = Data[0].monthly;
    workWeek.innerText = Data[0].monthly;
    playHours.innerText = Data[0].monthly;
    playWeek.innerText = Data[0].monthly;
    studyHours.innerText = Data[0].weekly;
    studyWeek.innerText = Data[0].monthly;
    exerciseHours.innerText = Data[0].monthly;
    exerciseWeek.innerText = Data[0].monthly;
    socialHours.innerText = Data[0].monthly;
    socialWeek.innerText = Data[0].monthly;
    selfHours.innerText = Data[0].monthly;
    selfWeek.innerText = Data[0].monthly;
})
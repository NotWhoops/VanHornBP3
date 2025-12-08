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

console.log(Data[0]);

daily.addEventListener('click', function () {
    workHours.innerText = Data[0].timeframes.daily.current;
    workWeek.innerText = Data[0].timeframes.daily.previous;
    playHours.innerText = Data[1].timeframes.daily.current;
    playWeek.innerText = Data[1].timeframes.daily.previous;
    studyHours.innerText = Data[2].timeframes.daily.current;
    studyWeek.innerText = Data[2].timeframes.daily.previous;
    exerciseHours.innerText = Data[3].timeframe.daily.current;
    exerciseWeek.innerText = Data[3].timeframes.daily.previous;
    socialHours.innerText = Data[4].timeframes.daily.current;
    socialWeek.innerText = Data[4].timeframes.daily.previous;
    selfHours.innerText = Data[5].timeframes.daily.current;
    selfWeek.innerText = Data[5].timeframes.daily.previous;
})
weekly.addEventListener('click', function () {
    workHours.innerText = Data[0].timeframes.weekly.current;
    workWeek.innerText = Data[0].timeframes.weekly.previous;
    playHours.innerText = Data[1].timeframes.weekly.current;
    playWeek.innerText = Data[1].timeframes.weekly.previous;
    studyHours.innerText = Data[2].timeframes.weekly.current;
    studyWeek.innerText = Data[2].timeframes.weekly.previous;
    exerciseHours.innerText = Data[3].timeframes.weekly.current;
    exerciseWeek.innerText = Data[3].timeframes.weekly.previous;
    socialHours.innerText = Data[4].timeframes.weekly.current;
    socialWeek.innerText = Data[4].timeframes.weekly.previous;
    selfHours.innerText = Data[5].timeframes.weekly.current;
    selfWeek.innerText = Data[5].timeframes.weekly.previous;
})
monthly.addEventListener('click', function () {
    workHours.innerText = Data[0].timeframes.weekly.current;
    workWeek.innerText = Data[0].timeframes.weekly.previous;
    playHours.innerText = Data[1].timeframes.weekly.current;
    playWeek.innerText = Data[1].timeframes.weekly.previous;
    studyHours.innerText = Data[2].timeframes.weekly.current;
    studyWeek.innerText = Data[2].timeframes.weekly.previous;
    exerciseHours.innerText = Data[3].timeframes.weekly.current;
    exerciseWeek.innerText = Data[3].timeframes.weekly.previous;
    socialHours.innerText = Data[4].timeframes.weekly.current;
    socialWeek.innerText = Data[4].timeframes.weekly.previous;
    selfHours.innerText = Data[5].timeframes.weekly.current;
    selfWeek.innerText = Data[5].timeframes.weekly.previous;
})
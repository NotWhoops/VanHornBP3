import Work from "./data.json" with { type: "json" };
import Play from "./data.json" with { type: "json" };
import Study from "./data.json" with { type: "json" };
import Exercise from "./data.json" with { type: "json" };
import Social from "./data.json" with { type: "json" };
import SelfCare from "./data.json" with { type: "json" };

let work = Work.Work[0].timeframes;
let play = Play.Play[1].timeframes;
let study = Study.Study[2].timeframes;
let exercise = Exercise.Exercise[3].timeframes;
let social = Social.Social[4].timeframes;
let selfcare = SelfCare[5].timeframes;
let daily = document.getElementById("daily")
let weekly = document.getElementById("weekly")
let monthly = document.getElementById("monthly")


daily.addEventListener('click', function () {
    daily.innerText = Work.Work[0].daily;
})
weekly.addEventListener('click', function () {
    weekly.innerText = Work.Work[0].weekly;
})
monthly.addEventListener('click', function () {
    monthly.innerText = Work.Work[0].monthly;
})


daily.addEventListener('click', function () {
    daily.innerText = Play.Play[1].daily;
})
weekly.addEventListener('click', function () {
    weekly.innerText = Play.Play[1].weekly;
})
monthly.addEventListener('click', function () {
    monthly.innerText = Play.Play[1].monthly;
})


daily.addEventListener('click', function () {
    daily.innerText = Work.Work[0].daily;
})
weekly.addEventListener('click', function () {
    weekly.innerText = Work.Work[0].weekly;
})
monthly.addEventListener('click', function () {
    monthly.innerText = Work.Work[0].monthly;
})


daily.addEventListener('click', function () {
    daily.innerText = Work.Work[0].daily;
})
weekly.addEventListener('click', function () {
    weekly.innerText = Work.Work[0].weekly;
})
monthly.addEventListener('click', function () {
    monthly.innerText = Work.Work[0].monthly;
})


daily.addEventListener('click', function () {
    daily.innerText = Work.Work[0].daily;
})
weekly.addEventListener('click', function () {
    weekly.innerText = Work.Work[0].weekly;
})
monthly.addEventListener('click', function () {
    monthly.innerText = Work.Work[0].monthly;
})


daily.addEventListener('click', function () {
    daily.innerText = Work.Work[0].daily;
})
weekly.addEventListener('click', function () {
    weekly.innerText = Work.Work[0].weekly;
})
monthly.addEventListener('click', function () {
    monthly.innerText = Work.Work[0].monthly;
})
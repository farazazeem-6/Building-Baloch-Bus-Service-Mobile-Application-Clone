let backBtn = document.querySelector('.back-arrow i');

backBtn.addEventListener('click', function () {
    history.back()
})


function spliceMonth(str) {
    return str.slice(0, 3)

}

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

let today = new Date();

let startDay = today.getDay();
let startDate = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();

let setDay = document.querySelectorAll('.day');
let setDate = document.querySelectorAll('.date');
let setMonth = document.querySelectorAll('.month');
let setYear = document.querySelectorAll('.year');

setDay.forEach((el, index) => {
    let thisDate = new Date(year, month, startDate + index);
    // console.log(thisDate);
    el.textContent = days[thisDate.getDay()];
    setDate[index].textContent = thisDate.getDate();
    setMonth[index].textContent = spliceMonth(months[thisDate.getMonth()]);
    setYear[index].textContent = ' ' + thisDate.getFullYear();
});

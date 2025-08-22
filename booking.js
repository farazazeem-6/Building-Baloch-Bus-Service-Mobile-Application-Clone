let backBtn = document.querySelector('.back-arrow i');
backBtn.addEventListener('click', function () {
    localStorage.clear()
    window.location.href = 'index.html'
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
    if (days[thisDate.getDay()] === 'Wednesday') {
        el.textContent = spliceMonth(days[thisDate.getDay()])
    }
    else {
        el.textContent = days[thisDate.getDay()];
    }
    setDate[index].textContent = thisDate.getDate();
    setMonth[index].textContent = spliceMonth(months[thisDate.getMonth()]);
    setYear[index].textContent = ' ' + thisDate.getFullYear();
});


let departureInput = document.querySelector('.departure-input');
let destinationInput = document.querySelector('.destination-input');


let DepartureCity = localStorage.getItem('departure city')
let DestinationCity = localStorage.getItem('destination city')
// console.log(selectedCity);
let departureInputValue = document.querySelector('.departure-input input')
let destinationInputValue = document.querySelector('.destination-input input')
departureInputValue.value = DepartureCity
destinationInputValue.value = DestinationCity

departureInput.addEventListener('click', function () {
    window.location.href = 'departure-list.html'
})
destinationInput.addEventListener('click', function () {
    window.location.href = 'destination-list.html'
})


let shifingArrow = document.querySelector('.shifing-arrow');


let flag = true
shifingArrow.addEventListener('click', function () {
    if (flag) {
        departureInputValue.value = DestinationCity
        destinationInputValue.value = DepartureCity
        flag = false
    }
    else {
        departureInputValue.value = DepartureCity
        destinationInputValue.value = DestinationCity
        flag = true
    }

})
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

let dateBox = document.querySelectorAll('.date-box');

let boxFlag = false;
dateBox.forEach((box) => {
    box.addEventListener('click', function () {
        localStorage.removeItem('dayData');
        localStorage.removeItem('dateData');
        localStorage.removeItem('monthData');
        localStorage.removeItem('yearData');
        dateBox.forEach((b) => {
            b.style.backgroundColor = ''
            b.querySelectorAll('*').forEach((el) => {
                el.style.color = ''
            })
        })
        box.style.backgroundColor = '#008000';
        box.querySelectorAll('*').forEach((el) => {
            el.style.color = 'white';
            boxFlag = true;


        })
        let dayValue = box.querySelector('.day').textContent;
        let dateValue = box.querySelector('.date').textContent;
        let monthValue = box.querySelector('.month').textContent;
        let yearValue = box.querySelector('.year').textContent;

        localStorage.setItem('dayData', dayValue);
        localStorage.setItem('dateData', dateValue);
        localStorage.setItem('monthData', monthValue);
        localStorage.setItem('yearData', yearValue);
    });
});


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
if (departureInputValue) {
    departureInputValue.value = DepartureCity
}
if (destinationInputValue) {
    destinationInputValue.value = DestinationCity
}

if (departureInput) {
    departureInput.addEventListener('click', function () {
        window.location.href = 'departure-list.html'
    })
}

if (destinationInput) {
    destinationInput.addEventListener('click', function () {
        window.location.href = 'destination-list.html'
    })
}


let shifingArrow = document.querySelector('.shifing-arrow');


let flag = true;
if (shifingArrow) {
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
}


function validationFunction() {
    let flag = true;
    if (departureInputValue.value === '') {
        alert('Select a departure city');
        flag = false;
        return
    }
    if (destinationInputValue.value === '') {
        alert('Select a destination city');
        flag = false;
        return
    }
    if (destinationInputValue.value === departureInputValue.value) {
        alert('Departure and Destination city cannot be same');
        flag = false;
        return
    }
    if (!boxFlag) {
        alert('Select a date');
        flag = false;
        return
    }
    if (flag) {
        window.location.href = 'routes.html'
    }

}

let searchBtn = document.querySelector('.search-btn');

if (searchBtn) {
    searchBtn.addEventListener('click', function () {
        validationFunction()
    })
}

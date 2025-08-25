let backArrow = document.querySelector('.back-arrow i')
if (backArrow) {
    backArrow.addEventListener('click', function () {
        history.back()
    })
}

let departureCity = document.querySelectorAll('.company-name')
let destinationCity = document.querySelectorAll('.route-text')
let buyButton = document.querySelectorAll('.buy-button');

buyButton.forEach(buyBtn=>{
    buyBtn.addEventListener('click',function() {
        window.location.href='seats.html'
    })
})



let getDeparture = localStorage.getItem('departure city')
let getDestination = localStorage.getItem('destination city')
// console.log(getDeparture);
// console.log(getDestination);
departureCity.forEach(city => {
    city.textContent = getDeparture
})
destinationCity.forEach(city => {
    city.textContent = getDestination
})

// departureCity.textContent = getDeparture
// destinationCity.textContent = getDestination

// Highlight previously selected date box when page loads
window.addEventListener('DOMContentLoaded', () => {

    const storedDay = localStorage.getItem('dayData');
    const storedDate = localStorage.getItem('dateData');
    const storedMonth = localStorage.getItem('monthData');
    const storedYear = localStorage.getItem('yearData');


    if (storedDay && storedDate && storedMonth && storedYear) {

        document.querySelectorAll('.date-box').forEach((box) => {
            let day = box.querySelector('.day').textContent;
            let date = box.querySelector('.date').textContent;
            let month = box.querySelector('.month').textContent;
            let year = box.querySelector('.year').textContent;

            // Check if this box matches stored values
            if (
                day === storedDay &&
                date === storedDate &&
                month === storedMonth &&
                year === storedYear
            ) {

                document.querySelectorAll('.date-box').forEach((b) => {
                    b.style.backgroundColor = '';
                    b.querySelectorAll('*').forEach((el) => {
                        el.style.color = '';
                    });
                });


                box.style.backgroundColor = '#008000';
                box.querySelectorAll('*').forEach((el) => {
                    el.style.color = 'white';
                });
            }
        });
    }
});

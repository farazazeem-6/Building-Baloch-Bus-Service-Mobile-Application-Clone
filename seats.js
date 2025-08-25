let backBtn = document.querySelector('.backBtn i')
if (backBtn) {
    backBtn.addEventListener('click', function () {
        history.back()
    })
}


// Time Count Down Logic 

function addZero(value) {
    return value < 10 ? `0${value}` : value;
}

let minute = document.querySelector('.minute');
let second = document.querySelector('.second');

let totalSeconds = 0;
let totalMinutes = 5;

const timer = setInterval(() => {
    if (totalSeconds === 0) {
        if (totalMinutes === 0) {
            clearInterval(timer);
            history.back();
            return;
        }
        totalMinutes--;
        totalSeconds = 59;
    } else {
        totalSeconds--;
    }

    minute.textContent = addZero(totalMinutes);
    second.textContent = addZero(totalSeconds);
}, 1000);



// SEAT SELECTING FUNCTIONALITY 

let selectedSeat = null;
let seatSelections = {};
let closeModal = document.querySelector('.close-modal i');

let modalOverlay = document.querySelector('.gender-modal-overlay');
let seat = document.querySelectorAll('.seat');
let payAmount = document.querySelector('.pay');
let discountAmount = document.querySelector('.discount');
let totalAmount = 0;
const MAX_SEATS = 5;

// ✅ Update total price display
function updateTotalAmount() {
    let total = 0;
    for (const id in seatSelections) {
        total += Number(seatSelections[id].price);
    }
    totalAmount = total;
    // Calculate discount amount (percentage based)
    let divide = totalAmount / 1700;
    let discountAmt = divide * 200;
    // Apply the calculated discount to total
    let finalAmount = totalAmount - discountAmt;
    
    // Display final amount after discount
    payAmount.textContent = `PKR ${finalAmount}`;
    
    // Display discount amount
    discountAmount.textContent = `PKR ${discountAmt}`;
}

// ✅ Check if seat limit is reached
function isSeatLimitReached() {
    return Object.keys(seatSelections).length >= MAX_SEATS;
}

// ✅ Handle seat click
seat.forEach(seat => {
    if (seat.querySelector('.available')) {
        seat.addEventListener('click', function () {
            let seatNumber = seat.querySelector('.seat-number').textContent;
            let icon = seat.querySelector('.seat-icon i');

            // If already selected, deselect
            if (seatSelections[seatNumber]) {
                delete seatSelections[seatNumber];
                icon.style.color = ''; // Reset icon color
                updateTotalAmount();
                return;
            }

            // Check if seat limit is reached before selecting new seat
            if (isSeatLimitReached()) {
                alert(`You cannot select more than ${MAX_SEATS} seats. Please deselect a seat first.`);
                return;
            }


            // Otherwise, prepare to select
            selectedSeat = {
                id: seatNumber,
                price: seat.dataset.seatPrice
            };

            modalOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    }
});

// ✅ Handle gender selection
document.querySelectorAll('.gender-modal-body p').forEach(btn => {
    btn.addEventListener('click', () => {
        const gender = btn.dataset.gender;

        if (selectedSeat && gender) {
            seatSelections[selectedSeat.id] = {
                gender: gender,
                price: selectedSeat.price
            };

            const seatElement = [...document.querySelectorAll('.seat')].find(seat => {
                return seat.querySelector('.seat-number').textContent === selectedSeat.id;
            });

            if (seatElement) {
                const icon = seatElement.querySelector('.seat-icon i');
                if (icon) {
                    icon.style.color = '#008000'; // Green for selected
                }
            }

            updateTotalAmount();


            modalOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
            selectedSeat = null; // Reset after selection
        }
    });
});


// Continue button logic

let continueBtn = document.querySelector('.continue-btn button');
if (continueBtn) {
    continueBtn.addEventListener('click', function () {
        // Check seat selections inside the click handler
        if (Object.keys(seatSelections).length > 0) {
            localStorage.setItem('seatDetails', JSON.stringify(seatSelections));
            // alert('saved');
            window.location.href = 'boarding.html'
        } else {
            alert('Please select at least one seat before continuing.');
        }
    });
}





if (closeModal) {
    closeModal.addEventListener('click', function () {
        modalOverlay.style.display = 'none'
        document.body.style.overflow = 'auto'
    })
}
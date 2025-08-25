let backBtn = document.querySelector('.back-arrow i');
backBtn.addEventListener('click', function () {
    history.back()
});



let checkBox = document.getElementById('checkbox');
let continueBtn = document.querySelector('.continue-btn')



continueBtn.addEventListener('click', function () {
    if (checkBox.checked) {
        window.location.href = 'payment'
    }
    else {
        alert('First check the Terms & Conditions')
    }

})
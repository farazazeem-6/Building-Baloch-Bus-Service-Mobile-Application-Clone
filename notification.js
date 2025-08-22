let backBtn = document.querySelector('.back-arrow i');

backBtn.addEventListener('click', function () {
    history.back()
});

let notificationCards = document.querySelectorAll('.notification-cards')
let transactionText = document.querySelector('.transaction-text')
let transactionBtn = document.querySelector('.transaction')
let promotionBtn = document.querySelector('.promotion');



transactionBtn.addEventListener('click', function () {
    transactionBtn.classList.add('active')
    transactionBtn.classList.remove('inactive')

    promotionBtn.classList.add('inactive');
    promotionBtn.classList.remove('active')
    transactionText.style.display = 'flex';
    notificationCards.forEach((card) => {
        card.style.display = 'none';
    })
})


promotionBtn.addEventListener('click', function () {
    promotionBtn.classList.add('active')
    promotionBtn.classList.remove('inactive')

    transactionBtn.classList.add('inactive');
    transactionBtn.classList.remove('active')
    transactionText.style.display = 'none';
    notificationCards.forEach((card) => {
        card.style.display = 'flex';
    })
})

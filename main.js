// HamBurger Functionality :
// let AllAnchor = document.querySelectorAll('a');
// AllAnchor.forEach((anchor) => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//     })
// })

let HamBurgerBtn = document.querySelector('.hamburger-btn a i');
let SideBarOverlay = document.querySelector('.sidebar-overlay');
let SideBarData = document.querySelector('.sidebar-data');
let SideBarHamburgerBtn = document.querySelector('.sidebar-hamburger i')
let profilePage = document.querySelector('.profile-side')
let myTicket = document.querySelector('.my-ticket')



let walletBalance = document.querySelector('.wallet-balance');
let eyeIcon = document.querySelector('.eye-icon');
let walletFlag = true
let walletDetailsContainer = document.querySelector('.wallet-details-container');

walletDetailsContainer.addEventListener('click', function (e) {
    e.preventDefault()
    if (walletFlag) {
        eyeIcon.innerHTML = '';
        eyeIcon.style.fontSize = '20px'
        walletBalance.innerHTML = 'PKR 0 <i class="ri-eye-line"></i>'
        walletBalance.style.fontSize = '14px'
        walletFlag = false
    }
    else {
        eyeIcon.innerHTML = '';
        eyeIcon.style.fontSize = '20px'
        walletBalance.innerHTML = '**** <i class="fa-solid fa-eye-slash"></i>'
        walletBalance.style.fontSize = '14px'
        walletFlag = true
    }

})




HamBurgerBtn.addEventListener('click', function (e) {
    e.preventDefault()
    SideBarOverlay.style.display = 'flex';
    SideBarData.style.right = '0px'
    document.body.style.overflow = 'hidden'

});

SideBarHamburgerBtn.addEventListener('click', function (e) {
    e.preventDefault()
    SideBarOverlay.style.display = 'none';
    SideBarData.style.right = '90%'
    document.body.style.overflow = 'auto'
})

profilePage.addEventListener('click', function (e) {
    e.preventDefault()
    window.location.href = 'profile.html';
})
myTicket.addEventListener('click', function (e) {
    e.preventDefault()
    window.location.href = 'ticket.html';
})


const navButtons = {
    home: 'index.html',
    myAccount: 'profile.html',
    myTicket: 'ticket.html',
    myWallet: 'wallet.html',
    myNotification: 'notification.html',
    myPromotion: 'promotion.html',
    mySupport: 'support.html'
};

const allButtons = Object.keys(navButtons).map(id => document.getElementById(id));

allButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();

        // Navigate to the correct page
        window.location.href = navButtons[btn.id];

        // Remove active class from all buttons
        allButtons.forEach(b => b.classList.remove('sidebar-active'));

        // Add active class to the clicked button
        btn.classList.add('sidebar-active');
    });
});



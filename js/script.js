let searchBtn = document.querySelector('#search-btn');
let searchBox = document.querySelector('.search-box');
let cartBtn = document.querySelector('#cart-btn');
let cartBox = document.querySelector('.shopping-cart');
let loginBtn = document.querySelector('#login-btn');
let loginBox = document.querySelector('.login');
let navBar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-x');
    navBar.classList.toggle('active');
    searchBox.classList.remove('active');
    cartBox.classList.remove('active');
    loginBox.classList.remove('active');
}

searchBtn.onclick = () => {
    searchBox.classList.toggle('active');
    cartBox.classList.remove('active');
    loginBox.classList.remove('active');
    menuBtn.classList.remove('fa-x');
    navBar.classList.remove('active');
}

cartBtn.onclick = () => {
    cartBox.classList.toggle('active');
    searchBox.classList.remove('active');
    loginBox.classList.remove('active');
    menuBtn.classList.remove('fa-x');
    navBar.classList.remove('active');
}

loginBtn.onclick = () => {
    loginBox.classList.toggle('active');
    cartBox.classList.remove('active');
    searchBox.classList.remove('active');
    menuBtn.classList.remove('fa-x');
    navBar.classList.remove('active');
}

window.onscroll = () => {
    searchBox.classList.remove('active');
    cartBox.classList.remove('active');
    loginBox.classList.remove('active');
    menuBtn.classList.remove('fa-x');
    navBar.classList.remove('active');
}

var swiper = new Swiper('.md-swiper', {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween: 20,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
       type: 'bullets'
    },
    breakpoints: {
       0: {
         slidesPerView: 1,
       },
       450: {
         slidesPerView: 2,
       },
       991: {
         slidesPerView: 3,
       },
    },
});


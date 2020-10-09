$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });


    let hamburger  = document.querySelector('.hamburger'),
        times = document.querySelector('.times'),
        mobileNav = document.querySelector('.mobile-nav');

        hamburger.addEventListener('click',function(){
            mobileNav.classList.add('open');
        });

        times.addEventListener('click',function(){
            mobileNav.classList.remove('open');
        });
});
$(function(){
    $('.click__subscription').click(function(){
        $('.block-subscription').addClass('block-subscription_activ');
    });
    $('.block-subscription span').click(function(){
        $('.block-subscription').toggleClass('block-subscription_activ');
    });

    $('.header .fa-bars').click(function(){
        $('.mobileMenu').addClass('mobileMenu_activ');
    });
    $('.mobileMenu span').click(function(){
        $('.mobileMenu').removeClass('mobileMenu_activ');
    })
});
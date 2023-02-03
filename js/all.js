$(document).ready(function(){
    $('.dropdown').click(function(event){
        event.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().find('.listDetail').slideToggle(500);
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).parent().siblings().find('.listDetail').slideUp(500);
    });

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        
        //autoplay
        autoplay: {
        delay: 2500,
        disableOnInteraction : false,
        pauseOnMouseEnter : true,
        },
    
        });

    lightbox.option({
        'resizeDuration' : 200,
        'positionFromTop' : 350,
        'wrapAround' : true,
        'showImageNumberLabel' : false,
    }); 

    //goTop
    function showBtnCondition(){
        if($(this).scrollTop()>250){
            $('.goTop').addClass('goTopshow');
        }else{
            $('.goTop').removeClass('goTopshow');
        }
    }

    $(window).scroll(showBtnCondition);
    $('.goTop').click(function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },500);
    });
});
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    //Toggle Menu / Navbar 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["Developer"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });

    // Owl Carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {

            0:{
                items: 1,
                nav: false
            },

            600:{
                items: 2,
                nav: false
            },

            1000:{
                items: 3,
                nav: false
            }

        }
    });
});
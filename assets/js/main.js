$(function(){
    
    // header menu
    $(".h-menu li").children("ul").parent("li").addClass("has-child").append('<span class="carret"></span>');


    // ---new code ------------------
    $(".h-menu").clone().appendTo(".mobile-menu");
    $(".menu-trigger").on("click", function(){
        $(this).toggleClass("active");
        $(".mobile-menu").toggleClass("active");
        $("body").toggleClass("menu-active")
    })
    



    // home slider
    $(".home-slider").owlCarousel({
        items: 1,
        smartSpeed: 900,
        dots: false,
        nav: true,
        navText:[
            '<svg width="28" height="51" viewBox="0 0 28 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.47661 26.3849C0.880928 25.7928 0.843556 24.8454 1.36449 24.2087L1.47661 24.0973L23.9792 1.72859C25.0272 0.686878 26.7893 1.43926 26.7893 2.87241L26.7893 47.6098C26.7893 49.0501 25.0306 49.7987 23.9792 48.7536L1.47661 26.3849Z" stroke="#5387C6" stroke-width="2"/></svg>',
            '<svg width="28" height="51" viewBox="0 0 28 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.3127 24.0998C26.9084 24.692 26.9458 25.6393 26.4248 26.276L26.3127 26.3875L3.81007 48.7561C2.76212 49.7979 1 49.0455 1 47.6123V2.87496C1 1.43463 2.75867 0.686009 3.81007 1.73115L26.3127 24.0998Z" stroke="#5387C6" stroke-width="2"/></svg>'
        ]
    });

    
    if( window.matchMedia('(max-width:575px)').matches ){
        $(".collapse-wrap").on( 'click', '.collapse-trigger',  function(){
            $(this).toggleClass('active');
            $(this).siblings('.collapse-inner').slideToggle();
        } );
    }

    $('.a-content').hide();
    $('.accordion-item').on('click', '.a-title', function(){
        $(this).parent().siblings().children('.a-content').slideUp();
        $(this).siblings('.a-content').slideToggle();
    })








});






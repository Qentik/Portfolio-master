let preloaderFlag = 0;
$("html").css('overflow','hidden');
document.body.onload = function(){
    setTimeout(() => {
        $('.main-preloader__loader').addClass('climax');
        setTimeout(() => {
            $('.main-preloader').fadeOut(700);
            $("html").css('overflow','auto')
            preloaderFlag = 1;
        }, 1100);
    }, 200);
};
    
$(document).ready(function() {
    $('.flowing-scroll').on('click', function(){ 
        var el = $(this);
        var dest = el.attr('href'); // получаем направление
        if(dest !== undefined && dest !== '') { // проверяем существование
            $('html, body').animate({ 
                scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
            }, 1000 // скорость прокрутки
            );
        }
        return false;
    });
    // $('.logo__img, .logo__text_1, .logo__text_2').on( 'click', function(){ 
    //     location.href = "index.html";
    // });
    //создаем JQuery функцию, которая будет подгружать изображения в буфер
    jQuery.preloadImages = function(){
        for(var i = 0; i < arguments.length; i++){
            jQuery("<img>").attr("src", arguments[ i ]);
        }
    };
    
    $("#phone").mask("8(999) 999-9999");
    if ($(".nav-item-toggle > p:not(.p_active)")) {$(".nav-item-toggle > p:not(.p_active)").hide();}
    $(".nav-item-toggle > a").on('click', function(e) {
      e.preventDefault();
      if ($(this).next().hasClass("p_active")) {
    }
    else {
        $(".p_active").slideUp("easeOutExpo");
        $(".p_active").removeClass('p_active');
        $(this).next().addClass("p_active");    
        $(this).next().slideDown("easeOutExpo");
    }
    });
    $(".achievement_block-icons-image").hover(function(e) {
        e.preventDefault();
        if ($(this).hasClass('image-active')) {
        } else {
            var number = $(this).index();
            $('.image-active').removeClass('image-active');
            $('.achievement_block-icons-image').eq(number).addClass('image-active');
            $('.expertise__slide-active').fadeOut(200).removeClass('expertise__slide-active');
            $('.achievement_block-perfomance').eq(number).addClass('expertise__slide-active').fadeIn(200);
            $('.expertise__slide-active').css("display","grid");
            
        } 
    });


    $(window).on('load resize scroll', function() { // Поменял scroll на resize ради эксперимента (код мог пойти по п*зде)
        var height_first_block = $("div.perfomance_page").outerHeight(true);
        var height_end_block = $(".end_block").outerHeight(true);
        height_end_block = $("div.perfomance_page").outerHeight(true) + $("div.parallax").outerHeight(true) + $("div.wrap-our_works").outerHeight(true) + $("div.wrap-achievement_block").outerHeight(true);
        var scrolled;
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        
        if(scrolled > height_first_block-1){
            $(".header").css({"background": "#fff"});
            if ($(window).width() >= '576'){
                $(".header__language").css({"color": "black", "font-weight": "700"}); // Для мобильных устройств отключаем
                $(".header__link").removeClass("header__link_white");    
            } 
        }
        if(height_first_block-1 > scrolled){
            $(".header").css({"background": "transparent"});
            if ($(window).width() >= '576'){
                $(".header__language").css({"color": "white", "font-weight": "400"});   
                $(".header__link").addClass("header__link_white");
            }
        }
        if(scrolled + $(window).height() > $(".evolution-buisness__monitor-block").outerHeight() + $(".evolution-buisness__monitor-block").offset().top && WindowWidth < 577) {
            setTimeout(() => {
                $(".evolution-buisness__monitor-block").children(".evolution-buisness__text").addClass("evolution-buisness__text_active");
            }, 500);
        }
    });
    // Увеличивает header при нажатии на бургер кнопку
    var WindowWidth = $(window).width();
    let vh = window.innerHeight * 0.01;       // Код для шапки мобильных    
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.onresize = function(){
        WindowWidth = $(window).width();
        vh = window.innerHeight * 0.01;       // Код для шапки мобильных    
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    if (WindowWidth < 576 ) {
        $(".header__toggle-container").on("click touch", function(){
            var sign = $(this).hasClass("header__button-toggle_active") ? 1 : -1;
            if (sign == -1) {
                console.log("открыли")
                $('.dark-wrapper_contacts').css({'margin-top':'260px','height':'100%'});
                $('.dark-wrapper_uslugi').css({'margin-top':'260px','height':'100%'});
                $('.header').css('height','260px');
                $(this).addClass("header__button-toggle_active");
            } else {
                console.log("закрыли")
                $('.perfomance_page-first').animate({marginTop: 0}, 500);
                $('.dark-wrapper_uslugi').css('margin-top','60px');
                $('.dark-wrapper').css({'height':'0'});
                $(".header").css('height','60px');
                $(this).removeClass("header__button-toggle_active");
            }
        });
    }
        

    $(window).on('load', function() {
        var SliderLeft = $(".uslugi-home__slider").offset().left;
        let sliderWidth = WindowWidth - SliderLeft;
        $('.uslugi-home__slider').css('width', sliderWidth) // Ширина слайдера в услугах
    });   
    $(window).resize(function() {   
        WindowWidth = $(window).width();      
        SliderLeft = $(".uslugi-home__slider").offset().left; // Отступ слайдера от левого края документа
        sliderWidth = WindowWidth - SliderLeft;
        $('.uslugi-home__slider').css('width', sliderWidth) // Ширина слайдера в услугах
        $(".uslugi-home__header").css({'background':'linear-gradient(to right, #000000 '+ SliderLeft +'px,#ffffff '+ SliderLeft +'px)','-webkit-background-clip':'text', '-webkit-text-fill-color':'text'});
    });
    $('.uslugi-home__arrow').on('click', function(){
        $(this).css({'opacity':'0','transform':"translateX(-20vw)"});
        $(".uslugi-home__header").css({'opacity':'0','transform':"translateX(-70vw)"});
        setTimeout(() => { 
            $(".uslugi-home__header").css('width','0');
            $(".slider__button_left").css({'opacity':'1','height':"auto"});
        }, 1000);
        $(".uslugi-home__slider").animate({left:0, width: WindowWidth}, 1000);
    });
    let countSlider = 0, sliderPos = 0;
    $(".slider__button_right").on('click',function(){
        if(countSlider < 2){
            $(".slider__block_scaled").removeClass('slider__block_scaled');
            countSlider++;
            if(WindowWidth < 576){
                sliderPos += 58;
            } else {
                sliderPos += 20;
            }
            $(".slider__block").css({'right': sliderPos +'vw'});
            $(".slider__block").eq(countSlider+1).addClass('slider__block_scaled');
        }
        console.log(countSlider);

    }); 
    $(".slider__button_left").on('click',function(){
        if(countSlider > -1){
            $(".slider__block_scaled").removeClass('slider__block_scaled');
            countSlider--;
            if(WindowWidth < 576){
                sliderPos -= 58;
            } else {
                sliderPos -= 20;
            }
            $(".slider__block").css({'right': sliderPos +'vw'});
            $(".slider__block").eq(countSlider+1).addClass('slider__block_scaled');
        }
        console.log(countSlider);
    }); 


    $(".nav-realization__slider").css('display', 'none');
    $(".realization_active").parent().css({'background':'#17171b','z-index':'10'});
    $(".realization_active").next().css({'display':'grid','color':'#8d8d8d'});
    $(".realization_active").prev().css('color', '#fff');
    function realization_func(arg) { // Создали функцию которая для развёртки блока в секции realization
        if ($(arg).hasClass("realization_active")) {
            $(".realization_active").parent().css({'background':'#fff','z-index':'0'});
            $(".realization_active").prev().css('color', '#000');
            $(".realization_active").next().slideUp(500);
            $(".realization_active").removeClass('nav-realization__button_active');
            $(".realization_active").removeClass('realization_active');
          }
           else {
            $(arg).addClass('nav-realization__button_active');  
            $(".realization_active").parent().css({'background':'#fff','z-index':'0'});
            $(".realization_active").prev().css('color', '#000');   
            $(".realization_active").next().slideUp(700);
            $(".realization_active").removeClass('nav-realization__button_active');
            $(".realization_active").removeClass('realization_active');
            $(arg).addClass("realization_active"); 
            $(".realization_active").prev().css('color', '#fff');
            $(arg).parent().css({'background':'#17171b','z-index':'10'});   
            $(arg).next().slideDown(500).css('color','#8d8d8d');
            $(".realization_active").next().css({'display':'grid'});
          }  
    }
    $(".nav-realization__header").on('click', function() {
      var foo = $(this).next();
      realization_func(foo);
    });
    $(".nav-realization__button").on('click', function(e) {
        e.preventDefault();
        var foo = $(this);
        realization_func(foo);
    });
});




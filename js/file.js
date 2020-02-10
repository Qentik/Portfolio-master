
// var images = document.images, images_total_count = images.length, images_loaded_count = 0, perc_display = $(".main-preloader__loader");
// // for(var i=0;i<images_total_count;i++){
// //     image_clone = new Image();
// //     image_clone.onload = image_loaded;
// //     image_clone.onerror = image_loaded;
// //     image_clone.src = images[i].src;
// // };

$("html").css('overflow','hidden');
document.body.onload = function(){
    setTimeout(() => {
        $('.main-preloader__loader').addClass('climax');
        setTimeout(() => {
            $('.main-preloader').fadeOut(800);
            $("html").css('overflow','auto')
        }, 1100);
    }, 200);
};

// function image_loaded(){
//     images_loaded_count++;
//     perc_display.html((((100/images_total_count)*images_loaded_count) << 0)+'%');
//     // if(images_loaded_count >= images_total_count){
//     //     setTimeout(() => {
//     //         $('.main-preloader').fadeOut(500);
//     //     }, 2000);
//     // }
// }

$( document ).ready(function() {
    $('.flowing-scroll').on( 'click', function(){ 
        var el = $(this);
        var dest = el.attr('href'); // получаем направление
        if(dest !== undefined && dest !== '') { // проверяем существование
            $('html').animate({ 
                scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
            }, 1000 // скорость прокрутки
            );
        }
        return false;
    });
    $('.logo__img, .logo__text_1, .logo__text_2').on( 'click', function(){ 
        location.href = "index.html";
    });
    //создаем JQuery функцию, которая будет подгружать изображения в буфер
    jQuery.preloadImages = function(){
        for(var i = 0; i < arguments.length; i++){
            jQuery("<img>").attr("src", arguments[ i ]);
        }
    };
    // Бургер кнопка 
    $(".headers__hamburger").on("click touch", function(){
        let MenuBurger = $(this);
        if (MenuBurger.hasClass("headers__hamburger_active")) {
            $(".headers").children("li").removeClass("headers__link_active"); 
            $(".headers").children("li").each(function(index){
                index++;
                $(this).removeClass("headers__link_active" + index);
            }); 
            MenuBurger.removeClass("headers__hamburger_active");
        } else {
            MenuBurger.addClass("headers__hamburger_active");
            $(".headers").children("li").addClass("headers__link_active"); 
   
            $(".headers").children("li").each(function(index){
                index++;
                $(this).addClass("headers__link_active" + index);

            }); 
        }
    });
    
    $(".header__tapper").on("click touch", function(){
        let MenuBurger = $(".header__links");
        if (MenuBurger.hasClass("header__links_active")) {
            MenuBurger.children("li").removeClass("header__link_active"); 
            MenuBurger.removeClass("header__links_active");
        } else {
            MenuBurger.addClass("header__links_active");
            MenuBurger.children("li").addClass("header__link_active"); 
        }
    });
    

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
    function PreCube() {
        var cnst = 'rotateY(-45deg) rotateX(-20deg) rotateZ(20deg) ';
        $(".cube17").css('transform', cnst + 'translate3d(160px,59px,60px)');
        $(".cube6").css('transform', cnst + 'translate3d(159px,59px,0)');
        $(".cube7").css('transform', cnst + 'translate3d(159px,0,0)');
        $(".cube8").css('transform', cnst + 'translate3d(159px,-59px,0)');
    }
    function PrePreCube() {
        var cnst = 'rotateY(-45deg) rotateX(-20deg) rotateZ(20deg) ';
        $(".cube").css('transform', cnst + 'translate3d(-59px,59px,0)');
        $(".cube1").css('transform', cnst + 'translate3d(-59px,0,0)');
        $(".cube2").css('transform', cnst + 'translate3d(-59px,-59px,0)');
        $(".cube3").css('transform', cnst + 'translate3d(0,59px,0px)');
        $(".cube4").css('transform', cnst + 'translate3d(0,0,0)');
        $(".cube5").css('transform', cnst + 'translate3d(0px,-59px,0)');
        $(".cube6").css('transform', cnst + 'translate3d(59px,59px,0)');
        $(".cube7").css('transform', cnst + 'translate3d(59px,0,0)');
        $(".cube8").css('transform', cnst + 'translate3d(59px,-59px,0)');
        $(".cube9").css('transform', cnst + 'translate3d(-58px,59px,60px)');
        $(".cube10").css('transform', cnst + 'translate3d(-56px,57px,120px)');
        $(".cube11").css('transform', cnst + 'translate3d(-59px,0,59px)');
        $(".cube12").css('transform', cnst + 'translate3d(-58px,-1px,118px)');
        $(".cube13").css('transform', cnst + 'translate3d(-59px,-59px,59px)');
        $(".cube14").css('transform', cnst + 'translate3d(-59px,-59px,117px)');
        $(".cube15").css('transform', cnst + 'translate3d(0,60px,59px)');
        $(".cube16").css('transform', cnst + 'translate3d(1px,59px,118px)');
        $(".cube17").css('transform', cnst + 'translate3d(60px,59px,60px)');
        $(".cube18").css('transform', cnst + 'translate3d(56px,62px,114px)');
        $(".cube19").css('transform', cnst + 'translate3d(0,0,60px)');
        
    }
    function HideBlocks1() {
        var cnst = 'rotateY(-45deg) rotateX(-20deg) rotateZ(20deg) ';
        $(".cube17").css('transform', cnst + 'translate3d(60px,59px,60px)');
        $(".cube6").css('transform', cnst + 'translate3d(59px,59px,0)');
        $(".cube7").css('transform', cnst + 'translate3d(59px,0,0)');
        $(".cube8").css('transform', cnst + 'translate3d(59px,-59px,0)');
    }
    function HideBlocks2() {
        var cnst = 'rotateY(-45deg) rotateX(-20deg) rotateZ(20deg) ';
        $(".cube13").css('transform', cnst + 'translate3d(-59px,-59px,59px)');
        $(".cube14").css('transform', cnst + 'translate3d(-59px,-59px,117px)');
        $(".cube12").css('transform', cnst + 'translate3d(-58px,-1px,118px)');
    }
    function HideBlocks3() {
        var cnst = 'rotateY(-45deg) rotateX(-20deg) rotateZ(20deg) ';
        $(".cube5").css('transform', cnst + 'translate3d(0px,-59px,0)');
        $(".cube2").css('transform', cnst + 'translate3d(-59px,-59px,0)');
        $(".cube1").css('transform', cnst + 'translate3d(-59px,0,0)');
    }
    function HideBlocks4() {
        var cnst = 'rotateY(-45deg) rotateX(-20deg) rotateZ(20deg) ';
        $(".cube10").css('transform', cnst + 'translate3d(-56px,57px,120px)');
        $(".cube16").css('transform', cnst + 'translate3d(1px,59px,118px)');
        $(".cube18").css('transform', cnst + 'translate3d(56px,62px,114px)');
    }
    function HideBlocks5() {
        var cnst = 'rotateY(-45deg) rotateX(-20deg) rotateZ(20deg) ';
        $(".cube19").css({'transform': cnst + 'translate3d(0,0,60px)','width':'70px','height':'70px'});
        $(".cube19-side-front").css({'transform': 'translateZ(35px)'});
        $(".cube19-side-right").css({'transform': 'rotateY(90deg) translateZ(35px)'});
        $(".cube19-side-top").css({'transform': 'rotateX(90deg) translateZ(35px)'});
    }
    // Сокращаю HTML код 
    function repeat_cube() {
        for(var i=1; i<20;i++){
            $(".container").append('<div class="cube' + i + '">' +
            '<div class="cube' + i + '-side cube' + i + '-side-front"></div>' +
            '<div class="cube' + i + '-side cube' + i + '-side-right"></div>' +
            '<div class="cube' + i + '-side cube' + i + '-side-top"></div>' +        
          '</div>');
        };
    }
    repeat_cube();
    $(".cube_animation_1").on('click', function(e) {
        e.preventDefault();
        PreCube();
        HideBlocks2();
        HideBlocks3();
        HideBlocks4();
        HideBlocks5();
    })
    // Анимация куба при клике на подзаголовки
    $(".cube_animation_2").on('click', function(e) {
        e.preventDefault();
        var cnst = 'rotateY(-45deg) rotateX(-20deg) rotateZ(20deg) ';
        $(".cube13").css('transform', cnst + 'translate3d(-118px,-59px,59px)');
        $(".cube12").css('transform', cnst + 'translate3d(-118px,-1px,118px)');
        $(".cube14").css('transform', cnst + 'translate3d(-178px,-59px,117px)');
        HideBlocks1();
        HideBlocks3();
        HideBlocks4();
        HideBlocks5();
    })
    $(".cube_animation_3").on('click', function(e) {
        e.preventDefault();
        var cnst = 'rotateY(-45deg) rotateX(-20deg) rotateZ(20deg) ';
        $(".cube5").css('transform', cnst + 'translate3d(0px,-129px,-100px)');
        $(".cube2").css('transform', cnst + 'translate3d(-59px,-129px,-100px)');
        $(".cube1").css('transform', cnst + 'translate3d(-59px,-70px,-100px)');
        HideBlocks1();
        HideBlocks2();
        HideBlocks4();
        HideBlocks5();
    })
    $(".cube_animation_4").on('click', function(e) {
        e.preventDefault();
        var cnst = 'rotateY(-45deg) rotateX(-20deg) rotateZ(20deg) ';
        $(".cube10").css('transform', cnst + 'translate3d(-56px,119px,120px)');
        $(".cube16").css('transform', cnst + 'translate3d(1px,179px,118px)');
        $(".cube18").css('transform', cnst + 'translate3d(56px,123px,114px)');
        HideBlocks1();
        HideBlocks2();
        HideBlocks3();
        HideBlocks5();
    })
    $(".cube_animation_5").on('click', function(e) {
        e.preventDefault();
        var cnst = 'rotateY(-45deg) rotateX(-20deg) rotateZ(20deg) ';
        $(".cube19").css({'transform': cnst + 'scaleX(1.7255) scaleY(1.7255) scaleZ(1.7255) translate3d(3px,-6px,35px)'});
        HideBlocks1();
        HideBlocks2();
        HideBlocks3();
        HideBlocks4();
    })
    var marker = true;
    function count() {
        setTimeout(PrePreCube, 500);
        setTimeout(PreCube, 2000);
        marker = false;
    }

        $(window).on('load scroll', function() {
            var height_first_block = $("div.perfomance_page").outerHeight(true);
            var height_end_block = $(".end_block").outerHeight(true);
            height_end_block = $("div.perfomance_page").outerHeight(true) + $("div.parallax").outerHeight(true) + $("div.wrap-our_works").outerHeight(true) + $("div.wrap-achievement_block").outerHeight(true);
            var scrolled;
            scrolled = window.pageYOffset || document.documentElement.scrollTop;
            if(scrolled > height_first_block-1){
                $(".header_bad").css({"background": "#fff"});
    
                if ($(window).width() >= '576'){
                    $(".language").css({"color": "black", "font-weight": "700"}); // Для мобильных устройств отключаем
                    $(".links-color").css({"color": "black", "font-weight": "700"}); // черный цыет header_bad при прокрутке
                } 
            }
            if(height_first_block-1 > scrolled){
                $(".header_bad").css({"background": "transparent"});
                $(".language").css({"color": "white", "font-weight": "400"});   
                $(".links-color").css({"color": "white", "font-weight": "400"});      
            }
            if(scrolled > height_end_block-85) {
                if(marker) count();
            }
            if(scrolled + $(window).height() > $(".evolution-buisness__monitor-block").outerHeight(true) && WindowWidth < 577) {
                $(".evolution-buisness__monitor-block").children(".evolution-buisness__text").addClass("evolution-buisness__text_active");
            }
        });

    //          -----------------------------------------------Uslugi-------------------------------------------------

    // $.preloadImages("../img/home/1.jpg", "../img/home/2.jpg", "../img/home/3.png", "../img/home/4.png", "../img/uslugi/realization/Slice_1.png");  //указываем путь к изображению, которое нужно подгрузить
    let currentIndent = $(".uslugi-home__slider").offset().left;
    let IndentPercent; // отступ слайдера в процентах (для изменения окна браузера)
    var flag = 0;
    var SliderLeft = $(".uslugi-home__slider").offset().left;
    var headerPadding = $(".uslugi-home__header").css('padding-left'); // Отступ заголовка
    var pointIndent = SliderLeft - ($(".slider__button").offset().left - $(".uslugi-home__header").outerWidth(true));  // Контрольная точка анимаций слайдера
    var RightContainment = $(window).width() / 2;
    var WindowWidth = $(window).width();
    var LeftContainment = $(window).width() - $(".uslugi-home__slider").outerWidth();
    var SliderIndent = $(".uslugi-home__slider").outerWidth() / 2 - RightContainment;
    if (WindowWidth < 577) {
        $(".uslugi-home__slider").draggable({  //Делает слайдер перетаскиваемым
            axis:'x', 
            containment: [LeftContainment, 0, WindowWidth * 0.8, 342]
        });
    } else {
        $(".uslugi-home__slider").draggable({  //Делает слайдер перетаскиваемым
            axis:'x', 
            containment: [LeftContainment, 0, RightContainment, 342]
        });
    }

    $(window).resize(function() {   
        RightContainment = $(window).width() / 2;
        LeftContainment = $(window).width() - $(".uslugi-home__slider").outerWidth();
        $(".uslugi-home__slider").draggable({  
            containment: [LeftContainment, 0, RightContainment, 0]
        });
        SliderLeft = $(".uslugi-home__slider").offset().left;
        SliderIndent = $(".uslugi-home__slider").outerWidth() / 2 - RightContainment;
        IndentPercent = currentIndent / WindowWidth;
        WindowWidth = $(window).width();      
        // $(".uslugi-home__header").animate({left: IndentPercent * WindowWidth}, 1000);
    });

    $(".slider__button_right").on('click',function(){
        $(".uslugi-home__slider").animate({left: SliderLeft}, 1000);
        if (WindowWidth < 577) {
            $(".uslugi-home__button").animate({bottom: "110px"}, 800);
        } else {$(".uslugi-home__button").animate({bottom: "10vw"}, 800);}
        $('.slider__button_left').animate({opacity: "1"}, 500).fadeIn(500); // Появление стрелки
        $(".uslugi-home__header").animate({opacity: "1", paddingLeft: headerPadding}, 800).fadeIn(800); // Появление заголовка
        $(".uslugi-home__header").css({'background':'linear-gradient(to right, #000000 '+ SliderLeft +'px,#ffffff '+ SliderLeft +'px)','-webkit-background-clip':'text', '-webkit-text-fill-color':'text'});
        setTimeout(function () {
            flag = 0;
        }, 1000);
    }); 
    $(".slider__button_left").on('click',function(){
        $(".uslugi-home__slider").animate({left: -SliderIndent}, 1000);
        $(this).animate({opacity: "0"}, 500).fadeOut(500); // Исчезновение стрелки
        $(".uslugi-home__header").css('transition','0s').animate({opacity: "0", paddingLeft: "0"}, 400).fadeOut(400);
        if (WindowWidth < 577) {
            $(".uslugi-home__button").animate({bottom: "20px"}, 500);
        } else {$(".uslugi-home__button").animate({bottom: "1.8vw"}, 500);}
        setTimeout(function () {
            flag = 1;
        }, 1000);
    }); 
    $("body").mousemove(function(){
        currentIndent = $(".uslugi-home__slider").offset().left; // Отступ слайдера от левого края документа
        if (currentIndent < pointIndent && flag == 0) {
            flag = 1;
            $('.slider__button_left').animate({opacity: "0"}, 500).fadeOut(500);  // Исчезновение стрелки
            $(".uslugi-home__header").css('transition','0s').animate({opacity: "0", padding: "0"}, 400).fadeOut(400); // Свёртка заголовка
            if (WindowWidth < 577) {
                $(".uslugi-home__button").animate({bottom: "20px"}, 500);
            } else {$(".uslugi-home__button").animate({bottom: "1.8vw"}, 500);}
        } 
        if (currentIndent > pointIndent && flag == 1) {
            flag = 0;
            if (WindowWidth < 577) {
                $(".uslugi-home__button").animate({bottom: "110px"}, 400);
            } else {$(".uslugi-home__button").animate({bottom: "10vw"}, 400);}
            $('.slider__button_left').animate({opacity: "1"}, 500).fadeIn(500); // Появление стрелки
            $(".uslugi-home__header").animate({opacity: "1", paddingLeft: headerPadding}, 400).fadeIn(400); // Появление заголовка
        }
        if (flag == 0)
            $(".uslugi-home__header").css({'background':'linear-gradient(to right, #000000 '+ currentIndent +'px,#ffffff '+ currentIndent +'px)','-webkit-background-clip':'text', '-webkit-text-fill-color':'text'});
    });

    $(".nav-realization__slider").css('display', 'none');
    $(".realization_active").parent().css({'background':'#17171b','z-index':'10'});
    $(".realization_active").next().css({'display':'grid','color':'#8d8d8d'});
    $(".realization_active").prev().css('color', '#fff');
    function realization_func(arg) { // Создали функцию которая для развёртки блока в секции realization
        if ($(arg).hasClass("realization_active")) {
            $(".realization_active").parent().css({'background':'#fff','z-index':'0'});
            $(".realization_active").prev().css('color', '#000');
            $(".realization_active").next().slideUp(700);
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
            $(arg).next().slideDown(700).css('color','#8d8d8d');
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




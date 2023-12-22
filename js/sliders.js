$(function() {

    /* Главный баннер */
    $('.s1__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    });

    /* Рекомендуємо */
    $('.s6-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: true,
        fade: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            }
        ]
    });

    /* Слайдер Категорий (страница каталога) */
    if (window.innerWidth > 767) {
        $('.s9-slider').slick({
            infinite: false,
            slidesToShow: 8,
            slidesToScroll: 8,
            dots: false,
            arrows: true,
            fade: false,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false
                    }
                }
            ]
        });
    }

    /* Слайдеры карточки товара */
    $('.s11-slider__for').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.s11-slider__nav',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    asNavFor: false,
                    infinite: true
                }
            }
        ]
    });
    if (window.innerWidth > 767) {
        $('.s11-slider__nav').slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.s11-slider__for',
            dots: false,
            arrows: true,
            centerMode: false,
            focusOnSelect: true,
            vertical: true
        });
    }




});
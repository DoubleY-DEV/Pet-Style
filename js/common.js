$(function() {

    /* Переключатель языка */
    if (window.innerWidth > 767) {
        $('.h-lang').hover(function() {
            $(this).children('.h-lang__list').stop(true, false).fadeIn();
        }, function() {
            $(this).children('.h-lang__list').stop(true, false).fadeOut();
        });
    } else {
        $('.h-lang__current').on('click', function() {
            $(this).parent().children('.h-lang__list').fadeToggle();
        });
    }

    /* Меню каталога */
    $('.h-nav__item-sub').hover(function() {
        $(this).addClass('h-nav__item-active');
        $(this).children('.h-nav__submenu').stop(true, false).fadeIn(350);
    }, function() {
        $(this).removeClass('h-nav__item-active');
        $(this).children('.h-nav__submenu').stop(true, false).fadeOut(350);
    });

    /* Кнопка "Читать дальше" */
    $('.s7-info__more').on('click', function() {
        var open = $(this).data('open');
        var close = $(this).data('close');
        if($(this).parent().parent().hasClass('s7-info-open')) {
            $(this).parent().parent().removeClass('s7-info-open');
            $(this).text(close);
        } else {
            $(this).parent().parent().addClass('s7-info-open');
            $(this).text(open);
        }
    });

    /* Футер (Вверх) */
    $('.f-up').on('click', function() {
        $("body, html").animate({
            scrollTop: 0
        }, 1000);
    });

    /* Кнопка (тригер) "Дивитись всі" - мобильная версия */
    $('.s3-categorys__link-more').on('click', function() {
        $(this).parent().children('button').trigger('click');
    });
    $('.n-menu__link-catalog').on('click', function() {
        $(this).parent().children('button').trigger('click');
    });

    /* Кнопка (тригер) Бургер меню - мобильная версия */
    $('.h-burger').on('click', function() {
        $(this).parent().children('button').trigger('click');
    });

    /* Открытие / закрытие категории фильтра */
    $('.s10-filter__title-toggle').on('click', function() {
        if($(this).hasClass('s10-filter__title-active')) {
            $(this).removeClass('s10-filter__title-active');
            $(this).parent().stop(false, true).children('.s10-filter__toggle').slideUp();
        } else {
            $(this).addClass('s10-filter__title-active');
            $(this).parent().stop(false, true).children('.s10-filter__toggle').slideDown();
        }
        return false;
    });

    /* Сортировка */
    if(window.innerWidth > 767) {
        $('.s10-sort__toggle').hover(function() {
            $(this).children('.s10-sort__list').stop(false, true).fadeIn();
        }, function() {
            $(this).children('.s10-sort__list').stop(false, true).fadeOut();
        });
    } else {
        $('.s10-sort__active').on('click', function() {
            $(this).parent().children('.s10-sort__list').fadeToggle();
            return false;
        });
    }

    /* Количество товара (карточка товара) */
    $('.s11-counter__button').on('click', function() {

        var count = $(this).parent().children('input').val();
        var min = $(this).parent().children('input').attr('min');
        var max = $(this).parent().children('input').attr('max');
        console.log(count);
        console.log(min);
        console.log(max);

        var name = $(this).attr('name');

        console.log(name);
        if(name == 'plus') {
            if(max == undefined || max > count) {
                count++;
                $(this).parent().children('input').val(count);
            }
        } else if(name == 'minus') {
            if(min == undefined || min < count) {
                count--;
                $(this).parent().children('input').val(count);
            }
        }
        return false;
    });

    /* faq (карточка товара) */
    $('.s12-faq__top').on('click', function() {
        if($(this).hasClass('s12-faq__top-active')) {
            var char = $(this).children('.s12-faq__char').data('close');

            $(this).removeClass('s12-faq__top-active');
            $(this).children('.s12-faq__char').text(char);
            $(this).parent().children('.s12-faq__content').slideUp();
        } else {
            var char = $(this).children('.s12-faq__char').data('open');

            $(this).addClass('s12-faq__top-active');
            $(this).children('.s12-faq__char').text(char);
            $(this).parent().children('.s12-faq__content').slideDown();
        }
    });

    /* Табы (карточка товара) */
    $('.s13-tabs__link').on('click', function() {
        var id = $(this).data('id');
        $('.s13-content__area').hide();
        $('.s13-content__area[data-id="' + id + '"]').show();
        return false;
    });

    /* + 380 (__) __-__-___ */
    $('.phone').inputmask("+ 380 (99) 99-99-999");

    Fancybox.bind();

});
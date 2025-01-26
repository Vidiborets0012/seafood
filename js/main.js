$(function () {
    
    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icon-prev.svg" alt="icon-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icon-next.svg" alt="icon-next"></button>',
        fade: true
    });

    $('.product-name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product-content',
        prevArrow: '<button type="button" class="slick-product-prev"><img src="images/product-icon-prev.svg" alt="icon-prev"></button>',
        nextArrow: '<button type="button" class="slick-product-next"><img src="images/product-icon-next.svg" alt="icon-next"></button>',
        vertical: true
        
    });
    $('.product-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product-name',
        fade: true,
        arrows: false
    });
});
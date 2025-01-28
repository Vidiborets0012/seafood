$(function () {
    
    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icon-prev.svg" alt="icon-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icon-next.svg" alt="icon-next"></button>',
        fade: true,
        responsive: [
            {
              breakpoint: 361,
                settings: {
                    dots: false,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000
                
                }
            }
        
        ]
    });

    $('.product-name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product-content',
        prevArrow: '<button type="button" class="slick-product-prev"><img src="images/product-icon-prev.svg" alt="icon-prev"></button>',
        nextArrow: '<button type="button" class="slick-product-next"><img src="images/product-icon-next.svg" alt="icon-next"></button>',
        vertical: true,
        responsive: [
            {
                breakpoint: 931,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    arrows: false,
                    dots: true

                }
            },
            {
                breakpoint: 601,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }

            }
        
        ]
        
    });
    $('.product-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product-name',
        fade: true,
        arrows: false
    });

    $('.menu-btn').on('click', function () { 

        $('.menu-list').toggleClass('menu-list-active');
    });
});
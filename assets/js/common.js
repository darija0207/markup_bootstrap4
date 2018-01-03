$(document).on('ready', function () {

    //--------------------WOW animate
    var wow = new WOW(
        {mobile: false}
    );
    wow.init();

    //-----------------------Fixed top menu
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });
    //----------------------Active row

    var checkNumber = 0;
    var checkEdit = 0;

    $('.toggle-check-input').each(function() {
        $(this).attr("id", "toggle_check_" + checkNumber);
        var checkID = $('#toggle_check_' + checkNumber);
        $(document).on('click', '.toggle-check', function () {
            if (checkID.is(':checked')) {
                $('.additional-text').slideDown();
            } else {
                $('.additional-text').slideUp();
            }
        });
        checkNumber ++;
    });


    $('.cart-row').each(function () {
        $(this).attr("id", "edit_row_" + checkEdit);
        var editID = $('#edit_row_' + checkEdit);
        var update_row = function () {
            editID.find(".q-sel, .value-units, .toggle-check-input").toggleClass('un-active')
                .prop("disabled", !$('.edit').prop('checked'));
            editID.toggleClass('active');
            editID.find('.hide-row').slideToggle();
            editID.find('.toggle-check-text, .toggle-check').toggleClass('hidden');
        };
        editID.find('.edit').change(update_row);
        checkEdit ++;
    });

    $(window).load(windowSize);
    $(window).resize(windowSize);

}).on('click', '.mobile-button',  function (e) {
        e.preventDefault();
        $(this).addClass('opened');
        $('.top-navigate').addClass('show');
        $('body').addClass('overflow');
    })
    .on('click', '.mobile-button.opened',  function (e) {
        e.preventDefault();
        $(this).removeClass('opened');
        $('.top-navigate').removeClass('show');
        $('body').removeClass('overflow');
    })
    .on('click', '.search-link', function (e) {
        e.preventDefault();
        $(this).addClass('active');
        $('.toggle-search').addClass('open-search');
    })
    .on('click', '.close-search', function (e) {
        e.preventDefault();
        $('.toggle-search').removeClass('open-search');
        $('.search-link').removeClass('active');
    })
    .on('click', '.parent > a, .menu-item-has-children > a', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('open');
        $(this).next('.sub-menu').slideToggle();
    })
    .on('click', '.mobile-title', function () {
        $(this).next('.left-nav').slideToggle();
    })
    .on('click', '.toggle-area', function (e) {
        e.preventDefault();
       $(this).parent().toggleClass('custom-height');
    })
    //-----------Modal Window ( DEVELOPER CHANGE )
    .on('click', '.photo-image', function (e) {
        e.preventDefault();
        $('.lightbox-dialog').animate({opacity: 1, top: '0'}, 100,
            function () {
                $(this).css('visibility', 'visible');
                $('body').addClass('overflow');
            });
    })
    .on('click', ' .modal-close', function (e) {
        e.preventDefault();
        $('.lightbox-dialog')
            .animate({opacity: 0, top: '2%'}, 100,
                function () {
                    $(this).css('visibility', 'hidden');
                }
            );
        $('body').removeClass('overflow');
    });


function windowSize(){
    //--------------Scroll TO
    if ($(window).width() > 768) {
        $('a[href^="#"]').bind('click.smoothscroll', function (e) {
            e.preventDefault();
            var target = this.hash,
                $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });
    }
    if ($(window).width() < 768) {
        $('header').removeClass('animated');
    } else {
        $('header').addClass('animated');
    }
    if ($(window).width() < 992) {
        $('.col-title').addClass('mobile-title');
    } else {
        $('.col-title').removeClass('mobile-title');
    }

    var header_h = $('#header').height();
    $('.main-container, .main-column').css('padding-top', header_h);
}

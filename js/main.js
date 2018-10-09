$(document).ready(function () {
    $(window).bind('scroll', function () {
        var navHeight = $(window).height() + 230;
        if ($(window).scrollTop() > navHeight) {
            $('.menu-header').addClass('sticky-menu');
        }
        else {
            $('.menu-header').removeClass('sticky-menu');
        }
    });

    var scrollTop = $(".scroll-to-top");

    $(window).scroll(function () {
        // declare variable
        var topPos = $(this).scrollTop();

        // if user scrolls down - show scroll to top button
        if (topPos > 1000) {
            $(scrollTop).css("opacity", "1");

        } else {
            $(scrollTop).css("opacity", "0");
        }

    });
    //Click event to scroll to top
    $(scrollTop).click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
        return false;

    });

    var message = $("#message").position();
    var business = $("#business").position();
    var corporate = $("#corporate").position();
    var recruit = $("#recruit").position();
    var contact = $("#contact").position();
    var top = $("#top").position();

    $('.link-message').click(function () {
        $('html, body').animate({
            scrollTop: message.top
        }, 2000);
        return false;

    });

    $('.link-business').click(function () {
        $('html, body').animate({
            scrollTop: business.top
        }, 2000);
        return false;

    });

    $('.link-corporate').click(function () {
        $('html, body').animate({
            scrollTop: corporate.top
        }, 2000);
        return false;

    });

    $('.link-recruit').click(function () {
        $('html, body').animate({
            scrollTop: recruit.top
        }, 2000);
        return false;

    });

    $('.link-contact').click(function () {
        $('html, body').animate({
            scrollTop: contact.top
        }, 2000);
        return false;

    });

    $('.link-top').click(function () {
        $('html, body').animate({
            scrollTop: top.top
        }, 2000);
        return false;

    });

});

function anchorTab(control) {
    $('.menu-item').removeClass('active');
    control.closest('.menu-item').addClass('active');
}

$(function(){
    $(".js-icon-movie").on({
        mouseenter: function(){
            $(this).find('.box-business-img').attr('src','images/icon-movie-green.png');
        },
        mouseleave: function(){
            $(this).find('.box-business-img').attr('src','images/icon-movie.png');
        }
    }); 

    $(".js-icon-pager").on({
        mouseenter: function(){
            $(this).find('.box-business-img').attr('src','images/icon-paper-green.png');
        },
        mouseleave: function(){
            $(this).find('.box-business-img').attr('src','images/icon-paper.png');
        }
    });
    
    $(".js-icon-web").on({
        mouseenter: function(){
            $(this).find('.box-business-img').attr('src','images/icon-web-green.png');
        },
        mouseleave: function(){
            $(this).find('.box-business-img').attr('src','images/icon-web.png');
        }
    });
    
    $(".js-icon-other").on({
        mouseenter: function(){
            $(this).find('.box-business-img').attr('src','images/icon-other-green.png');
        },
        mouseleave: function(){
            $(this).find('.box-business-img').attr('src','images/icon-other.png');
        }
    });

    $(".js-icon-house").on({
        mouseenter: function(){
            $(this).find('.box-business-img').attr('src','images/icon-house-green.png');
        },
        mouseleave: function(){
            $(this).find('.box-business-img').attr('src','images/icon-house.png');
        }
    });
});
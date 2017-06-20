$(function () {
    impress().init();
    $("#next").click(function () {
        impress().next();
    });
    $("#prev").click(function () {
        impress().prev();
    });
    $('.ruby').css('opacity', 0.1);
    window.addEventListener('impress:stepenter', function () {
        $('.ruby.active').animate({
            'opacity': 1
        });
    });
    window.addEventListener('impress:stepleave', function () {
        $('.ruby.past').animate({
            'opacity': 0.1
        });
    });
    window.addEventListener('impress:stepenter', function () {
        $('.ruby.active p img').addClass('animated bounceInDown');
    });
    window.addEventListener('impress:stepenter', function () {
        $('.ruby.past p img').removeClass('animated bounceInDown');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#lists.active p.text-center').addClass('animated tada');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#lists.past p.text-center').removeClass('animated tada');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#lists.future p.text-center').removeClass('animated tada');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#coding.active p.tittle').addClass('animated bounceIn');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#coding.past p.tittle').removeClass('animated bounceIn');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#coding.future p.tittle').removeClass('animated bounceIn');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#stacks.active p.tittle').addClass('animated bounceInRight');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#stacks.past p.tittle').removeClass('animated bounceInRight');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#stacks.future p.tittle').removeClass('animated bounceInRight');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#product.active p.tittle').addClass('animated bounceInLeft');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#product.past p.tittle').removeClass('animated bounceInLeft');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#product.future p.tittle').removeClass('animated bounceInLeft');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#design.active p.tittle').addClass('animated bounceInUp');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#design.past p.tittle').removeClass('animated bounceInUp');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#design.future p.tittle').removeClass('animated bounceInUp');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#saltfish.active p.tittle').addClass('animated bounceInDown');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#saltfish.past p.tittle').removeClass('animated bounceInDown');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#saltfish.future p.tittle').removeClass('animated bounceInDown');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#stacks.animar.active ul li').addClass('animated bounceIn');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#stacks.animar.past ul li').removeClass('animated bounceIn');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#stacks.animar.future ul li').removeClass('animated bounceIn');
    });
    
    window.addEventListener('impress:stepenter', function () {
        $('#success_map.active div.map_bg').addClass('animated pulse');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#success_map.past div.map_bg').removeClass('animated pulse');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#success_map.future div.map_bg').removeClass('animated pulse');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#success_map.active div.map_bg div.california').delay(1000).queue(function (next) {
            $(this).addClass("scaleOne");
            next();
        });
    });
    window.addEventListener('impress:stepenter', function () {
        $('#success_map.active div.map_bg div.atlanta').delay(1200).queue(function (next) {
            $(this).addClass("scaleOne");
            next();
        });
    });
    window.addEventListener('impress:stepenter', function () {
        $('#success_map.active div.map_bg div.baires').delay(1400).queue(function (next) {
            $(this).addClass("scaleOne");
            next();
        });
    });
    window.addEventListener('impress:stepenter', function () {
        $('#success_map.active div.map_bg div.tcm').delay(1600).queue(function (next) {
            $(this).addClass("scaleOne");
            next();
        });
    });
    window.addEventListener('impress:stepenter', function () {
        $('#success_map.active div.map_bg div.baires2').delay(1700).queue(function (next) {
            $(this).addClass("scaleOne");
            next();
        });
    });
    window.addEventListener('impress:stepenter', function () {
        $('#success_map.active div.map_bg div.spain').delay(1750).queue(function (next) {
            $(this).addClass("scaleOne");
            next();
        });
    });
    window.addEventListener('impress:stepenter', function () {
        $('#success_map.active div.map_bg div.remoov').delay(1800).queue(function (next) {
            $(this).addClass("scaleOne");
            next();
        });
    });
    window.addEventListener('impress:stepenter', function () {
        $('#success_map.active div.map_bg div.social-volt').delay(1850).queue(function (next) {
            $(this).addClass("scaleOne");
            next();
        });
    });
    window.addEventListener('impress:stepenter', function () {
        $('#success_map.active div.map_bg div.mass').delay(1900).queue(function (next) {
            $(this).addClass("scaleOne");
            next();
        });
    });
    window.addEventListener('impress:stepenter', function () {
        $('#success_map.active div.map_bg div.healthlines').delay(1950).queue(function (next) {
            $(this).addClass("scaleOne");
            next();
        });
    });
    window.addEventListener('impress:stepenter', function () {
        $('#success_map.past div.map_bg div.clients-logos').removeClass('spainMove baires2Move tcmMove bairesMove atlantaMove californiaMove');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#success_map.future div.map_bg div.clients-logos').removeClass('spainMove baires2Move tcmMove bairesMove atlantaMove californiaMove');
    });
    $('#success_map.past').css('opacity', 0);
    window.addEventListener('impress:stepenter', function () {
        $('#success_map.past div.map_bg.active').animate({
            'opacity': 1
        });
    });
    window.addEventListener('impress:stepleave', function () {
        $('#success_map.past div.map_bg.past').animate({
            'opacity': 0
        });
    });
    window.addEventListener('impress:stepenter', function () {
        $('#slogan-finish.present div.drop_box span#drop_down').addClass('animated hinge');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#slogan-finish.past div.drop_box span#drop_down').removeClass('animated hinge');
    });
    window.addEventListener('impress:stepenter', function () {
        $('#slogan-finish.future div.drop_box span#drop_down').removeClass('animated hinge');
    });
});
$(document).ready(function () {
    document.onmousewheel = function () {
        stopWheel();
    }
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', stopWheel, false);
    }

    function stopWheel(e) {
        if (!e) {
            e = window.event;
        }
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.returnValue = false;
    };
});
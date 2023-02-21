$(function(){

    $(".menu-mobile i").click(function(){
        var el = $(this).parent().find('ul');
        el.slideToggle(100);
    });

    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offsetTop = ($(href).offset().top) - 85;

        $('html,body').animate({'scrollTop':offsetTop});

        return false;
    });

});
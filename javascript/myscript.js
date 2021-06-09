$(function(){
    //Animate On Scroll
    AOS.init();
    //Menu Bar Toggle Code
    $('.bar').click(function(){
        $(this).toggleClass('active');
        $('#menu').toggleClass('active');
    });
    
});
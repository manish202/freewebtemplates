$(function(){
    //Make Responsive Sidebar
    let width = $(window).outerWidth();
    if(width < 430){
        $('.fa-arrow-right').addClass('rotate');
        $('.side-bar').addClass('hide');
    }
    //Sidebar Toggle
    $('.fa-arrow-right').click(function(){
        $(this).toggleClass('rotate');
        $('.side-bar').toggleClass('hide');
        $('.dashboard-area').toggleClass('active');
    });
    //add category popup
    $('#add-category').click(function(e){
        e.preventDefault();
        $('#category-popup').addClass('d-flex');
    });
    //hide add category and edit category popup
    $(".popup-box span").click(function(){
        $('#category-popup').removeClass('d-flex');
        $('#edit-category-popup').removeClass('d-flex');
    });
    //edit category popup
    $('.edit-cat').click(function(e){
        e.preventDefault();
        $('#edit-category-popup').addClass('d-flex');
    });
});
$(function(){
    var h=$(this).scrollTop();
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $('.navbar-default').css({'top':'-90px','position':'fixed'});
        }
        else{
            $('.navbar-default').css({'top':'0px','position':'absolute'});
        }
        if(($(this).scrollTop() < h)&&($(this).scrollTop() > 500)){
            $('.navbar-default').addClass('fixed');
        }
        else{
            $('.navbar-default').removeClass('fixed');
        }
       
        h = $(this).scrollTop();
        
    })
})
$(function(){


    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > 20){
            $(".back_to_top i").fadeIn(1000)
        }else{
            $(".back_to_top i").fadeOut(1000)
        }
    });


    $(".back_to_top i").click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 2000);
    });


    //animation scroll js
   var html_body = $('html, body');
   $('nav a').on('click', function () {
       if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
           var target = $(this.hash);
           target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
           if (target.length) {
               html_body.animate({
                   scrollTop: target.offset().top - 0
               }, 1500,);
               return false;
           }
       }
   });
});
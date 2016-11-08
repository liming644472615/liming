$(function(){
    var now=0;
    var next=0;
    $(".imgs").css({left:$(".imgs").width()});
    $(".imgs").eq(0).css({left:0});
    function banners(fx){
        var fx="left"||fx;
        if(fx=="left"){
            next++;
            if(next>=$(".imgs").length){
                next=0;
            }
            $(".imgs").eq(now).css({left:0});
            $(".imgs").eq(next).css({left:$(".imgs").width()});
            $(".imgs").eq(now).animate({left:-$(".imgs").width()});
            $(".imgs").eq(next).animate({left:0});
            $(".imgs").css({left:$(".imgs").width()});
            now=next;
        }
    }
    var t=setInterval(banners,2000);
    $(".banner").mouseover(function(){
        clearInterval(t);
    }).mouseout(function(){
        t=setInterval(banners,2000);
    })
    $(".footnav").click(function(){
        if($(window).width()<=750){
            $(this).next(".error").slideToggle();
        }
    })
})
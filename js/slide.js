$(function(){
    setInterval(function(){
        $("#slide .slidebox").animate({marginLeft:-$('#slide').width()},600,function(){
            $(this).find("li").eq(0).appendTo($(this));
            $(this).css("margin-left",0)
        })
    },3000)
    $("body").on("click",".title .ntitle", function(){
        $(".title .ntitle").addClass("on");
        $(".title .ntitle").siblings().removeClass("on")
        $(".ulbox .nbox").addClass("on");
        $(".ulbox .nbox").siblings().removeClass("on");
    })
    $("body").on("click",".title .gtitle", function(){
        $(".title .gtitle").addClass("on");
        $(".title .gtitle").siblings().removeClass("on")
        $(".ulbox .gbox").addClass("on");
        $(".ulbox .gbox").siblings().removeClass("on");
    })
    $("body").on("click",".nbox li", function(){
        $(".popup").addClass("on");
    })
    $("body").on("click",".popup button",function(){
        $(".popup").removeClass("on")
    })
})


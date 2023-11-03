$(function () {
    $(window).scroll(function () {
        // 定位
        if ($(window).scrollTop() > 56) {
            $("#topguide").addClass("topguidefixed");
            $("#topguide a").addClass("topguidefixed-a");
            $("#topguide-zhuzhan").addClass("topguidefixed-zhuzhan");
            $("#topguide-xiazaiapp").addClass("topguidefixed-xiazaiapp");
            $("#searchbox-input").addClass("topguidefixed-searchbox-input");
        }
        else {
            $("#topguide").removeClass("topguidefixed");
            $("#topguide a").removeClass("topguidefixed-a");
            $("#topguide-zhuzhan").removeClass("topguidefixed-zhuzhan");
            $("#topguide-xiazaiapp").removeClass("topguidefixed-xiazaiapp");
            $("#searchbox-input").removeClass("topguidefixed-searchbox-input");
        }
        if ($(window).scrollTop() > 200) {
            $("#sideguide").addClass("sideguidefixed");
        }
        else {
            $("#sideguide").removeClass("sideguidefixed");
        }
        // 显示所处分区
        if ($(".storey").eq(1).offset().top<($(window).scrollTop()+100)){
            $("#sideguide-list").children().css({"background-color":"white","color":"rgb(33, 33, 33)"});
            len = $("#sideguide-list").children().length;
            now = len-2;
            for (var i=1;i<len;i++){
                if ($(".storey").eq(i).offset().top>=($(window).scrollTop()+100)){
                    now = i-2;
                    break;
                }
                
            }
            $("#sideguide-list").children().eq(now).css({"background-color":"#00a1d7","color":"white"});
        }
        else {
            $("#sideguide-list").children().css({"background-color":"white","color":"rgb(33, 33, 33)"});
        }
    });
});
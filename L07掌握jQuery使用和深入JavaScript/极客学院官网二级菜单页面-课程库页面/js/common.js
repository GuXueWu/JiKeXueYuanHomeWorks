/**
 * Created by naterobinson on 2017/2/17.
 */
$(document).ready(function () {
    $(".nav_with_arrow").mouseover(function () {
        $(this).find("i").css("border-color", "rgb(53, 181, 88)")
            .css("-moz-animation", "rotate 0.5s 1 linear")
            .css("-webkit-animation", "rotate 0.5s 1 linear")
            .css("animation", "rotate 0.5s 1 linear")
            .css("-moz-transform", "rotate(45deg)")
            .css("-webkit-transform", "rotate(45deg)")
            .css("transform", "rotate(45deg)");
        $(this).find("a").css("color", "rgb(53, 181, 88)");
    });

    $(".nav_with_arrow").mouseout(function () {
        $(this).find("i").css("border-color", "#c1c1c1")
            .css("-moz-animation", "")
            .css("-webkit-animation", "")
            .css("-moz-transform", "")
            .css("-webkit-transform", "rotate(-135deg)")
            .css("transform", "rotate(-135deg)");
        $(this).find("a").css("color", "#000");
    });

    $("#nav_college").mouseover(function () {
        $(".college_menu").css("display", "block");

    });

    $("#nav_college").mouseout(function () {
        $(".college_menu").css("display", "none");
    });

    $(".college_menu").mouseover(function () {
        $(".college_menu").css("display", "block");
    });

    $(".college_menu").mouseout(function () {
        $(".college_menu").css("display", "none");
    });

    $("#nav_course").mouseover(function () {
        $(".course_menu").css("display", "block");

    });

    $("#nav_course").mouseout(function () {
        $(".course_menu").css("display", "none");
    });

    $(".course_menu").mouseover(function () {
        $(".course_menu").css("display", "block");
    });

    $(".course_menu").mouseout(function () {
        $(".course_menu").css("display", "none");
    });

    $("#nav_community").mouseover(function () {
        $(".community_menu").css("display", "block");

    });

    $("#nav_community").mouseout(function () {
        $(".community_menu").css("display", "none");
    });

    $(".community_menu").mouseover(function () {
        $(".community_menu").css("display", "block");
    });

    $(".community_menu").mouseout(function () {
        $(".community_menu").css("display", "none");
    });

    $(".app_menu").mouseover(function () {
        $(".app_icon").attr("src", "img/app-icon2.png");
    });
    $(".app_menu").mouseout(function () {
        $(".app_icon").attr("src", "img/app-icon.png");
    });

    $(".search_menu").click(function () {
        $("#search_close").css("display","block");
        $(".left_search_icon").css("display","block");
        $("#search_input").css("display","inline-block");
        $(".search_content").css("display", "block").animate({width: '860px'});
    });

    $("#search_close").click(function () {
        $(this).css("display","none");
        $(".left_search_icon").css("display","none");
        $("#search_input").css("display","none");
        $(".search_content").animate({width: '0px'}).fadeOut(300);
    });

    $(".left_child").mouseover(function () {
        $(".content_left_menu").css("display", "block");
        $(".left_top").css("border-right", "1px solid #DDDDDD");
    });
    $(".left_child").mouseout(function () {
        $(".content_left_menu").css("display", "none");
        $(".left_top").css("border-right", "1px solid rgb(53, 181, 88)");
    });

    $(".content_left_menu").mouseover(function () {
        $(".content_left_menu").css("display", "block");
        $(".left_top").css("border-right", "1px solid #DDDDDD");
    });
    $(".content_left_menu").mouseout(function () {
        $(".content_left_menu").css("display", "none");
        $(".left_top").css("border-right", "1px solid rgb(53, 181, 88)");
    });

    $(".content_top_menu").mouseenter(function () {
        $(this).children(".top_menu").css("display", "block");
    });
    $(".content_top_menu").mouseleave(function () {
        $(this).children(".top_menu").css("display", "none");
    });

    $(".top_menu").mouseenter(function () {
        $(this).css("display", "block");
    });
    $(".top_menu").mouseleave(function () {
        $(this).css("display", "none");
    });

    $("#menu_kuai").click(function () {
        var content_list = jQuery(".content_list > div");
        content_list.each(function (index, value) {
            if (index < 3) {
                $(value).attr("class", "content_item content_item_first_line")
            } else {
                $(value).attr("class", "content_item")
            }
        });
    });
    $("#menu_list").click(function () {
        var content_list = jQuery(".content_list > div");
        content_list.each(function (index, value) {
            $(value).attr("class", "content_item_list")
        });
    });

    $(".content_item").mouseenter(function () {
        $(this).children(".cursor_bg_cover_bg").animate({
            opacity:1
        },250);
    });
    $(".content_item").mouseleave(function () {
        $(this).children(".cursor_bg_cover_bg").animate({opacity:0},250);
    });

});
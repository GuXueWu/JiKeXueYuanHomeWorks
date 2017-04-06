/**
 * Created by ROG STRIX S5 on 2017/2/28.
 */
$(document).ready(function () {
    refreshNews('精选');
    $('nav a').click(function (e) {
        e.preventDefault();
        var type=$(this).text();
        refreshNews(type);
    });
});

function refreshNews(type) {

    var lists = $('.news-lists');
    lists.empty();

    $.ajax({
        url: '../baidu-news/server/getnews.php',
        type: 'get',
        datatype: 'json',
        data:{newstype:type},
        success: function (data) {
            console.log(data);
            data.forEach(function (item,index,array) {
                var list = $("<li></li>").addClass("news-list").prependTo(lists);
                var newsimg = $('<div></div>').addClass("newsimg").appendTo(list);
                var img = $('<img>').attr("src", item.newsimg).appendTo(newsimg);
                var newsContent = $('<div></div>').addClass('newscontent').appendTo(list);
                var h1 = $('<h1></h1>').html(item.newstitle).appendTo(newsContent);
                var p = $('<p></p>').appendTo(newsContent);
                $('<span></span>').addClass('newstime').html(item.newstime).appendTo(p);
                $('<span></span>').addClass('newssrc').html(item.newssrc).appendTo(p);
            });
        }
    });


}
/**
 * Created by ROG STRIX S5 on 2017/3/1.
 */
//打开后台页面的时候，发送请求刷新新闻列表
$(document).ready(function () {
    var newsTable = $("#newstable tbody");
    refreshNews();
    //添加新闻
    $('#btn-submit').click(function (e) {
        e.preventDefault();
        if ($('#newstitle').val() === ''
            || $('#newsimg').val() === ''
            || $('#newstime').val() === ''
            || $('#newssrc').val() === ''
        ) {
            if ($('#newstitle').val() === '') {
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }

            if ($('#newsimg').val() === '') {
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().removeClass('has-error');
            }

            if ($('#newstime').val() === '') {
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().removeClass('has-error');
            }

            if ($('#newssrc').val() === '') {
                $('#newssrc').parent().addClass('has-error');
            } else {
                $('#newssrc').parent().removeClass('has-error');
            }

        } else {

            $('#newstitle').parent().removeClass('has-error');
            $('#newsimg').parent().removeClass('has-error');
            $('#newstime').parent().removeClass('has-error');
            $('#newssrc').parent().removeClass('has-error');

            var jsonNews = {
                newstitle: filterXSS($('#newstitle').val()),
                newsimg: filterXSS($('#newsimg').val()),
                newstime: $('#newstime').val(),
                newstype: filterXSS($('#newstype').val()),
                newssrc: filterXSS($('#newssrc').val()),
            }

            //提交
            $.ajax({
                url: '/admin/insert',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                success: function (data) {
                    if (data.success) {
                        //初始化创建界面
                        $('#newstitle').val('');
                        $('#newsimg').val('');
                        $('#newssrc').val('');
                        refreshNews();
                    }
                }
            });
        }
    });

    //删除新闻功能
    var deleteId = null;
    newsTable.on('click', '.btn-danger', function (e) {
        $('#deleteModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(5).html();
    });

    $('#deleteModal #confirmDelete').click(function (e) {
        if (deleteId) {
            $.ajax({
                url: '/admin/delete',
                type: 'post',
                data: {newsid: deleteId},
                datatype: 'json',
                success: function (data) {
                    $('#deleteModal').modal('hide');
                    refreshNews();
                }
            });
        }
    });

    //更新新闻功能
    var updateId = null;
    newsTable.on('click', '.btn-primary', function (e) {
        $('#updateModal').modal('show');
        updateId = $(this).parent().prevAll().eq(5).html();
        $.ajax({
            url: '/admin/curnews',
            type: 'get',
            data: {newsid: updateId},
            datatype: 'json',
            success: function (data) {
                console.log(data);
                $('#unewstitle').val(data[0].newstitle);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewstype').val(data[0].newstype);
                $('#unewssrc').val(data[0].newssrc);
                var utime = data[0].newstime.split('T')[0];
                $('#unewstime').val(utime);
            }
        });
    });

    $('#updateModal #confirmUpdate').click(function (e) {
        if (updateId) {
            if ($('#unewstitle').val() === ''
                || $('#unewsimg').val() === ''
                || $('#unewstime').val() === ''
                || $('#unewssrc').val() === ''
            ) {
                if ($('#unewstitle').val() === '') {
                    $('#unewstitle').parent().addClass('has-error');
                } else {
                    $('#unewstitle').parent().removeClass('has-error');
                }

                if ($('#unewsimg').val() === '') {
                    $('#unewsimg').parent().addClass('has-error');
                } else {
                    $('#unewsimg').parent().removeClass('has-error');
                }

                if ($('#unewstime').val() === '') {
                    $('#unewstime').parent().addClass('has-error');
                } else {
                    $('#unewstime').parent().removeClass('has-error');
                }

                if ($('#unewssrc').val() === '') {
                    $('#unewssrc').parent().addClass('has-error');
                } else {
                    $('#unewssrc').parent().removeClass('has-error');
                }

            } else {

                var jsonNews = {
                    newstitle: filterXSS($('#unewstitle').val()),
                    newsimg: filterXSS($('#unewsimg').val()),
                    newstime: $('#unewstime').val(),
                    newstype: filterXSS($('#unewstype').val()),
                    newssrc: filterXSS($('#unewssrc').val()),
                    newsid: updateId
                }

                //提交
                $.ajax({
                    url: '/admin/update',
                    type: 'post',
                    data: jsonNews,
                    datatype: 'json',
                    success: function (data) {
                        $('#updateModal').modal('hide');
                        refreshNews();
                    }
                });
            }
        }
    });


    function refreshNews() {
        //empty table
        newsTable.empty();

        $.ajax({
            url: '/admin/getnews',
            type: 'get',
            datatype: 'json',
            data: {newstype: ""},
            success: function (data) {
                data.forEach(function (item, index, array) {
                    var tdid = $('<td>').html(item.id);
                    var tdnewstitle = $('<td>').html(item.newstitle);
                    var tdnewstype = $('<td>').html(item.newstype);
                    var tdnewsimg = $('<td>').html(item.newsimg);
                    var tdnewstime = $('<td>').html(item.newstime);
                    var tdnewssrc = $('<td>').html(item.newssrc);
                    var tdctrl = $('<td>');
                    var btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('修改');
                    var btndel = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    tdctrl.append(btnupdate, btndel);
                    var row = $('<tr>').append(tdid, tdnewstype, tdnewstitle, tdnewsimg, tdnewssrc, tdnewstime, tdctrl);
                    row.appendTo(newsTable);
                });
            }
        });
    }

});


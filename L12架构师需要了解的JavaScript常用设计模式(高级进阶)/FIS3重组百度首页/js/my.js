/**
 * Created by naterobinson on 2017/2/17.
 */
$(document).ready(function () {

    //单例模式
    var settingModel = {
        init: function () {
            var me = this;
            me.render();
            me.bind();
        },
        render: function () {
            var me = this;
            me.menuSetting = $(".menuSetting");
            me.setting = $(".setting");
        },
        bind: function () {
            var me = this;
            me.setting.mouseover(function () {
                me.menuSetting.css("display", "block");
            });
            me.setting.mouseout(function () {
                me.menuSetting.css("display", "none");
            });
            me.menuSetting.mouseover(function () {
                me.menuSetting.css("display", "block");
            });
            me.menuSetting.mouseout(function () {
                me.menuSetting.css("display", "none");
            });

        }
    };

    //单例模式
    var moreProductModel = {
        init: function () {
            var me = this;
            me.render();
            me.bind();
        },
        render: function () {
            var me = this;
            me.moreProduct = $(".moreProduct");
            me.moreProductWord = $(".moreProductWord");
            me.moreProductBar = $(".moreProductBar");
        },
        bind: function () {
            var me = this;
            me.moreProduct.mouseover(function () {
                me.moreProduct.css("color", "black");
                me.moreProductWord.css("background-color", "#f9f9f9");
                me.moreProductBar.css("display", "block");
            });
            me.moreProduct.mouseout(function () {
                me.moreProduct.css("color", "white");
                me.moreProductWord.css("background-color", "#38f");
                me.moreProductBar.css("display", "none");
            });
            me.moreProductBar.mouseover(function () {
                me.moreProduct.css("color", "black");
                me.moreProductWord.css("background-color", "#f9f9f9");
                me.moreProductBar.css("display", "block");
            });
            me.moreProductBar.mouseout(function () {
                me.moreProduct.css("color", "white");
                me.moreProductWord.css("background-color", "#38f");
                me.moreProductBar.css("display", "none");
            });
        }
    };

    //单例模式
    var showcaseModel = {
        init: function () {
            var me = this;
            me.render();
            me.bind();
        },
        render: function () {
            var me = this;
            me.showcase_leftbar_normal = $(".showcase_leftbar_normal");
            me.showcase_rightcontant2 = $(".showcase_rightcontant2");
            me.showcase_rightcontant1 = $(".showcase_rightcontant1");
        },
        bind: function () {
            var me = this;
            //下面橱窗的控制代码
            me.showcase_leftbar_normal.click(function () {
                var _this = $(this);
                var value = _this.attr("title");
                _this.addClass("showcase_leftbar_focus").siblings().removeClass("showcase_leftbar_focus");
                if (value == "导航") {
                    me.showcase_rightcontant2
                        .addClass("showcase_rightcontant_focus")
                        //找到同胞元素并移除focus class
                        .siblings("div")
                        .removeClass("showcase_rightcontant_focus");
                }
                if (value == "新闻") {
                    me.showcase_rightcontant1
                        .addClass("showcase_rightcontant_focus")
                        //找到同胞元素并移除focus class
                        .siblings("div")
                        .removeClass("showcase_rightcontant_focus");
                }
            });
        }
    };

    //工厂模式,可以自由选择要init哪些model，将创建的细节剥离出去；
    var index = {
        makeShowCaseModel: function () {
            showcaseModel.init();
        },
        makeMoreProductModel: function () {
            moreProductModel.init();
        },
        makesettingModel: function () {
            settingModel.init();
        }
    };
    index.makesettingModel();
    index.makeMoreProductModel();
    index.makeShowCaseModel();


    //轮播效果实现
    var flag;
    //左侧按钮---向前滚动
    $("#leftSidebar").click(function () {
        var currImgBoxIndex = $(".imgBox.currSlider").index();
        if (currImgBoxIndex == 0) {
            var targetImgBox = $(".imgBox").last();
        } else {
            var targetImgBox = $(".imgBox.currSlider").prev();
        }
        siliderToTarget(targetImgBox);
    });

    //右侧按钮--向下一个滚动
    $("#rightSidebar").click(function () {
        var currImgbox = $(".imgBox.currSlider");
        var imgBoxSize = $(".imgBox").size();
        var currImgBoxIndex = currImgbox.index();
        if ((currImgBoxIndex + 1) == imgBoxSize) {
            var targetImgBox = $(".imgBox").first();
        } else {
            var targetImgBox = $(".imgBox.currSlider").next();
        }
        siliderToTarget(targetImgBox);
    });

    //下部6个图片按钮
    $("#bottonBarInner1").click(function () {
        var index = $("#bottonBarInner1").index();
        var targetImgBox = $(".imgBox").eq(index);
        siliderToTarget(targetImgBox);
    });
    $("#bottonBarInner2").click(function () {
        var index = $("#bottonBarInner2").index();
        var targetImgBox = $(".imgBox").eq(index);
        siliderToTarget(targetImgBox);
    });
    $("#bottonBarInner3").click(function () {
        var index = $("#bottonBarInner3").index();
        var targetImgBox = $(".imgBox").eq(index);
        siliderToTarget(targetImgBox);
    });
    $("#bottonBarInner4").click(function () {
        var index = $("#bottonBarInner4").index();
        var targetImgBox = $(".imgBox").eq(index);
        siliderToTarget(targetImgBox);
    });
    $("#bottonBarInner5").click(function () {
        var index = $("#bottonBarInner5").index();
        var targetImgBox = $(".imgBox").eq(index);
        siliderToTarget(targetImgBox);
    });
    $("#bottonBarInner6").click(function () {
        var index = $("#bottonBarInner6").index();
        var targetImgBox = $(".imgBox").eq(index);
        siliderToTarget(targetImgBox);
    });

    //自动轮播
    setInterval(function () {
        var imgBoxSize = $(".imgBox").size();
        var currImgBoxIndex = $(".imgBox.currSlider").index();
        if ((currImgBoxIndex + 1) == imgBoxSize) {
            var targetImgBox = $(".imgBox").first();
        } else {
            var targetImgBox = $(".imgBox.currSlider").next();
        }
        siliderToTarget(targetImgBox);
    }, 6000);

    var flag;

    function siliderToTarget(targetImgBox) {
        if (flag == 0) {
            return
        }
        flag = 0;
        var currImgbox = $(".imgBox.currSlider");
        var currImgBoxIndex = currImgbox.index();
        var targetImgBoxIndex = targetImgBox.index();
        $(".bottonBarInner.currBottonbar").removeClass("currBottonbar");
        $(".bottonBarInner").eq(targetImgBoxIndex).addClass("currBottonbar");

        //right
        if (currImgBoxIndex > targetImgBoxIndex) {
            currImgbox.animate({
                left: "425px"
            });
            targetImgBox.css({
                "left": -425
            });
            targetImgBox.addClass("currSlider");
            targetImgBox.animate({
                left: "0"
            });
            setTimeout(function () {
                currImgbox.removeClass("currSlider");
                flag = 1;
            }, 500);
        }
        //left
        if (currImgBoxIndex < targetImgBoxIndex) {
            currImgbox.animate({
                left: "-425px"
            });
            targetImgBox.css({
                "left": 425
            });
            targetImgBox.addClass("currSlider");
            targetImgBox.animate({
                left: "0"
            });
            setTimeout(function () {
                currImgbox.removeClass("currSlider");
                flag = 1;
            }, 500);
        }
    }


});
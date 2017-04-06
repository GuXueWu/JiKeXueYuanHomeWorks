// 百度交互js

var baiDu={
	init:function(){
		this.baiduSetting();
	},

	// 默认焦点设置
	defaultFocus:function(){
		$('#searchInput').focus();
	},

	baiduSetting:function(){
		$('#navMore,#moreProduct').mouseover(function(){
			$('#moreProduct').show();
		}).mouseout(function(){
			$('#moreProduct').hide();
		})
	}
}

$(function(){
	baiDu.init();
})
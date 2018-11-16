$(function() {
	$('.nav ul li').hover(function() {
		$(this).find('.down').stop().slideDown(700, "bounceOut");
	}, function() {
		$(this).find('.down').stop().slideUp(); //stop()规范用
	}).click(function() {
		$(this).addClass('now').find('.down').hide().end().silbings().remove();
		//end()清除点击产生的小白点
	})
})

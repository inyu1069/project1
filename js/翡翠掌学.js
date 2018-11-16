$(function() {
	//开始蓝屏		
	$(".blue_txt").delay(3300).animate({"top":"500","opacity":1},1000)
	$(".blue_icon").delay(3500).animate({"top":"50","margin-top":"0"},800)
	setTimeout(function(){
		$(".blue").css("display","none")

	},7000)
	
	
	
	//全屏上下轮播
	var nowpage = 0;
	var lock = true;

	function donghua() {
		$('.container').animate({
			'top': -100 * nowpage + '%'
		}, 500);
		$('.page').eq(nowpage).addClass('current').siblings().removeClass('current');
		$('.header ul li').eq(nowpage).find('.header_nav_a').addClass('choose');
		$('.header ul li').eq(nowpage).siblings().find('.header_nav_a').removeClass('choose')
	}
	$(document).mousewheel(function(event, delta) {
		if(lock) {
			nowpage = nowpage - delta;
			if(nowpage < 0) {
				nowpage = 0;
			}
			if(nowpage > 4) {
				nowpage = 4;
			}
			donghua();
			lock = false;
			setTimeout(function() {
				lock = true;
			}, 1000);
		}
	})
	$('.header ul li').click(function(event) {
		nowpage = $(this).index();
		if(nowpage <= 4) {
			donghua();
		}
	})

	//第二部分左右轮播
	var num = 0;
	//左右键
	$(".btn_right").stop(true, true).click(function() {
		num++;
		if(num == $('.page2 ul').find('li').length) {
			num = 0
		};
		$('.page2 ul').css('margin-left', -num * 100+"%");
	})
	$(".btn_left").stop(true, true).click(function() {
		num--;
		if(num == -1) {
			num = 2;
		};
		$('.page2 ul').css('margin-left', -num * 100+"%");
	})
	$('.btn_left').hover(function(){
		$(this).css("background-position","-58px 0");
	},function(){
		$(this).css("background-position","0 0");
	})
	$('.btn_right').hover(function(){
		$(this).css("background-position","0 0");
	},function(){
		$(this).css("background-position","-58px 0");
	})
	
	//第三部分闪烁
	var timer=null;
	var bling=true;
	timer=setInterval(function(){
		if(bling){
			bling=false;
			$('.page3_main img').eq(0).attr('src','img/掌学/jiazhi_border_12.png');
			$('.page3_main img').eq(1).attr('src','img/掌学/jiazhi_border_22.png');
			$('.page3_main img').eq(2).attr('src','img/掌学/jiazhi_border_32.png');
			$('.page3_main img').eq(3).attr('src','img/掌学/jiazhi_border_42.png');
		}
		else{
			bling=true;
			$('.page3_main img').eq(0).attr('src','img/掌学/jiazhi_border_11.png');
			$('.page3_main img').eq(1).attr('src','img/掌学/jiazhi_border_21.png');
			$('.page3_main img').eq(2).attr('src','img/掌学/jiazhi_border_31.png');
			$('.page3_main img').eq(3).attr('src','img/掌学/jiazhi_border_41.png');
		}
	},1000)
	
	
})
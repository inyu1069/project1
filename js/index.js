$(function() {
	//业务范围
	$(".busplus").on("click",function(){
		if($(this).parents(".business_box").find(".bus_down").css("display")=="none"){
			$(this).parents(".business_box").find(".bus_down").slideDown();
			$(this).css("transform","rotate(135deg)");
		}else{
			$(this).parents(".business_box").find(".bus_down").slideUp();
			$(this).css("transform","rotate(0deg)");
		}
	})
	
	//联系我们点击文字消失
	$(".text_ipt").on("click",function(){
		$(this).parent().find(".con_name_txt").css("display","none")
	})
	$(".text_ipt").on("blur",function(){
		if($(this).val()==""){
			$(this).parent().find(".con_name_txt").css("display","block")
		}
	})
	
	// 百度地图API功能
	var mp = new BMap.Map("allmap");
	var point = new BMap.Point(116.56495659, 39.90411974);
	mp.centerAndZoom(point, 10);
	// 滚轮控制缩放
//	mp.enableScrollWheelZoom();
	 mp.disableScrollWheelZoom(); 

	mp.centerAndZoom(point, 17);
	// 添加带有定位的导航控件
	var navigationControl = new BMap.NavigationControl({
		// 靠左上角位置
		anchor: BMAP_ANCHOR_TOP_LEFT,
		// LARGE类型
		type: BMAP_NAVIGATION_CONTROL_LARGE,
		// 启用显示定位
		enableGeolocation: true
	});
	mp.addControl(navigationControl);
	// 添加定位控件
	var geolocationControl = new BMap.GeolocationControl();
	geolocationControl.addEventListener("locationSuccess", function(e) {
		// 定位成功事件
		var address = '';
		address += e.addressComponent.province;
		address += e.addressComponent.city;
		address += e.addressComponent.district;
		address += e.addressComponent.street;
		address += e.addressComponent.streetNumber;
		alert("当前定位地址为：" + address);
	});
	geolocationControl.addEventListener("locationError", function(e) {
		// 定位失败事件
		alert(e.message);
	});
	mp.addControl(geolocationControl);

	var marker = new BMap.Marker(point); // 创建标注
	mp.addOverlay(marker); // 将标注添加到地图中
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	
	
	var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
	var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
	var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
	/*缩放控件type有四种类型:
	BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/
	
	//添加控件和比例尺
	function add_control(){
		mp.addControl(top_left_control);        
		mp.addControl(top_left_navigation);     
		mp.addControl(top_right_navigation);    
	}
	add_control()
})
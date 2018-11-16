$(function(){
	function show(data){
		for(var i=0;i<data.length;i++){
			$(".list_ul").append(`
				<li>
	                <img src="${data[i].coverImg}" />
	                <div class="list_txt">
	                    <h5>${data[i].title}</h5>
	                    <h6>${data[i].creatAt}</h6>
	                    <p>${data[i].describe}</p>
	                </div>
	            </li>	
			`)
		}	
	}
	function liHover(){
		$('.list_ul li').hover(function() {
			$(this).css("border", "1px solid #BAB0C8")
		}, function() {
			$(this).css("border", "1px solid transparent")
		})	
	}
	
	var data1=listData.listData00.data.list
	show(data1)
	
	var click=0
	$(".arrow_down").click(function(){
		click++;
		if(click==1){
			var data2=listData.listData01.data.list
			show(data2);
		}else if(click==2){
			var data3=listData.listData02.data.list
			show(data3)
			$(".mouse_check_more").attr("src","images/list_gomore_bg_nomore.jpg")
		}
		liHover()
	})
	
	liHover()
	
//	$('.list_ul li').click(function(){
//		open("列表详情.html")
//		
//	})
	
	
})

var global=global||{}  //存储为全局变量
$(function(){
	//pageStart 页数  pagesize 每页的条数   count 总条数
	getlist();
	$(".arrow_down").click(function(){
		pageStart++;
		if(pageStart<global.page){
			getlist();
		}else{
			$(".arrow_down").hide();
			$(".mouse_check_more").attr("src","images/list_gomore_bg_nomore.jpg");
		}
	})
	
	//跳转详情页
	$(".list_ul").delegate(".content_one","click",function(){
		var articleId=$(this).attr("articleId");
		window.location="列表详情.html?articleId="+articleId;
	})
})	

var pageStart=0;   //页数
function getlist(){
//	var pageStart=0;   //页数
//	$.ajax({
//		url:"1.txt",
//		type:"get",
//		async:false,
//		data:{
//			
//		}
//	)}.done(function(result){
//		
//	})
	
//	console.log(listData);
	var result=listData["listData0"+pageStart];
	global.count=result.data.count;
	var pageSize=result.data.pageSize;
	var list=result.data.list;
	if(pageStart==0){
		$(".list_ul").html("");
	}
	console.log(result);
	for(var i=0;i<list.length;i++){
		var htmlmodel=$("#itemHtml").html();//模板
//		console.log(htmlmodel)
		//拿到模板里的所有节点
		htmlmodel=htmlmodel.replace("$articleId$",list[i].sysId)
		htmlmodel=htmlmodel.replace("img/list_img02.jpg",list[i].coverImg)
		htmlmodel=htmlmodel.replace("$articleTitle$",list[i].title)
		htmlmodel=htmlmodel.replace("$articleTime$",list[i].creatAt)
		htmlmodel=htmlmodel.replace("$describe$",list[i].describe)
		$(".list_ul").append(htmlmodel);
	}
	global.page=Math.ceil(global.count/pageSize); 
}


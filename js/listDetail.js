$(function(){
	//search 匹配?   hash 匹配#
	var id= getParmas("articleId");
	console.log(id)
//	var articleData=articleData[id];
//	console.log(articleData)
	 getArticle(id);
	// show(id);
})
function getParmas(type){
	var reg=new RegExp("(^|&)"+type+"=([^|&]*)(&|$)");
	var value=window.location.search.substring(1).match(reg)//?为第0位
			  //从问号 (?) 开始的 URL（查询部分）
	//test  match  exec
//	var val=reg.test(value)
	if(value==null){
		return null
	}else{
		return value[2];
	}
}
function getArticle(id) {
	var article = articleData["xiaoniaoNews" + id].data;
	var htmlmodel = $(".model").html(); //模板
	htmlmodel = htmlmodel.replace("$articleId$", article.sysId)
	htmlmodel = htmlmodel.replace("img/article_image01.jpg", article.coverImg)
	htmlmodel = htmlmodel.replace("$typeTitle$", article.typeTitle)
	htmlmodel = htmlmodel.replace("$typeEntitle$", article.typeEntitle)
	htmlmodel = htmlmodel.replace("$title$", article.title)
	htmlmodel = htmlmodel.replace("$updateAt$", article.updateAt)
	htmlmodel = htmlmodel.replace("$updateByFullName$", article.updateByFullName)
	htmlmodel = htmlmodel.replace("$content$", article.content)
	$(".container").append(htmlmodel);
}

function show(id) {
	var obj = articleData["xiaoniaoNews" + id].data;
	$(".container").append(`
		<div class="text" articleid=${obj.sysId}>
			<div class="wrap">
				<div class="title">
					<h1>${obj.typeTitle}</h1>
					<h5>${obj.typeEntitle}</h5>
					<p><img src="img/three_points01.png"/></p>
				</div>
				<div class="text_top1">
					<h3 class="about_title">${obj.title}</h3>
					<p>${obj.updateAt} &nbsp;&nbsp;${obj.updateByFullName} </p>
				</div>
				<div class="text_top2">
					<img src="${obj.coverImg}" >
				</div>
				<div class="text_main">
					${obj.content}
				</div>
			</div>
		</div>	
	`)
}
$(function()
{
	$(".index-one").on("click",function()
	{
		$(".daohang-three").slideDown(200);
		$(".index-one").css("display","none");
		$(".index-ones").css("display","block");
	})
	$(".index-ones").on("click",function()
	{
		$(".daohang-three").slideUp(200);
		$(".index-one").css("display","block");
		$(".index-ones").css("display","none");
	})
	$(".daohang-three").on("mouseover",function()
	{
		$(".daohang-three").css("display","block");
		$(".index-one").css("display","none");
		$(".index-ones").css("display","block");
	})
	$(".daohang-three").on("mouseout",function()
	{
		$(".daohang-three").css("display","none");
		$(".index-one").css("display","block");
		$(".index-ones").css("display","none");
	})
})


$(function()
{
	$(".class01").on("mouseover",function()
	{
		$(this).addClass("tabBenua").siblings().removeClass("tabBenua");
		$(".conlista").eq(0).css("display","block");
		$(".conlista").eq(1).css("display","none");
		$(".conlista").eq(2).css("display","none");
	})
	$(".class01").on("mouseout",function()
	{
		$(this).removeClass("tabBenua");
	})
	$(".class02").on("mouseover",function()
	{
		$(this).addClass("tabBenua").siblings().removeClass("tabBenua");
		$(".conlista").eq(0).css("display","none");
		$(".conlista").eq(1).css("display","block");
		$(".conlista").eq(2).css("display","none");
	})
	$(".class02").on("mouseout",function()
	{
		$(this).removeClass("tabBenua");
	})
	$(".class03").on("mouseover",function()
	{
		$(this).addClass("tabBenua").siblings().removeClass("tabBenua");
		$(".conlista").eq(0).css("display","none");
		$(".conlista").eq(1).css("display","none");
		$(".conlista").eq(2).css("display","block");
	})
	$(".class03").on("mouseout",function()
	{
		$(this).removeClass("tabBenua");
	})
	$(".conlista").eq(0).on("mouseover",function()
	{
		$(".class01").addClass("tabBenua").siblings().removeClass("tabBenua");
	})
	$(".conlista").eq(1).on("mouseover",function()
	{
		$(".class02").addClass("tabBenua").siblings().removeClass("tabBenua");
	})
	$(".conlista").eq(2).on("mouseover",function()
	{
		$(".class03").addClass("tabBenua").siblings().removeClass("tabBenua");
	})
})


$(function()
{
	var uls=document.getElementById("goods-show-one clearfix");
	var picture=8;
	var ps={"0":"蟹灵阁大闸蟹全母蟹 2.0-2.3两 8只礼盒装鲜活螃蟹水产生鲜包邮","1":"星农联合 大闸蟹实物现货 全母蟹2.4-2.0两 6只",
	"2":"星农联合 阳澄湖大闸蟹实物 预售全母蟹 2.9-2.5两 8只","3":"【1098型】现货阳澄湖姑苏渔歌大闸蟹全母2.6-2.3两4对8只礼盒装","4":"【1999型】现货阳澄湖苏蟹皇大闸蟹全母3.2-2.8两4对8只礼盒装",
	"5":"蟹灵阁阳澄湖大闸蟹全母蟹1.8-2.0两 6只装","6":"仲秋 阳澄湖大闸蟹现货全母蟹8只装(2.4-2.8两)鲜活螃蟹礼盒装","7":"大纵湖大闸蟹鲜活现货螃蟹河蟹礼盒套装（2.0两-2.4两）纯母蟹8只装海鲜水产"};
	var span={"0":"150","1":"168","2":"258","3":"138","4":"268","5":"99","6":"288","7":"188"};
	var high={"0":"768.00","1":"488.00","2":"688.00","3":"1098.00","4":"1000.00","5":"298.00","6":"288.00","7":"620.00"};
	
	for(var i=0;i<picture;i++)
	{
		var haili=document.createElement("li");
		uls.appendChild(haili);
		uls.children[i].innerHTML="<div class='flag-3'></div><a href='#'><div class='pic-show'><img class='lazy' src='img/floor-bg.gif' data-original='img/haixian/haixian01/"+(i+1)+".jpg'></div><p class='goods-name'>"+ps[i]+"</p><p class='price-low'>狂欢价:￥<span>"+span[i]+"</span></p><p class='price-high'>参考价:￥<del>"+high[i]+"</del></p><p class='preBuy'><span class='white'>阳澄湖开湖“蟹”礼</span><span class='red'>立即抢购</span></p></a>"
	}
})
	
/*现货直发第二块*/
$(function()
{
	var ultwo=document.getElementById("goods-show-two clearfix");
	var picture=8;
	var ps={"0":"蟹灵阁大闸蟹全母蟹 2.0-2.3两 8只礼盒装鲜活螃蟹水产生鲜包邮","1":"星农联合 大闸蟹实物现货 全母蟹2.4-2.0两 6只",
	"2":"星农联合 阳澄湖大闸蟹实物 预售全母蟹 2.9-2.5两 8只","3":"【1098型】现货阳澄湖姑苏渔歌大闸蟹全母2.6-2.3两4对8只礼盒装","4":"【1999型】现货阳澄湖苏蟹皇大闸蟹全母3.2-2.8两4对8只礼盒装",
	"5":"蟹灵阁阳澄湖大闸蟹全母蟹1.8-2.0两 6只装","6":"仲秋 阳澄湖大闸蟹现货全母蟹8只装(2.4-2.8两)鲜活螃蟹礼盒装","7":"大纵湖大闸蟹鲜活现货螃蟹河蟹礼盒套装（2.0两-2.4两）纯母蟹8只装海鲜水产"};
	var span={"0":"150","1":"168","2":"258","3":"138","4":"268","5":"99","6":"288","7":"188"};
	var high={"0":"768.00","1":"488.00","2":"688.00","3":"1098.00","4":"1000.00","5":"298.00","6":"288.00","7":"620.00"};
	
	for(var i=0;i<picture;i++)
	{
		var haili=document.createElement("li");
		ultwo.appendChild(haili);
		ultwo.children[i].innerHTML="<div class='flag-3'></div><a href='#'><div class='pic-show'><img class='lazy' src='img/floor-bg.gif' data-original='img/haixian/haixian02/"+(i+1)+".jpg'></div><p class='goods-name'>"+ps[i]+"</p><p class='price-low'>狂欢价:￥<span>"+span[i]+"</span></p><p class='price-high'>参考价:￥<del>"+high[i]+"</del></p><p class='preBuy'><span class='white'>阳澄湖开湖“蟹”礼</span><span class='red'>立即抢购</span></p></a>"
	}
})

$(function()
{
	var ulthree=document.getElementById("goods-show-three clearfix");
	var picture=8;
	var ps={"0":"蟹灵阁大闸蟹全母蟹 2.0-2.3两 8只礼盒装鲜活螃蟹水产生鲜包邮","1":"星农联合 大闸蟹实物现货 全母蟹2.4-2.0两 6只",
	"2":"星农联合 阳澄湖大闸蟹实物 预售全母蟹 2.9-2.5两 8只","3":"【1098型】现货阳澄湖姑苏渔歌大闸蟹全母2.6-2.3两4对8只礼盒装","4":"【1999型】现货阳澄湖苏蟹皇大闸蟹全母3.2-2.8两4对8只礼盒装",
	"5":"蟹灵阁阳澄湖大闸蟹全母蟹1.8-2.0两 6只装","6":"仲秋 阳澄湖大闸蟹现货全母蟹8只装(2.4-2.8两)鲜活螃蟹礼盒装","7":"大纵湖大闸蟹鲜活现货螃蟹河蟹礼盒套装（2.0两-2.4两）纯母蟹8只装海鲜水产"};
	var span={"0":"150","1":"168","2":"258","3":"138","4":"268","5":"99","6":"288","7":"188"};
	var high={"0":"768.00","1":"488.00","2":"688.00","3":"1098.00","4":"1000.00","5":"298.00","6":"288.00","7":"620.00"};
	
	for(var i=0;i<picture;i++)
	{
		var haili=document.createElement("li");
		ulthree.appendChild(haili);
		ulthree.children[i].innerHTML="<div class='flag-3'></div><a href='#'><div class='pic-show'><img class='lazy' src='img/floor-bg.gif' data-original='img/haixian/haixian03/"+(i+1)+".jpg'></div><p class='goods-name'>"+ps[i]+"</p><p class='price-low'>狂欢价:￥<span>"+span[i]+"</span></p><p class='price-high'>参考价:￥<del>"+high[i]+"</del></p><p class='preBuy'><span class='white'>阳澄湖开湖“蟹”礼</span><span class='red'>立即抢购</span></p></a>"
	}
})

$(function()
{
	var ulfour=document.getElementById("goods-show-four clearfix");
	var picture=8;
	var ps={"0":"蟹灵阁大闸蟹全母蟹 2.0-2.3两 8只礼盒装鲜活螃蟹水产生鲜包邮","1":"星农联合 大闸蟹实物现货 全母蟹2.4-2.0两 6只",
	"2":"星农联合 阳澄湖大闸蟹实物 预售全母蟹 2.9-2.5两 8只","3":"【1098型】现货阳澄湖姑苏渔歌大闸蟹全母2.6-2.3两4对8只礼盒装","4":"【1999型】现货阳澄湖苏蟹皇大闸蟹全母3.2-2.8两4对8只礼盒装",
	"5":"蟹灵阁阳澄湖大闸蟹全母蟹1.8-2.0两 6只装","6":"仲秋 阳澄湖大闸蟹现货全母蟹8只装(2.4-2.8两)鲜活螃蟹礼盒装","7":"大纵湖大闸蟹鲜活现货螃蟹河蟹礼盒套装（2.0两-2.4两）纯母蟹8只装海鲜水产"};
	var span={"0":"150","1":"168","2":"258","3":"138","4":"268","5":"99","6":"288","7":"188"};
	var high={"0":"768.00","1":"488.00","2":"688.00","3":"1098.00","4":"1000.00","5":"298.00","6":"288.00","7":"620.00"};
	
	for(var i=0;i<picture;i++)
	{
		var haili=document.createElement("li");
		ulfour.appendChild(haili);
		ulfour.children[i].innerHTML="<div class='flag-3'></div><a href='#'><div class='pic-show'><img class='lazy' src='img/floor-bg.gif' data-original='img/haixian/haixian04/"+(i+1)+".jpg'></div><p class='goods-name'>"+ps[i]+"</p><p class='price-low'>狂欢价:￥<span>"+span[i]+"</span></p><p class='price-high'>参考价:￥<del>"+high[i]+"</del></p><p class='preBuy'><span class='white'>阳澄湖开湖“蟹”礼</span><span class='red'>立即抢购</span></p></a>"
	}
})


$(function()
{
	var ulfive=document.getElementById("goods-show-five clearfix");
	var picture=16;
	var ps={"0":"蟹灵阁大闸蟹全母蟹 2.0-2.3两 8只礼盒装鲜活螃蟹水产生鲜包邮","1":"星农联合 大闸蟹实物现货 全母蟹2.4-2.0两 6只",
	"2":"星农联合 阳澄湖大闸蟹实物 预售全母蟹 2.9-2.5两 8只","3":"【1098型】现货阳澄湖姑苏渔歌大闸蟹全母2.6-2.3两4对8只礼盒装","4":"【1999型】现货阳澄湖苏蟹皇大闸蟹全母3.2-2.8两4对8只礼盒装",
	"5":"蟹灵阁阳澄湖大闸蟹全母蟹1.8-2.0两 6只装","6":"仲秋 阳澄湖大闸蟹现货全母蟹8只装(2.4-2.8两)鲜活螃蟹礼盒装","7":"大纵湖大闸蟹鲜活现货螃蟹河蟹礼盒套装（2.0两-2.4两）纯母蟹8只装海鲜水产","8":"蟹灵阁阳澄湖大闸蟹礼券2608型公5.0-5.5 母3.5-4.0两礼盒装",
	"9":"【面值1566元】正宗阳澄湖大闸蟹礼券 5对 公4.5-4.0两 母3.5-3.0两","10":"姑苏渔歌阳澄湖大闸蟹礼券 蟹券1588型礼卡 提货券 公4.0-4.5两 母3.0-3.5两 4对团购","11":"苏蟹皇阳澄湖大闸蟹礼券4对8只装公4.2-3.8两 母3.2-2.8两 1088型礼券团购",
	"12":"【面值1198元】正宗阳澄湖大闸蟹礼券 4对 公4.5-4.0两 母3.2-2.8两","13":"姑苏渔歌阳澄湖大闸蟹礼券 蟹券888型礼卡 提货券 公3.6-4.0两 母2.6-3.0两 4对团购","14":"苏蟹皇阳澄湖大闸蟹礼券4对8只装公4.5-4.2两 母3.5-3.3两 1688型礼券团购","15":"蟹灵阁阳澄湖大闸蟹礼券礼卡1288型公螃蟹4.7-4.3 母3.6-3.2 4对礼盒装"};
	var span={"0":"150","1":"168","2":"258","3":"138","4":"268","5":"99","6":"288","7":"188","8":"1088.00","9":"598.00","10":"298.00","11":"238.00","12":"298.00","13":"198.00","14":"398.00","15":"399.00"};
	var high={"0":"768.00","1":"488.00","2":"688.00","3":"1098.00","4":"1000.00","5":"298.00","6":"288.00","7":"620.00","8":"2608.00","9":"1566.00","10":"1588.00","11":"1088.00","12":"298.00","13":"888.00","14":"1688.00","15":"288.00"};
	
	for(var i=0;i<picture;i++)
	{
		var haili=document.createElement("li");
		ulfive.appendChild(haili);
		ulfive.children[i].innerHTML="<div class='flag-3'></div><a href='#'><div class='pic-show'><img class='lazy' src='img/floor-bg.gif' data-original='img/haixian/haixian05/"+(i+1)+".jpg'></div><p class='goods-name'>"+ps[i]+"</p><p class='price-low'>狂欢价:￥<span>"+span[i]+"</span></p><p class='price-high'>参考价:￥<del>"+high[i]+"</del></p><p class='preBuy'><span class='white'>阳澄湖开湖“蟹”礼</span><span class='red'>立即抢购</span></p></a>"
	}
})


$(function()
{
	var ulsix=document.getElementById("goods-show-six clearfix");
	var picture=8;
	var ps={"0":"蟹灵阁大闸蟹全母蟹 2.0-2.3两 8只礼盒装鲜活螃蟹水产生鲜包邮","1":"星农联合 大闸蟹实物现货 全母蟹2.4-2.0两 6只",
	"2":"星农联合 阳澄湖大闸蟹实物 预售全母蟹 2.9-2.5两 8只","3":"【1098型】现货阳澄湖姑苏渔歌大闸蟹全母2.6-2.3两4对8只礼盒装","4":"【1999型】现货阳澄湖苏蟹皇大闸蟹全母3.2-2.8两4对8只礼盒装",
	"5":"蟹灵阁阳澄湖大闸蟹全母蟹1.8-2.0两 6只装","6":"仲秋 阳澄湖大闸蟹现货全母蟹8只装(2.4-2.8两)鲜活螃蟹礼盒装","7":"大纵湖大闸蟹鲜活现货螃蟹河蟹礼盒套装（2.0两-2.4两）纯母蟹8只装海鲜水产"};
	var span={"0":"150","1":"168","2":"258","3":"138","4":"268","5":"99","6":"288","7":"188"};
	var high={"0":"768.00","1":"488.00","2":"688.00","3":"1098.00","4":"1000.00","5":"298.00","6":"288.00","7":"620.00"};
	
	for(var i=0;i<picture;i++)
	{
		var haili=document.createElement("li");
		ulsix.appendChild(haili);
		ulsix.children[i].innerHTML="<div class='flag-3'></div><a href='#'><div class='pic-show'><img class='lazy' src='img/floor-bg.gif' data-original='img/haixian/haixian06/"+(i+1)+".jpg'></div><p class='goods-name'>"+ps[i]+"</p><p class='price-low'>狂欢价:￥<span>"+span[i]+"</span></p><p class='price-high'>参考价:￥<del>"+high[i]+"</del></p><p class='preBuy'><span class='white'>阳澄湖开湖“蟹”礼</span><span class='red'>立即抢购</span></p></a>"
	}
})








//懒加载
$(function() {
    $("img.lazy").lazyload({
        event : "sporty"
    });
    
});
$(window).unbind("load", function() {
    var timeout = setTimeout(function()
    { 
    	$("img.lazy").trigger("sporty") ;
    }, 5000);
}); 
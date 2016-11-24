$(function() {
	window.onload=function()
			{
				 window.onscroll();
				$(".mask").css("display","block");
				$(".close-abc").on("click",function(){
				
					$(".mask").css("display","none");
				})
				
				var warp=document.getElementById("warp");
				var imgnum=10;
				for(var i=0;i<imgnum;i++)
				{
				var litmg=document.createElement("li");
				warp.appendChild(litmg);
				warp.children[i].innerHTML="<a href='javascript:;'><img src='img/three-table/"+(i+1)+".jpg'></a>";
				
				};
				
				
				var kis=document.getElementById("kis");
				var imgnums=8;
				for(var i=0;i<imgnums;i++)
				{
				var litmgs=document.createElement("li");
				kis.appendChild(litmgs);
				kis.children[i].innerHTML="<a href='javascript:;'><img src='img/xin-pinbai/"+(i+1)+".jpg'></a>";
				
				};
				
				var lisr=document.getElementById("lisr");
				var imgnumss=18;
				for(var i=0;i<imgnumss;i++)
				{
				var litmgss=document.createElement("li");
				lisr.appendChild(litmgss);
				lisr.children[i].innerHTML="<img src='img/pinban/"+(i+1)+".jpg'>";
				
				};
				
//				
				var recom=document.getElementById("recommand");
				var imgnumsss=6;
				var wenzi={"0":"三星 Galaxy On7 （G6100） 2016 臻金版 全网通4G手机","1":"Apple iPhone 7 128GB 玫瑰金色 移动联通电信4G手机","2":"三星 Galaxy On7 （G6100） 2016 臻金版 全网通4G手机","3":"先锋手机K88L","4":"荣耀8全网通（FRD-AL00）（4GB+32GB）珠光白","5":"乐视（LeEco）乐Pro3 （X720）原力金32GB..."};
				var jiage={"0":"3799","1":"5988","2":"1599","3":"299","4":"2290","5":"1899"};
				for(var i=0;i<imgnumsss;i++)
				{
				var litmgsss=document.createElement("li");
				recom.appendChild(litmgsss);
				recom.children[i].innerHTML="<a href='javascript:;'><img src='img/sj/"+(i+1)+".jpg'></a><p>"+wenzi[i]+"</p><span><i>￥</i>"+jiage[i]+"</span><input type='button' value='赠'/>";
				
				};
				
			}
	//头部导航内容菜单1
	//鼠标经过ng-left-one显示隐藏.ng-left-xc
	$(".ng-left-one").on("mouseover", function() {
		$(".ng-left-xc-two").css("display", "none");
		$(this).css({
			"background": "white",
			"border": "1px solid #ddd"
		});
		$(this).css("border-bottom", "transparent");
		$(".ng-left-xc").css("display", "block");

	})
	$(".ng-left-one").on("mouseout", function() {
		$(this).css({
			"background": "#f5f5f5",
			"border": "0px solid transparent"
		});
		$(".ng-left-xc").css("display", "none");

	})

	$(".ng-left-xc").on("mouseover", function() {
		$(this).css("display", "block");

	})

	$(".ng-left-xc").on("mouseout", function() {
		$(this).css("display", "none");

	})

	//关闭.ng-left-xc的菜单“X”
	$(".del").on("click", function() {
		$(".ng-left-xc").css("display", "none");
	})
	
	
	//头部导航内容菜单2
	//鼠标经过ng-left-two显示隐藏.ng-left-xc-two			
	$(".ng-left-two").on("mouseover", function() {
		$(this).css({
			"background": "white",
			"border": "1px solid #ddd"
		});
		$(this).css("border-bottom", "transparent");
		$(".ng-left-xc-two").css("display", "block");
		$(".ng-left-xc").css("display", "none");
	})
	$(".ng-left-two").on("mouseout", function() {
		$(this).css({
			"background": "#f5f5f5",
			"border": "0px solid transparent"
		});
		$(".ng-left-xc-two").css("display", "none");
		$(".ng-left-xc").css("display", "none");
	})
	$(".ng-left-xc-two").on("mouseover", function() {
		$(this).css("display", "block");

	})

	$(".ng-left-xc-two").on("mouseout", function() {
		$(this).css("display", "none");
	})
	
	
	
	//导航相关登录注册
	$(".registered").on("mouseover",function()
	{
		$(this).css("background","#DDDDDD");
	})
	$(".registered").on("mouseout",function()
	{
		$(this).css("background","#F5F5F5");
	})
	
	
	//头部导航内容菜单3
	
	$(".ng-left-three").on("mouseover", function() {
		$(this).css({
			"background": "white",
			"border": "1px solid #ddd",
		});
		$(this).css("border-bottom", "transparent");
		$(".ng-left-xc-three").css("display", "block");
	})
	$(".ng-left-three").on("mouseout", function() {
		$(this).css({
			"background": "#f5f5f5",
			"border": "0px solid transparent"
		});
		$(".ng-left-xc-three").css("display", "none");
	})
	$(".ng-left-xc-three").on("mouseover", function() {
		$(this).css("display", "block");

	})

	$(".ng-left-xc-three").on("mouseout", function() {
		$(this).css("display", "none");
	})
	//头部导航内容菜单4
	$(".ng-left-four").on("mouseover", function() {
		$(this).css({
			"background": "white",
			"border": "1px solid #ddd"
		});
		$(this).css("border-bottom", "transparent");
		$(".ng-left-xc-four").css("display", "block");
	})
	$(".ng-left-four").on("mouseout", function() {
		$(this).css({
			"background": "#f5f5f5",
			"border": "0px solid transparent"
		});
		$(".ng-left-xc-four").css("display", "none");
	})
	$(".ng-left-xc-four").on("mouseover", function() {
		$(this).css("display", "block");

	})

	$(".ng-left-xc-four").on("mouseout", function() {
		$(this).css("display", "none");
	})
	
	
	$(".xc-list-four p").eq(0)&&$(".xc-list-four p").eq(1).siblings().addClass("p3");
	$(".xc-list-four p").eq(0).removeClass("p3");
	
	
	//头部导航内容菜单5
	$(".ng-left-five").on("mouseover", function() {
		$(this).css({
			"background": "white",
			"border": "1px solid #ddd"
		});
		$(this).css("border-bottom", "transparent");
		$(".ng-left-xc-five").css("display", "block");
	})
	$(".ng-left-five").on("mouseout", function() {
		$(this).css({
			"background": "#f5f5f5",
			"border": "0px solid transparent"
		});
		$(".ng-left-xc-five").css("display", "none");
	})
	$(".ng-left-xc-five").on("mouseover", function() {
		$(this).css("display", "block");

	})

	$(".ng-left-xc-five").on("mouseout", function() {
		$(this).css("display", "none");
	})
	
	
	//头部导航内容菜单6
	$(".ng-left-six").on("mouseover", function() {
		$(this).css({
			"background": "white",
			"border": "1px solid #ddd"
		});
		$(this).css("border-bottom", "transparent");
		$(".ng-left-xc-six").css("display", "block");
	})
	$(".ng-left-six").on("mouseout", function() {
		$(this).css({
			"background": "#f5f5f5",
			"border": "0px solid transparent"
		});
		$(".ng-left-xc-six").css("display", "none");
	})
	$(".ng-left-xc-six").on("mouseover", function() {
		$(this).css("display", "block");

	})

	$(".ng-left-xc-six").on("mouseout", function() {
		$(this).css("display", "none");
	})
})

$(function(){
	$("img.lazy").lazyload({
    effect : "fadeIn"
});
 })



$(function()
{
	$(".sort-list li").eq(0).on("mouseover",function()
	{
		$(this).css("background","red");
		$(".sort-list li a").eq(0).css("color","white");
		$(".sort-list li a").eq(1).css("color","white");
		$(".sort-list li a").eq(2).css("color","white");
		$(".sort-list-box").css("display","block");
	})
	$(".sort-list li").eq(0).on("mouseout",function()
	{
		$(this).css("background","white");
		$(".sort-list li a").eq(0).css("color","#333");
		$(".sort-list li a").eq(1).css("color","#333");
		$(".sort-list li a").eq(2).css("color","#333");
		$(".sort-list-box").css("display","none");
	})
	$(".sort-list-box").on("mouseover",function()
	{
		$(".sort-list li").eq(0).css("background","red");
		$(".sort-list li a").eq(0).css("color","white");
		$(".sort-list li a").eq(1).css("color","white");
		$(".sort-list li a").eq(2).css("color","white");
		$(this).css("display","block");
	})
	$(".sort-list-box").on("mouseout",function()
	{
		$(".sort-list li").eq(0).css("background","white");
		$(".sort-list li a").eq(0).css("color","#333");
		$(".sort-list li a").eq(1).css("color","#333");
		$(".sort-list li a").eq(2).css("color","#333");
		$(this).css("display","none");
	})
})


$(function()
{
	$(".sort-list li").eq(1).on("mouseover",function()
	{
		$(this).css("background","red");
		$(".sort-list li a").eq(3).css("color","white");
		$(".sort-list li a").eq(4).css("color","white");
		$(".sort-list-box-two").css("display","block");
	})
	$(".sort-list li").eq(1).on("mouseout",function()
	{
		$(this).css("background","white");
		$(".sort-list li a").eq(3).css("color","#333");
		$(".sort-list li a").eq(4).css("color","#333");
		$(".sort-list-box-two").css("display","none");
	})
	$(".sort-list-box-two").on("mouseover",function()
	{
		$(".sort-list li").eq(1).css("background","red");
		$(".sort-list li a").eq(3).css("color","white");
		$(".sort-list li a").eq(4).css("color","white");
		$(this).css("display","block");
	})
	$(".sort-list-box-two").on("mouseout",function()
	{
		$(".sort-list li").eq(1).css("background","white");
		$(".sort-list li a").eq(3).css("color","#333");
		$(".sort-list li a").eq(4).css("color","#333");
		$(this).css("display","none");
	})
})



$(function()
{
	$(".sort-list li").eq(2).on("mouseover",function()
	{
		$(this).css("background","red");
		$(".sort-list li a").eq(5).css("color","white");
		$(".sort-list li a").eq(6).css("color","white");
		$(".sort-list li a").eq(7).css("color","white");
		$(".sort-list li a").eq(8).css("color","white");
		$(".sort-list-box-three").css("display","block");
	})
	$(".sort-list li").eq(2).on("mouseout",function()
	{
		$(this).css("background","white");
		$(".sort-list li a").eq(5).css("color","#333");
		$(".sort-list li a").eq(6).css("color","#333");
		$(".sort-list li a").eq(7).css("color","#333");
		$(".sort-list li a").eq(8).css("color","#333");
		$(".sort-list-box-three").css("display","none");
	})
	$(".sort-list-box-three").on("mouseover",function()
	{
		$(".sort-list li").eq(2).css("background","red");
		$(".sort-list li a").eq(5).css("color","white");
		$(".sort-list li a").eq(6).css("color","white");
		$(".sort-list li a").eq(7).css("color","white");
		$(".sort-list li a").eq(8).css("color","white");
		$(this).css("display","block");
	})
	$(".sort-list-box-three").on("mouseout",function()
	{
		$(".sort-list li").eq(2).css("background","white");
		$(".sort-list li a").eq(5).css("color","#333");
		$(".sort-list li a").eq(6).css("color","#333");
		$(".sort-list li a").eq(7).css("color","#333");
		$(".sort-list li a").eq(8).css("color","#333");
		$(this).css("display","none");
	})
})


$(function()
{
	$(".sort-list li").eq(3).on("mouseover",function()
	{
		$(this).css("background","red");
		$(".sort-list li a").eq(9).css("color","white");
		$(".sort-list li a").eq(10).css("color","white");
		$(".sort-list-box-four").css("display","block");
	})
	$(".sort-list li").eq(3).on("mouseout",function()
	{
		$(this).css("background","white");
		$(".sort-list li a").eq(9).css("color","#333");
		$(".sort-list li a").eq(10).css("color","#333");
		$(".sort-list-box-four").css("display","none");
	})
	$(".sort-list-box-four").on("mouseover",function()
	{
		$(".sort-list li").eq(3).css("background","red");
		$(".sort-list li a").eq(9).css("color","white");
		$(".sort-list li a").eq(10).css("color","white");
		$(this).css("display","block");
	})
	$(".sort-list-box-four").on("mouseout",function()
	{
		$(".sort-list li").eq(3).css("background","white");
		$(".sort-list li a").eq(9).css("color","#333");
		$(".sort-list li a").eq(10).css("color","#333");
		$(this).css("display","none");
	})
})


$(function()
{
	$(".sort-list li").eq(4).on("mouseover",function()
	{
		$(this).css("background","red");
		$(".sort-list li a").eq(11).css("color","white");
		$(".sort-list li a").eq(12).css("color","white");
		$(".sort-list li a").eq(13).css("color","white");
		$(".sort-list-box-five").css("display","block");
	})
	$(".sort-list li").eq(4).on("mouseout",function()
	{
		$(this).css("background","white");
		$(".sort-list li a").eq(11).css("color","#333");
		$(".sort-list li a").eq(12).css("color","#333");
		$(".sort-list li a").eq(13).css("color","#333");
		$(".sort-list-box-five").css("display","none");
	})
	$(".sort-list-box-five").on("mouseover",function()
	{
		$(".sort-list li").eq(4).css("background","red");
		$(".sort-list li a").eq(11).css("color","white");
		$(".sort-list li a").eq(12).css("color","white");
		$(".sort-list li a").eq(13).css("color","white");
		$(this).css("display","block");
	})
	$(".sort-list-box-five").on("mouseout",function()
	{
		$(".sort-list li").eq(4).css("background","white");
		$(".sort-list li a").eq(11).css("color","#333");
		$(".sort-list li a").eq(12).css("color","#333");
		$(".sort-list li a").eq(13).css("color","#333");
		$(this).css("display","none");
	})
})


$(function()
{
	$(".sort-list li").eq(5).on("mouseover",function()
	{
		$(this).css("background","red");
		$(".sort-list li a").eq(14).css("color","white");
		$(".sort-list li a").eq(15).css("color","white");
		$(".sort-list-box-six").css("display","block");
	})
	$(".sort-list li").eq(5).on("mouseout",function()
	{
		$(this).css("background","white");
		$(".sort-list li a").eq(14).css("color","#333");
		$(".sort-list li a").eq(15).css("color","#333");
		$(".sort-list-box-six").css("display","none");
	})
	$(".sort-list-box-six").on("mouseover",function()
	{
		$(".sort-list li").eq(5).css("background","red");
		$(".sort-list li a").eq(14).css("color","white");
		$(".sort-list li a").eq(15).css("color","white");
		$(this).css("display","block");
	})
	$(".sort-list-box-six").on("mouseout",function()
	{
		$(".sort-list li").eq(5).css("background","white");
		$(".sort-list li a").eq(14).css("color","#333");
		$(".sort-list li a").eq(15).css("color","#333");
		$(this).css("display","none");
	})
})



$(function()
{
	$(".sort-list li").eq(6).on("mouseover",function()
	{
		$(this).css("background","red");
		$(".sort-list li a").eq(16).css("color","white");
		$(".sort-list li a").eq(17).css("color","white");
		$(".sort-list li a").eq(18).css("color","white");
		$(".sort-list-box-seven").css("display","block");
	})
	$(".sort-list li").eq(6).on("mouseout",function()
	{
		$(this).css("background","white");
		$(".sort-list li a").eq(16).css("color","#333");
		$(".sort-list li a").eq(17).css("color","#333");
		$(".sort-list li a").eq(18).css("color","#333");
		$(".sort-list-box-seven").css("display","none");
	})
	$(".sort-list-box-seven").on("mouseover",function()
	{
		$(".sort-list li").eq(6).css("background","red");
		$(".sort-list li a").eq(16).css("color","white");
		$(".sort-list li a").eq(17).css("color","white");
		$(".sort-list li a").eq(18).css("color","white");
		$(this).css("display","block");
	})
	$(".sort-list-box-seven").on("mouseout",function()
	{
		$(".sort-list li").eq(6).css("background","white");
		$(".sort-list li a").eq(16).css("color","#333");
		$(".sort-list li a").eq(17).css("color","#333");
		$(".sort-list li a").eq(18).css("color","#333");
		$(this).css("display","none");
	})
})


$(function()
{
	$(".sort-list li").eq(7).on("mouseover",function()
	{
		$(this).css("background","red");
		$(".sort-list li a").eq(19).css("color","white");
		$(".sort-list li a").eq(20).css("color","white");
		$(".sort-list li a").eq(21).css("color","white");
		$(".sort-list-box-eight").css("display","block");
	})
	$(".sort-list li").eq(7).on("mouseout",function()
	{
		$(this).css("background","white");
		$(".sort-list li a").eq(19).css("color","#333");
		$(".sort-list li a").eq(20).css("color","#333");
		$(".sort-list li a").eq(21).css("color","#333");
		$(".sort-list-box-eight").css("display","none");
	})
	$(".sort-list-box-eight").on("mouseover",function()
	{
		$(".sort-list li").eq(7).css("background","red");
		$(".sort-list li a").eq(19).css("color","white");
		$(".sort-list li a").eq(20).css("color","white");
		$(".sort-list li a").eq(21).css("color","white");
		$(this).css("display","block");
	})
	$(".sort-list-box-eight").on("mouseout",function()
	{
		$(".sort-list li").eq(7).css("background","white");
		$(".sort-list li a").eq(19).css("color","#333");
		$(".sort-list li a").eq(20).css("color","#333");
		$(".sort-list li a").eq(21).css("color","#333");
		$(this).css("display","none");
	})
})

$(function()
{
	$(".sort-list li").eq(8).on("mouseover",function()
	{
		$(this).css("background","red");
		$(".sort-list li a").eq(22).css("color","white");
		$(".sort-list li a").eq(23).css("color","white");
		$(".sort-list li a").eq(24).css("color","white");
		$(".sort-list-box-nine").css("display","block");
	})
	$(".sort-list li").eq(8).on("mouseout",function()
	{
		$(this).css("background","white");
		$(".sort-list li a").eq(22).css("color","#333");
		$(".sort-list li a").eq(23).css("color","#333");
		$(".sort-list li a").eq(24).css("color","#333");
		$(".sort-list-box-nine").css("display","none");
	})
	$(".sort-list-box-nine").on("mouseover",function()
	{
		$(".sort-list li").eq(8).css("background","red");
		$(".sort-list li a").eq(22).css("color","white");
		$(".sort-list li a").eq(23).css("color","white");
		$(".sort-list li a").eq(24).css("color","white");
		$(this).css("display","block");
	})
	$(".sort-list-box-nine").on("mouseout",function()
	{
		$(".sort-list li").eq(8).css("background","white");
		$(".sort-list li a").eq(22).css("color","#333");
		$(".sort-list li a").eq(23).css("color","#333");
		$(".sort-list li a").eq(24).css("color","#333");
		$(this).css("display","none");
	})
})

$(function()
{
	$(".sort-list li").eq(9).on("mouseover",function()
	{
		$(this).css("background","red");
		$(".sort-list li a").eq(25).css("color","white");
		$(".sort-list li a").eq(26).css("color","white");
		$(".sort-list li a").eq(27).css("color","white");
		$(".sort-list li a").eq(28).css("color","white");
		$(".sort-list-box-ten").css("display","block");
	})
	$(".sort-list li").eq(9).on("mouseout",function()
	{
		$(this).css("background","white");
		$(".sort-list li a").eq(25).css("color","#333");
		$(".sort-list li a").eq(26).css("color","#333");
		$(".sort-list li a").eq(27).css("color","#333");
		$(".sort-list li a").eq(28).css("color","white");
		$(".sort-list-box-ten").css("display","none");
	})
	$(".sort-list-box-ten").on("mouseover",function()
	{
		$(".sort-list li").eq(9).css("background","red");
		$(".sort-list li a").eq(25).css("color","white");
		$(".sort-list li a").eq(26).css("color","white");
		$(".sort-list li a").eq(27).css("color","white");
		$(".sort-list li a").eq(28).css("color","white");
		$(this).css("display","block");
	})
	$(".sort-list-box-ten").on("mouseout",function()
	{
		$(".sort-list li").eq(9).css("background","white");
		$(".sort-list li a").eq(25).css("color","#333");
		$(".sort-list li a").eq(26).css("color","#333");
		$(".sort-list li a").eq(27).css("color","#333");
		$(".sort-list li a").eq(28).css("color","white");
		$(this).css("display","none");
	})
})



$(function()
{
	$(".sort-list li").eq(10).on("mouseover",function()
	{
		$(this).css("background","red");
		$(".sort-list li a").eq(29).css("color","white");
		$(".sort-list li a").eq(30).css("color","white");
		$(".sort-list li a").eq(31).css("color","white");
		$(".sort-list-box-eleven").css("display","block");
	})
	$(".sort-list li").eq(10).on("mouseout",function()
	{
		$(this).css("background","white");
		$(".sort-list li a").eq(29).css("color","#333");
		$(".sort-list li a").eq(30).css("color","#333");
		$(".sort-list li a").eq(31).css("color","#333");
		$(".sort-list-box-eleven").css("display","none");
	})
	$(".sort-list-box-eleven").on("mouseover",function()
	{
		$(".sort-list li").eq(10).css("background","red");
		$(".sort-list li a").eq(29).css("color","white");
		$(".sort-list li a").eq(30).css("color","white");
		$(".sort-list li a").eq(31).css("color","white");
		$(this).css("display","block");
	})
	$(".sort-list-box-eleven").on("mouseout",function()
	{
		$(".sort-list li").eq(10).css("background","white");
		$(".sort-list li a").eq(29).css("color","#333");
		$(".sort-list li a").eq(30).css("color","#333");
		$(".sort-list li a").eq(31).css("color","#333");
		$(this).css("display","none");
	})
})


$(function()
{
	$(".sort-list li").eq(11).on("mouseover",function()
	{
		$(this).css("background","red");
		$(".sort-list li a").eq(32).css("color","white");
		$(".sort-list li a").eq(33).css("color","white");
		$(".sort-list li a").eq(34).css("color","white");
		$(".sort-list-box-twelve").css("display","block");
	})
	$(".sort-list li").eq(11).on("mouseout",function()
	{
		$(this).css("background","white");
		$(".sort-list li a").eq(32).css("color","#333");
		$(".sort-list li a").eq(33).css("color","#333");
		$(".sort-list li a").eq(34).css("color","#333");
		$(".sort-list-box-twelve").css("display","none");
	})
	$(".sort-list-box-twelve").on("mouseover",function()
	{
		$(".sort-list li").eq(11).css("background","red");
		$(".sort-list li a").eq(32).css("color","white");
		$(".sort-list li a").eq(33).css("color","white");
		$(".sort-list li a").eq(34).css("color","white");
		$(this).css("display","block");
	})
	$(".sort-list-box-twelve").on("mouseout",function()
	{
		$(".sort-list li").eq(11).css("background","white");
		$(".sort-list li a").eq(32).css("color","#333");
		$(".sort-list li a").eq(33).css("color","#333");
		$(".sort-list li a").eq(34).css("color","#333");
		$(this).css("display","none");
	})
})


$(function()
{
	$(".sort-list li").eq(12).on("mouseover",function()
	{
		$(this).css("background","red");
		$(".sort-list li a").eq(35).css("color","white");
		$(".sort-list li a").eq(36).css("color","white");
		$(".sort-list li a").eq(37).css("color","white");
		$(".sort-list li a").eq(38).css("color","white");
		$(".sort-list-box-thirteen").css("display","block");
	})
	$(".sort-list li").eq(12).on("mouseout",function()
	{
		$(this).css("background","white");
		$(".sort-list li a").eq(35).css("color","#333");
		$(".sort-list li a").eq(36).css("color","#333");
		$(".sort-list li a").eq(37).css("color","#333");
		$(".sort-list li a").eq(38).css("color","#333");
		$(".sort-list-box-thirteen").css("display","none");
	})
	$(".sort-list-box-thirteen").on("mouseover",function()
	{
		$(".sort-list li").eq(12).css("background","red");
		$(".sort-list li a").eq(35).css("color","white");
		$(".sort-list li a").eq(36).css("color","white");
		$(".sort-list li a").eq(37).css("color","white");
		$(".sort-list li a").eq(38).css("color","white");
		$(this).css("display","block");
	})
	$(".sort-list-box-thirteen").on("mouseout",function()
	{
		$(".sort-list li").eq(12).css("background","white");
		$(".sort-list li a").eq(35).css("color","#333");
		$(".sort-list li a").eq(36).css("color","#333");
		$(".sort-list li a").eq(37).css("color","#333");
		$(".sort-list li a").eq(38).css("color","#333");
		$(this).css("display","none");
	})
})

$(function()
{
	$(".lefts").on("mouseover",function()
	{
		$(this).css("border-bottom","2px solid red");
		$(".rights").css("border-bottom","transparent");
		$(".ng-infor").css("display","block");
		$(".ng-infor-two").css("display","none");
	})
	$(".rights").on("mouseover",function()
	{
		$(this).css("border-bottom","2px solid red");
		$(".lefts").css("border-bottom","transparent");
		$(".ng-infor").css("display","none");
		$(".ng-infor-two").css("display","block");
	})
})


/*导航3下方小图标设置显示隐藏---开始*/
$(function()
{
	$(".xia-li-one").on("mouseover",function()
	{
		$(".shizi").css("display","block");
	})
	$(".xia-li-one").on("mouseout",function()
	{
		$(".shizi").css("display","none");
	})

})
$(function()
{
	$(".xia-li-two").on("mouseover",function()
	{
		$(".yifu").css("display","block");
	})
	$(".xia-li-two").on("mouseout",function()
	{
		$(".yifu").css("display","none");
	})
})
$(function()
{
	$(".xia-li-three").on("mouseover",function()
	{
		$(".muying").css("display","block");
	})
	$(".xia-li-three").on("mouseout",function()
	{
		$(".muying").css("display","none");
	})
})

$(function()
{
	$(".xia-li-four").on("mouseover",function()
	{
		$(".zhineng").css("display","block");
	})
	$(".xia-li-four").on("mouseout",function()
	{
		$(".zhineng").css("display","none");
	})
})
/*导航3下方小图标设置显示隐藏---结束*/


$(function()
{
	var act=$(".act-lubo");
			var lis=$(".act-lubo li");
			var num=0;
			
			$(".act-lubo").on("mouseover",function()
			{
				$(".dao-lefts").css("display","block");
				$(".dao-rights").css("display","block");
			})
			
			$(".act-lubo").on("mouseout",function()
			{
				$(".dao-lefts").css("display","none");
				$(".dao-rights").css("display","none");
			})
			
			$(".dao-rights").on("click",function()
			{
				lis.eq(num).animate({"left":act.width()});
				--num<0?num = lis.length-1:num;
        		lis.eq(num).css("left", -act.width()) ;
        		lis.eq(num).animate({"left":0})
			})
			
			$(".dao-lefts").on("click",function()
			{
				lis.eq(num).animate({"left":-act.width()});
				++num>lis.length-1?num=0:num; 
				lis.eq(num).css("left", act.width()) ;
        		lis.eq(num).animate({"left":0})
			})
})


$(function()
{
	$(".p-del").on("click",function()
	{
		$(".tbar-cart-item").remove(".tbar-cart-item");
	})
})

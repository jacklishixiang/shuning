

function setImg(index) {
	var oDiv = $(".slider-img");
	var oUl = $(".slider-img ul");
	var aLi = $(".slider-img ul li a");
	if(aLi[index].dataset) {
		var src = aLi[index].dataset.src;
	} else {
		var src = aLi[index].getAttribute('data-src');
	}
	var oImg = document.createElement('img');
	oImg.src = src;
	if(aLi[index].children.length == 0) {
		aLi[index].appendChild(oImg);
	}
}

function getH(obj) {
	var h = 0;
	while(obj) {
		h += obj.offsetTop;
		obj = obj.offsetParent;
	}
	return h;
}
window.onscroll = function() {
	var oDiv = $(".slider-img");
	var oUl = $(".slider-img ul");
	var aLi = $(".slider-img ul li a");

	for(var i = 0, l = aLi.length; i < l; i++) {
		var oLi = aLi[i];
		//检查oLi是否在可视区域
		var t = document.documentElement.clientHeight + (document.documentElement.scrollTop || document.body.scrollTop);
		var h = getH(oLi);

		if(h < t) {
			setTimeout("setImg(" + i + ")", 2000);
		}
	}
	if(scroll().top<200)
	{
		$(".show-case").css("display","block");
	}else
	{
		$(".show-case").css("display","none");
		$(".p-box").css("display","none");
	}
	if(scroll().top>1000)
	{
		$(".fixed-bar-wrap").css({"position":"fixed","top":"0","left":"0","margin-top":"0"})
	}else
	{
		$(".fixed-bar-wrap").css({"position":"absolute","top":"1010px","left":"0","margin-top":"33px"})
	}

};

function scroll(){
                    var left = window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
                    var top = window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;

                    return {"left":left,"top":top};
}

//		开头轮播图代码
$(function() {
	var num = 0;
	//  		$(".slider-img li").each(function(i,e){
	//  			$("<span>"+(i+1)+"</span>").appendTo(".ctrl-square");
	//  		})
	$(".slider-img li").each(function(i) {
		$("<span>" + (i + 1) + "</span>").appendTo(".ctrl-square");
	})
	light();

	function light() {
		$(".ctrl-square span").eq(num).addClass("current").siblings().removeClass("current");
	}
	//只显示第一张图片
	$(".slider-img li").eq(num).css({
		"opacity": 1
	}).siblings().css({
		"opacity": 0
	});
	//单击小方点，图片移动到相应的图片
	$(".ctrl-square span").on("click", function() {
		var index = $(this).index();
		$(".slider-img li").eq(index).css({
			"opacity": 0
		}).animate({
			"opacity": 1
		}, 2000);
		$(".slider-img li").eq(num).animate({
			"opacity": 0
		}, 2000);
		num = index;
		light();
	});
	//设置li的背景颜色
	$(".slider-img li").eq(0).css("background", "rgb(13,33,92)");
	$(".slider-img li").eq(1).css("background", "rgb(231,35,42)");
	$(".slider-img li").eq(2).css("background", "rgb(231,19,47)");
	$(".slider-img li").eq(3).css("background", "rgb(246,255,224)");
	$(".slider-img li").eq(4).css("background", "rgb(214,29,26)");

	//单击左箭头，显示下一张图片
	$(".prev").on("click", function() {

			$(".slider-img li").eq(num).animate({
				"opacity": 0
			}, 2000);
			num--;
			num < 0 ? num = (($(".slider-img li").length - 1)) : num;
			$(".slider-img li").eq(num).css({
				"opacity": 0
			}).animate({
				"opacity": 1
			}, 2000);
			light();
		})
		//单击右箭头箭头，显示上一张图片
	$(".next").on("click", function() {
		$(".slider-img li").eq(num).animate({
			"opacity": 0
		}, 2000);
		num++;
		num < $(".slider-img li").length ? num : num = 0;
		$(".slider-img li").eq(num).css({
			"opacity": 0
		}).animate({
			"opacity": 1
		}, 2000);
		light();
	})

	function autoplay() {
		$(".slider-img li").eq(num).animate({
			"opacity": 0
		}, 2000);
		num++;
		num < $(".slider-img li").length ? num : num = 0;
		$(".slider-img li").eq(num).css({
			"opacity": 0
		}).animate({
			"opacity": 1
		}, 2000);
		light();
	}
	//自动轮播
	timer = setInterval(autoplay, 3000);
	//    		悬停时停止轮播
	$(".slider").on("mouseover", function() {
			clearInterval(timer);
		})
		//    		离开时开始轮播
	$(".slider").on("mouseout", function() {
		timer = setInterval(autoplay, 2000);
	})
})
$(function(){
				$(".infor-nav-narrow").click(function()
				{
					$(".p-box").animate({"width":"200"}).show();
				})
				$(".infor-nav-narrow").dblclick(function()
				{
					$(".p-box").animate({"width":"0"}).hide();
				})
			})

$(function()
{
	$(".more").on("mouseover",function()
	{
		$(".more i").css("transform","rotate(360deg)");
	})
	$(".more").on("mouseout",function()
	{
		$(".more i").css("transform","rotate(-360deg)");
	})
})

$(function()
{
	$(".mores").on("mouseover",function()
	{
		$(".mores i").css("transform","rotate(360deg)");
	})
	$(".mores").on("mouseout",function()
	{
		$(".mores i").css("transform","rotate(-360deg)");
	})
})
$(function()
{
	$(".mores-one").on("mouseover",function()
	{
		$(".mores-one i").css("transform","rotate(360deg)");
	})
	$(".mores-one").on("mouseout",function()
	{
		$(".mores-one i").css("transform","rotate(-360deg)");
	})
})

$(function()
{
	$(".mores-two").on("mouseover",function()
	{
		$(".mores-two i").css("transform","rotate(360deg)");
	})
	$(".mores-two").on("mouseout",function()
	{
		$(".mores-two i").css("transform","rotate(-360deg)");
	})
})

$(function()
{
	$(".mores-twos").on("mouseover",function()
	{
		$(".mores-twos i").css("transform","rotate(360deg)");
	})
	$(".mores-twos").on("mouseout",function()
	{
		$(".mores-twos i").css("transform","rotate(-360deg)");
	})
})

$(function()
{
	$(".mores-three").on("mouseover",function()
	{
		$(".mores-three i").css("transform","rotate(360deg)");
	})
	$(".mores-three").on("mouseout",function()
	{
		$(".mores-three i").css("transform","rotate(-360deg)");
	})
})

$(function()
{
	$(".mores-threes").on("mouseover",function()
	{
		$(".mores-threes i").css("transform","rotate(360deg)");
	})
	$(".mores-threes").on("mouseout",function()
	{
		$(".mores-threes i").css("transform","rotate(-360deg)");
	})
})

$(function()
{
	$(".mores-four").on("mouseover",function()
	{
		$(".mores-four i").css("transform","rotate(360deg)");
	})
	$(".mores-four").on("mouseout",function()
	{
		$(".mores-four i").css("transform","rotate(-360deg)");
	})
})

$(function()
{
	$(".mores-fours").on("mouseover",function()
	{
		$(".mores-fours i").css("transform","rotate(360deg)");
	})
	$(".mores-fours").on("mouseout",function()
	{
		$(".mores-fours i").css("transform","rotate(-360deg)");
	})
})

$(function()
{
	$(".mores-five").on("mouseover",function()
	{
		$(".mores-five i").css("transform","rotate(360deg)");
	})
	$(".mores-five").on("mouseout",function()
	{
		$(".mores-five i").css("transform","rotate(-360deg)");
	})
})

$(function()
{
	$(".mores-fives").on("mouseover",function()
	{
		$(".mores-fives i").css("transform","rotate(360deg)");
	})
	$(".mores-fives").on("mouseout",function()
	{
		$(".mores-fives i").css("transform","rotate(-360deg)");
	})
})



$(function()
{
	$(".mores-six").on("mouseover",function()
	{
		$(".mores-six i").css("transform","rotate(360deg)");
	})
	$(".mores-six").on("mouseout",function()
	{
		$(".mores-six i").css("transform","rotate(-360deg)");
	})
})

$(function()
{
	$(".mores-sixs").on("mouseover",function()
	{
		$(".mores-sixs i").css("transform","rotate(360deg)");
	})
	$(".mores-sixs").on("mouseout",function()
	{
		$(".mores-sixs i").css("transform","rotate(-360deg)");
	})
})


$(function()
{
	$(".mores-seven").on("mouseover",function()
	{
		$(".mores-seven i").css("transform","rotate(360deg)");
	})
	$(".mores-seven").on("mouseout",function()
	{
		$(".mores-seven i").css("transform","rotate(-360deg)");
	})
})

$(function()
{
	$(".mores-sevens").on("mouseover",function()
	{
		$(".mores-sevens i").css("transform","rotate(360deg)");
	})
	$(".mores-sevens").on("mouseout",function()
	{
		$(".mores-sevens i").css("transform","rotate(-360deg)");
	})
})

$(function()
{
	$(".mores-eight").on("mouseover",function()
	{
		$(".mores-eight i").css("transform","rotate(360deg)");
	})
	$(".mores-eight").on("mouseout",function()
	{
		$(".mores-eight i").css("transform","rotate(-360deg)");
	})
})

$(function()
{
	$(".mores-eights").on("mouseover",function()
	{
		$(".mores-eights i").css("transform","rotate(360deg)");
	})
	$(".mores-eights").on("mouseout",function()
	{
		$(".mores-eights i").css("transform","rotate(-360deg)");
	})
})

$(function()
{
	$(".mores-nine").on("mouseover",function()
	{
		$(".mores-nine i").css("transform","rotate(360deg)");
	})
	$(".mores-nine").on("mouseout",function()
	{
		$(".mores-nine i").css("transform","rotate(-360deg)");
	})
})

$(function()
{
	$(".mores-nines").on("mouseover",function()
	{
		$(".mores-nines i").css("transform","rotate(360deg)");
	})
	$(".mores-nines").on("mouseout",function()
	{
		$(".mores-nines i").css("transform","rotate(-360deg)");
	})
})

$(function()
{
	$(".mores-ten").on("mouseover",function()
	{
		$(".mores-ten i").css("transform","rotate(360deg)");
	})
	$(".mores-ten").on("mouseout",function()
	{
		$(".mores-ten i").css("transform","rotate(-360deg)");
	})
})

$(function()
{
	$(".mores-tens").on("mouseover",function()
	{
		$(".mores-tens i").css("transform","rotate(360deg)");
	})
	$(".mores-tens").on("mouseout",function()
	{
		$(".mores-tens i").css("transform","rotate(-360deg)");
	})
})

$(function()
{
	$(".mores-eleven").on("mouseover",function()
	{
		$(".mores-eleven i").css("transform","rotate(360deg)");
	})
	$(".mores-eleven").on("mouseout",function()
	{
		$(".mores-eleven i").css("transform","rotate(-360deg)");
	})
})

$(function()
{
	$(".mores-elevens").on("mouseover",function()
	{
		$(".mores-elevens i").css("transform","rotate(360deg)");
	})
	$(".mores-elevens").on("mouseout",function()
	{
		$(".mores-elevens i").css("transform","rotate(-360deg)");
	})
})
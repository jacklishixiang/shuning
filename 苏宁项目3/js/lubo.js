function setImg(index){
                var oDiv=$(".slider-img");
                var oUl=$(".slider-img ul");
                var aLi=$(".slider-img ul li a");
                if (aLi[index].dataset) {
                    var src=aLi[index].dataset.src;
                } else{
                    var src=aLi[index].getAttribute('data-src');
                }
                var oImg=document.createElement('img');
                oImg.src=src;
                if (aLi[index].children.length==0) {
                    aLi[index].appendChild(oImg); 
                }
            }
       	
       	function getH(obj) {  
    	var h = 0;  
    	while (obj) {  
       		h += obj.offsetTop;  
        	obj = obj.offsetParent;  
    	}  
    	return h;  
		}
       		 window.onscroll = function () {
            var oDiv=$(".slider-img");
                var oUl=$(".slider-img ul");
                var aLi=$(".slider-img ul li a");
                
                

            for (var i = 0, l = aLi.length; i < l; i++) {
                var oLi = aLi[i];
                //检查oLi是否在可视区域
                var t = document.documentElement.clientHeight + (document.documentElement.scrollTop || document.body.scrollTop);
                var h = getH(oLi);
            	
                if (h < t) {
                    setTimeout("setImg(" + i+ ")", 2000);
                }
            }
            
            
        };
		
//		开头轮播图代码
		$(function()
		{
			var num=0;
//  		$(".slider-img li").each(function(i,e){
//  			$("<span>"+(i+1)+"</span>").appendTo(".ctrl-square");
//  		})
			$(".slider-img li").each(function(i)
			{
				$("<span>"+(i+1)+"</span>").appendTo(".ctrl-square");
			})
    		light();
    		function light(){
    			$(".ctrl-square span").eq(num).addClass("current").siblings().removeClass("current");
    		}
    		//只显示第一张图片
    		$(".slider-img li").eq(num).css({"opacity":1}).siblings().css({"opacity":0});
    		//单击小方点，图片移动到相应的图片
    		$(".ctrl-square span").on("click",function(){
    			     var index=$(this).index();
    			     $(".slider-img li").eq(index).css({"opacity":0}).animate({"opacity":1},2000);
    			     $(".slider-img li").eq(num).animate({"opacity":0},2000);
    			     num=index;
    			     light();
    		});
    		//设置li的背景颜色
    		$(".slider-img li").eq(0).css("background","rgb(205,1,26)");
    		$(".slider-img li").eq(1).css("background","rgb(175,221,236)");
    		$(".slider-img li").eq(2).css("background","rgb(254,50,171)");
    		$(".slider-img li").eq(3).css("background","rgb(233,209,205)");
    		$(".slider-img li").eq(4).css("background","rgb(173,19,17)");
    		$(".slider-img li").eq(5).css("background","rgb(250,103,157)");
    		
    		
    		
    		
    		//单击左箭头，显示下一张图片
    		$(".prev").on("click",function(){
    			
    			$(".slider-img li").eq(num).animate({"opacity":0},2000);
    			num--;
    			num<0?num=(($(".slider-img li").length-1)):num;
    			$(".slider-img li").eq(num).css({"opacity":0}).animate({"opacity":1},2000);
    			light();
    		})
    		//单击右箭头箭头，显示上一张图片
    		$(".next").on("click",function(){
    			$(".slider-img li").eq(num).animate({"opacity":0},2000);
    			num++;
    			num<$(".slider-img li").length?num:num=0;
    			$(".slider-img li").eq(num).css({"opacity":0}).animate({"opacity":1},2000);
    			light();
    		})
    		
    		
    		
    		function autoplay(){
    			$(".slider-img li").eq(num).animate({"opacity":0},2000);
    			num++;
    			num<$(".slider-img li").length?num:num=0;
    			$(".slider-img li").eq(num).css({"opacity":0}).animate({"opacity":1},2000);
    			light();
    		}
    		//自动轮播
    		timer=setInterval(autoplay,3000);
//    		悬停时停止轮播
    		$(".slider").on("mouseover",function(){
    			clearInterval(timer);
    		})
//    		离开时开始轮播
    		$(".slider").on("mouseout",function(){
    			timer=setInterval(autoplay,2000);
    		})
		})
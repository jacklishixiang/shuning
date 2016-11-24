$(function()
{
	var num=0;
	$(".main-nav-index li").on("click",function()
	{
		if(num<1)
		{
			$(this).addClass("yanse").siblings().removeClass("yanse");
		}
	})
})
$(function()
{
	var nums=0;
	$(".ju-secguide-tab tr td a").on("click",function()
	{
		$(".ju-secguide-tab tr td a").removeClass("tablecolor");
		$(this).eq(nums).addClass("tablecolor").siblings().removeClass("tablecolor");
	})
})
$(function(){
window.onscroll=function()
{
	if(scroll().top>200)
	{
		$(".ju-fixed-div").css({"position":"fixed","top":"0","left":"0","margin-top":"0"})
		$(".ju-secguides").css({"position":"fixed","top":"36px","left":"0","margin-top":"0"})
	}else
	{
		$(".ju-fixed-div").css({"position":"relative","top":"30px","left":"0"})
		$(".ju-secguides").css({"position":"relative","top":"30px","left":"0"})
	}
	
}

})
function scroll(){
                    var left = window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
                    var top = window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;

                    return {"left":left,"top":top};
}

$(function()
{
	var productsListUl=document.getElementById("productsListUl");
	var img=10;
	var name={"0":"欧拜克27速铝合金三刀轮越野运动山地自行车","1":"【新品】New Balance NB新百伦男女鞋运动跑步鞋ML574VIA","2":"亚瑟士女鞋2016秋冬新款缓冲路跑鞋",
	"3":"【送运费险】【正品保障】耐克男子气垫运动跑步鞋","4":"阿迪达斯adidas2016新款男鞋板鞋运动鞋休闲","5":"鸿星尔克 男女秋冬款情侣全掌气垫跑鞋",
	"6":"【加厚保暖】美克男时尚夹克","7":"匹克篮球鞋秋季高帮球鞋防滑耐磨实战战靴","8":"匹克板鞋运动休闲男鞋低帮滑板鞋小白鞋","9":"【网面透气】男运动跑步鞋",
	"10":"【秋游精选】户外尖峰可折叠多色可选折叠包  ","11":"匹克篮球鞋秋冬季高板男鞋透气战靴耐磨防滑球鞋","12":"匹克跑步鞋秋季运动男鞋休闲缓震跑鞋","13":"匹克男鞋运动休闲跑鞋男士跑步鞋",
	"14":"鸿星尔克 男女秋冬款气垫跑步鞋","15":"鸿星尔克 男女秋冬款运动阿甘鞋","16":"鸿星尔克 男女复古秋冬慢跑鞋","17":"DAHON大行折叠自行车26寸30速山地折叠车XAA673 PLUS版",
	"18":"TRINX千里达X1山地车禧玛诺27速油压碟刹气压减震可锁前叉全新版","19":"德国ABUS车锁山地车公路车防盗锁电动车单车电动车链条密码锁","20":"Monton 骑行袜速干耐磨防臭袜户外运动袜男女通用",
	"21":"匹克男鞋秋季运动鞋男跑步鞋休闲复古慢跑鞋"};
	var em={"0":"858","1":"398","2":"469","3":"499","4":"349","5":"239","6":"49","7":"179","8":"119","9":"69","10":"49","11":"219","12":"145","13":"139",
	"14":"169","15":"109","16":"199","17":"2978","18":"1999","19":"218","20":"16","21":"149"};
	var b={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".00","6":".00","7":".00","8":".00","9":".00","10":".00","11":".00","12":".00","13":".00",
	"14":".00","15":".00","16":".00","17":".00","18":".00","19":".00","20":".90","21":".00"};
	var del={"0":"2200.00","1":"500.00","2":"659.00","3":"580.00","4":"599.00","5":"388.00","6":"459.00","7":"369.00","8":"399.00","9":"239.00","10":"299.00","11":"198.00","12":"429.00","13":"319.00",
	"14":"319.00","15":"379.00","16":"239.00","17":"3750.00","18":"2299.00","19":"378.00","20":"69.90","21":"339.00"};
	
	for(var i=0;i<img;i++)
	{
		var liArr=document.createElement("li");
		productsListUl.appendChild(liArr);
		productsListUl.children[i].innerHTML="<div class='item-wrap-t'><a href='#'></a><img class='lazy' src='img/floor-bg.gif' data-original='img/car/car-two/"+(i+1)+".jpg'><div class='detail'><p class='prd-name'>"+name[i]+"</p><p class='prd-desp-items'><span>27速双碟刹</span><span>三刀轮</span><span>铝合金车架</span><span>山地自行车</span></p></div><div class='sale clearfix'><div class='prd-price clearfix'><div class='sn-price'><i>¥</i><em>"+em[i]+"<b>"+b[i]+"</b></em><del><i>¥</i>"+del[i]+"</del></div></div><div class='discount'><p><span>1</span>件已售</p></div></div>";
	}
})

$(function()
{
	var floor1=document.getElementById("floor1");
	var img01=6;
	for(var i=0;i<img01;i++)
	{
		var lis=document.createElement("li");
		floor1.appendChild(lis);
		floor1.children[i].innerHTML="<a href='javascript:;'></a><img class='lazy' src='img/floor-bg.gif' data-original='img/car/car-one/"+(i+1)+".jpg' width='330px'><div class='sales clearfix'><span class='leftspan'><i></i>剩<em>3</em>天</span><span class='rightspan'><em>46</em>人抢购</span></div>";
	}
})


$(function()
{
	var nums=0;
	$(".ju-secguide-tabcont li a").on("click",function()
	{
		$(".ju-secguide-tabcont li a").removeClass("yanses");
		$(this).eq(nums).addClass("yanses").siblings().removeClass("yanses");
	})
})




$(function()
{
	var producthree=document.getElementById("producthree");
	var img=11;
	var name={"0":"欧拜克27速铝合金三刀轮越野运动山地自行车","1":"【新品】New Balance NB新百伦男女鞋运动跑步鞋ML574VIA","2":"亚瑟士女鞋2016秋冬新款缓冲路跑鞋",
	"3":"【送运费险】【正品保障】耐克男子气垫运动跑步鞋","4":"阿迪达斯adidas2016新款男鞋板鞋运动鞋休闲","5":"鸿星尔克 男女秋冬款情侣全掌气垫跑鞋",
	"6":"【加厚保暖】美克男时尚夹克","7":"匹克篮球鞋秋季高帮球鞋防滑耐磨实战战靴","8":"匹克板鞋运动休闲男鞋低帮滑板鞋小白鞋","9":"【网面透气】男运动跑步鞋",
	"10":"【秋游精选】户外尖峰可折叠多色可选折叠包  ","11":"匹克篮球鞋秋冬季高板男鞋透气战靴耐磨防滑球鞋","12":"匹克跑步鞋秋季运动男鞋休闲缓震跑鞋","13":"匹克男鞋运动休闲跑鞋男士跑步鞋",
	"14":"鸿星尔克 男女秋冬款气垫跑步鞋","15":"鸿星尔克 男女秋冬款运动阿甘鞋","16":"鸿星尔克 男女复古秋冬慢跑鞋","17":"DAHON大行折叠自行车26寸30速山地折叠车XAA673 PLUS版",
	"18":"TRINX千里达X1山地车禧玛诺27速油压碟刹气压减震可锁前叉全新版","19":"德国ABUS车锁山地车公路车防盗锁电动车单车电动车链条密码锁","20":"Monton 骑行袜速干耐磨防臭袜户外运动袜男女通用",
	"21":"匹克男鞋秋季运动鞋男跑步鞋休闲复古慢跑鞋"};
	var em={"0":"858","1":"398","2":"469","3":"499","4":"349","5":"239","6":"49","7":"179","8":"119","9":"69","10":"49","11":"219","12":"145","13":"139",
	"14":"169","15":"109","16":"199","17":"2978","18":"1999","19":"218","20":"16","21":"149"};
	var b={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".00","6":".00","7":".00","8":".00","9":".00","10":".00","11":".00","12":".00","13":".00",
	"14":".00","15":".00","16":".00","17":".00","18":".00","19":".00","20":".90","21":".00"};
	var del={"0":"2200.00","1":"500.00","2":"659.00","3":"580.00","4":"599.00","5":"388.00","6":"459.00","7":"369.00","8":"399.00","9":"239.00","10":"299.00","11":"198.00","12":"429.00","13":"319.00",
	"14":"319.00","15":"379.00","16":"239.00","17":"3750.00","18":"2299.00","19":"378.00","20":"69.90","21":"339.00"};
	
	for(var i=0;i<img;i++)
	{
		var liArr=document.createElement("li");
		producthree.appendChild(liArr);
		producthree.children[i].innerHTML="<div class='item-wrap-t'><a href='#'></a><img class='lazy' src='img/floor-bg.gif' data-original='img/car/car-three/"+(i+1)+".jpg'><div class='detail'><p class='prd-name'>"+name[i]+"</p><p class='prd-desp-items'><span>27速双碟刹</span><span>三刀轮</span><span>铝合金车架</span><span>山地自行车</span></p></div><div class='sale clearfix'><div class='prd-price clearfix'><div class='sn-price'><i>¥</i><em>"+em[i]+"<b>"+b[i]+"</b></em><del><i>¥</i>"+del[i]+"</del></div></div><div class='discount'><p><span>1</span>件已售</p></div></div>";
	}
})


$(function()
{
	var producfour=document.getElementById("producfour");
	var img=6;
	var name={"0":"欧拜克27速铝合金三刀轮越野运动山地自行车","1":"【新品】New Balance NB新百伦男女鞋运动跑步鞋ML574VIA","2":"亚瑟士女鞋2016秋冬新款缓冲路跑鞋",
	"3":"【送运费险】【正品保障】耐克男子气垫运动跑步鞋","4":"阿迪达斯adidas2016新款男鞋板鞋运动鞋休闲","5":"鸿星尔克 男女秋冬款情侣全掌气垫跑鞋",
	"6":"【加厚保暖】美克男时尚夹克","7":"匹克篮球鞋秋季高帮球鞋防滑耐磨实战战靴","8":"匹克板鞋运动休闲男鞋低帮滑板鞋小白鞋","9":"【网面透气】男运动跑步鞋",
	"10":"【秋游精选】户外尖峰可折叠多色可选折叠包  ","11":"匹克篮球鞋秋冬季高板男鞋透气战靴耐磨防滑球鞋","12":"匹克跑步鞋秋季运动男鞋休闲缓震跑鞋","13":"匹克男鞋运动休闲跑鞋男士跑步鞋",
	"14":"鸿星尔克 男女秋冬款气垫跑步鞋","15":"鸿星尔克 男女秋冬款运动阿甘鞋","16":"鸿星尔克 男女复古秋冬慢跑鞋","17":"DAHON大行折叠自行车26寸30速山地折叠车XAA673 PLUS版",
	"18":"TRINX千里达X1山地车禧玛诺27速油压碟刹气压减震可锁前叉全新版","19":"德国ABUS车锁山地车公路车防盗锁电动车单车电动车链条密码锁","20":"Monton 骑行袜速干耐磨防臭袜户外运动袜男女通用",
	"21":"匹克男鞋秋季运动鞋男跑步鞋休闲复古慢跑鞋"};
	var em={"0":"858","1":"398","2":"469","3":"499","4":"349","5":"239","6":"49","7":"179","8":"119","9":"69","10":"49","11":"219","12":"145","13":"139",
	"14":"169","15":"109","16":"199","17":"2978","18":"1999","19":"218","20":"16","21":"149"};
	var b={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".00","6":".00","7":".00","8":".00","9":".00","10":".00","11":".00","12":".00","13":".00",
	"14":".00","15":".00","16":".00","17":".00","18":".00","19":".00","20":".90","21":".00"};
	var del={"0":"2200.00","1":"500.00","2":"659.00","3":"580.00","4":"599.00","5":"388.00","6":"459.00","7":"369.00","8":"399.00","9":"239.00","10":"299.00","11":"198.00","12":"429.00","13":"319.00",
	"14":"319.00","15":"379.00","16":"239.00","17":"3750.00","18":"2299.00","19":"378.00","20":"69.90","21":"339.00"};
	
	for(var i=0;i<img;i++)
	{
		var liArr=document.createElement("li");
		producfour.appendChild(liArr);
		producfour.children[i].innerHTML="<div class='item-wrap-t'><a href='#'></a><img class='lazy' src='img/floor-bg.gif' data-original='img/car/car-four/"+(i+1)+".jpg'><div class='detail'><p class='prd-name'>"+name[i]+"</p><p class='prd-desp-items'><span>27速双碟刹</span><span>三刀轮</span><span>铝合金车架</span><span>山地自行车</span></p></div><div class='sale clearfix'><div class='prd-price clearfix'><div class='sn-price'><i>¥</i><em>"+em[i]+"<b>"+b[i]+"</b></em><del><i>¥</i>"+del[i]+"</del></div></div><div class='discount'><p><span>1</span>件已售</p></div></div>";
	}
})
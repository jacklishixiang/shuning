$(function()
{
	var clearfixs=document.getElementById("clearfixs");
	var tunum=7;
	var name={"0":"洁柔(C&S) 苏宁定制 抽纸 2层200抽抽取式纸面巾（18包装）箱装售卖","1":"现货蟹灵阁阳澄湖大闸蟹公蟹3.0-3.5两母蟹2.1-2.5两鲜活螃蟹3对礼盒装","2":"怡宝纯净水4.5L*4箱装","3":"晶丽莱家纺 全棉斜纹四件套 床单被套活性纯棉套件","4":"【超值18斤】奥妙净蓝全效水清莲香洗衣液3KG*2+1KG*3+金纺衣物护理剂502ml*2","5":"福临门 一级大豆油 食用油5L","6":"天虹珠玉水镶玉米5kg/袋"};
	var span={"0":"35","1":"99","2":"28","3":"139","4":"99","5":"39","6":"24"};
	var em={"0":".90","1":".00","2":".90","3":".00","4":".80","5":".90","6":".90"};
	var del={"0":"79.90","1":"568.00","2":"36.00","3":"378.00","4":"219.00","5":"49.90","6":"29.90"};
	var buy={"0":"1050","1":"1024","2":"15148","3":"0","4":"28591","5":"27584","6":"29924"};
	for(var i=0;i<tunum;i++)
	{
		var tulis=document.createElement("li");
		clearfixs.appendChild(tulis);
		clearfixs.children[i].innerHTML="<img src='img/ge1/"+(i+1)+".jpg'><div class='detail'><p class='name'>"+name[i]+"</p><div class='sp-price'><p class='price-now'><i>¥</i><span>"+span[i]+"</span><em>"+em[i]+"</em></p><p class='price-old'><i>¥</i><del>"+del[i]+"</del></p></div><p class='buy'>"+buy[i]+"人已购买</p>";
	};
})


$(function()
{
	var clearfixss=document.getElementById("clearfixss");
	var tunum=7;
	var name={"0":"洁柔(C&S) 苏宁定制 抽纸 2层200抽抽取式纸面巾（18包装）箱装售卖","1":"现货蟹灵阁阳澄湖大闸蟹公蟹3.0-3.5两母蟹2.1-2.5两鲜活螃蟹3对礼盒装","2":"怡宝纯净水4.5L*4箱装","3":"晶丽莱家纺 全棉斜纹四件套 床单被套活性纯棉套件","4":"【超值18斤】奥妙净蓝全效水清莲香洗衣液3KG*2+1KG*3+金纺衣物护理剂502ml*2","5":"福临门 一级大豆油 食用油5L","6":"天虹珠玉水镶玉米5kg/袋"};
	var span={"0":"35","1":"99","2":"28","3":"139","4":"99","5":"39","6":"24"};
	var em={"0":".90","1":".00","2":".90","3":".00","4":".80","5":".90","6":".90"};
	var del={"0":"79.90","1":"568.00","2":"36.00","3":"378.00","4":"219.00","5":"49.90","6":"29.90"};
	var buy={"0":"1050","1":"1024","2":"15148","3":"0","4":"28591","5":"27584","6":"29924"};
	for(var i=0;i<tunum;i++)
	{
		var tulis=document.createElement("li");
		clearfixss.appendChild(tulis);
		clearfixss.children[i].innerHTML="<img src='img/grt-two/"+(i+1)+".jpg'><div class='detail'><p class='name'>"+name[i]+"</p><div class='sp-price'><p class='price-now'><i>¥</i><span>"+span[i]+"</span><em>"+em[i]+"</em></p><p class='price-old'><i>¥</i><del>"+del[i]+"</del></p></div><p class='buy'>"+buy[i]+"人已购买</p>";
	};
})


$(function()
{
	$(".more").on("click",function()
	{
		$(".clearfixss").css("display","block");
		$(".clearfixs").css("display","none");
		$(".mores").css("display","block");
		$(".more").css("display","none");
	})
	$(".mores").on("click",function()
	{
		$(".clearfixss").css("display","none");
		$(".clearfixs").css("display","block");
		$(".mores").css("display","none");
		$(".more").css("display","block");
	})
})


$(function()
{
	var clearfixslou=document.getElementById("clearfixslou");
	var imglo=6;
	var namelou={"0":"星农联合阳澄湖大闸蟹实物礼盒 公蟹3.6-3.3两/只 母蟹2.6-2.3两/只 4对","1":"【苏宁自营】蟹灵阁 阳澄湖大闸蟹 公蟹3.0-3.5两 母蟹2.0-2.4两 4对装","2":"清水牌大闸蟹 鲜活现货 洪泽湖螃蟹 公3.0-3.4两母2.0-2.4两6只装","3":"大纵湖大闸蟹鲜活实物现货螃蟹河蟹礼盒公3.0-3.3两 母2.0-2.2两 8只装海鲜水产",
	"4":" 沾化冬枣 新鲜水果 冬枣产地直发 山东特产大枣3斤装包邮","5":"瑞福磷 大连野生纯淡干小海参干货1只 干参长度2.5-2.8cm"};
	var spanlu={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlu={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellu={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglo;i++)
	{
		var luoli=document.createElement("li");
		clearfixslou.appendChild(luoli);
		clearfixslou.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/louceng-two/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelou[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlu[i]+"</span><em>"+emlu[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellu[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})

//一楼动态
$(function()
{
	var clearfixslous=document.getElementById("clearfixslous");
	var imglos=6;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixslous.appendChild(luoli);
		clearfixslous.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/louceng/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})

$(function()
{
	$(".mores-one").on("click",function()
	{
		$(".clearfixslous").css("display","block");
		$(".clearfixslou").css("display","none");
		$(".mores-ones").css("display","block");
		$(".mores-one").css("display","none");
	})
	$(".mores-ones").on("click",function()
	{
		$(".clearfixslous").css("display","none");
		$(".clearfixslou").css("display","block");
		$(".mores-ones").css("display","none");
		$(".mores-one").css("display","block");
	})
})
//一楼动态结束
//二楼动态

$(function()
{
	var clearfixstwo=document.getElementById("clearfixstwo");
	var imglos=8;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixstwo.appendChild(luoli);
		clearfixstwo.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/louceng2-one/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})

$(function()
{
	var clearfixstwos=document.getElementById("clearfixstwos");
	var imglos=8;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixstwos.appendChild(luoli);
		clearfixstwos.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/louceng2-two/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})


$(function()
{
	$(".mores-two").on("click",function()
	{
		$(".clearfixstwos").css("display","block");
		$(".clearfixstwo").css("display","none");
		$(".mores-twos").css("display","block");
		$(".mores-two").css("display","none");
	})
	$(".mores-twos").on("click",function()
	{
		$(".clearfixstwos").css("display","none");
		$(".clearfixstwo").css("display","block");
		$(".mores-twos").css("display","none");
		$(".mores-two").css("display","block");
	})
})
//二楼动态结束




//三楼动态
$(function()
{
	var clearfixsthree=document.getElementById("clearfixsthree");
	var imglos=8;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixsthree.appendChild(luoli);
		clearfixsthree.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/luceng3-one/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})

$(function()
{
	$(".mores-three").on("click",function()
	{
		$(".clearfixsthrees").css("display","block");
		$(".clearfixsthree").css("display","none");
		$(".mores-threes").css("display","block");
		$(".mores-three").css("display","none");
	})
	$(".mores-threes").on("click",function()
	{
		$(".clearfixsthrees").css("display","none");
		$(".clearfixsthree").css("display","block");
		$(".mores-threes").css("display","none");
		$(".mores-three").css("display","block");
	})
})



$(function()
{
	var clearfixsthrees=document.getElementById("clearfixsthrees");
	var imglos=8;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixsthrees.appendChild(luoli);
		clearfixsthrees.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/luceng3-two/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})

//四楼动态
$(function()
{
	var clearfixsfour=document.getElementById("clearfixsfour");
	var imglos=8;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixsfour.appendChild(luoli);
		clearfixsfour.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/luceng4-one/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})

$(function()
{
	$(".mores-four").on("click",function()
	{
		$(".clearfixsfours").css("display","block");
		$(".clearfixsfour").css("display","none");
		$(".mores-fours").css("display","block");
		$(".mores-four").css("display","none");
	})
	$(".mores-fours").on("click",function()
	{
		$(".clearfixsfours").css("display","none");
		$(".clearfixsfour").css("display","block");
		$(".mores-fours").css("display","none");
		$(".mores-four").css("display","block");
	})
})



$(function()
{
	var clearfixsfours=document.getElementById("clearfixsfours");
	var imglos=8;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixsfours.appendChild(luoli);
		clearfixsfours.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/luceng4-two/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})



//四楼结束

//五楼动态

$(function()
{
	var clearfixsfive=document.getElementById("clearfixsfive");
	var imglos=8;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixsfive.appendChild(luoli);
		clearfixsfive.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/luceng5-one/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})

$(function()
{
	$(".mores-five").on("click",function()
	{
		$(".clearfixsfives").css("display","block");
		$(".clearfixsfive").css("display","none");
		$(".mores-fives").css("display","block");
		$(".mores-five").css("display","none");
	})
	$(".mores-fives").on("click",function()
	{
		$(".clearfixsfives").css("display","none");
		$(".clearfixsfive").css("display","block");
		$(".mores-fives").css("display","none");
		$(".mores-five").css("display","block");
	})
})



$(function()
{
	var clearfixsfives=document.getElementById("clearfixsfives");
	var imglos=8;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixsfives.appendChild(luoli);
		clearfixsfives.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/luceng5-two/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})

//五楼结束


//六楼动态

$(function()
{
	var clearfixssix=document.getElementById("clearfixssix");
	var imglos=8;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixssix.appendChild(luoli);
		clearfixssix.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/luceng6-one/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})

$(function()
{
	$(".mores-six").on("click",function()
	{
		$(".clearfixssixs").css("display","block");
		$(".clearfixssix").css("display","none");
		$(".mores-sixs").css("display","block");
		$(".mores-six").css("display","none");
	})
	$(".mores-sixs").on("click",function()
	{
		$(".clearfixssixs").css("display","none");
		$(".clearfixssix").css("display","block");
		$(".mores-sixs").css("display","none");
		$(".mores-six").css("display","block");
	})
})



$(function()
{
	var clearfixssixs=document.getElementById("clearfixssixs");
	var imglos=8;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixssixs.appendChild(luoli);
		clearfixssixs.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/luceng6-two/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})

//六楼结束




//七楼动态

$(function()
{
	var clearfixsseven=document.getElementById("clearfixsseven");
	var imglos=8;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixsseven.appendChild(luoli);
		clearfixsseven.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/luceng7-one/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})

$(function()
{
	$(".mores-seven").on("click",function()
	{
		$(".clearfixssevens").css("display","block");
		$(".clearfixsseven").css("display","none");
		$(".mores-sevens").css("display","block");
		$(".mores-seven").css("display","none");
	})
	$(".mores-sevens").on("click",function()
	{
		$(".clearfixssevens").css("display","none");
		$(".clearfixsseven").css("display","block");
		$(".mores-sevens").css("display","none");
		$(".mores-seven").css("display","block");
	})
})



$(function()
{
	var clearfixssevens=document.getElementById("clearfixssevens");
	var imglos=8;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixssevens.appendChild(luoli);
		clearfixssevens.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/luceng7-two/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})

//七楼结束


//八楼动态

$(function()
{
	var clearfixseight=document.getElementById("clearfixseight");
	var imglos=8;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixseight.appendChild(luoli);
		clearfixseight.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/luceng8-one/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})

$(function()
{
	$(".mores-eight").on("click",function()
	{
		$(".clearfixseights").css("display","block");
		$(".clearfixseight").css("display","none");
		$(".mores-eights").css("display","block");
		$(".mores-eight").css("display","none");
	})
	$(".mores-eights").on("click",function()
	{
		$(".clearfixseights").css("display","none");
		$(".clearfixseight").css("display","block");
		$(".mores-eights").css("display","none");
		$(".mores-eight").css("display","block");
	})
})



$(function()
{
	var clearfixseights=document.getElementById("clearfixseights");
	var imglos=8;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixseights.appendChild(luoli);
		clearfixseights.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/luceng8-two/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})

//八楼结束


//九楼动态

$(function()
{
	var clearfixsnine=document.getElementById("clearfixsnine");
	var imglos=8;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixsnine.appendChild(luoli);
		clearfixsnine.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/luceng9-one/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})

$(function()
{
	$(".mores-nine").on("click",function()
	{
		$(".clearfixsnines").css("display","block");
		$(".clearfixsnine").css("display","none");
		$(".mores-nines").css("display","block");
		$(".mores-nine").css("display","none");
	})
	$(".mores-nines").on("click",function()
	{
		$(".clearfixsnines").css("display","none");
		$(".clearfixsnine").css("display","block");
		$(".mores-nines").css("display","none");
		$(".mores-nine").css("display","block");
	})
})



$(function()
{
	var clearfixsnines=document.getElementById("clearfixsnines");
	var imglos=8;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixsnines.appendChild(luoli);
		clearfixsnines.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/luceng9-two/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})

//九楼结束

//十楼动态

$(function()
{
	var clearfixsten=document.getElementById("clearfixsten");
	var imglos=8;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixsten.appendChild(luoli);
		clearfixsten.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/luceng10-one/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})

$(function()
{
	$(".mores-ten").on("click",function()
	{
		$(".clearfixstens").css("display","block");
		$(".clearfixsten").css("display","none");
		$(".mores-tens").css("display","block");
		$(".mores-ten").css("display","none");
	})
	$(".mores-tens").on("click",function()
	{
		$(".clearfixstens").css("display","none");
		$(".clearfixsten").css("display","block");
		$(".mores-tens").css("display","none");
		$(".mores-ten").css("display","block");
	})
})



$(function()
{
	var clearfixstens=document.getElementById("clearfixstens");
	var imglos=8;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixstens.appendChild(luoli);
		clearfixstens.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/luceng10-two/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})

//十楼结束

//十一楼动态

$(function()
{
	var clearfixseleven=document.getElementById("clearfixseleven");
	var imglos=8;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixseleven.appendChild(luoli);
		clearfixseleven.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/luceng11-one/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})

$(function()
{
	$(".mores-eleven").on("click",function()
	{
		$(".clearfixselevens").css("display","block");
		$(".clearfixseleven").css("display","none");
		$(".mores-elevens").css("display","block");
		$(".mores-eleven").css("display","none");
	})
	$(".mores-elevens").on("click",function()
	{
		$(".clearfixselevens").css("display","none");
		$(".clearfixseleven").css("display","block");
		$(".mores-elevens").css("display","none");
		$(".mores-eleven").css("display","block");
	})
})



$(function()
{
	var clearfixselevens=document.getElementById("clearfixselevens");
	var imglos=8;
	var namelous={"0":"【768型】现货阳澄湖姑苏渔歌大闸蟹公蟹3.6-3.2两 母蟹2.5-2.2两4对8只礼盒装","1":"阳澄联合阳澄湖大闸蟹实物礼盒 母蟹2.4-2.6两/只 公蟹3.7-3.9两/只 4对","2":"【苏宁自营】小蟹篓阳澄湖大闸蟹 公蟹3.6-3.2 母蟹2.6-2.2 4对8只装","3":"现货蟹灵阁六月黄大闸蟹鲜活螃蟹1.8-2.0两 6只装海鲜水产",
	"4":" 【苏宁自营】莲花岛阳澄湖大闸蟹礼盒 现货 公蟹3.2-3.6两 母蟹2.2-2.5两 4对8只","5":"【2粒礼盒装】中秋送礼平和琯溪红心蜜柚 2粒礼盒装 共5斤"};
	var spanlus={"0":"188","1":"99","2":"128","3":"188","4":"69","5":"2"};
	var emlus={"0":".00","1":".00","2":".00","3":".00","4":".00","5":".99"};
	var dellus={"0":"588.00","1":"298.00","2":"888.00","3":"488.00","4":"100.00","5":"13.00"};
	for(var i=0;i<imglos;i++)
	{
		var luoli=document.createElement("li");
		clearfixselevens.appendChild(luoli);
		clearfixselevens.children[i].innerHTML="<div class='face'><a href='javascript:;'><img src='img/luceng11-two/"+(i+1)+".jpg'></a></div><div class='name-luo'><a href='javascript:;'>"+namelous[i]+"</a></div><div class='sp-lu'><p class='now'><i>¥</i><span>"+spanlus[i]+"</span><em>"+emlus[i]+"</em></p><p class='old-lu'><i>¥</i><del>"+dellus[i]+"</del></p></div><span class='add-cartl'></span>";
	};
})

//十一楼结束













$(function()
{
			var windowgao=$(window).height();
			var fixedwarp=$(".floors-item").height();
			var fixedTop=(windowgao-fixedwarp)/2
			var num=0;
					
			$(".floors-item li").click(function()
			{
				
				var ind=$(".floors-item li").index(this)+1;
				var topVal=$("#float0"+ind).offset().top;
				$("body,html").animate({scrollTop:topVal},1000);
				num=ind-1;
//				light();
			})
//			function light()
//				{	
//					$(".floors-item li a").removeClass();
//					$(".floors-item li a").eq(num).addClass("color").siblings().removeClass("color");
//				}
					$(window).scroll(scrolls)
	   				scrolls()
					function scrolls()
					{
						 var f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,bck;
						 var fixRight = $(".floors-item li a");
						 var sTop = $(window).scrollTop();
		   				fl = $('#float01').offset().top;
		   				f2 = $('#float02').offset().top;
		   				f3 = $('#float03').offset().top;
		   				f4 = $('#float04').offset().top;
		   				f5 = $('#float05').offset().top;
		   				f6 = $('#float06').offset().top;
		   				f7 = $('#float07').offset().top;
		   				f8 = $('#float08').offset().top;
		   				f9 = $('#float09').offset().top;
		  				f10 =$('#float010').offset().top;
		   				f11 =$('#float011').offset().top;
		   				var topPx = sTop+fixedTop;
		   				$(".floors-item").stop().animate({top:topPx});
		   				
		   				if(sTop>=fl){
		   				fixRight.eq(0).removeClass('color');
			   fixRight.eq(0).addClass('color').siblings().removeClass('color');
			   }
		   if(sTop>=f2-100){
		   	fixRight.eq(0).removeClass('color');
			   fixRight.eq(1).addClass('color').siblings().removeClass('color');
			   }
		   else
			   {
			   		fixRight.eq(1).removeClass('color');
			   }
		   if(sTop>=f3-100){
		   	fixRight.eq(1).removeClass('color');
			   fixRight.eq(2).addClass('color').siblings().removeClass('color');
			   }
		   else
			   {
			   		fixRight.eq(2).removeClass('color');
			   }
		   if(sTop>=f4-100){
		   	fixRight.eq(2).removeClass('color');
			   fixRight.eq(3).addClass('color').siblings().removeClass('color');
			   }
		   else
			   {
			   		fixRight.eq(3).removeClass('color');
			   }
		   if(sTop>=f5-100){
		   	fixRight.eq(3).removeClass('color');
			   fixRight.eq(4).addClass('color').siblings().removeClass('color');
			   }
		   	else
			   {
			   		fixRight.eq(4).removeClass('color');
			   }
		   if(sTop>=f6-100){
		   	fixRight.eq(4).removeClass('color');
			   fixRight.eq(5).addClass('color').siblings().removeClass('color');
			   }
		   else
			   {
			   		fixRight.eq(5).removeClass('color');
			   }
		   if(sTop>=f7-100){
		   	fixRight.eq(5).removeClass('color');
			   fixRight.eq(6).addClass('color').siblings().removeClass('color');
			   } 
			   else
			   {
			   		fixRight.eq(6).removeClass('color');
			   }
		   	 if(sTop>=f8-100){
		   	fixRight.eq(6).removeClass('color');
			   fixRight.eq(7).addClass('color').siblings().removeClass('color');
			   }else
			   {
			   		fixRight.eq(7).removeClass('color');
			   }		
		   				
		   	if(sTop>=f9-100){
		   	fixRight.eq(7).removeClass('color');
			   fixRight.eq(8).addClass('color').siblings().removeClass('color');
			   }else
			   {
			   		fixRight.eq(8).removeClass('color');
			   }				
		   				
		   		if(sTop>=f10-100){
		   	fixRight.eq(8).removeClass('color');
			   fixRight.eq(9).addClass('color').siblings().removeClass('color');
			   }else
			   {
			   		fixRight.eq(9).removeClass('color');
			   }		
		   				
		   		if(sTop>=f11-100){
		   	fixRight.eq(9).removeClass('color');
			   fixRight.eq(10).addClass('color').siblings().removeClass('color');
			   }else
			   {
			   		fixRight.eq(10).removeClass('color');
			   }
		   		
		   				
		   	}

})
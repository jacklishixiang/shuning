//$(window).resize(function() {
//  //模块尺寸
//  $('.header').css('height', $(window).height());
//  $('.header').css('height', $(window).height() - 110);
//  $('.headert').css('height', $(window).height() - 115);
//  $('.header').css('height', $(window).height() - 110);
//  $('.header').css('height', $(window).height());
//  $('.header').css('height', $(window).height());
//  $('.header').css('height', $(window).height() - 115);
//  $('.header').css('height', $(window).height() - 110);
//});


$(function(){
	if($(window).width()<=400){
			$(".header").hide();
			$(".header-one").css({"display":"block","margin-top":"10px"});
			$(".form").css("float","left");
			$(".form").css("left","1.5%");
    	}else if($(window).width()<=468)
    	{
    		$(".header").hide();
			$(".header-one").show();
			$(".form").css("float","left");
    		$(".form").css("left","5%");
    	}
    	else if($(window).width()<=518)
    	{
    		$(".header").hide();
			$(".header-one").show();
			$(".form").css("float","left");
    		$(".form").css("left","7.5%");
    	}
    	else if($(window).width()<=543)
    	{
    		$(".header").hide();
			$(".header-one").show();
			$(".form").css("float","left");
    		$(".form").css("left","8%");
    	}
    	else if($(window).width()<=960)
    	{
    		$(".header").hide();
			$(".header-one").show();
			$(".form").css("float","left");
    		$(".form").css("left","8%");
    	}
	else{
    		$(".header").show();
    		$(".header-one").hide();
    		$(".form").css("float","right");
    	}
//  	if($(window).width()<=770){
//  	 	$(".dh-mac").hide();
//  	}else{
//
//  	}
   $(window).on("resize",function(){
    	console.log($(window).width());
    	
    	if($(window).width()<=400){
    		$(".header").hide();
    		$(".header-one").css({"display":"block","margin-top":"10px"});
    		$(".form").css("float","left");
    		$(".form").css("left","1.5%");
    	}else if($(window).width()<=468)
    	{
    		$(".header").hide();
			$(".header-one").show();
			$(".form").css("float","left");
    		$(".form").css("left","5%");
    	}
    	else if($(window).width()<=518)
    	{
    		$(".header").hide();
			$(".header-one").show();
			$(".form").css("float","left");
    		$(".form").css("left","7.5%");
    	}
    	else if($(window).width()<=543)
    	{
    		$(".header").hide();
			$(".header-one").show();
			$(".form").css("float","left");
    		$(".form").css("left","8%");
    	}
    	else if($(window).width()<=960)
    	{
    		$(".header").hide();
			$(".header-one").show();
			$(".form").css("float","left");
    		$(".form").css({"left":"8%"});
    	}
    	else{
    		$(".header").show();
    		$(".header-one").hide();
    		$(".form").css("float","right");
    	}
    });   
})


$(function()
{
	$(".logo a").hover(function()
	{
		$(this).css("text-decoration","underline");
	})
	$(".logo a").mouseout(function()
	{
		$(this).css("text-decoration","none");
	})
})


$(function()
{
	$(".tab a span").on("click",function()
	{
		$(".tab a span").css({"padding-bottom":"6px","border-bottom":" 2px solid #f90","color":"#f90"});
		$(".tab-two a span").css({"padding-bottom":"0px","border-bottom":" 0px solid transparent","color":"#333"});
		$(".form-code2").css("display","block");
		$(".form-code3").css("display","none");
	})
	$(".tab-two a span").on("click",function()
	{
		$(".tab a span").css({"padding-bottom":"0px","border-bottom":" 0px solid transparent","color":"#333"});
		$(".tab-two a span").css({"padding-bottom":"6px","border-bottom":" 2px solid #f90","color":"#f90"});
		$(".form-code2").css("display","none");
		$(".form-code3").css("display","block");
	})
})

$(function()
{
	$(".showErrorUsernameDiv").on("click",function()
	{
		$(".showErrorUsernameDiv input").focus();
		$(".input-lable").css("display","none");
	})
	$(".showErrorUsernameDiv input").on("blur",function()
	{
		if($(".showErrorUsernameDiv input").val()!="")
		{
			$(".showErrorUsernameDiv input").val()="";
		}else{
			$(".input-lable").css("display","block");
		}
	})
	
	
	
	$(".showErrorPwdDiv").on("click",function()
	{
		$(".showErrorPwdDiv input").focus();
		$(".input-lable-pw").css("display","none");
	})
	$(".showErrorPwdDiv input").on("blur",function()
	{
		if($(".showErrorPwdDiv input").val()!="")
		{
			$(".showErrorPwdDiv input").val()="";
		}else{
			$(".input-lable-pw").css("display","block");
		}
	})
})



$(function()
{
	var btns=document.getElementById("btns");
		btns.onclick=function(){
			var users=document.getElementById("users").value;
		    var passs=document.getElementById("passs").value;
		   users="user:"+users;
		   var user=JSON.parse(window.localStorage.getItem(users));
		   if(passs==user.pass){
		   	alert("登录成功!")
		   }else{
		   	alert("账号或密码错误！")
		   }
		}
})

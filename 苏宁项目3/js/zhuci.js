$(function()
{
	var user="user:admin";
	    var json={"pass":"admin"};
		window.localStorage.setItem(user,JSON.stringify(json));
		var btn=document.getElementById("btn");
		btn.onclick=function(){
			var user=document.getElementById("user").value;
		    var pass=document.getElementById("pass").value;
			if(user==""||pass==""){
				alert("账号或密码不能为空！");
			}else if(/^[0-9a-zA-Z]{6,10}$/.test(user)&&/^[0-9a-zA-Z]{6,10}$/.test(pass)){
				var json = {pass:pass};
				window.localStorage.setItem("user:"+user,JSON.stringify(json));
			}else{
				alert("账号密码为6~10位和不能输入非法字符！")
			}
		}
		
		
		$(".p3 input").on("click",function()
		{
			alert("注册成功");
		})
		
		
})

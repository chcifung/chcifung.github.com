/*var trigger = $("#trigger");
var card = $("#card");
var loaded = false;
trigger.on('click',function(){
	if(card.is(":visible")){
		card.slideUp();
	}else{
		if(!loaded){
			card.load('result.html');
			loaded = true;
		}
		
		card.slideDown();
		
	}
});*/


/*$.ajax("https://api.github.com/users/chcifung").done(function(data){
	console.log(data);
})

var form = $("#search");
var input = $("input#username");
var result = $("#result");
var username;

form.on("submit",function(event){
	event.preventDefault();
	username = input.val();
	$.ajax("https://api.github.com/users/" + username).done(function(data){
		var html = "<div>用户名: "+(data.login||'无')+"</div>"+"<div>头像"
		+"<img src='" +data.avatar_url +"'>";
		result.html(html);
		console.log(data);
	});
})
*/

$.ajax({
	url: "https://api.github.com/users/",
	method:'GET',
	data:{
		username:"biaoyansu",
		password:"fdsfs",
	},
	success:function(){
		console.log('请求成功过');
	},
	error:function(){
		console.log("请求失败，快检查一下把");
	},
});

$.post('url',{
	//data..
})

$.get('url');
$.getJson('url');
$.getScript('url');
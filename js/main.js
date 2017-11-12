/*

	
	
	/*验证
*/
$(function(){
	'use strict';

/*选中所有有input[data-rule]属性的元素*/
	var $inputs = $('[data-rule'),
		 $form = $('#signup'),
		 inputs = [];

/*解析每一个input的规则*/
	$inputs.each(function(index,node){
		var tmp = new Input(node);
		inputs.push(tmp);
		
	});

	console.log(inputs);

	$form.on('submit',function(e){

		e.preventDefault();
		$inputs.trigger('blur');

		for(var i=0;i<inputs.length;i++){
			var item = inputs[i];
			var r = item.validator.is_valid();
			if(!r){
				alert('不行哦，快检查一下!');
				return;
			}
			
		}
		alert('注册成功!我们给您发送了一封验证邮件，赶快登陆您的邮箱查看吧');
		signup();
	});

	function signup(){
		/*$.ajax({
			url:'/my/register',
			content:{}
		});*/
	};
	/*
	var test = new Input("#test");
	var valid = test.validator.is_valid();
	console.log(valid);
	
	var validator =  new Validator('r r',{
		pattern: '^[a-zA-Z0-9]+$',
	});

	var result = validator.validate_pattern();
	console.log(result);
	*/
});
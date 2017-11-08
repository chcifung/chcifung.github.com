/*

	选中所有有input[data-rule]属性的元素
	解析每一个input的规则
	验证
*/
$(function(){
	'use strict';

	var $inputs = $('[data-rule');
	var inputs = [];

	$inputs.each(function(index,node){
		var tmp = new Input(node);
		inputs.push(tmp);
		
	});

	console.log(inputs);

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
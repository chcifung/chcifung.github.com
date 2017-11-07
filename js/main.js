/*

	选中所有有input[data-rule]属性的元素
	解析每一个input的规则
	验证
*/
$(function(){
	'use strict';
	var validator =  new Validator(' rr',{
		maxlength: 5
	});

	var result = validator.validate_required();
	console.log(result);
})
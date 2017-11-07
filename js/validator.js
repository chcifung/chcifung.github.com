$(function(){
	'use strict';
	window.Validator = function(val,rule){

		/*用于完成this.validate_max或者this.validate_min的前置处理工作*/
		function pre_max_min(){
			val = parseFloat(val);
		}

		this.validate_max = function(){
			pre_max_min();
			return val<=rule.max;
		}

		this.validate_min = function(){
			pre_max_min();
			return val>=rule.min;
		}


		/*用于完成this.validate_maxlength或者this.validate_minlength的前置工作*/
		function pre_maxorminlength(){
			val = val.toString();
		}

		this.validate_maxlength = function(){
			pre_maxorminlength();
			return val.length<=rule.maxlength;
		}

		this.validate_minlength = function(){
			pre_maxorminlength();
			return val.length>=rule.minlength;
		}

		this.validate_numeric = function(){
			return $.isNumeric(val);
		}

		this.validate_required = function(){
			var real = $.trim(val);
			if(!real&&real!==0)  return false;
			return true;
		}

		this.validate_pattern = function(){
			var reg = new RegExp(rule.pattern);
			return reg.test(val);
		}
	}
})
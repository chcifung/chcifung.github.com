$(function(){
	'use strict';
	window.Validator = function(val,rule){

		/*用于完成this.validate_max或者this.validate_min的前置处理工作*/
		this.is_valid = function(new_val){
			var key;
			if(new_val!==undefined){
				val = new_val;
			}else{
				val = val;
			}
			

			/*如果不是必填项且用户未填写任何内容则直接判定为合法*/
			if(!rule.required&&!val){
				return true;
			}

			for(key in rule){
				/*防止重复检查*/
				if(key === "required"){
					continue;
				}
				/*调用rule中相对应的方法*/
				var r =	this['validate_'+key]();
				if(!r){
					return false;
				}
			}
			return true;
		}
		
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
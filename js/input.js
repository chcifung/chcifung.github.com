$(function(){
	'use strict';
	window.Input = function(selector){
		var $ele,
		me=this,
		rule={
			required: true,
		};

		this.is_valid = function(){
			var key;
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

		this.load_validator = function(){
			var val = this.get_val();
			this.validator = new Validator(val,rule);
		}

		this.get_val = function(){
			return $ele.val();
		}

		function init(){
			find_ele();
			parse_rule();
			me.load_validator();	
		}

		function find_ele(){
			if(selector instanceof jQuery){
				$ele = selector;
			}else{
				$ele = $(selector);
			}
		}

		function parse_rule(){
			var rule_str = $ele.data('rule');
			if(!rule_str){
				return ;
			}else{
				var rule_arr = rule_str.split('|');
				for(var i =0;i<rule_arr.length;i++){
					var item_str = rule_arr[i];
					var item_arr = item_str.split(':');
					rule[item_arr[0]]=item_arr[1];//JSON.parse()不需要再转了
				}
			}
		}

		init();
	}
})
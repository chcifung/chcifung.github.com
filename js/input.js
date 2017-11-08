$(function(){
	'use strict';
	window.Input = function(selector){
		var $ele,
		$error_ele,
		me=this,
		rule={
			required: true,
		};

		

		me.load_validator = function(){
			var val = this.get_val();
			this.validator = new Validator(val,rule);
		}

		this.get_val = function(){
			return $ele.val();
		}

		function init(){
			find_ele();
			get_error_ele();
			parse_rule();
			me.load_validator();
			listen();	
		}

		function listen(){
			$ele.on('blur',function(){
				var valid = me.validator.is_valid();
				if(valid){
					$error_ele.hide();
				}else{
					$error_ele.show();
				}
			})
		}

		function get_error_ele(){
			$error_ele = $(get_error_selector());
		}

		function get_error_selector(){
			return '#'+$ele.attr('name')+'-input-error';
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
			}
			var rule_arr = rule_str.split('|');
			for(var i =0;i<rule_arr.length;i++){
				var item_str = rule_arr[i];
				var item_arr = item_str.split(':');
				rule[item_arr[0]]=item_arr[1];//JSON.parse()不需要再转了
			}
		}

		init();
	}
})
var trigger = $("#trigger");
var card = $("#card");
trigger.on('click',function(){
	card.load('result.html');
	card.toggle();
});
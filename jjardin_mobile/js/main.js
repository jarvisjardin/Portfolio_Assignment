/* 
	Title: 
	Authors: Jarvis Jardin 
*/

(function($){
//creating global variables

						
	
	
/*============ INIT =================*/	
	
	
	var init = function(){
		};	
	init();
	
	
	
/*============ EVENTS =================*/	


	$('#dropdown_more').live("click",function(){
		
		$('#dropdown_more').css({display:'none'});
		
		$('#dropdown_content').css({display:'block'});
		console.log("SHOW");

	});
	
	$('#dropdown_less').live("click",function(){
	
		$('#dropdown_content').css({display:'none'});
		$('#dropdown_more').css({display:'block'});
		console.log("HIDE");
	});
	
	
	
	


		
	
	
 })(jQuery);
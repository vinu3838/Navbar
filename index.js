$(document).ready(function(){

$(".dropdown-content a").hide();

	$(".fa-bars").on("click", function(){
		$(".flex-container").toggle();
		$(".flex-container").css('height','auto')
	});
	
	
	$(".flex-container div").hover(function(){
  $(this).addClass('hover');
}, function(){
  $(".flex-container div").removeClass('hover');
});

$(".dropdown-content").hover(function(){

$(".dropdown-content a").slideDown();

if($(window).width() < 580){
     $(".flex-container").hide();
		$(".flex-container").css('height','2vh');  
   }
   else
   {
   $(".flex-container").css('height','10vh'); 
   }




},
function(){
$(".dropdown-content a").slideUp();

if($(window).width() < 580){
     	$(".flex-container").css('height','auto');
   }
   else
   {
   $(".flex-container").css('height','10vh'); 
   }


}

);


   $(window).on('resize', function(){
   if($(this).width() > 580){
     $(".flex-container").css('display','flex');
	  $(".flex-container").css( 'flex-direction','row');
	  $(".flex-container").css('height','10vh'); 
	  
	  
	  
   }
   else
   { $(".flex-container").hide();
	  $(".flex-container").css( 'flex-direction','column');
	  $(".flex-container").css('height','auto');
   }
   
   
   
});


})
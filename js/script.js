$(document).ready(function(){
  $("#owl-example").owlCarousel(
  		{
  			pagination: false,
  			navigation: true,
  			navigationText: [
		       "<i class='prev'></i>",
		       "<i class='next'></i>"
      		],
  			singleItem: true
  		}
  	);
});
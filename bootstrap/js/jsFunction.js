'use strict';

// this tells jquery to run the function below once the DOM is ready
$(document).ready(function() {
	var setHeight = 80;
	// choose text for the show/hide link - can contain HTML (e.g. an image)
	var showText='Read More....';
	var hideText='...Less';
	 
	// initialise the visibility check
	var is_visible = false;
    $('.toggle').css('height', setHeight).css('overflow', 'hidden');
	// append show/hide links to the element directly preceding the element with a class of "toggle"
	$('.toggle').next().next().append(' (<a href="#" class="toggleLink">'+showText+'</a>)');
	 
	// hide all of the elements with a class of 'toggle'
	//$('.toggle').hide();
	 
	// capture clicks on the toggle links
	$('a.toggleLink').on('click',function(f) {
	 
		// switch visibility
		if(is_visible){
			is_visible = !is_visible;
			// change the link depending on whether the element is shown or hidden
			$(this).html( (is_visible) ? showText : hideText);
		 
			// toggle the display - uncomment the next line for a basic "accordion" style
			//$('.toggle').hide();$('a.toggleLink').html(hideText);
			$(this).parent().prev().prev('.toggle').css('height', 'auto').css('overflow', 'visible');
			f.preventDefault();
		}else{
			is_visible = !is_visible;
			$(this).html((is_visible) ? showText : hideText);
			$(this).parent().prev().prev('.toggle').css('height', setHeight).css('overflow', 'hidden');
			f.preventDefault();
		}
				 
		});
});



/*$(document).ready(function(){
	var showText = 'show';
	var hideText = 'hide';
	var isVisible = false;
	$('.toggle').prev().append('...'+showText+' ');
	$$('.toggle').prev().data('isVisible', true);
	$('.toggle').hide();
	$('a.toggleLink').click(function(){
		$(this).data('isVisible', !$(this).data('isVisible'));
		$(this).html(!$(this).data('isVisible')) ? showText : hideText);
		$('.toggle').hide();
		$('a.toggleLink').html(showText);
		$(this).parent().next('.toggle').toggle('slow');
		return false;
		
	});
});*/


/*$(function(){

		// The height of the content block when it's not expanded
		var adjustheight = 80;
		// The "more" link text
		var moreText = "More...";
		// The "less" link text
		var lessText = "Less...";

		// Sets the .more-block div to the specified height and hides any content that overflows
		$(".more-less").css('height', adjustheight).css('overflow', 'hidden');

		// The section added to the bottom of the "more-less" div
		$('.more-less').append('[...]');
		$('.more-less').append('<a class="adjust"></a>');
		// Set the "More" text
		$('a.adjust').text(moreText);

		$('a.adjust').on('click', (function() {
						$(this).parents("div:first").find(".bigtext").css('height', 'auto').css('overflow', 'visible');
						// Hide the [...] when expanded
						$(this).parents("div:first").find("p.continued").css('display', 'none');
						$(this).text(lessText);
		});
		$('.more-less').on('click', (function(e) {
						$(this).parents("div:first").find(".bigtext").css('height', adjustheight).css('overflow', 'hidden');
						$(this).parents("div:first").find("p.continued").css('display', 'block');
						$(this).text(moreText);
		});
		
});*/


/*$(function(){
	// The height of the content block when it's not expanded
		var adjustheight = 120;
		
		// Sets the .more-block div to the specified height and hides any content that overflows
		$(".expand").css('height', adjustheight).css('overflow', 'hidden');
		
  $(".expand").on("hide.bs.collapse", function(){
    $(".btn").html('<span class="glyphicon glyphicon-collapse-down"></span> Read More');
	
  });
  $(".expand").on("show.bs.collapse", function(){
	  //$(".more-block").css('height', adjustheight).css('overflow', 'hidden');
	  
    $(".btn").html('<span class="glyphicon glyphicon-collapse-up"></span> Read Less');
	//$(".more-block").addClass("collapse");
  });
  $(".expand").css('height', adjustheight).css('overflow', 'hidden');
});*/


/*$(function () {
	var setHeight = 130;
	var moreText = "Read more...";
	var lessText = "Read less...";
	//$(".more-less .more-block").css('height', setHeight).css('overflow', 'hidden');
	
	$('.readMoreContent').addClass('hide');
	$('.readMoreShow, .readMoreHide').removeClass('hide');
	$('a.readMoreShow').text(moreText);
	//set up toggle effect
	$('.readMoreShow').click(function(f){
		$(this).next('.readMoreContent').removeClass('hide');
		$(this).addClass('hide');
		f.preventDefault();
	});
	$('a.readMoreHide').text(lessText);
	$('.readMoreHide').click(function(f){
		var p = $(this).parents('.readMoreContent');
		p.addClass('hide');
		p.prev('.readMoreShow').removeClass('hide');
		f.preventDefault();
	});
	
});*/
/*The following function used for dropdown-submenu in navigation bar*/
/*(function($){
	$(document).ready(function(){
		$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
			event.preventDefault(); 
			event.stopPropagation(); 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});
	});
})(jQuery);*/
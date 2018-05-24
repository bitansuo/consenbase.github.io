;(function () {
	
	'use strict';

	// Page Nav
	var clickMenu = function() {

		$('#navbar a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top
			    	}, 500);
			   }

		    event.preventDefault();
		    return false;
		});
	};


	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#cbio-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 100 ) {
				header.addClass('navbar-fixed-top');
			} else if ( scrlTop <= 100) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top');
					}, 100 );
				}
			} 
		});
	};

	// Document on load.
	$(function(){
		clickMenu();
		windowScroll();
	});
}());

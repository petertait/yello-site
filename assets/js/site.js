$(function() {
	
	// Features Slider
	$('.features-slider').slick({
	    dots: true,
	    infinite: true,
	    speed: 500,
	    easing: 'ease-in-out',
	    slidesToShow: 1,
	    slidesToScroll: 1
	});
	
	// Add Class for Safari
	// Display Incompatible Modal
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
	    $('body').addClass('safari-mac');
	}else {
	    $('body').addClass('not-safari');
	}
	
	// Modal
	var ModalEffects = (function() {
	
		function init() {
	
			var overlay = document.querySelector( '.md-overlay' );
	
			[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {
	
				var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
					close = modal.querySelector( '.md-close' );
	
				function removeModal( hasPerspective ) {
					classie.remove( modal, 'md-show' );
	
					if( hasPerspective ) {
						classie.remove( document.documentElement, 'md-perspective' );
					}
				}
	
				function removeModalHandler() {
					removeModal( classie.has( el, 'md-setperspective' ) ); 
				}
	
				el.addEventListener( 'click', function( ev ) {
					classie.add( modal, 'md-show' );
					overlay.removeEventListener( 'click', removeModalHandler );
					overlay.addEventListener( 'click', removeModalHandler );
	
					if( classie.has( el, 'md-setperspective' ) ) {
						setTimeout( function() {
							classie.add( document.documentElement, 'md-perspective' );
						}, 25 );
					}
				});
				close.addEventListener( 'click', function( ev ) {
					ev.stopPropagation();
					removeModalHandler();
				});
			} );
		}
		init();
	})();
	
});	
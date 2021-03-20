jQuery(document).ready(function(){

  jQuery('#whole-banner-section').parents('body').addClass('fixed-banner');
  jQuery('.paragraph--type--heading-text-cta').parents('body').addClass('fixed-banner');
  jQuery('.simplenews-subscriber-form .form-type-email .form-email').attr("placeholder", "Email Address");
  jQuery('.simplenews-subscriber-form .form-actions button').text('Sign Up');

  jQuery(".burger-menu-open").click(function(){
    jQuery(".mobile-header").show();
  });
  jQuery(".burger-menu-close").click(function(){
    jQuery(".mobile-header").hide();
  });

  
   /*animation */
   AOS.init();

   function windowSize() {
	var window_width = jQuery( window ).width();
	if(window_width < 768){
	  if(jQuery('section').hasClass('block-banner-type-section')){
	    var left_height = jQuery('.paragraph--type--heading-text-cta.left div#content-left-right-section' ).height();
	    var right_height = jQuery('.paragraph--type--heading-text-cta.right div#content-left-right-section' ).height();
	    var total_height = parseInt(left_height) + parseInt(right_height) + 250;
	    //alert(right_height);
	    jQuery('.block-banner-type-section').height(total_height);
	  }
	}
	};

	windowSize();
	jQuery(window).resize(function(){
	  windowSize();
	});	

});
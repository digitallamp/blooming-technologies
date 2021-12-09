/**
Core script to handle the entire theme and core functions
**/
var DexignLab = function(){
	/* Search Bar ============ */
	siteUrl = '';
	
	var screenWidth = $( window ).width();
	
	/* Header Height ============ */
	var handleResizeElement = function(){
		$('.header').css('height','');
		var headerHeight = $('.header').height();
		$('.header').css('height', headerHeight);
	}
	
	/* Load File ============ */
	var dzTheme = function(){
		 'use strict';
		 var loadingImage = '<img src="images/loading.gif">';
		 jQuery('.dzload').each(function(){
		 var dzsrc =   siteUrl + $(this).attr('dzsrc');
		  //jQuery(this).html(loadingImage);
		 	jQuery(this).hide(function(){
				jQuery(this).load(dzsrc, function(){
					jQuery(this).fadeIn('slow');
				}); 
			})
			
		 });
		
		if(screenWidth < 991)
		{
			if($('.mo-left .header-nav').children('.logo-header').length == 0){
				var logoData = jQuery('<div>').append($('.mo-left .logo-header').clone()).html();
				jQuery('.mo-left .header-nav').prepend(logoData);
				jQuery('.mo-left .header-nav .logo-header > a > img').attr('src','images/logo-black.png');
				jQuery('.mo-left.lw .header-nav .logo-header > a > img').attr('src','images/logo-white.png');
			}
		}else{
			jQuery('.mo-left .header-nav .logo-header').remove();
			jQuery('.mo-left.lw .header-nav .logo-header').remove();
		}
				
		if(screenWidth <= 991 ){
			jQuery('.navbar-nav > li > a, .sub-menu > li > a').unbind().on('click', function(e){
				if(jQuery(this).parent().hasClass('open'))
				{
					jQuery(this).parent().removeClass('open');
				}
				else{
					jQuery(this).parent().parent().find('li').removeClass('open');
					jQuery(this).parent().addClass('open');
				}
			});
		}
		
		if(screenWidth < 991 ){
			jQuery('.btn-click').unbind().on('click',function(){
				jQuery(this).parent('div').toggleClass('active');
				jQuery(this).next('p').slideToggle();
			});
		}else{
			jQuery('.btn-click').unbind().on('click',function(e){
				e.preventDefault;
			});
		}
	}
	
	/* Header Height ============ */
	var setResizeMargin = function(){
		if(($('.setResizeMargin').length > 0) && screenWidth >= 1280){
			var containerSize = $('.container').width();
			var getMargin = (screenWidth - containerSize)/2;
			$('.setResizeMargin').css('margin-left',getMargin);
		}
	}
	
	/* Scroll To Top ============ */
	var scrollTop = function (){
		'use strict';
		var scrollTop = jQuery("button.scroltop");
		/* page scroll top on click function */	
		scrollTop.on('click',function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		})

		jQuery(window).bind("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
		/* page scroll top on click function end*/
	}
	
	/* handle Accordian ============ */
	var handleAccordian = function(){
		/* accodin open close icon change */	 	
		jQuery('#accordion').on('hidden.bs.collapse', function(e){
			jQuery(e.target)
				.prev('.panel-heading')
				.find("i.indicator")
				.toggleClass('glyphicon-minus glyphicon-plus');
		});
		jQuery('#accordion').on('shown.bs.collapse', function(e){
			jQuery(e.target)
				.prev('.panel-heading')
				.find("i.indicator")
				.toggleClass('glyphicon-minus glyphicon-plus');
		});
		/* accodin open close icon change end */
	}
	
	/* handle Placeholder ============ */
	var handlePlaceholder = function(){
		/* input placeholder for ie9 & ie8 & ie7 */
		jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
		/* input placeholder for ie9 & ie8 & ie7 end*/
		
		/*fix for IE7 and IE8  */
		if (!jQuery.support.placeholder) {
			jQuery("[placeholder]").focus(function () {
				if (jQuery(this).val() == jQuery(this).attr("placeholder")) jQuery(this).val("");
			}).blur(function () {
				if (jQuery(this).val() == "") jQuery(this).val(jQuery(this).attr("placeholder"));
			}).blur();

			jQuery("[placeholder]").parents("form").submit(function () {
				jQuery(this).find('[placeholder]').each(function() {
					if (jQuery(this).val() == jQuery(this).attr("placeholder")) {
						 jQuery(this).val("");
					}
				});
			});
		}
		/*fix for IE7 and IE8 end */
		
	}
	
	
	var handlePlaceholderAnimation = function()
	{
		if(jQuery('.dezPlaceAni').length)
		{
		
			$('.dezPlaceAni input, .dezPlaceAni textarea').focus(function(){
			  $(this).parents('.form-group').addClass('focused');
			});
			
			$('.dezPlaceAni input, .dezPlaceAni textarea').blur(function(){
			  var inputValue = $(this).val();
			  if ( inputValue == "" ) {
				$(this).removeClass('filled');
				$(this).parents('.form-group').removeClass('focused');  
			  } else {
				$(this).addClass('filled');
			  }
			})
		}
	}
	
	/* Footer Align ============ */
	var footerAlign = function() {
		'use strict';
		jQuery('.site-footer').css('display', 'block');
		jQuery('.site-footer').css('height', 'auto');
		var footerHeight = jQuery('.site-footer').outerHeight();
		jQuery('.footer-fixed > .page-wraper').css('padding-bottom', footerHeight);
		jQuery('.site-footer').css('height', footerHeight);
	}
	
	/* Header Fixed ============ */
	var headerFix = function(){
		'use strict';
		/* Main navigation fixed on top  when scroll down function custom */		
		jQuery(window).bind('scroll', function () {
			if(jQuery('.sticky-header').length)
			{
				var menu = jQuery('.sticky-header');
				if ($(window).scrollTop() > menu.offset().top) {
					menu.addClass('is-fixed');
				} else {
					menu.removeClass('is-fixed');
				}
			}
		});
		/* Main navigation fixed on top  when scroll down function custom end*/
	}
	
	/* Masonry Box ============ */
	var masonryBox = function(){
		'use strict';
		/* masonry by  = bootstrap-select.min.js */
		if(jQuery('#masonry').length)
		{
			var self = $("#masonry");
			if(jQuery('.card-container').length)
		    {
				self.imagesLoaded(function () {
					self.masonry({
						gutterWidth: 15,
						isAnimated: true,
						itemSelector: ".card-container",
						//columnWidth: '.grid-sizer'
					});
				});
			}
		}
		if(jQuery('.filters').length)
		{
			jQuery(".filters").on('click','li',function(e) {
				e.preventDefault();
				var filter = $(this).attr("data-filter");
				self.masonryFilter({
					filter: function () {
						if (!filter) return true;
						return $(this).hasClass(filter);
					}
				});
			});
		}
		/* masonry by  = bootstrap-select.min.js end */
	}
	
	/* Counter Number ============ */
	var counter = function(){
		if(jQuery('.counter').length)
		{
			jQuery('.counter').counterUp({
				delay: 10,
				time: 3000
			});	
		}
	}
	
	/* Resizebanner ============ */
	var handleBannerResize = function(){
		$(".full-height").css("height", $(window).height());
	}
	
	/* Content Scroll ============ */
	var handleCustomScroll = function(){
		/* all available option parameters with their default values */
		if($(".content-scroll").length)
		{ 
			$(".content-scroll").mCustomScrollbar({
				setWidth:false,
				setHeight:false,
				axis:"y"
			});	
		}
	}
	
	/* WOW ANIMATION ============ */
	var wow_animation = function(){
		if($('.wow').length > 0)
		{
			var wow = new WOW(
			{
			  boxClass:     'wow',      // animated element css class (default is wow)
			  animateClass: 'animated', // animation css class (default is animated)
			  offset:       50,          // distance to the element when triggering the animation (default is 0)
			  mobile:       false       // trigger animations on mobile devices (true is default)
			});
			wow.init();	
		}	
	}
	
	/* Left Menu ============ */
	var handleSideBarMenu = function(){
		$('.openbtn').on('click',function(e){
			e.preventDefault();
			if($('#mySidenav').length > 0)
			{
				document.getElementById("mySidenav").style.left = "0";
			}

			if($('#mySidenav1').length > 0)
			{
				document.getElementById("mySidenav1").style.right = "0";
			}
			
		})
		
		$('.closebtn').on('click',function(e){
			e.preventDefault();
			if($('#mySidenav').length > 0)
			{
				document.getElementById("mySidenav").style.left = "-300px";
			}
			
			if($('#mySidenav1').length > 0)
			{
				document.getElementById("mySidenav1").style.right = "-820px";
			}
		})
	}
	
	
	var reposition = function (){
		'use strict';
		var modal = jQuery(this),
		dialog = modal.find('.modal-dialog');
		modal.css('display', 'block');
		
		/* Dividing by two centers the modal exactly, but dividing by three 
		 or four works better for larger screens.  */
		dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
	}
	
	var handelResize = function (){
		
		/* Reposition when the window is resized */
		jQuery(window).on('resize', function() {
			jQuery('.modal:visible').each(reposition);
			if(jQuery('.equal-wraper').length){
				equalHeight('.equal-wraper .equal-col');
			}
			footerAlign();
		});
	}
	
	// function([string1, string2],target id,[color1,color2])
	var dezText = function (words, id){
	 
		if($('#'+id).length > 0)
		{
			var visible = true;
			var letterCount = 1;
			var x = 1;
			var waiting = false;
			var target = document.getElementById(id);
			window.setInterval(function() {

				if (letterCount === 0 && waiting === false) {
					waiting = true;
					target.innerHTML = words[0].substring(0, letterCount);
					window.setTimeout(function() {
						var usedWord = words.shift();
						words.push(usedWord);
						x = 1;
						letterCount += x;
						waiting = false;
					}, 500)
				} else if (letterCount === words[0].length + 1 && waiting === false) {
					waiting = true;
					window.setTimeout(function() {
						x = -1;
						letterCount += x;
						waiting = false;
					}, 1000)
				} else if (waiting === false) {
					target.innerHTML = words[0].substring(0, letterCount);
					letterCount += x;
				}
			}, 70)
		}	
	}
	
	var handleSupport = function(){
		/* <!-- WhatsHelp.io widget --> */
		(function () {
			var options = {
				facebook: "326660834384842", // Facebook page ID
				whatsapp: "+91 8104415606", // WhatsApp number
				call_to_action: "May I Help You.", // Call to action
				button_color: "#db3535", // Color of button
				position: "left", // Position may be 'right' or 'left'
				order: "facebook,whatsapp", // Order of buttons
			};
			var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
			var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
			s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
			var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
		})();
		
		/* <!-- WhatsHelp.io widget --> */
	}
	
	var handleOwlCarousel = function(){
		/*  Our Classes function by = owl.carousel.js */
			jQuery('.item-center').owlCarousel({
				center: true,
				autoplay:false,
				items:3,
				loop:true,
				margin:0,
				nav:false,
				dots:true,
				autoplaySpeed: 1000,
				navSpeed: 1000,
				paginationSpeed: 1000,
				slideSpeed: 1000,
				navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
				responsive:{
					0:{
						items:1
					},
					
					480:{
						items:1
					},			
					
					767:{
						items:2
					},
					1000:{
						items:3
					}
				}
			});
			
			/*  Blog post Carousel function by = owl.carousel.js */
			jQuery('.our-services').owlCarousel({
				loop:true,
				autoplay:false,
				margin:0,
				nav:true,
				dots: false,
				navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
				responsive:{
					0:{
						items:1.25,
						margin:0,
						center: true
					},
					480:{
						items:1,
						margin:0,
						center: true,
						stagePadding: 30
					},				
					991:{
						items:2
					},
					1000:{
						mouseDrag:false,
						items:3
					}
				}
			});
	}
	
	var contactForm = function(){
		window.verifyRecaptchaCallback = function (response) {
			$('input[data-recaptcha]').val(response).trigger('change');
		}

		window.expiredRecaptchaCallback = function () {
			$('input[data-recaptcha]').val("").trigger('change');
		}
		'use strict';
		var msgDiv;
		$(".dzForm").submit(function(e)
		{
			e.preventDefault();	//STOP default action
			$('.dzFormMsg').html('<div class="gen alert alert-success">Submitting..</div>');
			var dzFormAction = $(this).attr('action');
			var dzFormData = $(this).serialize();
			
			$.ajax({
				method: "POST",
				url: dzFormAction,
				data: dzFormData,
				dataType: 'json',
				success: function(dzRes){
					if(dzRes.status == 1){
						msgDiv = '<div class="gen alert alert-success">'+dzRes.msg+'</div>';
					}
					
					if(dzRes.status == 0){
						msgDiv = '<div class="err alert alert-danger">'+dzRes.msg+'</div>';
					}
					$('.dzFormMsg').html(msgDiv);
					$('.dzForm')[0].reset();
					grecaptcha.reset();
				}
			})
		});
		
		
		setInterval(function(){
			$('.dzFormMsg .alert').hide(1000);
		}, 10000);
		
		
		/* This function is for mail champ subscription START*/
		
		$(".dzSubscribe").submit(function(e)
		{
			e.preventDefault();	//STOP default action
			var dzFormAction = $(this).attr('action');
			var dzFormData = $(this).serialize();
			$.ajax({
				method: "POST",
				url: dzFormAction,
				data: dzFormData,
				dataType: 'json',
			  success: function(dzRes) {
				if(dzRes.status == 1){
					msgDiv = '<p style="color: #ffffff">'+dzRes.msg+'</p>';
				}
				if(dzRes.status == 0){
					msgDiv = '<p style="color: #ffffff">'+dzRes.msg+'</p>';
				}
				$('.dzSubscribeMsg').html(msgDiv);
				$('.dzSubscribe')[0].reset();
				
				setTimeout(function(){
					$('.dzSubscribeMsg p').hide(1000);
				}, 5000);
				
			  }
			})
		});
		
		/* This function is for mail champ subscription END*/
	}
	var formValition = function(){
	    if($('.interger-number').length > 0){
	        $(".interger-number").on("keypress keyup blur",function (event) {    
    	       $(this).val($(this).val().replace(/[^\d].+/, ""));
                if(event.which == 8){
                    
                }else{
                     if ((event.which < 48 || event.which > 57)) {
                        event.preventDefault();
                    }
                }
            });
	    }
	}
	/* Function ============ */
	return {
		init:function(){
			wow_animation();
			dzTheme();
			handleResizeElement();
			handleAccordian();
			scrollTop();
			handlePlaceholder();
			handlePlaceholderAnimation();
			footerAlign();
			headerFix();
			handleCustomScroll();
			handleSideBarMenu();
			handleBannerResize();
			setResizeMargin();
			handelResize();
			jQuery('.modal').on('show.bs.modal', reposition);
			dezText(['Web Design', 'Web App Development', 'Website Optimization', 'WordPress Development', 'Custom Development', 'Business Application', 'Mobile App Development'], "printText");
			handleOwlCarousel();
			contactForm();
			formValition();
		},
				
		load:function(){
			//counter();
			masonryBox();
			//handleSupport();
		},
		
		resize:function(){
			screenWidth = $(window).width();
			dzTheme();
			handleResizeElement();
			handleSideBarMenu();
			setResizeMargin();
			
		}
	}
	
}();

/* Document.ready Start */	
jQuery(document).ready(function() {
    'use strict';
	DexignLab.init();
	
	
	//jQuery('#loading-area').find('div').addClass('la-animate');
	$(".dez-page").on('click',function(){
		if ($(this).attr('href') != '#' || $(this).attr('href') != '') 
		{
			jQuery('#loading-area').find('div').addClass('la-animate');			
		}
	});
	
	jQuery('.post-tabs').hover(function(){
		jQuery('.post-tabs').removeClass('active');
		jQuery('.life-style-post-bx').removeClass('show');
		jQuery(this).addClass('active')
		jQuery('#'+$(this).attr('show-tab')).addClass('show');
	});

	jQuery('.navicon').on('click',function(){
		$(this).toggleClass('open');
	});
});
/* Document.ready END */

/* Window Load START */
jQuery(window).on("load", function (e) {
	DexignLab.load();
	 /* setTimeout(function(){
		jQuery('#loading-area').remove();
	}, 0);  */
});
/*  Window Load END */
/* Window Resize START */
jQuery(window).on('resize',function () {
	'use strict'; 
	DexignLab.resize();
});
/*  Window Resize END */
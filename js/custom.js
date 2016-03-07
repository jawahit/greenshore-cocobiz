/* -----------------------------
Pre Loader
----------------------------- */
// $(window).load(function() {
// 	'use strict';
// 	$('.loading-icon').delay(100).fadeOut();
// 	$('#preloader').delay(100).fadeOut('slow');
// });



/* -----------------------------
Backgroung slider
----------------------------- */
// $(window).ready(function() {
// 	'use strict';
// 	$.vegas('slideshow', {
// 	  backgrounds:[
// 		{ src:'images/bg-slider/bg-1.jpg', fade:1000 },
// 		{ src:'images/bg-slider/bg-2.jpg', fade:1000 },
// 		{ src:'images/bg-slider/bg-3.jpg', fade:1000 }
// 	  ]
// 	})();
// });

/* ------------------------
Animation slider - GreenShore
-------------------------*/

$(window).ready(function(){

		$(".anim-slider").animateSlider(
				 	{
				 		autoplay	:true,
				 		interval	:7000,
				 		animations 	:
						{
							0	: 	//Slide No1
							{
	              img :
	              {
									show   	  : "bounceIn",
									hide 	  : "flipOutX",
									delayShow : "delay1s"
							  },
			 					h2:
			 					{
			 						show 	  : "fadeInUpBig",
									hide 	  : "fadeOutDownBig",
									delayShow : "delay1-5s"
			 					},
			 					h3 	:
			 					{
									show   	  : "bounceInRight",
									hide 	  : "fadeOutRightBig",
									delayShow : "delay1-5s"
			 					},
			 					h4:
			 					{
			 						show 	  : "bounceInUp",
									hide 	  : "fadeOutLeftBig",
									delayShow : "delay2s"
								}
							},
							1	: 	//Slide No1
							{
								img :
								{
									show   	  : "bounceIn",
									hide 	  : "flipOutX",
									delayShow : "delay0s"
								},
								h2:
								{
									show 	  : "bounceInDown",
									hide 	  : "bounceOutLeft",
									delayShow : "delay2-5s"
								},
								h3 	:
								{
									show   	  : "bounceInRight",
									hide 	  : "fadeOutRightBig",
									delayShow : "delay1-5s"
								},
								h4:
								{
									show 	  : "bounceInRight",
									hide 	  : "fadeOutLeftBig",
									delayShow : "delay2s"
								}
							},
							2	: 	//Slide No2
							{
								img :
								{
									show   	  : "bounceIn",
									hide 	  : "flipOutX",
									delayShow : "delay0s"
								},
								h2:
								{
									show 	  : "flipInY",
									hide 	  : "flipOutY",
									delayShow : "delay1-5s"
								},
								h3 	:
								{
									show 	  : "flipInY",
									hide 	  : "flipOutY",
									delayShow : "delay1-5s"
								},
								h4:
								{
									show 	  : "bounceInUp",
									hide 	  : "fadeOutLeftBig",
									delayShow : "delay2s"
								}
							},
							3	: 	//Slide No3
							{
								img :
								{
									show   	  : "bounceIn",
									hide 	  : "flipOutX",
									delayShow : "delay0s"
								},
								h2:
								{
									show 	  : "rollIn",
									hide 	  : "flipOutY",
									delayShow : "delay1-5s"
								},
								h3 	:
								{
									show   	  : "lightSpeedIn",
									hide 	  : "flipOutY",
									delayShow : "delay1-5s"
								},
								h4:
								{
									show 	  : "bounceInUp",
									hide 	  : "fadeOutLeftBig",
									delayShow : "delay2s"
								}
							},
							4	: 	//Slide No4
							{
								img :
								{
									show   	  : "bounceIn",
									hide 	  : "flipOutX",
									delayShow : "delay0s"
								},
								h2:
								{
									show 	  : "fadeInUpBig",
									hide 	  : "fadeOutDownBig",
									delayShow : "delay1-5s"
								},
								h3 	:
								{
									show 	  : "fadeInUpBig",
									hide 	  : "fadeOutDownBig",
									delayShow : "delay1-5s"
								},
								h4:
								{
									show   	  : "bounceIn",
									hide 	  : "flipOutX",
									delayShow : "delay0s"
								}
							},
							5	: 	//Slide No5
							{
								img :
								{
									show   	  : "bounceIn",
									hide 	  : "flipOutX",
									delayShow : "delay0s"
								},
								h2:
								{
									show 	  : "fadeInUpBig",
									hide 	  : "fadeOutDownBig",
									delayShow : "delay1-5s"
								},
								h3 	:
								{
									show   	  : "bounceInRight",
									hide 	  : "fadeOutRightBig",
									delayShow : "delay1-5s"
								},
								h4:
								{
									show 	  : "bounceInUp",
									hide 	  : "fadeOutLeftBig",
									delayShow : "delay2s"
								}
							},
							6	: 	//Slide No1
							{
								img :
								{
									show   	  : "bounceIn",
									hide 	  : "flipOutX",
									delayShow : "delay1s"
								},
								h2:
								{
									show 	  : "fadeInUpBig",
									hide 	  : "fadeOutDownBig",
									delayShow : "delay1-5s"
								},
								h3 	:
								{
									show   	  : "rotateInUpRight",
									hide 	  : "rotateOutDownRight",
									delayShow : "delay1-5s"
								},
								h4:
								{
									show 	  : "bounceInUp",
									hide 	  : "fadeOutLeftBig",
									delayShow : "delay2s"
								}
							},
							7	: 	//Slide No1
							{
								img :
								{
									show   	  : "bounceIn",
									hide 	  : "flipOutX",
									delayShow : "delay1s"
								},
								h2:
								{
									show 	  : "fadeInUpBig",
									hide 	  : "fadeOutDownBig",
									delayShow : "delay1-5s"
								},
								h3 	:
								{
									show 	 	: "rotateInUpLeft",
							  	hide 	 	: "rotateOutDownLeft",
									delayShow : "delay1-5s"
								},
								h4:
								{
									show 	  : "bounceInUp",
									hide 	  : "fadeOutLeftBig",
									delayShow : "delay2s"
								}
							},
							8	: 	//Slide No1
							{
								img :
								{
									show   	  : "bounceIn",
									hide 	  : "flipOutX",
									delayShow : "delay1s"
								},
								h2:
								{
									show 	  : "fadeInUpBig",
									hide 	  : "fadeOutDownBig",
									delayShow : "delay1-5s"
								},
								h3 	:
								{
									show 	 	: "rotateIn",
						   		hide 	 	: "rotateOut",
									delayShow : "delay1-5s"
								},
								h4:
								{
									show 	  : "bounceInUp",
									hide 	  : "fadeOutLeftBig",
									delayShow : "delay2s"
								}
							},
							9	: 	//Slide No1
							{
								img :
								{
									show   	  : "bounceIn",
									hide 	  : "flipOutX",
									delayShow : "delay1s"
								},
								h2:
								{
									show 	  : "fadeInUpBig",
									hide 	  : "fadeOutDownBig",
									delayShow : "delay1-5s"
								},
								h3 	:
								{
									show   	  : "bounceInRight",
									hide 	  : "fadeOutRightBig",
									delayShow : "delay1-5s"
								},
								h4:
								{
									show 	  : "bounceInUp",
									hide 	  : "fadeOutLeftBig",
									delayShow : "delay2s"
								}
							}
						}
				 	});

	//demo2
	// $(".anim-slider").animateSlider(
	// 	 	{
	// 	 		autoplay	:true,
	// 	 		interval	:1000,
	// 	 		animations 	:
	// 			{
	// 				0	: 	//Slide No1
	// 				{
	// 					li	:
	// 					{
	// 						show   	  : "fadeIn",
	// 						hide 	  : "fadeOutLeftBig",
	// 						delayShow : "delay0.5s"
	//  					},
	//  					"#looks"	:
	//  					{
	//  						show 	  : "rotateInUpLeft",
	// 						delayShow : "delay1s"
	//  					},
	//  					"#amazing" 	:
	//  					{
	// 						show   	  : "rotateInUpLeft",
	// 						delayShow : "delay1-5s"
	//  					},
	//  					"#place"	:
	//  					{
	//  						show 	  : "rotateInUpLeft",
	// 						delayShow : "delay2s"
	// 					}
	// 				},
	// 				1	: //Slide No2
	// 				{
	// 					li			:
	// 					{
	// 						show 		: "fadeInLeft",
	// 						hide 		: "fadeOutLeftBig",
	// 						delayShow   : "delay0-5s"
	// 					},
	// 					"#img1"		:
	// 					{
	// 						show 		: "fadeInRight",
	// 						delayShow   : "delay2s"
	// 					},
	// 					"#img2"		:
	// 					{
	// 						show 		: "fadeInLeft",
	// 						delayShow   : "delay3s"
	//
	// 					},
	// 					"#img3"		:
	// 					{
	// 						show 		: "fadeInRight",
	// 						hide 		: "fadeOutLeftBig",
	// 						delayShow   : "delay4s"
	// 					}
	// 				},
	// 				2:
	// 				{
	// 					li			:
	// 					{
	// 						show 		: "fadeInUp",
	// 						hide 		: "fadeOutDownBig",
	// 						delayShow   : "delay0-5s"
	// 					},
	// 					"#T"			:
	// 					{
	// 						show 		: "slideInLeft",
	// 						delayShow   : "delay1-5s"
	// 					},
	// 					"#r"			:
	// 					{
	// 						show 		: "bounceInRight",
	// 						delayShow   : "delay2s"
	// 					},
	// 					"#y"			:
	// 					{
	// 						show 		: "fadeInRight",
	// 						delayShow   : "delay2-5s"
	// 					},
	// 					"#i"			:
	// 					{
	// 						show 		: "rollIn",
	// 						delayShow   : "delay3s"
	// 					},
	// 					"#t"			:
	// 					{
	// 						show 		: "rollIn",
	// 						delayShow   : "delay3s"
	// 					},
	// 					"#mark"			:
	// 					{
	// 						show 		: "rotateIn",
	// 						delayShow   : "delay3-5s"
	// 					},
	// 				}
	// 			}
	// 	 	});
	});


/* -----------------------------
Scroll into viewPort Animation
----------------------------- */
$(document).ready(function() {
	'use strict';
	$('.animated').appear(function() {
		var element = $(this),
			animation = element.data('animation'),
			animationDelay = element.data('animation-delay');
			if ( animationDelay ) {

				setTimeout(function(){
					element.addClass( animation + " visible");
				}, animationDelay);

			} else {
				element.addClass( animation + " visible");
			}
	});
});


/* -----------------------------
NiceScroll
----------------------------- */
$(document).ready(function() {
	'use strict';
    $("html").niceScroll({
		cursorcolor: '#E74C3C',
		cursoropacitymin: '1',
		cursorborder: '0px',
		cursorborderradius: '0px',
		cursorwidth: '5px',
		cursorminheight: 60,
		horizrailenabled: false,
		zindex: 1090
	});
  });





/* -----------------------------
Card Style Script
----------------------------- */
$(document).ready(function() {
	'use strict';
	var $el 			= $( '#card-ul' ),
		sectionFeature  = $('#section-products'),
		baraja 			= $el.baraja();

		if ( $(window).width() > 480) {
			sectionFeature.appear(function(){
				baraja.fan({
					speed : 1500,
					easing : 'ease-out',
					range : 100,
					direction : 'right',
					origin : { x : 50, y : 200 },
					center : true
				});
			});
			$('#feature-expand').click(function() {
				baraja.fan({
					speed : 500,
					easing : 'ease-out',
					range : 100,
					direction : 'right',
					origin : { x : 50, y : 200 },
					center : true
				});
			});
		} else {
			sectionFeature.appear(function(){
				baraja.fan({
					speed : 1500,
					easing : 'ease-out',
					range : 80,
					direction : 'left',
					origin : { x : 200, y : 50 },
					center : true
				});
			});
			$('#feature-expand').click(function() {
				baraja.fan({
					speed : 500,
					easing : 'ease-out',
					range : 80,
					direction : 'left',
					origin : { x : 200, y : 50 },
					center : true
				});
			});
		}

	// Feature navigation
	$('#feature-prev').on( 'click', function( event ) {
		baraja.previous();
	});

	$('#feature-next').on( 'click', function( event ) {
		baraja.next();
	});

	// close Features
	$('#feature-close').on( 'click', function( event ) {
		baraja.close();
	});
});

/* -----------------------------
Fitvids init
----------------------------- */
 $(document).ready(function(){
    'use strict';
    $('.video-content').fitVids();
 });


/* -----------------------------
IE 9 Placeholder fix
----------------------------- */
$('[placeholder]').focus(function() {
  var input = $(this);
  if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
  }
}).blur(function() {
  var input = $(this);
  if (input.val() == '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
  }
}).blur();



/* -----------------------------
Screenshot Load
----------------------------- */
// $(document).ready(function() {
// 	'use strict';
// 	$('.view-project').on('click', function(e) {
// 		e.preventDefault();
//
// 		var href 			= $(this).attr('href') + ' .portfolio-project',
// 			portfolioWrap	= $('.porfolio-container'),
// 			contentLoaded 	= $('#portfolio-load'),
// 			offset			= $('#section-screenshots').offset().top;
//
// 		portfolioWrap.animate({'left':'-120%'},{duration:400,queue:false});
// 		portfolioWrap.fadeOut(400);
// 		$('html, body').animate({scrollTop: offset},{duration:800,queue:true});
// 		setTimeout(function(){ $('#portfolio-loader').fadeIn('fast'); },300);
//
// 		setTimeout(function(){
//             contentLoaded.load(href, function(){
//                 $('#portfolio-loader').fadeOut('fast');
//                 contentLoaded.fadeIn(600).animate({'left':'0'},{duration:800,queue:false});
//                 $('.back-button').fadeIn(600);
//             });
//         },400);
//
//
//
// 	});
//
// 	$('.backToProject').on('click', function(e){
// 		e.preventDefault();
//
// 		var portfolioWrap	= $('.porfolio-container'),
// 			contentLoaded 	= $('#portfolio-load');
//
// 		contentLoaded.animate({'left':'105%'},{duration:400,queue:false}).delay(300).fadeOut(400);
//         $(this).parent().fadeOut(400);
// 		setTimeout(function(){
//             portfolioWrap.animate({'left':'0'},{duration:400,queue:false});
//             portfolioWrap.fadeIn(600);
//         },500);
//
// 	});
//
// });



/* -----------------------------
BxSlider old image background slider
----------------------------- */
// $(document).ready(function() {
// 	'use strict';
// 	$('.testimonial-slider').bxSlider({
// 		pagerCustom: '#bx-pager',
// 		pager: true,
// 		touchEnabled: true,
// 		controls: false
// 	});
// });


/* -----------------------------
Main navigation
----------------------------- */
$(document).ready(function() {
	'use strict';
	$('.nav').onePageNav({
		currentClass: 'current',
		scrollSpeed: 1000,
		easing: 'easeInOutQuint'
	});
	$(window).bind('scroll', function(e) {
		var scrollPos = $(window).scrollTop();
		scrollPos > 220 ? $('.sticky-section').addClass('nav-bg') : $('.sticky-section').removeClass('nav-bg');
	});
});

/* cocopeat benefits  starts*/

$('.my-flipster').flipster({
	   style: 'carousel',
	   loop:true,
	   buttons:true,
	   spacing: -0.5
	 });

$(".overlay").hover(
        function() {
            $(".overlay-desc").toggleClass("on");
						$(".see-more").toggleClass("display-block");
});
/* cocopeat benefits  starts*/




/* -----------------------------
MailCimp Plugin Script
----------------------------- */
$(document).ready(function() {
	'use strict';
	$('#subscription-form').ajaxChimp({
		callback: mailchimpCallback,
		url: 'YOUR_URL' /* Replace it with your custom URL inside '' */
	});

	function mailchimpCallback(resp) {
		 if(resp.result === 'success') {
			$('.subscription-success')
				.html(resp.msg)
				.delay(500)
				.fadeIn(1000);

			$('.subscription-success').fadeOut(8000);

		} else if(resp.result === 'error') {
			$('.subscription-failed')
				.html(resp.msg)
				.delay(500)
				.fadeIn(1000);

			$('.subscription-failed').fadeOut(5000);
		}
		$('#subscription-form .input-email').val('');
	};
});



/* -----------------------------
Contact form
----------------------------- */
$(document).ready(function() {
	'use strict';
	$('form.contact-form').on('submit', function(e) {
		$.post('contact/subscribe.php', $(this).serialize(), function(response) {
			if ($('.confirmation p').html() != "") {
				$('.confirmation p').replaceWith('<p><span class="fa fa-check"></span></p>');
			}
			$('.confirmation p').append(response).parent('.confirmation').show();
			$('html, body').animate({
				scrollTop: $('#section-contact').offset().top
				},{duration:800,queue:true});
			$('.form-item').val('');
			setTimeout(function() {
				$('.confirmation').hide();
			}, 8000);
		});
		// disable default action
		e.preventDefault();
	});

});


// collapse nav bar
// ------------------
$(window).resize(function() {
  if ($(this).width() < 768) {
    //do something
		$('.nav a').on('click', function(){
			$('.navbar-toggle').click() //bootstrap 3.x by Richard
		});
  }
});

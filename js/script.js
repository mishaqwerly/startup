$(document).ready(function() {

	// navigation for scroll
	var navLinks = $('.nav ul li a'),
  	navH = $(".nav").height(),
  	section = $('section'),
  	documentEl = $(document);
  	
  	documentEl.scroll(function () {
  		var currentScrollPos = documentEl.scrollTop();
  		section.each(function () {
  			var selfSection = $(this);
  			if ( selfSection.offset().top < (currentScrollPos + navH + 300) && (currentScrollPos + navH + 300) < (selfSection.offset().top + selfSection.outerHeight()) ) {
  				var targetClass = '.' + selfSection.attr('class') + '-link';
  				navLinks.removeClass('active');
  				$(targetClass).addClass('active');
  			} else {}
  		});
  	});

  	// navigation for click
	$('.menu ul li a').click(function (event) {
		event.preventDefault();
		var linkId = $(this).attr('href');
		var linkPosition = $(linkId).offset().top;
		$('body,html').animate({scrollTop: linkPosition}, 1000);
		$('.menu ul li a').removeClass('active');
		$(this).addClass('active');
	});

	//emerging menu for click
	$('.top-nav-btn').click(function() {
		$('.menu').toggleClass('d-block');
	});

	//emerging menu for resize
	$(window).resize(function() {
		if ($(window).width() > 767) {
			$('.menu').removeClass('d-block');
		};
	});

	// slick feedback-slider
	$('.feedback-slider').slick({
		autoplaySpeed: 3000,
		autoplay: true,
		dots: true,
		arrows: false,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		infinite: true
	});

	// slick team-slider	
	$('.team-slider').slick({
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 2000,
		responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      }
    }
  		]
	});

	//isotope works-section
	$(".our-works-isotope").isotope({
		itemSelector: '.single-work',
		layoutMode: 'fitRows'
	});

	$('.work-link').click(function () {
		$('.work-link').removeClass('active-work-link');
		$(this).addClass('active-work-link');

		var selector = $(this).attr('data-filter');
		$(".our-works-isotope").isotope({
			filter: selector
		});
		return false;
	});

});
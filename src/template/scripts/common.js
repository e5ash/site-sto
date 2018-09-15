$(document).ready(function($) {

	var bg = $('.bg'),
			bgClass = 'bg_toggle';

	// input type phone mask 
	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');


	// nav Drop
	var navDrop = $('.nav-drop'),
			navDropWrap = $('.nav-drop__list'),
			navDropClass = 'nav-drop__list_toggle';

	function hoverNav(){
		navDropWrap.addClass(navDropClass);
		bg.addClass(bgClass);
	}

	function unhoverNav(){
		navDropWrap.removeClass(navDropClass);
		bg.removeClass(bgClass);
	}

	navDrop.hover(function() {
		hoverNav();
	}, function() {
		unhoverNav();
	});

	$('.nav__list > ul > li').hover(function() {
		bg.addClass(bgClass);
	}, function() {
		bg.removeClass(bgClass);
	});



	// nav items arrow
	$('.nav-drop__list ul, .mobile-nav__list ul').each(function(index, el) {
		var li = $(this).parents('li');

		li.addClass('has-subnav');
	});



	// Init main slider
	var slider = $('.slider__list');
	slider.slick({
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000
	})


	// service toggle

	$('.services__title').click(function() {
		var servicesItem = $(this).parents('.services__item'),
				servicesText = servicesItem.find('.services__text');

		servicesItem.toggleClass('services__item_toggle');
		servicesText.slideToggle(300);
	});


	// ol in text
	$('.text ol').each(function(index, el) {
		var li = $(this).find('li');

		li.each(function(index, el) {
			$(this).prepend('<span class="count">'+ (index + 1) +'.</span>')
		});
	});




	// stars
	$('.star').click(function(event) {
		var starsPrev = $(this).prevAll('.star'),
				starsNext = $(this).nextAll('.star'),
				starText = $(this).find('input').attr('data-text');

		starsPrev.addClass('star_o');
		$(this).addClass('star_o')
		starsNext.removeClass('star_o');

		// starsText.html(starText);
	});


	// elements form
	function valueElementForm(nameElement, nameBlock) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($(nameBlock)),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('input', 'input');
	valueElementForm('textarea', 'textarea');
	valueElementForm('file', 'input');
	valueElementForm('policy', 'input');
	

	// mobile nav

	var mobileNav = $('.mobile-nav'),
			mobileNavClass = 'mobile-nav_toggle',
			mobileNavClose = $('.mobile-nav__close'),
			mobileNavReturn = $('.mobile-nav__return'),
			mobileNavReturnClass = 'mobile-nav__return_show',
			mobileNavTitle = $('.mobile-nav__title'),
			humburger = $('.hum');


	humburger.click(function() {
		mobileNav.addClass(mobileNavClass);
	});

	mobileNavClose.click(function(event) {
		mobileNav.removeClass(mobileNavClass);
	});


	$('.mobile-nav__list a').click(function(event) {
		var href = $(this).attr('href'),
				text = $(this).text();

		if (href == '#') {
			event.preventDefault();
			mobileNavTitle.html(text);
			mobileNavReturn.addClass(mobileNavReturnClass);
		}
		var ul = $(this).parents('ul'),
				ulSub = $(this).siblings('ul');
		ul.addClass('minus');
		ulSub.addClass('visible');
	});

	mobileNavReturn.click(function(event) {
		var ul = mobileNav.find('ul.minus > li > ul.visible'),
				ulParent = ul.parents('ul');

		if (ulParent.hasClass('visible')) {
			ulParent = ul.parents('ul.minus.visible');
			ulParent.addClass('visible');
		} else{
			ul.removeClass('visible');
		}
		if (ulParent.hasClass('main-ul')) {
			mobileNavTitle.html('');
			mobileNavReturn.removeClass(mobileNavReturnClass);
		} else{
			var link = ulParent.prev('a').text();
			mobileNavTitle.html(link);
		}
		

		ulParent.removeClass('minus');	
		
	});

	// footer nav

	$('.footer__title').click(function() {
		var nav = $(this).next('.footer__nav');
		$(this).toggleClass('footer__title_toggle');
		nav.slideToggle(300);
	});



	// sliders mobile

  $advantages = $('.advantages__list');
  $photos = $('.photos__list');
  $certificates = $('.certificates__list');

  var settings_one = {
    dots: true,
    arrows: false
  }

  var settings_two = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false
  }

  slick_on_mobile( $advantages, settings_one);
  slick_on_mobile( $photos, settings_two);
  slick_on_mobile( $certificates, settings_two);

  function slick_on_mobile(slider, settings){
    $(window).on('load resize', function() {
      if (document.body.clientWidth > 752) {
        if (slider.hasClass('slick-initialized')) {
          slider.slick('unslick');
        }
        return
      }
      if (!slider.hasClass('slick-initialized')) {
        return slider.slick(settings);
      }
    });
  };
});

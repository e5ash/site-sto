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



	// nav items arrow
	$('.nav-drop__list ul').each(function(index, el) {
		var li = $(this).parents('li');

		li.addClass('has-subnav');
	});



	// Init main slider
	var slider = $('.slider__list');
	slider.slick({
		dots: true,
		fade: true
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


});

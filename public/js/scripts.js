"use strict";

$(function() {
	formStep();

});

function formStep(){
	$('.js-next-step').on('click', function(e) {
		e.preventDefault();
		var stepNumber    = $(this).attr('data-step')
		  , stepContainer = $('.js-step' + stepNumber)
		;

		if (stepNumber == 4) {
			$('.form-container section').removeClass('active');
			$(stepContainer).addClass('active');
			submitData();
		} else {
			$('.form-container section').removeClass('active');
			$(stepContainer).addClass('active');
		}
	})
}

function submitData(){
	$('.js-submit').on('click', function(){

		var interests = $('input:radio[name=interests]:checked').val()
		  , education = $('input:radio[name=education]:checked').val()
		  , name      = $('input[name=name]').val()
		  , email     = $('input[name=email]').val()
		  , phone     = $('input[name=phone]').val()
		  , zip	      = $('input[name=zip]').val()
		;

		$('.js-interests-container').html('Interests: ' + interests);
		$('.js-education-container').html('Education: ' + education);
		$('.js-name-container').html('Name: ' + name);
		$('.js-email-container').html('Email: ' + email);
		$('.js-phone-container').html('Phone: ' + phone);
		$('.js-zip-container').html('Zip Code: ' + zip);

	});
}

$(document).ready(function(){
  $('.bxslider').bxSlider();
});


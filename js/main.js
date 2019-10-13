$(document).ready(function() {
	var year = new Date().getFullYear();
	$('.current_year').text(year);

	$('.nav-link').on('click', function() {
		var head_id = $(this).attr('href');
		$('#navbarResponsive').collapse('hide');
		if(head_id) {
			var head = $(head_id);
			$('html,body').animate({scrollTop: head.offset().top - 58 },'slow');
		}
	});

	var hashtag = window.location.hash.substr(1);
	if(hashtag == 'success') {
		alert("Thank you for contacting MM Engineers Trichy, we will get back to you within 24 hours!");
		window.location.hash = '';
	}
});


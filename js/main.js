$(document).ready(function() {
	var year = new Date().getFullYear();
	$('.current_year').text(year);

	$('.nav-link').on('click', function() {
		var head_id = $(this).attr('href');
		var head = $(head_id);
		$('#navbarResponsive').collapse('hide');
		$('html,body').animate({scrollTop: head.offset().top - 58 },'slow');
	});
});



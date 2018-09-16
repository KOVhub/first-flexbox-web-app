$(function(){
	
	'use strict';
	
	
	$('a[href^="#"]').click(function(){
		let target = $(this).attr('href');
		$('html, body').animate(
			{
				scrollTop: $(target).offset().top
			},
			800
		);
	});
	
	
	
	let offset = $('#bottom-header').offset();
	
	$(window).scroll( function () {
		if( $(window).scrollTop() > offset.top) {
			$('#bottom-header').addClass('fixedNav');
		} else {
			$('#bottom-header').removeClass('fixedNav');
		}
			
	});
	
			
	
	if(window.innerWidth > 1024) {
			$('#slide').slick( {
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
		});
	} else {
		$('#slide').slick( {
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
		});
	}
		

	
	$('#view-all-gallery').click(function(){
		let content = '<div class="gallery-line"><div class="box-img-gallery"><img src="img/img01.jpg" alt="image01"></div><div class="box-img-gallery"><img src="img/img02.jpg" alt="image02"></div></div><div class="name-gallery"><span>Marina Palms / <span class="blue">North Miami Beach, FL 33162</span></span></div>';
	 	$('#gallery-box').append(content);
//		$(this).remove();
	});
	
	
	
	$('#call').click(function(){
		$('#modal-box, #black-fill').addClass('content-show');
	});
	
	$('#close-modal, #black-fill').click(function(){
		$('#modal-box, #black-fill').removeClass('content-show');
	});
	
});
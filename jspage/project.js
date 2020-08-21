$(function () {
	
	//------------------------------------ Эффект Параллакса хедера-----------------------------------------
	var projectHeader = $(".project-header");
	$(window).scroll(function() {
		var st = $(this).scrollTop();
		if (st < 400) {
			st = st * 0.23;
			projectHeader.css({
				"transform": "translate(0%, " + st + "%)"
			});
		}		
	});

	//------------------------------------ Twenty Twenty -----------------------------------------
	$('.project-image').imagesLoaded(function() {
		$('.project-image-container').twentytwenty();
	});

	//------------------------------------ Настройка контента на странице проекта --------------------
	// var ll = $(".project-decript-paragraph-content").html();
	// if (ll != null && ll.length == 0) {
	// 	$(".project-decript-header").removeClass("col");
	// 	$(".project-decript-header").removeClass("col-md-5");
	// 	$(".project-decript-header").removeClass("col-lg-4");	
	// 	$(".project-decript-header").addClass("col-12");
	// }
});
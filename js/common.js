// jQuery
$(function () {
	//================================= svg-icon =================================
	// var vkSvg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"	x="0px" y="0px" width="30px" height="30px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">	 <path d="M47.761,24c0,13.121-10.639,23.76-23.76,23.76C10.878,47.76,0.239,37.121,0.239,24c0-13.123,10.639-23.76,23.762-23.76C37.122,0.24,47.761,10.877,47.761,24 M35.259,28.999c-2.621-2.433-2.271-2.041,0.89-6.25c1.923-2.562,2.696-4.126,2.45-4.796c-0.227-0.639-1.64-0.469-1.64-0.469l-4.71,0.029c0,0-0.351-0.048-0.609,0.106c-0.249,0.151-0.414,0.505-0.414,0.505s-0.742,1.982-1.734,3.669c-2.094,3.559-2.935,3.747-3.277,3.524c-0.796-0.516-0.597-2.068-0.597-3.171c0-3.449,0.522-4.887-1.02-5.259c-0.511-0.124-0.887-0.205-2.195-0.219c-1.678-0.016-3.101,0.007-3.904,0.398c-0.536,0.263-0.949,0.847-0.697,0.88c0.31,0.041,1.016,0.192,1.388,0.699c0.484,0.656,0.464,2.131,0.464,2.131s0.282,4.056-0.646,4.561c-0.632,0.347-1.503-0.36-3.37-3.588c-0.958-1.652-1.68-3.481-1.68-3.481s-0.14-0.344-0.392-0.527c-0.299-0.222-0.722-0.298-0.722-0.298l-4.469,0.018c0,0-0.674-0.003-0.919,0.289c-0.219,0.259-0.018,0.752-0.018,0.752s3.499,8.104,7.573,12.23c3.638,3.784,7.764,3.36,7.764,3.36h1.867c0,0,0.566,0.113,0.854-0.189c0.265-0.288,0.256-0.646,0.256-0.646s-0.034-2.512,1.129-2.883c1.15-0.36,2.624,2.429,4.188,3.497c1.182,0.812,2.079,0.633,2.079,0.633l4.181-0.056c0,0,2.186-0.136,1.149-1.858C38.281,32.451,37.763,31.321,35.259,28.999"></path> </svg>';
	// var facebookSvg = '<svg  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve"> <path d="M47.761,24c0,13.121-10.638,23.76-23.758,23.76C10.877,47.76,0.239,37.121,0.239,24c0-13.124,10.638-23.76,23.764-23.76C37.123,0.24,47.761,10.876,47.761,24 M20.033,38.85H26.2V24.01h4.163l0.539-5.242H26.2v-3.083c0-1.156,0.769-1.427,1.308-1.427h3.318V9.168L26.258,9.15c-5.072,0-6.225,3.796-6.225,6.224v3.394H17.1v5.242h2.933V38.85z"></path>	</svg>';
	// var instagramSvg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	width="30px" height="30px" viewBox="0 0 595.3 595.3" enable-background="new 0 0 595.3 595.3" xml:space="preserve">	<path d="M375.2,147.7H218.6c-39.2,0-71.1,31.9-71.1,71.1v158c0,39.2,31.9,71.1,71.1,71.1h156.6		c39.2,0,71.1-31.9,71.1-71.1v-158C446.3,179.6,414.4,147.7,375.2,147.7z M297.2,392.4c-53.1,0-96.3-42.8-96.3-95.3		c0-52.5,43.2-95.3,96.3-95.3s96.3,42.8,96.3,95.3C393.5,349.6,350.3,392.4,297.2,392.4z M395.2,220.6c-12.5,0-22.7-10.1-22.7-22.7		c0-12.5,10.1-22.7,22.7-22.7s22.7,10.1,22.7,22.7C417.9,210.4,407.8,220.6,395.2,220.6z"/>	<path d="M297.6,0C133.3,0,0,133.3,0,297.6s133.3,297.6,297.6,297.6c164.4,0,297.6-133.3,297.6-297.6S462,0,297.6,0z		 M481.4,376.8c0,58.6-47.7,106.2-106.2,106.2H218.6c-58.6,0-106.2-47.7-106.2-106.2v-158c0-58.6,47.7-106.2,106.2-106.2h156.6		c58.6,0,106.2,47.7,106.2,106.2V376.8z"/>	<path d="M297.2,236.9c-33.8,0-61.2,27-61.2,60.2c0,33.2,27.5,60.2,61.2,60.2s61.2-27,61.2-60.2	C358.4,263.9,331,236.9,297.2,236.9z"/></svg>';

	var logoImg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="96.5px" height="171px"	viewBox="0 0 96.5 171" enable-background="new 0 0 96.5 171" xml:space="preserve"> <path d="M23.2,53.4L61,106.3V56.8l33.8-25.7V3.2L23.2,53.4z M62.7,57.6v50.2l13.2-8.2V59l18.9-14.6V33.2L62.7,57.6z	M77.6,100.2l7.7,9.3l9.5-6.2V46.6L77.6,59.8V100.2z M22.9,55.9v94.7l61-40.2l-7.5-9.1l-14.6,9L22.9,55.9z M21.2,153.7v-101L96.5,0 v104.2l-0.4,0.2L21.2,153.7z M3.6,108.7h6.9l4.6-2.7v-5.6L3.6,108.7z M11.5,110v50.6l3.6-2.6v-50.1L11.5,110z M1.7,110.3v57.4 l8.1-5.9v-51.5H1.7z M0,171v-61.8l16.7-12v61.7L0,171z"/></svg>';
	
	// $('.social-link-vk').html(vkSvg);
	// $('.social-link-facebook').html(facebookSvg);
	// $('.social-link-instagram').html(instagramSvg);

	$('.logo-img').html(logoImg);
	//============ /end svg-icon ============
	
	//------------------------------------ Обработка событий меню ------------------------------------
	var pathname = window.location.pathname;
	var $hamburger = $(".hamburger");
	$hamburger.on("click",
		function (e) {

			//Присваиваем активный класс в мобильном меню
			$('.dropdown-menu li').removeClass('active'); //--- Подсветка активной страницы в мобильном меню
			// var path = window.location.pathname;
			$('.dropdown-menu li a').each(function () {
				var href = $(this).attr('href');
				var pathhref = pathname.slice(1, href.length + 1);
				//alert('1 - path: ' + path + '\nТекущая путь: ' + pathhref + '\n' + 'Ссылка в меню: ' + href);
				if ((pathname.length == 1 && href == '') || ((pathhref.length > 0) && (pathhref === href))) {
					$(this).parent('li').addClass('active');
					return false;
				}
			});

			$hamburger.toggleClass("is-active");			
			$(".dropdown-menu").stop().slideToggle(); 
			//Do something else, like open/close menu
			$("body").toggleClass("no-scroll");
		});

	$('.main-menu li').removeClass('active');	//--- Подсветка активной страницы меню
	// var path = window.location.pathname;
	$('.main-menu li a').each(function () {
		var href = $(this).attr('href');
		var pathhref = pathname.slice(1, href.length + 1);
		//alert('1 - path: ' + path + '\nТекущая путь: ' + pathhref + '\n' + 'Ссылка в меню: ' + href);
		if ((pathname.length == 1 && href == '') || ((pathhref.length > 0) && (pathhref === href))) {
			$(this).parent('li').addClass('active');
			return false;
		}
	});

	
	//alert(path);

	$(document).ready(function () {
		//E-mail Ajax Send
		$("#main-header-application").submit(function () { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "php/mail.php", //Change
				data: th.serialize()
			}).done(function () {
				//alert("Thank you!");
				setTimeout(function () {
					// Done Functions
					document.getElementById('main-header-application-submit').style.display = 'none';
					document.getElementById('main-header-application-thanks').style.display = 'flex';
					//$('#main-header-application')[0].reset();
					th.trigger("reset");
					$("#zayavkaName").attr("placeholder", "").blur();
					$("#applicationTelephone").attr("placeholder", "").blur();					
				}, 1000);
			});
			return false;
		});
	});
	$('.main-header-button-thanks').click(function () {
		document.getElementById('main-header-application-thanks').style.display = 'none';
		document.getElementById('main-header-application-submit').style.display = 'flex'
	});

	
	$(document).ready(function () {
		$("#contacts-application").submit(function () { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "php/mail.php", //Change
				data: th.serialize()
			}).done(function () {
				//alert("Thank you!");
				setTimeout(function () {
					// Done Functions
					document.getElementById('contacts-application-ok').style.display = 'none';
					document.getElementById('contacts-application-thanks').style.display = 'flex';
					th.trigger("reset");
					$("#contacts-application-Name").attr("placeholder", "").blur();
					$("#contacts-application-Email").attr("placeholder", "").blur();					
					$("#contacts-application-Telephone").attr("placeholder", "").blur();
				}, 1000);
			});
			return false;
		});
	});
	$('.contacts-application-button-thanks').click(function () {
		document.getElementById('contacts-application-thanks').style.display = 'none';
		document.getElementById('contacts-application-ok').style.display = 'flex'	
	});

	/*
	$('.main-header-button-submit').click(function() {		
		document.getElementById('main-header-application-submit').style.display = 'none';
		document.getElementById('main-header-application-thanks').style.display = 'flex';
		$('#main-header-application')[0].reset();
		$("#zayavkaName").attr("placeholder", "").blur();
		$("#applicationTelephone").attr("placeholder", "").blur();
		
	}); */

	/*addEventListener("click", function() {
    console.log("You clicked!");
	}); */

  /*$(window).scroll(function() {
    var st = $(this).scrollTop();
    //$('#main-header').css('top',(0-(scrolled*.25))+'px');
    console.log(st);
    var bpy = $('.main-header').css('backgroundPosition').split(' ')[1];
    console.log(bpy);
    $(".main-header").css("backgroundPosition", "center " + (st*1.1 - 100) + "px");
	});*/
	
	$('.top-scroll').click(function() {
		$('html, body').stop().animate({scrollTop: 0},  600);
	});

	$('a[href^="#"]').on('click', function (event) {
		var target = $(this.getAttribute('href'));
		if (target.length) {
			event.preventDefault();
			console.log(target);
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 70
			}, 600);
			
		}
	});


	// $(".architecture.service-price-button").on("click",
	// 	function (e) {
	// 		e.preventDefault();
	// 		location.href = '/portfolio/?scroll_id=portfolio-architecture';
	// });
	
	//------------------------------------ Прокручивание при переходе в портфолио --------------------
	//console.log(window.location);
	if (window.location.search) {
		if (pathname == "/portfolio/") {
			var scroll_id = window.location.href.split("?")[1].split("=")[1];
			var target = $("#" + scroll_id);
			$('html, body').animate({
				scrollTop: $(target).offset().top - 70
			}, 800, function () {
				window.history.replaceState({}, document.title, "/portfolio/");
			});
		}
	}
	
	
	// function OnLoad() {
	// 	var query = window.location.href.split("?")[1]; // результат - строка запроса без адреса страницы "id=someName&userMail=some@mail.com&usText=MemoText"
	// 	var params = query.split("&");  // результат - массив строк из пар "id=someName", "userMail=some@mail.com", "usText=MemoText"
	// 	// теперь брать по очереди
	// 	document.getElementById("UsName").innerHTML = params[0].split("=")[1];
	// 	document.getElementById("userMail").innerHTML = params[1].split("=")[1];
	// 	document.getElementById("usText").innerHTML = params[2].split("=")[1];
	// }

	/*$(window).scroll(function() {
		if ($(this).scrollTop() > $(window).height()) {
			$('.top-scroll').addClass("active");
		} else {
			$('.top-scroll').removeClass("active");
		};
	});*/



	//------------------------------------ Эффект Параллакса -----------------------------------------
	$(window).scroll(function() {  
		var st = $(this).scrollTop();
		if (st < 800) {
			var stMain = st * 0.1058;
			$(".main-header-background").css({	//--- Параллакс на главной странице
				"transform" : "translate(0%, " + stMain +  "%)"
			}); 
			if (st < 400) {
				st = st * 0.23;
				$(".project-header").css({				//--- Параллакс на странице проекта
					"transform" : "translate(0%, " + st +  "%)"
				});
			}
		}			
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

$(function () {
	
	//------------------------------------ Запись в лог обращения -----------------------------------------
	$.ajax({
		type: "POST",
		url: "php/log.php"
	});

	//------------------------------------ Выравнивание позиции сменяющихся надписей-----------------------------------------------
	var projectTypes = $("#mainHeaderProjectTypes");
	var projectsButton = $("#mainHeaderProjectsButton");
	setProjectTypesPaddingTop();

	function setProjectTypesPaddingTop() {
		var blockHeight = $("#mainHeaderProjectTypes").height();
		var paddingTop = ((projectsButton.offset().top - projectTypes.offset().top) / 2) - (blockHeight / 2);
		if (paddingTop > 80) {
			paddingTop += 35;
		}
		projectTypes.css("padding-top", paddingTop  + "px");
	};

	$(window).resize(function() {
		setProjectTypesPaddingTop();
	});

	$(window).ready(function() {
		changeMainHeaderProjectTypes();
		setInterval(changeMainHeaderProjectTypes, 3700);
	});

	//------------------------------------ Эффект Параллакса хедера-----------------------------------------
	var mainHeaderBackground = $(".main-header-background");
	$(window).scroll(function() {
		var st = $(this).scrollTop();
		if (st < 1000) {
			st = st * 0.6;
			mainHeaderBackground.css({
				"transform": "translate(0%, " + st + "px)"
			});
		}
	});

	//------------------------------------ Смена текста в хедере -----------------------------------------
	var typeIndex = 1;
	function changeMainHeaderProjectTypes() {
		var text;
		if (typeIndex == 1) {
			text = "ДИЗАЙН ЖИЛЫХ ИНТЕРЬЕРОВ";
		} else if (typeIndex == 2) {
			text = "ДИЗАЙН КОММЕРЧЕСКИХ ИНТЕРЬЕРОВ ";
		} else if (typeIndex == 3) {
			text = "АРХИТЕКТУРНОЕ ПРОЕКТИРОВАНИЕ";
		} else if (typeIndex == 4) {
			text = "ПРОФФЕСИОНАЛЬНОЕ СОПРОВОЖДЕНИЕ ПРОЕКТОВ";
		} else if (typeIndex == 5) {
			text = "ДЕКОРИРОВАНИЕ ИНТЕРЬЕРОВ";
		}
		projectTypes.text(text);

		projectTypes.fadeIn(400, function() {
			setTimeout(function() {
				projectTypes.fadeOut(400);
			}, 2800);
		});
		
		typeIndex++;
		if(typeIndex > 5) {
			typeIndex = 1;
		}

		setProjectTypesPaddingTop();
	};
	
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
});
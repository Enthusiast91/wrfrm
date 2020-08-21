$(function () {

	//------------------------------------ Форма захвата ------------------------------------
	$("#contacts-application").submit(function () {
		ym(49476370, 'reachGoal', 'FORM_CONTACT_PAGE_SUBMIT'); //Цель яндекс метрики

		var th = $(this);
		$.ajax({
			type: "POST",
			url: "php/mail.php",
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
	
	$('.contacts-application-button-thanks').click(function () {
		document.getElementById('contacts-application-thanks').style.display = 'none';
		document.getElementById('contacts-application-ok').style.display = 'flex'
	});

});
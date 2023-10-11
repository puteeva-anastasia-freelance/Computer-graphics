$(window).on('load', function () {
	$('a[href="#about-title"]').click(function () {
		let headerHeight = 0;

		if ($(window).width() > 700) {
			headerHeight = $('.main-header__bottom.fixed').outerHeight();
		} else {
			headerHeight = $('.main-header').outerHeight();
		}

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - headerHeight - 40
		}, 1000);
		return false;
	});

	$('a[href="#services"]').click(function () {
		let headerHeight = 0;

		if ($(window).width() > 700) {
			headerHeight = $('.main-header__bottom.fixed').outerHeight();
		} else {
			headerHeight = $('.main-header').outerHeight();
		}

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - headerHeight + 30
		}, 1000);
		return false;
	});

	$('a[href="#portfolio"]').click(function () {
		let headerHeight = 0;

		if ($(window).width() > 700) {
			headerHeight = $('.main-header__bottom.fixed').outerHeight();
		} else {
			headerHeight = $('.main-header').outerHeight();
		}

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - headerHeight + 30
		}, 1000);
		return false;
	});

	$('a[href="#footer"]').click(function () {
		let headerHeight = 0;

		if ($(window).width() > 700) {
			headerHeight = $('.main-header__bottom.fixed').outerHeight();
		} else {
			headerHeight = $('.main-header').outerHeight();
		}

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - headerHeight
		}, 1000);
		return false;
	});

	$('html').on('submit', '.form-application', function (e) {
		e.preventDefault();
		let form = $(this);
		$.ajax({
			url: '/form-application.php',
			type: 'POST',
			data: form.serialize(),
			dataType: 'html',
			success: function (data) {
				$(".pop-up__close").trigger("click");
				$("#accepted-hidden").trigger("click");
			}
		});
	});

	$('html').on('submit', '.form-calculator', function (e) {
		e.preventDefault();
		var form = $(this);
		$.ajax({
			url: '/form-calculator.php',
			type: 'POST',
			data: form.serialize(),
			dataType: 'html',
			success: function (data) {
				$("#accepted-hidden").trigger("click");
			}
		});
	});
});
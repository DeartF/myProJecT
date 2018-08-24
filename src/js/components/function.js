function showModal() {
	setTimeout(function() {
		$('.modal').css('display' , 'flex');
		$('.modal-form').removeClass('lightSpeedOut');
		$('.modal-form').addClass('lightSpeedIn');
	}, 500)
}

function closeModal() {
	$('.modal-form').removeClass('lightSpeedIn');
	$('.modal-form').addClass('lightSpeedOut');

	setTimeout(function() {
		$('.modal-form').removeClass('lightSpeedIn').addClass('lightSpeedOut');
		$('.modal').css('display' , 'none');
		$('.modal-registration').css('display' , 'none');
	} , 1200);
}

function openModalRegistration() {
	setTimeout(function() {
		$('.modal-registration').css('display' , 'flex');
		$('.modal-form').removeClass('lightSpeedOut');
		$('.modal-form').addClass('lightSpeedIn');
	}, 500)
}



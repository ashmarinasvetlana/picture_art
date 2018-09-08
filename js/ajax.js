//Form
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо!Мы скоро с Вами свяжемся";
	message.failure = "Что-то пошло нетак...";

	let submitParent = document.querySelector('body'),
		input = submitParent.querySelectorAll('input'),
		statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

	submitParent.addEventListener('submit', function(event){
		let target = event.target;
		if (target.classList.contains('form') || target.tagName == 'FORM'){
		event.preventDefault();
		target.appendChild(statusMessage);	
	
		//AJAX
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php')

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(submitParent);

		request.send(formData);
		request.onreadystatechange = function () {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;

			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
					//Добавляем контент на страницу
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';

			//очищаем поля ввода
		};
	}
	});
		



/*
	let form = document.getElementById('form');
	console.log(form);


	form.addEventListener('submit', function (event) {
		event.preventDefault();
		form.appendChild(statusMessage);

		//AJAX
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php')

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(form);

		request.send(formData);
		request.onreadystatechange = function () {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;

			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
					//Добавляем контент на страницу
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';

			//очищаем поля ввода
		}
	});
*/
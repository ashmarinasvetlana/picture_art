

  let slideFeedIndex = 1,
		slidesFeed = document.getElementsByClassName('feedback-slider-item'),
		prev = document.querySelector('.main-prev-btn'),
		next = document.querySelector('.main-next-btn');
		

	showFeedSlides(slideFeedIndex);

	//функция показа слайда 

	function showFeedSlides(n) {
		if (n > slidesFeed.length) {
			slideFeedIndex = 1;
		}
		if (n < 1) {
			slideFeedIndex = slidesFeed.length;
		}

		//скрываем ненужные слайды

		for (let i = 0; i < slidesFeed.length; i++) {
			slidesFeed[i].style.display = 'none';
		}

slidesFeed[slideFeedIndex - 1].style.display = 'block';
	};



	function plusFeedSlides(n) {
		showFeedSlides(slideFeedIndex += n);

	};

	let slideFeedInterval = setInterval(() => {
		plusFeedSlides(1);
	}, 3000);


	function currentFeedSlide(n) {
		showFeedSlides(slideFeedIndex = n);
	};

	//слайд назад

	prev.addEventListener('click', function () {
		plusFeedSlides(-1);
		clearInterval(slideFeedInterval);
	});
	//слайд вперед

	next.addEventListener('click', function () {
		plusFeedSlides(1);
		clearInterval(slideFeedInterval);
	
	});
let size = document.getElementById('size'),
	material = document.getElementById('material'),
	options = document.getElementById('options'),
	promo = document.querySelector('.promocode'),
	totalValue = document.querySelector('.calc-price');
sizeSum = 0;
materialSum = 0,
	optionsSum = 0,
	total = 0;

size.addEventListener('change', function () {

	sizeSum = +this.options[this.selectedIndex].value;
	total = sizeSum + materialSum + optionsSum;
	if (size.value === 'Выберите размер картины' || material.value === 'Выберите материал картины') {
		totalValue.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
	} else {
		totalValue.innerHTML = total;
	}


});

material.addEventListener('change', function () {

	materialSum = +this.options[this.selectedIndex].value;
	total = sizeSum + materialSum + optionsSum;
	if (size.value === 'Выберите размер картины' || material.value === 'Выберите материал картины') {
		totalValue.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
	} else {
		totalValue.innerHTML = total;
	}


});

options.addEventListener('change', function () {

	optionsSum = +this.options[this.selectedIndex].value;
	total = sizeSum + materialSum + optionsSum;
	if (size.value === 'Выберите размер картины' || material.value === 'Выберите материал картины') {
		totalValue.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';

	} else {
		totalValue.innerHTML = total;
	}

});


promo.addEventListener('change', () => {
	if (promo.value === 'IWANTPOPART') {
		total = total - (total * 0.3);
		totalValue.innerHTML = total;
		promo.value = 'промокод использован';
		promo.disabled = true;

	}

});

let size = document.getElementById('size'),
	material = document.getElementById('material'),
	options = document.getElementById('options'),
	promo = document.querySelector('.promocode'),
	totalValue = document.querySelector('.calc-price');
sizeSum = 0;
materialSum = 0,
	optionsSum = 0,
	total = 0;
function isPromo(){
	if (promo.value == 'IWANTPOPART') { 
		total = total - (total * 0.3);
totalValue.innerHTML = total; 
}
	
;}
size.addEventListener('change', function () {

	sizeSum = +this.options[this.selectedIndex].value;
	total = sizeSum + materialSum + optionsSum;
	if (size.value === '0' || material.value === '0') {
		totalValue.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
	} else 
if (promo.value == 'IWANTPOPART') { 
totalValue.innerHTML = total - (total * 0.3); 

} else { 
totalValue.innerHTML = total; 
} 


});

material.addEventListener('change', function () {

	materialSum = +this.options[this.selectedIndex].value;
	total = sizeSum + materialSum + optionsSum;
	if (size.value === '0' || material.value === '0') {
		totalValue.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
	} else 
if (promo.value == 'IWANTPOPART') { 
totalValue.innerHTML = total - (total * 0.3); 
} else { 
totalValue.innerHTML = total; 
} 


});

options.addEventListener('change', function () {

	optionsSum = +this.options[this.selectedIndex].value;
	total = sizeSum + materialSum + optionsSum;
	if (size.value === '0' || material.value === '0') {
		totalValue.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';

	} else 
if (promo.value == 'IWANTPOPART') { 
totalValue.innerHTML = total - (total * 0.3); 
} else { 
totalValue.innerHTML = total; 
} 

});
//отслеживаем ввод промокода
promo.addEventListener('input', () => {
	if (promo.value == 'IWANTPOPART') { 
totalValue.innerHTML = total - (total * 0.3); 
//исключаем повторное использование промокода
promo.disabled = true;
} 

});
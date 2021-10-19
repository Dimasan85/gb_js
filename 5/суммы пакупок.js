let prais = prompt('ввидите суммы покупок через запятую');
let array = prais.split(',');
let numbers = array.map(
  function (element) {
	return parseInt(element);
  }

 );
 
let s = 0;
for (let i = 0; i < numbers.length; i++) {
s = s + numbers[i];
}
    
console.log('Cуммы покупок ' + prais);
console.log('Сумма ваших покупок ' + s + ' руб');
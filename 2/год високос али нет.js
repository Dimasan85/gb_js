let god = prompt('Ввидите год');// запрос года
if (god % 4 != 0){
  console.log('не високосный');
}else if (god % 100 != 0){
 console.log(' високосный');
}else if (god % 400 == 0){
 console.log(' високосный');
}else{
console.log('не високосный');
}
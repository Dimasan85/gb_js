let year = prompt('Введите год');
if (year % 4 != 0) { 
 console.log('год не високосный'); 
} else { 
if (year % 100 != 0) { 
 console.log ('год високосный'); 
} else if (year % 400 == 0) { 
 console.log ('год високосный') 
} else { 
 console.log ('год не високосный')
}
}
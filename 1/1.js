let imja = prompt('Ввидите ваше имя');// запрос имени
let god = prompt('Ввидите ваш год рождения');// запрос года рождения
let godtek = prompt('Ввидите текущий год');// запрос текущего года
let rezyltat =godtek - god + 1;// результат вычисления

console.log('Приветствую ' + imja + "! Уже в следующем году вам исполнится " + rezyltat + "." );//вывод результата

drawCircle(90, 70, 50, 'green');//ухо лев
drawCircle(310, 70, 50, 'green'); //ухо прав 
drawCircle(90, 70, 40, 'white');//ухо лев
drawCircle(310, 70, 40, 'white');//ухо прав 
drawCircle(200, 200, 150, 'green');//голова
drawCircle(140, 170, 40, 'white');//глаз лев
drawCircle(260, 170, 40, 'white');//глаз прав
drawCircle(135, 180, 20, 'black');//зрачек лев
drawCircle(255, 180, 20, 'black');//зрачек прав
drawCircle(200, 270, 50, 'white');//рот
drawCircle(200, 260, 50, 'green');//рот
drawCircle(190, 230, 7, 'black');//ноздря лев
drawCircle(210, 230, 7, 'black');//ноздря прав

/*Домашнее задание
Необходимо написать программу, которая запрашивает у пользователя его имя, 
  год рождения и выводит в консоль текст, например «Иван, уже в следующем году вам будет 40 :
    -(». Для того, что бы вычислить сколько лет будет пользователю в следующем году, 
      необходимо от текущего года отнять год рождения и добавить единицу. 
      Каждая значимая строка программы должна сопровождаться комментарием.
Дополнительно
Написать программу, которая рисует смайлик 
      (один чёрный круг, и два белых круга поверх чёрного — глаза,
      дополнительно можно нарисовать зрачки).
      */

let a = prompt('какую фигуру нарисовать? \ 1 - «круг» \ 2 - «квадрат»');
if (a == 1){
  let r = prompt('ввидите рарадиус не более 80');
  let c = prompt('ввидите цвет');
  if (r > 80){
   r = 80; 
  }
  drawCircle(100, 100, r, c);
}else{
  let r = prompt('ввидите длину э');
  let s = prompt('ввидите ширину');
  let c = prompt('ввидите цвет');
  drawRect(100, 100, s, r, c);
}
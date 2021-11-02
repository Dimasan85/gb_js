function множ(кол_во, смещ_х, смещ_у, длина, высота, цвет) {
  for (let x = 1; x <= кол_во; x = x + 1){
    for (let y = 1; y <= кол_во; y = y + 1){
        drawRect(x * (высота/4) + смещ_х , y + смещ_у, длина, высота, цвет);  
        drawRect(x + смещ_х, y * (высота/4) + смещ_у, высота, длина, цвет);
}
}
}
множ (3, 150 ,150 ,1, 300, 'red');
множ (3, 200 ,200 ,1, 200, 'Black');
множ (3, 250 ,250 ,1, 100, 'green');

// не моё

function drawFractal(left, size) {
  for (let y = 1; y < 3; y = y + 1) {
  for (let x = 1; x < 3; x = x + 1) {
  drawRect(left + x, left + y * (size / 3), size, 1, 'orange');
  drawRect(left + x * (size / 3), left + y, 1, size, 'black');
  }
  }
  }
  
  drawFractal(0, 300);
  drawFractal(50, 200);
  drawFractal(100, 100);
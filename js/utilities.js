// animation loop
function animate() {
  /* Метод CanvasRenderingContext2D.clearRect(), предоставляемый Canvas 2D API, устанавливает прозрачный черный цвет для всех пикселей, расположенных внутри прямоугольника, заданного начальной точкой (x, y) и размерами (width, height), таким образом стирая любое ранее нарисованное содержимое. */
  ctx3.clearRect(0, 0, canvas1.width, canvas1.height);
  frogger.draw();
  frogger.update();
  /* window.requestAnimationFrame указывает браузеру на то, что вы хотите произвести анимацию, и просит его запланировать перерисовку на следующем кадре анимации. В качестве параметра метод получает функцию, которая будет вызвана перед перерисовкой. animation loop */
  requestAnimationFrame(animate);
}
animate();

// event listeners
window.addEventListener('keydown', function (e) {
  // global variable from setup.js let keys = [];
  keys = [];
  keys[e.keyCode] = true;
  // left arrow 37, up arrow 38, right arrow 39, down arrow 40
  if (keys[37] || keys[38] || keys[39] || keys[40]) {
    /* we will call custom method on frogger object called jump, this method will just animate the sprite sheet */
    frogger.jump();
  }
});

window.addEventListener('keyup', function (e) {
  delete keys[e.keyCode];
  frogger.moving = false;
});

function scored() {
  score++;
  gameSpeed += 0.05;
  frogger.x = canvas1.width / 2 - frogger.width / 2;
  frogger.y = canvas1.height - frogger.height - 40;
}

class Obstacle {
  constructor(x, y, width, height, speed, type) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.type = type;
    this.frameX = 0;
    this.frameY = 0;
    this.randomise = Math.floor(Math.random() * 30 + 30);
  }
  draw() {
    if (this.type === 'turtle') {
      if (this.frameX >= 1) this.frameX = 0;
      else this.frameX++;
      ctx1.fillRect(this.x, this.y, this.width, this.height);
      ctx1.drawImage(
        turtle,
        this.frameX * 70,
        this.frameY * 70,
        70,
        70,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
    ctx3.fillStyle = 'blue';
    ctx3.fillRect(this.x, this.y, this.width, this.height);
  }
  update() {
    this.x += this.speed * gameSpeed;

    if (this.speed > 0) {
      if (this.x > canvas1.width + this.width) {
        this.x = 0 - this.width;
      }
    } else {
      if (this.x < 0 - this.width) {
        this.x = canvas1.width + this.width;
      }
    }
  }
}

function initObstacles() {
  // lane 1
  for (let i = 0; i < 2; i++) {
    let x = i * 350;
    carsArray.push(
      new Obstacle(x, canvas1.height - grid * 2 - 20, grid * 2, grid, 1, 'car')
    );
  }
  // lane 2
  for (let i = 0; i < 2; i++) {
    let x = i * 300;
    carsArray.push(
      new Obstacle(x, canvas1.height - grid * 3 - 20, grid * 2, grid, -2, 'car')
    );
  }
}
initObstacles();

function handleObstacles() {
  for (let i = 0; i < carsArray.length; i++) {
    carsArray[i].update();
    carsArray[i].draw();
  }
}

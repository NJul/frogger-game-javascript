const canvas1 = document.getElementById('canvas1');
/* Метод HTMLCanvasElement.getContext() возвращает контекст рисования на холсте, или null, если идентификатор контекста не определен.
contextType
DOMString, содержащий идентификатор контекста, определяющий контекст рисования, связанный с холстом. Возможные значения:
"2d", ведущий к созданию объекта CanvasRenderingContext2D, представляющий двумерный контекст. */
const ctx1 = canvas1.getContext('2d');
canvas1.width = 600;
canvas1.height = 600;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = 600;
canvas2.height = 600;

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
canvas3.width = 600;
canvas3.height = 600;

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');
canvas4.width = 600;
canvas4.height = 600;

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d');
canvas5.width = 600;
canvas5.height = 600;

// global variables
const grid = 80;
let keys = [];
let score = 0;
let collisionsCount = 0;
let frame = 0;
let gameSpeed = 1;
let safe = false;

const particlesArray = [];
const maxParticles = 300;
const ripplesArray = [];
const carsArray = [];
const logsArray = [];

// images
const background_lvl2 = new Image();
background_lvl2.src = '../images/background_lvl2.png';

const grass = new Image();
grass.src = '../images/grass.png';

const collisions = new Image();
collisions.src = '../images/collisions.png';

const turtle = new Image();
turtle.src = '../images/turtles.png';

const log = new Image();
log.src = '../images/log.png';

const car = new Image();
car.src = '../images/cars.png';
let numberOfCars = 3;

const froggerSprite = new Image();
froggerSprite.src = '../images/frog_spritesheet.png';

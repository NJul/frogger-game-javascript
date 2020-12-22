const canvas = document.getElementById('canvas1');
/* Метод HTMLCanvasElement.getContext() возвращает контекст рисования на холсте, или null, если идентификатор контекста не определен.
contextType
DOMString, содержащий идентификатор контекста, определяющий контекст рисования, связанный с холстом. Возможные значения:
"2d", ведущий к созданию объекта CanvasRenderingContext2D, представляющий двумерный контекст. */
const ctx1 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const whiteboard = document.getElementById('whiteboard');
const ctx = whiteboard.getContext('2d');
let drawing = false;

whiteboard.addEventListener('mousedown', () => (drawing = true));
whiteboard.addEventListener('mouseup', () => (drawing = false));
whiteboard.addEventListener('mousemove', draw);

function draw(event) {
  if (!drawing) return;
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'black';
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}

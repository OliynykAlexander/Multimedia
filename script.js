const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'blue';
ctx.fillRect(100, 100, 100, 100);
ctx.strokeStyle = 'black';
ctx.strokeRect(100, 100, 100, 100);

ctx.beginPath();
ctx.arc(250, 150, 75, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();
ctx.stroke();

canvas.addEventListener('click', function(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (x >= 100 && x <= 200 && y >= 100 && y <= 200) {
    alert('Ви клікнули по квадрату!');
  }
});
canvas.addEventListener('click', function(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  const distance = Math.sqrt((x - 250) ** 2 + (y - 150) ** 2);
  if (distance <= 75) {
    alert('Ви клікнули по колу!');
  }
});
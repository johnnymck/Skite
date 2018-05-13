var canvas = document.getElementById("cvs");
var ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
canvas.addEventListener('click', function(event) {
    drawCard(ctx, event.x, event.y, 20);
}, false);
ctx.fillStyle="#FF0000";
ctx.fillRect(20,20,150,150);

function drawCard(ctx, posX, posY, number) {
    ctx.fillStyle="white";
    ctx.fillRect(posX, posY, 60, 100);
    ctx.rect(posX, posY, 60, 100);
    ctx.strokeStyle="black";
    ctx.stroke();
}
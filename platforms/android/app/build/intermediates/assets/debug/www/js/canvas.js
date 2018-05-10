var canvas = document.getElementById("cvs");
var ctx = canvas.getContext("2d");
canvas.addEventListener('click', function(event) {
    ctx.fillStyle="#0000FF";
    ctx.fillRect(event.pageX, event.pageY, event.pageX+50, event.pageY+50);
}, false);
ctx.fillStyle="#FF0000";
ctx.fillRect(20,20,150,150);

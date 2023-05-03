let canvas = document.getElementById("shape");
let ctx = canvas.getContext("2d");
let drawObject = function(x, y){
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(x,y,60,0,2*Math.PI);
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x,y,60,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x,y-20,20,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x-18,y+12,20,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x+18,y+12,20,0,2*Math.PI);
    ctx.fill();
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(x,y,9,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x,y-24,15,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x+22,y+14,15,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x-22,y+14,15,0,2*Math.PI);
    ctx.fill();
}
let x = 300, y = 300;
drawObject(x,y);
// reset
let elm1 = document.getElementById("reset");
elm1.onclick = reset;
function reset(){
    ctx.clearRect(0,0,600,600);
    x = 300;
    y = 300;
    drawObject(x,y);
}
// up
let elm2 = document.getElementById("up");
elm2.onclick = up;
function up(){
    y -= 5;
    if(x > 62 && y > 62 && x < 538 && y < 538){
      ctx.clearRect(0,0,600,600);
      drawObject(x,y);  
    } else {
        y += 5;
    }
}
// left
let elm3 = document.getElementById("left");
elm3.onclick = left;
function left(){
    x -= 5;
    if(x > 62 && y > 62 && x < 538 && y < 538){
      ctx.clearRect(0,0,600,600);
      drawObject(x,y);  
    } else {
        x += 5;
    }
}
// right
let elm4 = document.getElementById("right");
elm4.onclick = right;
function right(){
    x += 5;
    if(x > 62 && y > 62 && x < 538 && y < 538){
      ctx.clearRect(0,0,600,600);
      drawObject(x,y);  
    } else {
        x -= 5;
    }
}
// down
let elm5 = document.getElementById("down");
elm5.onclick = down;
function down(){
    y += 5;
    if(x > 62 && y > 62 && x < 538 && y < 538){
      ctx.clearRect(0,0,600,600);
      drawObject(x,y);  
    } else {
        y -= 5;
    }
}
addEventListener("keydown", function(event){
    if(event.keyCode == 38){
        up();
    }
    if(event.keyCode == 40){
        down();
    }
    if(event.keyCode == 39){
        right();
    }
    if(event.keyCode == 37){
        left();
    }
});
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];

for(let i=0;i<80;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*0.7,
vy:(Math.random()-0.5)*0.7
});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.x+=p.vx;
p.y+=p.vy;

if(p.x<0||p.x>canvas.width)p.vx*=-1;
if(p.y<0||p.y>canvas.height)p.vy*=-1;

ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fillStyle="#00d9ff";
ctx.fill();

});

requestAnimationFrame(animate);

}

animate();

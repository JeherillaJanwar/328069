let particles = [];
let r,g,b;
let yspeed;
let xspeed;
let x = 50;
let y = 50;
let auto = false;
let controlX,controlY;

alert("click anywhere to change between automode and mousemode");
function setup(){
     createCanvas(windowWidth,windowHeight);

    
    r = random(255);
    g = random(255);
    b = random(255);
    
    yspeed = random(2,4);
    xspeed = random(2,5);
    background(30);
    
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw(){
    background(31,34,38);
   


    for (let i = 0; i < random(1,5) ; i++){
    let p = new Particle()
     particles.push(p);   
         
         
         
         
    }
   for(let i = particles.length -1 ; i >= 0; i--){
       particles[i].update();
       particles[i].show();
       if(particles[i].finish()){
            particles.splice(i,1);
       }
   }
   
   if(x > width || x < 0){
       xspeed = -xspeed;
       colorPicker();
       this.vx = -this.vx;
       
   }
   if(y > height || y < 0){
       yspeed = -yspeed;
       colorPicker();
       this.vy = -this.vy;
   }

   x += xspeed;
   y += yspeed;


   if (auto == true){
       controlX = mouseX;
       controlY = mouseY;
   }else{
       controlX = x;
       controlY = y;

   }
}


class Particle{

    constructor(){
        this.x = controlX;
        this.y = controlY;
        this.vx = random(-1,1);
        this.vy = random (-5,-1);
        this.alpha = 255;
    }

finish(){
    return this.alpha < 0; 
}

    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 1;
    }
    show(){
        noStroke();
        fill(r,g,b,this.alpha);
        ellipse(this.x, this.y, 15)
    }

}


function colorPicker(){
    r = random(50,255);
    g = random(50,255);
    b = random(50,255);

     

}

function mousePressed(){
    if (auto == false){
    auto = true;
    }else {
        auto = false;
    }
}

let x = 300;
let y = 700;
let rectsize = 35;
let coinspeed = 10;
let xarrow = 100;
let yarrow = 100;
let circler = 35;
let yline = -5500;
let r = 242;
let points = 0;
let eyelX = 800/2;


function setup(){
createCanvas(500,800);
video = createCapture(VIDEO);
video.hide();
//poseNet form ML5 machine learning database loading..
poseNet = ml5.poseNet(video, modelReady);
poseNet.on("pose", gotPoses);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
function modelReady() {
    //if modelready or poseNet is fully loaded..
    console.log("model ready");
}

function draw(){
    background(206,235,223); //sky ?
    noStroke();

    textSize(16)
    text(points,10, 10, 200, 200)

    fill(242,177,52);//is the circle points
    rect(xarrow,yarrow,circler,circler+10);
    yarrow= yarrow + coinspeed;
    // console.log(i);
    
    fill(4,139,199) //the rectangle (red?)
    rect(eyelX,y,rectsize,rectsize);

    //bottom bar 
    fill(156,212,252);
    rect(0,random(740,741),700,70);


if(yarrow + circler >= y && y+rectsize >= yarrow){
  if(eyelX > xarrow && eyelX < xarrow  + circler){
        xarrow = random(width- circler);
        yarrow = 0;
        r = 22; 
        points++;

}else if (eyelX + rectsize > xarrow && eyelX + rectsize < xarrow  + circler){
        xarrow = random(width-circler);
        yarrow = 0;
        r = 22
        points++;

}else if (eyelX > yarrow+rectsize && eyelX + rectsize > xarrow + rectsize){
        xarrow = random(width-circler);
        yarrow = 0;
        r = 22
        points++;
}

}else if ( yarrow > height){
    xarrow = random(width-circler);
    yarrow = 0;
    // alert("Game Over dude you got, " + points + ' Points.');
    points = 0;
}

}

function gotPoses(poses) {
    // console.log(poses);
    //poseNet data manupulation
    if (poses.length > 0) {
      //for eyeleft x and y position
      let eX = poses[0].pose.keypoints[1].position.x;
      //lerping to make jitter go away >>> optional but better to add few line to make it look better
      eyelX = lerp(eyelX, eX, 0.5);
}
}






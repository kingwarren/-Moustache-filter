nosex=0;
nosey=0;
pic="";
function preload(){
pic=loadImage("https://i.postimg.cc/7b8sCP4G/mustache-moustache-png-image-pngpix-22.png");
}

function setup(){
canvas = createCanvas(500,500);
canvas.center();
video = createCapture(VIDEO);
video.size(500,500);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses)
}

function draw(){
image(video,0,0,500,500)
image(pic,nosex-50,nosey-50,110,110);
//fill("red");
//stroke("red");
//circle(nosex,nosey,20);
}

function take_snapshot(){
    save("clown.png")
}

function modelLoaded(){
    console.log('poseNet is ready');
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;

    console.log("nose x ="+ nosex);
    console.log("nose y =" + nosey);

}

}
status1 = "";
valuei = "";

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide();
}

function draw(){
    image(video,0,0,400,400);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
   valueI = document.querySelector(".inputBox input").value;
}

function modelLoaded(){
    console.log("model loaded!");
    status1 = true;
}
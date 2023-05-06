status1 = "";
valueI = "";
objects = [];


const synth = window.speechSynthesis;

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide();
}

function draw(){
    image(video,0,0,400,400);

    if (status1 != ""){
        objectDetector.detect(video, gotResult);

        for(i = 0; i < objects.length; i++){
            fill('red')
            text(objects[i].label + " " +  Math.floor(objects[i].confidence * 100)  + "%" , objects[i].x + 15 , objects[i].y + 15);
            noFill();
            stroke('yellow');
            rect(objects[i].x , objects[i].y ,objects[i].width ,objects[i].height);


            if (objects[i].label == valueI){

                const utter = new SpeechSynthesisUtterance(valueI + " " + "has been found!");

                video.stop();
                objectDetector.detect(gotResult);
                document.getElementById("ifde").innerHTML =  valueI + " " + "Found!";
                synth.speak(utter);
            }
            else {
                console.log(valuei)
                document.getElementById("ifde").innerHTML =  valueI + " " + " Not Found!";
            }
        }
    }
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


function gotResult(error,results){

    if (error){
        console.error(error)
    }
    else {
        objects = results;
    }

}
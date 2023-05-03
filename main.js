status_model="";
function setup(){
    canvas=createCanvas(400, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_model").innerHTML="status-detecting objects";
    obj=document.getElementById("objname").value;
}

function modelLoaded() {
    console.log("Model Loaded");
    status_model=true;
}

function draw() {
    image(video, 0, 0, 380, 380);
}
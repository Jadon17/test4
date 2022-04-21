status1 = "";
objects = [];

function preload(){
loadImage = ("cars.jpeg");
}

function setup(){
    canvas = createCanvas(380,380);
    canvas.center()
    objectDetecter = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "Model Is Detecting the Objects";
}

function modelloaded(){
    console.log("MODEL HAS SUCCESSFULLY LOADED !!! ");
    status1 = true;
    
}

function gotresults(error,results){
    if(error){
        console.log(error);
    }

    else{
        console.log(results);
        objects = results;
    }
}


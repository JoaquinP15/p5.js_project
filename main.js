function preload(){
}

function setup(){
    canvas = createCanvas(640,490);
    canvas.position(280,280);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,640,490)
    fill(59,0,0);
    stroke(59,0,0);
    circle(0, 0, 50);
}

function take_snapshot(){
    save('Joaquin.png');
}
function preload(){
}

function setup(){
    canvas = createCanvas(640,490);
    canvas.position(280,280);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,170,100,300,300);
    fill(59,0,0);
    stroke(59,0,0);
    circle(25, 25, 50);
    circle(615, 465, 50);
    circle(615, 25, 50);
    circle(25, 465, 50);
}

function take_snapshot(){
    save('Image.png');
}
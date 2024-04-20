const socket = io.connect('hri7566.tk');
var bird;
var pipes = [];
var pipeSpeed;

function setup() {
    createCanvas(400, 600);
    bird = new Bird();
}

function draw() {
    background(0);
    bird.show();
    bird.update();
    pipeSpeed = frameCount/1000 + 1;
    if (frameCount % 150 == 0) {
        pipes.push(new Pipe());
    }
    for (var i = pipes.length - 1; i >= 0; i--) {   
        pipes[i].show();
        pipes[i].update();
        pipes[i].speed = pipeSpeed;
        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }
        if (pipes[i].hits(bird)) {
            console.log("HIT");
        }
        if (pipes[i].speed > 3) {
            pipes[i].speed = 3;
        }
    }
}

function keyPressed() {
    if (key == ' ') {
        bird.up();
    }
}

function mousePressed() {
    bird.up();
    return false;
}

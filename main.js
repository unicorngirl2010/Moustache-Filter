noseX = 0;
noseY = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/3x8xXfFN/mustache.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(results);
        noseX = result[0].pose.nose.x - 40;
        noseY = result[0].pose.nose.y;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, nosX, noseY, 80, 35)
}

function take_snapshot() {
    save('myFilterImage.png');
}
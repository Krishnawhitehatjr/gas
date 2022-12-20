song = "";
song2 = "";
leftWristY = 0;
leftWristX = 0;
rightWristY = 0;
rightWristX = 0;
scorelftw = "";
function preload()
{
    song = loadSound("Astroman.m4r")
    song2 = loadSound("Uyire Uyire - song.m4r")
}
function setup()
{
    canvas = createCanvas(600,500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotResults)
}
function modelLoaded()
{
    console.log('PoseNet is Initialized')
}
function gotResults(results)
{
    if(results.length > 0 )
    {
    console.log(results)
    scorelftw = results[0].pose.keypoints[9].score;
    console.log("scoreleftwrist = "+scorelftw)
    leftWristY = results[0].pose.leftWrist.y
    leftWristX = results[0].pose.leftWrist.x
    console.log("leftwristY = "+leftWristY+"leftwristX = "+leftWristX)
    rightWristY = results[0].pose.rightWrist.y
    rightWristX = results[0].pose.rightWrist.x
    console.log("rightwristY = "+rightWristY+"rightwristX = "+rightWristX)
    }
}
function draw()
{
    image(video,0,0,600,500)

    fill("#FF00BB")
    stroke("#FF00BB")

    if(scorelftw > 0.2)
    {

    circle(leftWristX,leftWristY,20);
    InNumlwy = Number(leftWristY);
    volume = floor(InNumlwy)/500;
    document.getElementById("volume").innerHTML = "Volume = "+volume;
    song.setVolume(volume)

    }
}
function play()
{
    song.play()
    song2.stop()
    song.setVolume(0.5)
    song.rate(1)
}
function play2()
{
    song2.play()
    song.stop()
    song.setVolume(0.5)
    song.rate(1)
}

function stop()
{
    song.stop()
    song2.stop()
}

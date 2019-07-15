//Parameters taken from the library to initialize the hand movement
const modelParams = {
    flipHorizontal: true,   // flip e.g for video 
    imageScaleFactor: 0.7,  // reduce input image size for gains in speed.
    maxNumBoxes: 20,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.8,    // confidence threshold for predictions.
  }

//This is for differentiating between browsers
navigator.getUserMedia = navigator.getUserMedia || 
navigator.webkitGetUserMedia ||
navigator.mozGetUSerMedia ||
navigator.msGetUserMedia;

//initializing html
const video = document.querySelector('#video');
const audio = document.querySelector('#audio');
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
let model;

//Opens up the webcam
handTrack.startVideo(video).then(status => {
    if (status) {
        navigator.getUserMedia(
            {video:{}}, 
            stream => {
                video.scrObject = stream;
                setInterval(runDetection, 1000);
            },
        err => console.log(err));
    }
})

function runDetection(){
    model.detect(video).then(predictions => {
        console.log(predictions);
        model.renderPredictions(predictions, canvas, context, video);
    });
}

handTrack.load(modelParams).then(lmodel => {
    model = lmodel;
});
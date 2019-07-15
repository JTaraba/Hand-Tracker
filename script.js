//This is for differentiating between browsers
navigator.getUserMedia = navigator.getUserMedia || 
navigator.webkitGetUserMedia ||
navigator.mozGetUSerMedia ||
navigator.msGetUserMedia;

//initializing html
const video = document.querySelector('#video');
const audio = document.querySelector('#audio');
const canvas = document.querySelector('#canvas');
const canvas = canvas.getContext('2d');
let model;

//Opens up the webcam
handTrack.startVideo(video)
    .then(status => {
        if (status) {
            navigator.getUserMedia({video:{}}, stream=> {
                video.scrObject = stream;
            },
            err => console.log(err));
        }
    })

handTrack.load().then(lmodel => {
    model = lmodel;
});
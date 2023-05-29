

var header = document.querySelector(".header");
var mainSection = document.querySelector(".main_section");



window.addEventListener("DOMContentLoaded",function(){
    var headerHeight = header.clientHeight;
    var windowHeight = window.innerHeight;
    var mainSectionHeight = windowHeight - headerHeight;
    mainSection.style.minHeight = mainSectionHeight + "px";
})


// var video = document.getElementById('video');
// if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//  navigator.mediaDevices.getUserMedia({ video: true })
//  .then(function(stream) {
//  video.src = window.URL.createObjectURL(stream);
//  video.play();
//  });
// }


const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
// const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'user', canvasElement);

webcam.start()
   .then(result =>{
      console.log("webcam started");
   })
   .catch(err => {
       console.log(err);
   });


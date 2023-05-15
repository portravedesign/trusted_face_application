

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
//  navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
//  video.src = window.URL.createObjectURL(stream);
//  video.play();
//  });
// }

var video = document.querySelector("#video");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    navigator.mediaDevices.getUserMedia({video: true})
  }
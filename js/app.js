

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

let All_mediaDevices=navigator.mediaDevices
if (!All_mediaDevices || !All_mediaDevices.getUserMedia) {
   console.log("getUserMedia() not supported.");
   return;
}
All_mediaDevices.getUserMedia({
   audio: true,
   video: true
})
.then(function(vidStream) {
   var video = document.getElementById('video');
   if ("srcObject" in video) {
      video.srcObject = vidStream;
   } else {
      video.src = window.URL.createObjectURL(vidStream);
   }
   video.onloadedmetadata = function(e) {
      video.play();
   };
})
.catch(function(e) {
   console.log(e.name + ": " + e.message);
});
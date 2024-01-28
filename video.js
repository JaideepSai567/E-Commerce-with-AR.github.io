var c=0;
function openCam(){
   /*if(c%2==0){
      document.getElementById("videoCam").style.display="inline";
      c+=1
      }else{
        document.getElementById("videoCam").style.display="none";
        c+=1}*/
   /* let All_mediaDevices=navigator.mediaDevices
    if (!All_mediaDevices || !All_mediaDevices.getUserMedia) {
       console.log("getUserMedia() not supported.");
       return;
    }
    All_mediaDevices.getUserMedia({
       video: true
    })
    .then(function(vidStream) {
       var video = document.getElementById('videoCam');
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
    if(c%2==0){
    document.getElementById("videoCam").style.display="inline";
    c+=1
    }else{
      document.getElementById("videoCam").style.display="none";
      c+=1}*/
    
 }


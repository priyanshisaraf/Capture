var count =0;
function menuPop(){
    
    var menu = document.getElementById("menu");
    
    if(count===0){
        menu.style.display='block';
        menu.style.height='7vh';
        count = 1;
    }
    else{
        menu.style.display='hidden';
        menu.style.height='0';
        count =0;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    let video = document.getElementById("vid");
    let mediaDevices = navigator.mediaDevices;
    vid.muted = true;
        // Accessing the user camera and video.
        mediaDevices
            .getUserMedia({
                video: true,
                audio: true,
            })
            .then((stream) => {
                // Changing the source of video to current stream.
                video.srcObject = stream;
                video.addEventListener("loadedmetadata", () => {
                    video.play();
                });
            })
            .catch(alert);
    });

var photo=true;
var video=false;
function takeVideo(){
    photo=false;
    video=true;
}
function capture(){
    if(photo==true){

    }
    else{
        
    }

}
function takePhoto(){
    photo=true;
    video=false;
}
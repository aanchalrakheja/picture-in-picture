var button= document.getElementById('button');
var selectButton=document.getElementById("select");
var exitButton=document.getElementById("exit");
var videoElement;

// a function to request the user to fetch the media stream and display it on the page.
async function getMediaStream(){
    try{
        // navigator.mediaDevices.getDisplay() is an api to capture live media stream
    const mediaStream=await navigator.mediaDevices.getDisplayMedia();
    videoElement=document.createElement('video');
    videoElement.srcObject=mediaStream;
    videoElement.height=360;
    videoElement.width=640;
    videoElement.controls=true;
    videoElement.onloadedmetadata=() => {
        videoElement.play();
    };
    document.body.appendChild(videoElement);
    videoElement.hidden=true;
    } catch(error)
    {
        // catch error here
        console.log("oops! Its an error");
    }
}

button.addEventListener('click',async () => {
    // disable the button
    button.disabled=true;
    // request for picture in picture feature
    await videoElement.requestPictureInPicture();
    // disable the button back
    // button will be abled back again only when request for picture in picture is fullfilled.
    button.disabled=false;
});

// onload
// getMediaStream();
selectButton.addEventListener('click',getMediaStream);

exitButton.addEventListener('click',async () => {
    exitButton.disabled=true;
    await document.exitPictureInPicture();
    exitButton.disabled=false;
});



const video = document.querySelector('#video');

async function initCamera(){    
    if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
        navigator.mediaDevices.getUserMedia({video: true})
        .then((mediaStream) => {
            video.srcObject = mediaStream;
        })
        .catch((err) => {
            alert("Permissão negada!");
        })
    }
}

const audio = document.querySelector('#audio');
var media;

async function initMicrofone(){    
    if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
        navigator.mediaDevices.getUserMedia({audio: true})
        .then((mediaStream) => {
            media = mediaStream;
            
        })
        .catch((err) => {
            alert(err);
        })
    }
}

function ouvirMic(){
    audio.srcObject = media;
    
}

function pararMic(){
    audio.srcObject = null;
}
    

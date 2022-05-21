
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

function pararCamera(){
    video.srcObject = null
}

const audio = document.querySelector('#audio');
async function initMicrofone(){    
    if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
        navigator.mediaDevices.getUserMedia({audio: true})
        .then((mediaStream) => {
            // media = mediaStream;
            audio.srcObject = mediaStream;
        })
        .catch((err) => {
            alert("Permissão negada!");
        })
    }
}

function pararMic(){
    audio.srcObject = null;
}
    


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

var onoff = document.getElementById('onoff1');
var estado = document.getElementById('estado');

function Camera(){
    onoff.addEventListener('change', function() {
        estado.innerHTML = this.checked ? 'Ligado' : 'Desligado';
        if(estado.innerHTML == 'Ligado'){
            initCamera();
        }
        else if (estado.innerHTML == 'Desligado' ) {
            pararCamera();
        }
    })
}

function pararMic(){
    audio.srcObject = null;
}
    

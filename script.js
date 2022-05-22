
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
    

var onoff = document.getElementById('onoff1');
var estado = document.getElementById('estado');

onoff.addEventListener('change', function() {
    estado.innerHTML = this.checked ? 'Ligar' : 'Desligar';
    if (estado.innerHTML=='Ligar') {
        initCamera();
    }
    else if (estado.innerHTML=='Desligar') {
        pararCamera();
    }
});

var onoffmic = document.getElementById('onoffmic');
var estadomic = document.getElementById('estadomic');

onoffmic.addEventListener('change', function() {
    estadomic.innerHTML = this.checked ? 'Ligar' : 'Desligar';
    if (estadomic.innerHTML=='Ligar') {
        initMicrofone();
    }
    else if (estadomic.innerHTML=='Desligar') {
        pararMic();
    }
});



// Definindo variável video
const video = document.querySelector('#video');

// Função de iniciar Camera
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

// Função de parar câmera (torna o source do video null)
function pararCamera(){
    video.srcObject = null
}

// definindo variável do áudio
const audio = document.querySelector('#audio');

// função de iniciar microfone
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
// função de parar microfe passando audio como null
function pararMic(){
    audio.srcObject = null;
}
    
// iniciando variaveis de onoff e estado para a função do botão toggle
var onoff = document.getElementById('onoff1');
var estado = document.getElementById('estado');

// função para o botao toggle
onoff.addEventListener('change', function() {
    estado.innerHTML = this.checked ? 'Ligar' : 'Desligar';
    // se botao estiver ligado entao vai iniciar a Camera, e se ele estiver desligado vai fechar a camera
    if (estado.innerHTML=='Ligar') {
        initCamera();
    }
    else if (estado.innerHTML=='Desligar') {
        pararCamera();
    }
});

// iniciando e definindo vareiaveis do segundo botão toggle
var onoffmic = document.getElementById('onoffmic');
var estadomic = document.getElementById('estadomic');
const imgmic = document.getElementsByClassName("block-audio");

// função do segundo botao toggle que é o de mic
onoffmic.addEventListener('change', function() {
    // se botao estiver ligado entao vai iniciar o microfone, e se ele estiver desligado vai fechar o microfone
    estadomic.innerHTML = this.checked ? 'Ligar' : 'Desligar';
    if (estadomic.innerHTML=='Ligar') {
        initMicrofone();
        imgmic[0].style.backgroundImage = "url(./img/micAberto.png)";
    }
    else if (estadomic.innerHTML=='Desligar') {
        pararMic();
        imgmic[0].style.backgroundImage = "url(./img/micFechado.png)";
    }
});



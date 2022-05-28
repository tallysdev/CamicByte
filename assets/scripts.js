// Definindo variável video
const video = document.querySelector('#video');
const icones = document.getElementsByClassName('icone');

// Função de iniciar Camera
async function initCamera(){    
    if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
        navigator.mediaDevices.getUserMedia({video: true})
        .then((mediaStream) => {
            icones[0].style.display = 'none';
            video.srcObject = mediaStream;
            video.style.display = 'block';
        })
        .catch((err) => {
            alert("Permissão negada!");
        })
    }
}

// Função de parar câmera (torna o source do video null)
function pararCamera(){
    video.srcObject = null;
    video.style.display = 'none';
    icones[0].style.display = 'inline';
}

// definindo variável do áudio
const audio = document.querySelector('#audio');

// função de iniciar microfone
async function initMicrofone(){    
    if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
        navigator.mediaDevices.getUserMedia({audio: true})
        .then((mediaStream) => {
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
var onoff = document.getElementById('onoffcam');
var estado = document.getElementById('estado');

// função para o botao toggle
onoff.addEventListener('change', function() {
    estado.innerHTML = this.checked ? 'Ligado' : 'Desligado';
    // se botao estiver ligado entao vai iniciar a Camera, e se ele estiver desligado vai fechar a camera
    if (estado.innerHTML=='Ligado') {
        initCamera();
    }
    else if (estado.innerHTML=='Desligado') {
        pararCamera();
    }
});

// iniciando e definindo vareiaveis do segundo botão toggle
var onoffmic = document.getElementById('onoffmic');
var estadomic = document.getElementById('estadomic');

// função do segundo botao toggle que é o de mic
onoffmic.addEventListener('change', function() {
    // se botao estiver ligado entao vai iniciar o microfone, e se ele estiver desligado vai fechar o microfone
    estadomic.innerHTML = this.checked ? 'Ligado' : 'Desligado';
    if (estadomic.innerHTML=='Ligado') {
        initMicrofone();
        icones[1].src = "./img/micAberto.png";
    }
    else if (estadomic.innerHTML=='Desligado') {
        pararMic();
        icones[1].src = "./img/micFechado.png";
    }
});




function tocarMusica() {
    const audio = document.getElementById('musicaFundo');
    audio.play().catch(() => {
        console.warn("Autoplay bloqueado.");
    });

    // iniciarBatidaVisual(audio); // ativa a batida visual
}

function pararMusica() {
    const audio = document.getElementById('musicaFundo');
    audio.pause();
    audio.currentTime = 0;
}

/*
function iniciarBatidaVisual(audioElement) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioCtx.createMediaElementSource(audioElement);
    const analyser = audioCtx.createAnalyser();
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
    analyser.fftSize = 256;

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    function animate() {
        requestAnimationFrame(animate);
        analyser.getByteFrequencyData(dataArray);

        // calcula a "energia" geral da música
        const volume = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;

        const header = document.querySelector('.navbar.fixed-top');
        const footer = document.querySelector('footer');

        if (volume > 10) {
            header.classList.add('pulsando');
            footer.classList.add('pulsando');
        } else {
            header.classList.remove('pulsando');
            footer.classList.remove('pulsando');
        }
    }

    animate();
}
*/

function criarCoracao() {
    const coracoesContainer = document.getElementById('coracoes-container');
    const coracao = document.createElement('div');
    coracao.classList.add('coracao');
    coracao.innerText = '💖';

    // posição horizontal aleatória
    coracao.style.left = Math.random() * 100 + 'vw';
    // tamanho aleatório
    coracao.style.fontSize = (Math.random() * 16 + 16) + 'px';

    // duração aleatória
    //coracao.style.animationDuration = (Math.random() * 2 + 4) + 's';

    // duração estatica
    coracao.style.animationDuration = (4) + 's';

    coracoesContainer.appendChild(coracao);

    // remover coração após a animação
    setTimeout(() => {
        coracao.remove();
    }, 6000);
}


$(document).ready(function () {
    const audio = document.getElementById('musicaFundo');
    audio.volume = 0.2;

    $('#controle-volume').on('input', function () {
        audio.volume = parseFloat(this.value);
    });

    audio.play().catch(() => {
        console.warn("Autoplay bloqueado.");
    });

    function atualizarContador() {
        const inicio = new Date('2025-07-26T00:00:00'); // data de início com hora zero
        const agora = new Date();
        const diffMs = agora - inicio;

        const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diffMs % (1000 * 60)) / 1000);

        const texto = `${dias} dias, ${horas}h:${minutos}m:${segundos}s`;
        $('#tempo-juntos').text(texto);

        const dataFormatada = agora.toLocaleDateString('pt-BR');
        $('#data-atual').text(dataFormatada);
    }

    // Atualiza imediatamente e depois a cada segundo
    atualizarContador();
    setInterval(atualizarContador, 1000);
    
    // criar corações a cada 300ms
    setInterval(criarCoracao, 300);
});
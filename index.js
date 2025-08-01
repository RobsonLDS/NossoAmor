function criarCoracao() {
    const coracoesContainer = document.getElementById('coracoes-container');
    const coracao = document.createElement('div');
    coracao.classList.add('coracao');
    coracao.innerText = '💖';

    coracao.style.left = Math.random() * 100 + 'vw';
    coracao.style.fontSize = (Math.random() * 16 + 16) + 'px';
    coracao.style.animationDuration = (4) + 's';

    coracoesContainer.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 6000);
}


$(document).ready(function () {

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
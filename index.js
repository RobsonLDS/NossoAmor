$(document).ready(function () {
    const inicio = new Date('2025-07-26');
    const hoje = new Date();

    // Formata a data atual
    const dataAtualFormatada = hoje.toLocaleDateString('pt-BR');

    // Calcula a diferença em dias
    const diffTime = Math.abs(hoje - inicio);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	
	console.log("diffDays = " + diffDays);

    // Preenche os campos
    $('#data-atual').text(dataAtualFormatada);
    $('#tempo-juntos').text(diffDays + ' dias');
});
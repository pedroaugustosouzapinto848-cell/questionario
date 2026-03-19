function calcularResultado() {
    const respostas = document.querySelectorAll('input[type="radio"]:checked');
    
    if (respostas.length < 16) {
        alert("Por favor, responda todas as perguntas antes de ver o resultado!");
        return;
    }

    let pontuacaoTotal = 0;

    respostas.forEach(resposta => {
        pontuacaoTotal += parseInt(resposta.value);
    });

    const porcentagem = (pontuacaoTotal / 16) * 100;

    const divResultado = document.getElementById('resultado');
    
    const resultadoFinal = Math.round(porcentagem);

    divResultado.innerHTML = `<h3>Você é ${resultadoFinal}% Pedro!</h3>`;
    
    if (resultadoFinal > 80) {
        divResultado.innerHTML += "<p>Nível crítico! Você é praticamente o mestre dos Pedros.</p>";
    } else if (resultadoFinal > 50) {
        divResultado.innerHTML += "<p>Você tem fortes tendências a ser Pedro.</p>";
    } else {
        divResultado.innerHTML += "<p>Ufa! Você ainda está seguro... por enquanto.</p>";
    }
}
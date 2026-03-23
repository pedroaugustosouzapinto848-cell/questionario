function calcularResultado() {
    const respostas = document.querySelectorAll('input[type="radio"]:checked');
    const nomeUsuario = document.getElementById('nome_usuario').value;

    if (nomeUsuario.trim() === "") {
        alert("Por favor, digite seu nome para salvar no ranking!");
        return;
    }
    
    if (respostas.length < 16) {
        alert("Por favor, responda todas as perguntas antes de ver o resultado!");
        return;
    }

    let pontuacaoTotal = 0;
    respostas.forEach(resposta => {
        pontuacaoTotal += parseInt(resposta.value);
    });

    const porcentagem = (pontuacaoTotal / 16) * 100;
    const resultadoFinal = Math.round(porcentagem);
    const divResultado = document.getElementById('resultado');

    divResultado.innerHTML = `<h3>Você é ${resultadoFinal}% Pedro!</h3>`;
    
    if (resultadoFinal > 80) {
        divResultado.innerHTML += "<p>Nível crítico! Você é praticamente o mestre dos Pedros.</p>";
    } else if (resultadoFinal > 50) {
        divResultado.innerHTML += "<p>Você tem fortes tendências a ser Pedro.</p>";
    } else {
        divResultado.innerHTML += "<p>Ufa! Você ainda está seguro... por enquanto.</p>";
    }

    enviarParaOBanco(nomeUsuario, resultadoFinal);
}

function enviarParaOBanco(nome, pontos) {
    const formData = new FormData();
    formData.append('nome_usuario', nome);
    formData.append('valor_pedro', pontos);

    fetch('salvar_resultado.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log("Sucesso:", data);
        alert("Resultado salvo no ranking!");
    })
    .catch(error => {
        console.error("Erro:", error);
    });
}
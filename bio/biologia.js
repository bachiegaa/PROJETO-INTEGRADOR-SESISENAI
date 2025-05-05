function selecionarOpcao(botao, pergunta, valor) {
    // Remove a seleção de todos os botões da mesma pergunta
    const botoes = document.querySelectorAll(`.opcoes button[onclick*="${pergunta}"]`);
    botoes.forEach(b => b.classList.remove('selecionado'));
  
    // Adiciona a seleção no botão clicado
    botao.classList.add('selecionado');
  
    // Opcional: armazenar valor da resposta, se quiser fazer validação depois
    botao.setAttribute('data-resposta', valor);
  }
  
  // Exemplo de função de verificação — pode adaptar
  function verificarRespostas() {
    const selecionados = document.querySelectorAll('.opcoes button.selecionado');
    let acertos = 0;
  
    selecionados.forEach(botao => {
      if (botao.getAttribute('data-resposta') === 'certo') {
        acertos++;
        botao.style.borderColor = "#2ecc71"; // Verde para a resposta correta
        botao.style.backgroundColor = "#a3f7bf"; // Fundo verde suave
      }
      if (botao.classList.contains('selecionado') && botao.getAttribute('data-resposta') === 'errado') {
        botao.style.borderColor = "#b10b0b"; // Verde para a resposta correta
        botao.style.backgroundColor = "#b10b0b"; // Fundo verde suave
      }
      
    });
        // Exibir o resultado
        const resultado = document.getElementById('resultado');
        resultado.textContent = `Você acertou ${acertos} de ${document.querySelectorAll('.pergunta').length} perguntas!`;
        
        // Criar o botão "Jogar Novamente" após a correção
        const botaoJogarNovamente = document.createElement('button');
        botaoJogarNovamente.id = 'jogarNovamente';
        botaoJogarNovamente.textContent = ' Jogar Novamente';
        botaoJogarNovamente.onclick = reiniciarQuiz;
    
        // Adicionar o botão ao resultado
        resultado.appendChild(document.createElement('br')); // Quebra de linha
        resultado.appendChild(botaoJogarNovamente);
    }
      
    function reiniciarQuiz() {
        // Limpar as seleções e reiniciar os botões
        const botoes = document.querySelectorAll('.opcoes button');
        botoes.forEach(botao => {
            botao.classList.remove('selecionado');
            botao.style.borderColor = "transparent";
            botao.style.backgroundColor = "#87c5bbca"; // Cor original dos botões
            botao.disabled = false;
        });
    
        // Limpar o resultado e remover o botão "Jogar Novamente"
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = ""; // Limpa o texto e o botão "Jogar Novamente"
    }

    
  
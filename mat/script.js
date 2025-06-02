function toggleResposta(button) {
    const respostaDiv = button.nextElementSibling;
    if (respostaDiv.style.display === 'none' || respostaDiv.style.display === '') {
      respostaDiv.style.display = 'block';
      button.textContent = 'Ocultar resposta';
    } else {
      respostaDiv.style.display = 'none';
      button.textContent = 'Ver resposta';
    }
  }

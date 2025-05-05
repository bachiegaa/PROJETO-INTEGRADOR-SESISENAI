const fase1 = document.getElementById('fase1');
const fase2 = document.getElementById('fase2');
const gatoFinal = document.getElementById('gato-final');
const resultado = document.getElementById('resultado');
const gatoSuper = document.getElementById('gato-super');
const pesquisa = document.getElementById('pesquisa');
const sobreExperimento = document.getElementById('sobre-experimento');
const formPesquisa = document.getElementById('formPesquisa');
const stars = document.querySelectorAll('.star');
const ratingText = document.getElementById('rating-text'); 

let rating = 0; 


function iniciarJogo() {
  sobreExperimento.style.opacity = '0'; 
  setTimeout(() => {
    sobreExperimento.style.display = 'none'; 
    fase1.style.display = 'block'; 
  }, 500); 
}

function entrarNaCaixa() {
  fase1.style.display = 'none';
  fase2.style.display = 'block';
}

function mostrarExplicacao(texto) {
  alert(texto); 
}


function colapsarEstado() {
  gatoSuper.style.display = 'none';
  const sorte = Math.random(); 

  gatoFinal.style.display = 'block'; 

  if (sorte < 0.5) {
    gatoFinal.src = 'https://images.vexels.com/media/users/3/272053/isolated/preview/b1f6e4e724765fcc7756f709b54fbc4c-gato-preto-ericado-de-desenho-animado.png'; 
    resultado.textContent = 'O gato está VIVO! ';
  } else {
    gatoFinal.src = 'https://images.vexels.com/media/users/3/180546/isolated/preview/7a79c2673863f304fb861167feb1c166-desenho-de-lapide-de-gato-preto-assustador.png'; 
    resultado.textContent = 'O gato está MORTO! ';
  }

 
  pesquisa.style.display = 'block';
}


function resetarJogo() {
  fase1.style.display = 'none'; 
  fase2.style.display = 'none'; 
  gatoFinal.style.display = 'none'; 
  resultado.textContent = ''; 
  gatoSuper.style.display = 'block';

  pesquisa.style.display = 'none'; 
  sobreExperimento.style.display = 'block'; 
  sobreExperimento.style.opacity = '1'; 
}


function setRating(value) {
  rating = value;
  stars.forEach((star, index) => {
    if (index < value) {
      star.classList.add('filled');
    } else {
      star.classList.remove('filled');
    }
  });
  ratingText.textContent = `Avaliação: ${rating} estrela(s)`;
}


formPesquisa.addEventListener('submit', function(event) {
  event.preventDefault();  

  const autor = document.getElementById('autor').value;
  const funcionamento = document.getElementById('funcionamento').value;
  

  if (rating === 0) {
    alert("Por favor, selecione uma avaliação com estrelas!");
    return;
  }


  document.getElementById('mensagem').textContent = `Obrigado pela sua avaliação, ${autor}! Você deu ${rating} estrela(s) ao nosso jogo.`;

  
});

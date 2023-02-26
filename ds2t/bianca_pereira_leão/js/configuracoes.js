// Obtém o link do tema
var temaLink = document.getElementById("tema-link");

// Obtém a janela modal do tema
var temaModal = document.getElementById("tema-modal");

// Quando o usuário clicar no link do tema, mostre a janela modal
temaLink.onclick = function(event) {
  event.preventDefault(); 
  temaModal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == temaModal) {
    temaModal.style.display = "none";
  }
}

// ação do cancel-button
var span = temaModal.getElementsByClassName("cancel-button")[0];
span.onclick = function() {
  temaModal.style.display = "none";
}

function closeTemaModal() {
  temaModal.style.display = "none";
}


// ação do ok-button

const messagesGroup = document.getElementById('messages')

const okButton = document.querySelector('.ok-button');

okButton.addEventListener('click', function() {
  const input = document.querySelector('input[name="cor"]:checked');
  if (input && input.value === 'escuro') {
    messagesGroup.classList.add('imgEscura');
    messagesGroup.classList.remove('imgClara');
  } else {
    messagesGroup.classList.add('imgClara');
    messagesGroup.classList.remove('imgEscura');
  }
  closeTemaModal();
});

// Obtém o link do tema
var temaLink = document.getElementById("tema-link");

// Obtém a janela modal do tema
var temaModal = document.getElementById("tema-modal");

// Quando o usuário clicar no link do tema, mostre a janela modal
temaLink.onclick = function(event) {
  event.preventDefault(); // Impede o comportamento padrão do link
  temaModal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == temaModal) {
    temaModal.style.display = "none";
  }
}
var span = temaModal.getElementsByClassName("cancel-button")[0];
span.onclick = function() {
  temaModal.style.display = "none";
}

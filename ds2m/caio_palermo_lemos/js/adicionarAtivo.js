const chats = document.querySelectorAll(".chat");

const adicionarAtivo = function (event) {
  chats.forEach((chat) => {
    chat.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
};

chats.forEach((chat) => {
  chat.addEventListener("click", adicionarAtivo);
});

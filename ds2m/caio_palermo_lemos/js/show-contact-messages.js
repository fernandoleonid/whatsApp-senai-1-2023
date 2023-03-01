export const showContactMessages = function (contatos) {
  const selectedContact = function () {
    let contatoSelecionado;
    let arrayContato;

    contatos.forEach((contato) => {
      const messages = contato.messages;
      messages.filter((message) => {
        if (message.sender == contatoSelecionado) {
          arrayContato = messages;
          console.log(arrayContato);
          return arrayContato;
        }
      });
    });
  };

  const chats = document.querySelectorAll(".chat");
  chats.forEach((chat) => {
    chat.addEventListener("click", selectedContact);
  });
};

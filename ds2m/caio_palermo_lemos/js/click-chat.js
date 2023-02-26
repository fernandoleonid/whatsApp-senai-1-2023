// export const clickChat = function () {
//   const handleClick = function (event) {
//     let text = event.currentTarget.innerText.split(`\n`)[0];
//     console.log(`Nome: ${text}`);
//     return text;
//   };

//   const chats = document.querySelectorAll(".chat");
//   chats.forEach((chat) => {
//     chat.addEventListener("click", handleClick);
//   });

//   return "Ana Maria";
// };

//retornar o array apenas do que eu clicar
export const showContactMessages = function (contatos) {
  const selectedContact = function () {
    let contatoSelecionado;
    var arrayContato;
    // contatoSelecionado = "Jane Smith";

    // contatoSelecionado = clickChat();
    console.log(contatoSelecionado);

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

// export const verificarIndice = function (contatos) {
//   const selectedContact = function () {
//     let contatoSelecionado;
//     var arrayContato;
//     // contatoSelecionado = "Jane Smith";

//     contatoSelecionado = clickChat();
//     console.log(contatoSelecionado);

//     console.log(contatos);
//     const indice = contatos.findIndex((contato) => {
//       return contato.name == contato;
//     });

//     console.log(indice);
//     return indice;
//   };

//   const chats = document.querySelectorAll(".chat");
//   chats.forEach((chat) => {
//     chat.addEventListener("click", selectedContact);
//   });
// };

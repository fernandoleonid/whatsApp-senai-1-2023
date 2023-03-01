"use strict";

import { contatos } from "./contatos.js";
import { createChat } from "./create-chat.js";
import { showContactMessages } from "./show-contact-messages.js";
import { changeElements } from "./change-elements.js";
import { createMessagesReceiver } from "./create-messages-receiver.js";
import { returnIcon } from "./return.js";

const chargeContacts = function () {
  const chatsContainer = document.querySelector(".chats__chats-container");
  const chats = contatos.map(createChat);

  console.log("CHATS: " + chats);
  chatsContainer.replaceChildren(...chats);
};

const chargeProfile = function () {
  const handleClick = function (event) {
    let text = event.currentTarget.innerText.split(`\n`)[0];

    const messagesReceiver = document.querySelector(".messages__receiver");
    const profile = contatos.map(createMessagesReceiver);

    const indice = contatos.findIndex((contato) => {
      return contato.name == text;
    });

    messagesReceiver.replaceChildren(profile[indice]);
  };

  const chats = document.querySelectorAll(".chat");
  chats.forEach((chat) => {
    chat.addEventListener("click", handleClick);
  });
};

chargeContacts();
chargeProfile();
changeElements();

// AQUI TA DANDO A MERDA
const fazerTudo = function (message) {
  // function convertTZ(date, tzString) {
  //   return new Date(
  //     (typeof date === "string" ? new Date(date) : date).toLocaleString(
  //       "en-US",
  //       {
  //         timeZone: tzString,
  //       }
  //     )
  //   );
  // }

  const fazerLoop = function (indice) {
    const messagesConversationsContainer = document.querySelector(
      ".messages__conversations-container"
    );
    for (let i = 0; contatos[indice].messages.length > i; i++) {
      let array = [];
      const createMessages = function () {
        message = contatos[indice].messages[i];

        let messagesConversations = document.createElement("div");
        messagesConversations.classList.add("messages__conversations");

        let messageSenderContainer = document.createElement("div");
        messageSenderContainer.classList.add("message-sender-container");

        let messageSender = document.createElement("div");
        messageSender.classList.add("message__sender");
        messageSender.classList.add("tri-right");
        messageSender.classList.add("left-top");

        let messageReceiver = document.createElement("div");
        messageReceiver.classList.add("message__receiver");
        messageReceiver.classList.add("tri-right");
        messageReceiver.classList.add("right-top");

        let messageContent = document.createElement("p");
        messageContent.classList.add("message__content");
        messageContent.textContent = message.content;

        let messageTime = document.createElement("span");
        messageTime.classList.add("message__time");

        // const dataConvertida = convertTZ(
        //   message.timestamp,
        //   "America/Sao_Paulo"
        // );

        let messageReceiverContainer = document.createElement("div");
        messageReceiverContainer.classList.add("message-receiver-container");

        if (message.sender == "me") {
          messageContent.classList.add("message__content");
          messageContent.textContent = message.content;

          messageTime.classList.add("message__time");
          messageTime.textContent = message.time;

          messageSender.replaceChildren(messageContent, messageTime);

          messageReceiverContainer.classList.add("none");
        } else {
          messageContent.classList.add("message__content");
          messageContent.textContent = message.content;

          // if (message.hasOwnProperty(time)) {
          //   messageTime.classList.add("message__time");
          //   messageTime.textContent = `${dataConvertida.getHours()}:${dataConvertida.getMinutes()}`;
          // }
          // if (message.hasOwnProperty(timestamp)) {
          //   messageTime.textContent = message.time;
          // }

          messageTime.classList.add("message__time");
          messageTime.textContent = message.time;

          messageReceiver.replaceChildren(messageContent, messageTime);

          messageSenderContainer.classList.add("none");
        }

        messageSenderContainer.replaceChildren(messageSender);
        messageReceiverContainer.replaceChildren(messageReceiver);

        messagesConversations.replaceChildren(
          messageSenderContainer,
          messageReceiverContainer
        );

        return messagesConversations;
      };
      array[i] = createMessages();

      const messagesConversations = document.querySelector(
        ".messages__conversations"
      );

      array[i] = createMessages();

      // let filtro = array.filter((item) => {
      //   return item;
      // });

      // let teste = array.forEach((item, index, array) => {
      //   console.log("item: " + item);
      //   console.log("index: " + index);
      //   array.filter((valor) => {
      //     console.log("valor: " + valor);
      //     return valor;
      //   });
      //   array += array[index + 1];
      //   console.log("array: " + array);
      // });
      messagesConversations.replaceChildren(...array);

      // messagesConversations.append(array[i]);
      // messagesConversations.replaceChildren(...array);
    }
  };
  const handleClick = function (event) {
    let text = event.currentTarget.innerText.split(`\n`)[0];

    let indice = 0;
    indice = contatos.findIndex((contato) => {
      return contato.name == text;
    });
    console.log(indice);

    showContactMessages(contatos);

    fazerLoop(indice);
  };

  const chats = document.querySelectorAll(".chat");
  chats.forEach((chat) => {
    chat.addEventListener("click", handleClick);
  });
};

fazerTudo(contatos);

returnIcon();
// contatos.forEach((contato) => {
//   contato.messages.forEach((message) => {
//     console.log(message.timestamp);
//   });
// });

// console.log(`${convertedDate.getHours()}:${convertedDate.getMinutes()}`); // 17

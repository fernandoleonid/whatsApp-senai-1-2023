"use strict";

import { contatos } from "./contatos.js";
import { changeElements } from "./change-elements.js";
import { returnIcon } from "./return.js";
import { chargeContacts } from "./charge-contacts.js";
import { chargeProfile } from "./charge-profile.js";

chargeContacts(contatos);
chargeProfile(contatos);
changeElements();
returnIcon();

function convertTZ(date, tzString) {
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  );
}

const fazerLoop = function (indice) {
  for (let i = 0; contatos[indice].messages.length > i; i++) {
    const createMessages = function (message) {
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

      let messageReceiverContainer = document.createElement("div");
      messageReceiverContainer.classList.add("message-receiver-container");

      if (message.sender == "me") {
        if (message.hasOwnProperty("timestamp")) {
          const dataConvertida = convertTZ(
            message.timestamp,
            "America/Sao_Paulo"
          );
          message.timestamp = `${dataConvertida.getHours()}:${dataConvertida.getMinutes()}`;
          messageTime.textContent = message.timestamp;
        }
        if (message.hasOwnProperty("time")) {
          messageTime.textContent = message.time;
        }

        messageContent.classList.add("message__content");
        messageContent.textContent = message.content;

        messageTime.classList.add("message__time");

        messageSender.replaceChildren(messageContent, messageTime);

        messageReceiverContainer.classList.add("none");
      } else {
        if (message.hasOwnProperty("timestamp")) {
          const dataConvertida = convertTZ(
            message.timestamp,
            "America/Sao_Paulo"
          );
          message.timestamp = `${dataConvertida.getHours()}:${dataConvertida.getMinutes()}`;
          messageTime.textContent = message.timestamp;
        }
        if (message.hasOwnProperty("time")) {
          messageTime.textContent = message.time;
        }

        messageContent.classList.add("message__content");
        messageContent.textContent = message.content;

        messageTime.classList.add("message__time");

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

    const messagesConversationsContainer = document.querySelector(
      ".messages__conversations-container"
    );

    messagesConversationsContainer.append(createMessages());
  }
};
const handleClick = function (event) {
  const messagesConversationsContainer = document.querySelector(
    ".messages__conversations-container"
  );
  let text = event.currentTarget.innerText.split(`\n`)[0];

  let indice = 0;
  indice = contatos.findIndex((contato) => {
    return contato.name == text;
  });

  messagesConversationsContainer.innerHTML = "";

  fazerLoop(indice);
};

const chats = document.querySelectorAll(".chat");
chats.forEach((chat) => {
  chat.addEventListener("click", handleClick);
});

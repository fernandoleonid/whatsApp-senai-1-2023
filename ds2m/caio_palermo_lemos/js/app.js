"use strict";

import { contatos } from "./contatos.js";
import { showContactMessages } from "./click-chat.js";

const createChat = function (contact) {
  const chat = document.createElement("div");
  chat.classList.add("chat");

  const chatImage = document.createElement("img");
  chatImage.classList.add("chat__image");
  chatImage.src = `./${contact.image}`;

  const chatContent = document.createElement("div");
  chatContent.classList.add("chat__content");

  const chatName = document.createElement("span");
  chatName.classList.add("chat__name");
  chatName.textContent = contact.name;

  const chatText = document.createElement("p");
  chatText.classList.add("chat__text");
  chatText.textContent = contact.description;

  chatContent.append(chatName, chatText);

  chat.append(chatImage, chatContent);

  return chat;
};

const chargeContacts = function () {
  const chatsContainer = document.querySelector(".chats__chats-container");
  const chats = contatos.map(createChat);

  chatsContainer.replaceChildren(...chats);
};

const createMessagesReceiver = function (receiver) {
  const receiverProfile = document.createElement("div");
  receiverProfile.classList.add("receiver__profile");

  const profileImage = document.createElement("img");
  profileImage.classList.add("profile__image");
  profileImage.src = `./${receiver.image}`;

  const profileName = document.createElement("p");
  profileName.classList.add("profile__name");
  profileName.textContent = receiver.name;

  receiverProfile.append(profileImage, profileName);

  return receiverProfile;
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

// AQUI TA DANDO A MERDA

// let i = 0;

const fazerTudo = function (message) {
  for (let i = 0; contatos[0].messages.length > i; i++) {
    let array = [];
    const createMessages = function () {
      message = contatos[0].messages[i];

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
      messageTime.textContent = message.timestamp;

      let messageReceiverContainer = document.createElement("div");
      messageReceiverContainer.classList.add("message-receiver-container");

      if (message.sender == "me") {
        messageContent.classList.add("message__content");
        messageContent.textContent = message.content;

        messageTime.classList.add("message__time");
        messageTime.textContent = message.timestamp;
        messageSender.append(messageContent, messageTime);

        // messagesConversations.removeChild(messageReceiver);
      } else {
        messageContent.classList.add("message__content");
        messageContent.textContent = message.content;

        messageTime.classList.add("message__time");
        messageTime.textContent = message.timestamp;
        messageReceiver.append(messageContent, messageTime);
      }

      messageSenderContainer.append(messageSender);
      messageReceiverContainer.append(messageReceiver);

      messagesConversations.append(
        messageSenderContainer,
        messageReceiverContainer
      );
      return messagesConversations;
    };
    array[i] = createMessages();
    console.log(array[2]);
    console.log(i);
    console.log(array);

    const messagesConversations = document.querySelector(
      ".messages__conversations"
    );

    if (array.includes("undefined")) {
      console.log("tem");
    }
    messagesConversations.appendChild(array[i]);
  }
};

fazerTudo(contatos);

const chargeMessages = function () {
  const handleClick = function (event) {
    let text = event.currentTarget.innerText.split(`\n`)[0];

    let indice = 0;
    indice = contatos.findIndex((contato) => {
      return contato.name == text;
    });
    console.log(indice);

    const object = contatos[indice].messages;
    console.log("MENSAGENS AAAA" + object[0]);

    const messagesConversations = document.querySelector(
      ".messages__conversations"
    );
    const mensagens = contatos.map(createMessages);
    messagesConversations.replaceChildren(`INDICE ${indice}`);
    messagesConversations.replaceChildren(...mensagens);
    console.log("MENSAGEM FINAL: " + mensagens[0]);

    showContactMessages(contatos);
  };

  const chats = document.querySelectorAll(".chat");
  chats.forEach((chat) => {
    chat.addEventListener("click", handleClick);
  });
};

chargeMessages();

const object = contatos[0].messages.length;
console.log(object);
console.log(object[0]);

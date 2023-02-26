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
    console.log(`Nome: ${text}`);

    const messagesReceiver = document.querySelector(".messages__receiver");
    const profile = contatos.map(createMessagesReceiver);

    const indice = contatos.findIndex((contato) => {
      return contato.name == text;
      // return contato.name == clickChat();
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
const createMessages = function () {
  let message = contatos[0].messages[0];
  const messagesConversations = document.createElement("div");
  messagesConversations.classList.add(".messages__conversations");

  const messageSenderContainer = document.createElement("div");
  messageSenderContainer.classList.add("message-sender-container");

  const messageSender = document.createElement("div");
  messageSender.classList.add("message__sender");

  const messageReceiver = document.createElement("div");
  messageReceiver.classList.add("message__receiver");

  let messageContent = document.createElement("p");
  let messageTime = document.createElement("span");

  if (message.sender == "me") {
    console.log("alooooooo");
    messageContent.classList.add("message__content");
    messageContent.textContent = message.content;

    messageTime.classList.add("message__time");
    messageTime.textContent = message.timestamp;

    messageSender.append(messageContent, messageTime);
  } else {
    console.log("sendererererer");
    messageContent.classList.add("message__content");
    messageContent.textContent = message.content;

    messageTime.classList.add("message__time");
    messageTime.textContent = message.timestamp;
    messageReceiver.append(messageContent, messageTime);
  }
  // messageSender.classList.add("message__sender tri-right left-top");

  const messageReceiverContainer = document.createElement("div");
  messageReceiverContainer.classList.add("message-receiver-container");

  // messageReceiver.classList.add("message__receiver tri-right right-top");

  messageSenderContainer.append(messageSender);
  messageReceiverContainer.append(messageReceiver);

  messagesConversations.append(
    messageSenderContainer,
    messageReceiverContainer
  );

  return messagesConversations;
};

const chargeMessages = function () {
  const handleClick = function (event) {
    let text = event.currentTarget.innerText.split(`\n`)[0];
    console.log(`Nome: ${text}`);

    // const messagesReceiver = document.querySelector(".messages__receiver");
    // const profile = contatos.map(createMessagesReceiver);

    // const indice = contatos.findIndex((contato) => {
    //   return contato.name == text;
    // });

    // messagesReceiver.replaceChildren(profile[indice]);

    const showContactMessages = function (contatos) {
      const selectedContact = function () {
        let contatoSelecionado;
        var arrayContato;

        contatoSelecionado = text;
        console.log("CONTATO: " + contatoSelecionado);

        contatos.forEach((contato) => {
          const messages = contato.messages;
          messages.filter((message) => {
            if (message.sender == contatoSelecionado) {
              arrayContato = messages;
              console.log("ARRAY CONTATO: " + arrayContato.sender);
              return arrayContato;
            }
          });
        });
      };

      const chats = document.querySelectorAll(".chat");
      chats.forEach((chat) => {
        chat.addEventListener("click", selectedContact);
      });

      // const messagesContainer = document.querySelector(
      //   ".messages__conversations"
      // );
      // const messages = contatos.map(createMessages);

      // const indice = messages.findIndex((message) => {
      //   return message;
      // });

      // // messagesContainer.replaceChildren(...messages);
      // messagesContainer.replaceChildren(messages[indice]);
      // console.log(messages[indice]);
    };

    showContactMessages(contatos);
  };

  const chats = document.querySelectorAll(".chat");
  chats.forEach((chat) => {
    chat.addEventListener("click", handleClick);
  });

  // const profile = contatos.map(createMessagesReceiver);

  // const indice = contatos.findIndex((contato) => {
  //   return contato.name == "Julia Smith";
  //   // return contato.name == clickChat();
  // });

  // messagesReceiver.replaceChildren(profile[indice]);
};

chargeMessages();

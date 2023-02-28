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

  console.log("CHATS: " + chats);
  chatsContainer.replaceChildren(...chats);
};

// const createMessagesReceiver = function (receiver) {
//   const receiverProfile = document.createElement("div");
//   receiverProfile.classList.add("receiver__profile");

//   const profileImage = document.createElement("img");
//   profileImage.classList.add("profile__image");
//   profileImage.src = `./${receiver.image}`;

//   const profileName = document.createElement("p");
//   profileName.classList.add("profile__name");
//   profileName.textContent = receiver.name;

//   receiverProfile.append(profileImage, profileName);

//   return receiverProfile;
// };

const createMessagesReceiver = function (receiver) {
  // <div class="receiver__options">
  //   <i class="fa-solid fa-magnifying-glass" id="options__search"></i>
  //   <i class="fas fa-ellipsis-v" id="options__more-options"></i>
  // </div>;
  const receiverProfile = document.createElement("div");
  receiverProfile.classList.add("receiver__profile");

  const receiverOptions = document.createElement("div");
  receiverOptions.classList.add("receiver__options");

  const optionsSearch = document.createElement("i");
  optionsSearch.classList.add("fa-solid");
  optionsSearch.classList.add("fa-magnifying-glass");

  const moreOptions = document.createElement("i");
  moreOptions.classList.add("fas");
  moreOptions.classList.add("fa-ellipsis-v");

  receiverOptions.append(optionsSearch, moreOptions);

  const profileImage = document.createElement("img");
  profileImage.classList.add("profile__image");
  profileImage.src = `./${receiver.image}`;

  const profileName = document.createElement("p");
  profileName.classList.add("profile__name");
  profileName.textContent = receiver.name;

  receiverProfile.append(profileImage, profileName, receiverOptions);

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

const fazerTudo = function (message) {
  function convertTZ(date, tzString) {
    return new Date(
      (typeof date === "string" ? new Date(date) : date).toLocaleString(
        "en-US",
        {
          timeZone: tzString,
        }
      )
    );
  }

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
        const dataConvertida = convertTZ(
          message.timestamp,
          "America/Sao_Paulo"
        );
        messageTime.textContent = `${dataConvertida.getHours()}:${dataConvertida.getMinutes()}`;

        let messageReceiverContainer = document.createElement("div");
        messageReceiverContainer.classList.add("message-receiver-container");

        if (message.sender == "me") {
          messageContent.classList.add("message__content");
          messageContent.textContent = message.content;

          messageTime.classList.add("message__time");
          messageTime.textContent = `${dataConvertida.getHours()}:${dataConvertida.getMinutes()}`;
          // messageTime.textContent = message.time;

          messageSender.replaceChildren(messageContent, messageTime);

          messageReceiverContainer.classList.add("none");
        } else {
          messageContent.classList.add("message__content");
          messageContent.textContent = message.content;

          messageTime.classList.add("message__time");
          messageTime.textContent = `${dataConvertida.getHours()}:${dataConvertida.getMinutes()}`;
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

const alternarBackground = function () {
  const chatsContainer = document.querySelector(".chats__chats-container");
  const chats = document.querySelector(".chats");
  const chatsFilter = document.querySelector(".chats__filter");
  const messages = document.querySelector(".messages");
  const messagesReceiver = document.querySelector(".messages__receiver");
  const messagesConversationsContainer = document.querySelector(
    ".messages__conversations-container"
  );
  const messagesInteractions = document.querySelector(
    ".messages__interactions"
  );
  const messagesBackground = document.querySelector(
    ".messages__background-default"
  );

  messagesReceiver.classList.add("none");
  messagesConversationsContainer.classList.add("none");
  messagesInteractions.classList.add("none");

  const handleClick = function () {
    if (window.matchMedia("(max-width: 980px)").matches) {
      chats.classList.add("none"); //certo
      messages.classList.add("block"); //certo
      messagesReceiver.classList.add("flex");
      messagesConversationsContainer.classList.add("block");
      messagesInteractions.classList.add("flex");
    } else {
      messagesReceiver.classList.add("flex");
      messagesConversationsContainer.classList.add("block");
      messagesInteractions.classList.add("flex");
      messagesBackground.classList.add("none");
    }
  };

  if (window.matchMedia("(min-width: 980px)").matches) {
    chatsContainer.classList.remove("none");
    chats.classList.remove("none");
    chatsFilter.classList.remove("none");
  }

  chatsContainer.addEventListener("click", handleClick);
};

alternarBackground();

contatos.forEach((contato) => {
  contato.messages.forEach((message) => {
    console.log(message.timestamp);
  });
});

// console.log(`${convertedDate.getHours()}:${convertedDate.getMinutes()}`); // 17

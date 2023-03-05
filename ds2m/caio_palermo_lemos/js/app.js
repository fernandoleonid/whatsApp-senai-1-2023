"use strict";

import { contatos } from "./contatos.js";
import { changeElements } from "./change-elements.js";
import { returnIcon } from "./return.js";
import { chargeContacts } from "./charge-contacts.js";
import { chargeProfile } from "./charge-profile.js";
import { showMessages } from "./show-messages.js";

chargeContacts(contatos);
chargeProfile(contatos);
showMessages(contatos);
changeElements();
returnIcon();

const changeColors = function () {
  const changeColorIcon = document.getElementById(
    "profile-options__change-color"
  );
  const handleClick = function () {
    const html = document.querySelector(":root");
    const messagesConversationsContainer = document.querySelector(
      ".messages__conversations-container"
    );
    messagesConversationsContainer.classList.toggle("white");
    html.classList.toggle("white");
  };

  changeColorIcon.addEventListener("click", handleClick);
};

changeColors();

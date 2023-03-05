"use strict";

export const changeColors = function () {
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

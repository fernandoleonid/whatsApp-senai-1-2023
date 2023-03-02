export const returnIcon = function () {
  const returnIcon = document.querySelector(".return");
  const messages = document.querySelector('.messages')
  const messagesReceiver = document.querySelector('.messages__receiver')
  const messagesConversations = document.querySelector('.messages__conversations-container')
  const messagesInteractions = document.querySelector('.messages__interactions')

  const handleClickReturn = function (event) {
    const chats = document.querySelector(".chats");
    chats.classList.remove("none");
    returnIcon.classList.remove("block");
    messages.classList.remove('block')
    messagesConversations.classList.remove('block')
    messagesInteractions.classList.remove('flex')
    messagesReceiver.classList.remove('flex')
  };

  returnIcon.addEventListener("click", handleClickReturn);
};

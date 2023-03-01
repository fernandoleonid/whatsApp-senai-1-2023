export const returnIcon = function () {
  const returnIcon = document.querySelector(".return");

  const handleClickReturn = function (event) {
    const chats = document.querySelector(".chats");
    chats.classList.remove("none");
    returnIcon.classList.add("none");
  };

  returnIcon.addEventListener("click", handleClickReturn);
};

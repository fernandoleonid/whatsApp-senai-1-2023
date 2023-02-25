'use stric'

const searchInput = document.querySelector('#inputSearch');
const searchIcon = document.querySelector('#search');
const arrowIcon = document.querySelector('#arrow');

searchInput.addEventListener('focus', function () {
    const iconWidth = searchIcon.offsetWidth;
    const paddingLeft = iconWidth + 40;
    searchInput.style.paddingLeft = `${paddingLeft}px`;
    searchIcon.style.display = 'none';
    arrowIcon.style.display = 'inline-block';
});

searchInput.addEventListener('blur', function () {

    const iconWidth = searchIcon.offsetWidth;
    const paddingLeft = iconWidth + 0;
    searchInput.style.paddingLeft = `${paddingLeft}px`;
    searchIcon.style.display = 'inline-block';
    arrowIcon.style.display = 'none';
});



// função para aparecer emojis


const emojiButton = document.querySelector('#emoji-picker-btn');
const emojiList = document.querySelector('#emoji-list');
const guardaEmoji = document.querySelector('#guarda-emoji');
const emojis = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊'];
let isEmojiListVisible = false;

emojiButton.addEventListener('click', () => {
  if (isEmojiListVisible) {
    emojiList.style.display = 'none';
    guardaEmoji.classList.remove('show-emoji-list');
  } else {
    emojiList.style.display = 'block';
    guardaEmoji.classList.add('show-emoji-list');
  }
  isEmojiListVisible = !isEmojiListVisible;
});

emojis.forEach(emoji => {
  const span = document.createElement('span');
  span.innerHTML = emoji;
  span.classList.add('emoji');
  span.addEventListener('click', () => {
    const input = document.querySelector('#message-input');
    input.value += emoji;
    emojiList.style.display = 'none';
    guardaEmoji.classList.remove('show-emoji-list');
    isEmojiListVisible = false;
  });
  emojiList.appendChild(span);
});

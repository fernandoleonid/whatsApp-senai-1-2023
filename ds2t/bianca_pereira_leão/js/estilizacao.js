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

'use stric'

const searchInput = document.querySelector('#inputSearch');
const searchIcon = document.querySelector('#search');
const arrowIcon = document.querySelector('#arrow');

searchInput.addEventListener('focus', function () {
    searchIcon.style.display = 'none';
    arrowIcon.style.display = 'inline-block';
});

searchInput.addEventListener('blur', function () {
    searchIcon.style.display = 'inline-block';
    arrowIcon.style.display = 'none';
});
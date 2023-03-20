'use scrict'

import { contatos } from "./recursos/contatos.js"

// adicionei o index dos elementos
const createCard = (contacts, index) => {
    const card = document.createElement('button')
    card.classList.add('chat__box');

    const photo__chat = document.createElement('div')
    photo__chat.classList.add('photo__chat')

    const photo = document.createElement('img')
    photo.classList.add('photo')
    photo.src = `./recursos/${contacts.image}`

    const name__chat = document.createElement('div')
    name__chat.classList.add('name__chat')

    const name = document.createElement('h5')
    name.classList.add('h5')
    name.textContent = contacts.name

    const description = document.createElement('h6')
    description.classList.add('h6')
    description.textContent = contacts.description

    const linha = document.createElement('div')
    linha.classList.add('linha')

    photo__chat.append(photo)
    name__chat.append(name, description)
    card.append(photo__chat, name__chat, linha)

    card.onclick = function () {
        seeMessage(index);
    };

    return card
}

const seeMessage = (index) => {

    let conversation = document.getElementById('conversation');
    conversation.classList.remove('d-none');

    let name__conversation = document.getElementById('name__conversation');
    let container_baloons = document.getElementById('baloons');

    name__conversation.textContent = contatos[index].name;

    // VERIFICAR SE EXISTE UMA CONVERSA ANTIGA
    // SE TIVER, APAGAR ELA


    contatos[index].messages.forEach(element => {

        if (element.sender == 'me') {
            const me_baloon = document.createElement('div');
            me_baloon.classList.add('me_baloon');

            const me_text = document.createElement('h1')
            me_text.classList.add('text');
            me_text.textContent = element.content

            me_baloon.append(me_text)
            container_baloons.append(me_baloon)
        }
        else {
            const other_baloon = document.createElement('div');
            other_baloon.classList.add('other_baloon');

            const other_text = document.createElement('h1')
            other_text.classList.add('textTwo');
            other_text.textContent = element.content

            other_baloon.append(other_text)
            container_baloons.append(other_baloon)
        }

    });




}

const loadContacts = () => {
    const container = document.getElementById('chat')
    const cards = contatos.map(createCard)

    container.replaceChildren(...cards)
}

loadContacts()

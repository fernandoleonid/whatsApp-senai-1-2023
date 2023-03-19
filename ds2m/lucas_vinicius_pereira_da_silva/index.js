'use scrict'

import { contatos } from "./recursos/contatos.js"


const createCard = (contacts) => {
    const card = document.createElement('button')
    card.classList.add('chat__box')

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

    // photo__chat.append(photo)
    name__chat.append(name, description)
    card.append(photo__chat, name__chat, linha)

    return card
} 

const seeMessage = (dados) => {
    console.log('aaaaaa')
}


const loadContacts = () => {
    const container = document.getElementById('chat')
    const cards = contatos.map(createCard)

    container.replaceChildren(...cards)
}

loadContacts()


const el = document.querySelectorAll('.chat__box');
el.forEach(item => {
    item.addEventListener("click", elem =>{
        console.log(elem.target.value);
    });
})


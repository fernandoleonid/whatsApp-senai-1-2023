'use scrict'

import { contatos } from "./recursos/contatos.js"

{/* <div class="photo__chat">
    <img src="./img/zapzap.jpg" alt="p" class="photo">
</div>
<div class="name__chat">
    <h5 class="name">
        Lucas Vinicius
    </h5>
    <h6>
        System Developer
    </h6>
</div> */}

const cont = 0

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

    photo__chat.append(photo)
    name__chat.append(name, description)
    card.append(photo__chat, name__chat, linha)

    return card
} 


const loadContacts = () => {
    const container = document.getElementById('chat')
    const cards = contatos.map(createCard)

    container.replaceChildren(...cards)
}

loadContacts()
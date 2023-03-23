'use strict'

import { contatos } from "./contatos.js"



const criarCard = function(contatos) {

    

    const card = document.createElement("div")
    card.classList.add("card")

    const foto = document.createElement("img")
    foto.classList.add("img-card")
    foto.src = `./${contatos.image}`

    const name = document.createElement("span")
    name.classList.add("name-card")
    name.textContent = contatos.name

    const description = document.createElement("span")
    description.classList.add("subtitle-card")
    description.textContent = contatos.description

   card.append(foto, name, description)

   
   return card
}

const carregarContatos = function(){
    const container_contacts = document.getElementById("main_left")
    const card = contatos.map(criarCard)

    container_contacts.replaceChildren(...card)
}

// document.getElementById('card').addEventListener('click', mostrarConversa)



carregarContatos()
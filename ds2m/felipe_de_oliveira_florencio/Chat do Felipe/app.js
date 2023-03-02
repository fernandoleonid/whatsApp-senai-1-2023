import {contatos} from "./resources/contatos.js"

'use strict'


const homeContainer = document.getElementById('home')
const buildHome = function(){
    
}

const buildContatos = (contato) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const name = document.createElement('h5')
    titulo.classList.add('card__title')
    titulo.textContent = contato.name

    const img = document.createElement('img')
    img.classList.add('card__image')
    img.src = `./img/${contato.image}`

    

    const descricao = document.createElement('p')
    descricao.classList.add('card__description')
    descricao.textContent = contato.description

    const price = document.createElement('p')
    price.classList.add('card__price')
    price.textContent = contato.price
    card.append(img,titulo,descricao,price)

    return card

}
'use strict'

import { contatos } from "./contatos.js"




const criarContato = (contato) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const cardTextos = document.createElement('div')
    cardTextos.classList.add('descricao__nome')

    const img = document.createElement('img')
    img.classList.add('foto')
    img.src = `./${contato.image}`

    const nomeContato = document.createElement('h5')
    nomeContato.classList.add('nome')
    nomeContato.textContent = contato.name

    const descricaoContato = document.createElement('h5')
    descricaoContato.classList.add('descricao')
    descricaoContato.textContent = contato.description

    card.append(nomeContato, descricaoContato, img)
    return card

}
const carregarContatos = (contatos) => {
    const container = document.getElementById('todos__contatos')
    const contatosCards = contatos.map(criarContato)


    container.replaceChildren(...contatosCards)

}

carregarContatos(contatos)
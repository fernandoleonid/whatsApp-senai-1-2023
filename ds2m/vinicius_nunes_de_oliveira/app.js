'use strict'

import { contatos } from './recursos/contatos.js'

//media__contacts

const criarContato = contato => {
  const card = document.createElement('div')
  card.classList.add('media__contacts')

  const img = document.createElement('img')
  img.classList.add('contact-img')
  img.src = `./${contato.image}`
  // img.src = '../img/' + contatos.image

  const messages = document.createElement('div')
  messages.classList.add('messages')

  const nome = document.createElement('h5')
  nome.classList.add('messages__name')
  nome.textContent = contato.name

  const descricao = document.createElement('span')
  descricao.classList.add('messages__description')
  descricao.textContent = contato.messages[0].content

  // img.classList.add('card__image')
  // img.src = `./${contatos.image}`
  messages.append(nome, descricao)
  card.append(img, messages)

  return card
}

const carregarContatos = () => {
  const container = document.getElementById('container')
  const cards = contatos.map(criarContato)

  container.replaceChildren(...cards)
}

carregarContatos()

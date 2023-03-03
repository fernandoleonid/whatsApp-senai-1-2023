'use strict'

import { contatos } from './recursos/contatos.js'

//media__contacts
let i = 0

const criarContato = contato => {
  const card = document.createElement('button')
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
  nome.id = 'card'

  const descricao = document.createElement('span')
  descricao.classList.add('messages__description')
  // descricao.textContent = contato.description
  descricao.textContent = contato.messages[2].content

  messages.append(nome, descricao)
  card.append(img, messages)
  card.id = i++

  return card
}

const carregarContatos = () => {
  const container = document.getElementById('container')
  const cards = contatos.map(criarContato)

  container.replaceChildren(...cards)

  cards.forEach(card => {
    card.onclick = () => {
      // let alo = document.querySelectorAll('#card2')
      // let alo = document.getElementById(card2.id)
      //   let cardIdd = document.getElementById(card)
      console.log(contatos[card.id].image)

      const cardContainer2 = document.createElement('div')
      cardContainer2.classList.add('message__header')

      const cardContainer = document.createElement('div')
      cardContainer.classList.add('group')

      const imgCard = document.createElement('img')
      imgCard.classList.add('contact-img')
      imgCard.src = `./${contatos[card.id].image}`

      const header__contact = document.createElement('div')
      header__contact.classList.add('header__contact')

      const header__name = document.createElement('h5')
      header__name.classList.add('messages__name')
      header__name.textContent = contatos[card.id].name

      const messages__description = document.createElement('span')
      messages__description.classList.add('messages__description')
      messages__description.textContent = contatos[card.id].description

      //   const conjIcon = document.createElement('div')
      //   conjIcon.classList.add('header__icon')

      //   const iconClip = document.createElement('i')
      //   iconClip.classList.add('fas fa-ellipsis-v')

      //   const iconDot = document.createElement('i')
      //   iconDot.classList.add('fas fa-paperclip')

      //   conjIcon.append(iconClip, iconDot)

      header__contact.append(header__name, messages__description)

      cardContainer.append(imgCard, header__contact)
      cardContainer2.append(cardContainer)
      //   cardContainer2.append(cardContainer,conjIcon)

      const containerMessage = document.getElementById('inside-message')

      containerMessage.replaceChildren(cardContainer2)
    }
  })
}

carregarContatos()

// cardHtml.onclick = (card1111) => {
//     alert(card1111.nome)
// }

// let cardSelecionado = getElementById('card')

// const teste = document.getElementById('card')

// teste.onclick = () => {
//     const teste2 = document.getElementById('card')
//     alert(teste2.textContent)
// }

// const cardHtml = document.getElementById("1")

// forEach(function(cardHtml) {
//     card.addEventListener("click", handleClick)

//     const handleClick = (card) => {

//         alert(card)
//         return true

//     }
// })

// // const button = document.querySelector("#card");
// // button.addEventListener("click", (e) => {
// //     alert(e.nome); // my-btn
// // })

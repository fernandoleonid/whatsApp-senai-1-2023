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

    // img.classList.add('card__image')
    // img.src = `./${contatos.image}`
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
            let cardIdd = document.getElementById(card)
            console.log(contatos[card.id].messages)

        }
    });
}



carregarContatos()


const cardHtml = document.getElementById('1')

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
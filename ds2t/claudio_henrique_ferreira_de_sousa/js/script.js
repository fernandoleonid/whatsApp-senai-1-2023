'use strict'

import {contatos} from '../recursos/contatos.js'


const criaCard = (contato, indice) => {

    const container = document.createElement('div')
    container.classList.add('container__card')

    const image = document.createElement('div')
    image.classList.add('card__image')

    const text = document.createElement('div')
    text.classList.add('card__text')

    const card = document.createElement('div')
    card.classList.add('card')

    card.addEventListener('click', () => {
        let container = document.getElementById('container__main');
        container.replaceChildren(criarHeader(indice), criarChat(indice), criarFooter())


    })

    const foto = document.createElement('img')
    foto.classList.add('card__image')
    foto.classList.add('img__owner')
    foto.src = `./recursos/${contato.image}`

    const nome = document.createElement('h4')
    nome.textContent = contato.name

    const desc = document.createElement('p')
    desc.textContent = contato.description

    container.append(card)
    card.append(image,text)
    image.append(foto)
    text.append(nome,desc)

    return container
}

const criarHeader = (indice) => {
    

    const header = document.createElement('div')
    header.classList.add('header__main')

    const image = document.createElement('img')
    image.classList.add('img__owner')
    image.src = `./recursos/${contatos[indice].image}`

    const container_text = document.createElement('div')
    container_text.classList.add('header__main__name')

    const spanName = document.createElement('span')
    spanName.classList.add('header__name')
    spanName.innerText = contatos[indice].name

    const spanOnline = document.createElement('span')
    spanOnline.classList.add('header__online')
    spanOnline.innerText = 'online'

    header.append(image, container_text)
    container_text.append(spanName, spanOnline)
   

    return header

}

const criarChat = (indice) => {
    // const pai = document.getElementById('container__main')
    // pai.classList.add('
    const container = document.createElement('div')
    container.classList.add('container__conversa')






    return container
}

const carregarProdutos = () => {
    const container = document.getElementById('container__card')

    const cards = contatos.map (criaCard)

    container.replaceChildren(...cards)
}

const criarFooter = () => {
    const footer = document.createElement('div')
    footer.classList.add('footer__main')

    const iconHappy = document.createElement('ion-icon')
    iconHappy.name = 'happy-outline'
    iconHappy.classList.add('icon')

    const iconAttach = document.createElement('ion-icon')
    iconAttach.name = 'attach-outline'
    iconAttach.classList.add('icon')

    const input = document.createElement('input')
    input.type = 'text'
    input.placeholder = 'Mensagem'
    input.classList.add('input-mensagem')

    const iconMic = document.createElement('ion-icon')
    iconMic.name = 'mic-outline'
    iconMic.classList.add('icon')

    footer.append(iconHappy, iconAttach, input, iconMic)

    return footer

    
}


carregarProdutos()

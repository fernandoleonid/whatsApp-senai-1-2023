'use strict'

import { contatos } from './contatos.js'

const criaContato = ( contato ) => {
    const block = document.createElement('div')
    block.classList.add('block')

    const imgbx = document.createElement('div')
    imgbx.classList.add('imgbx')

    const image = document.createElement('img')
    image.classList.add('cover')
    image.src = `./${contato.image}`

    const detail = document.createElement('div')
    detail.classList.add('details')

    const listHead = document.createElement('div')
    listHead.classList.add('listHead')

    const name = document.createElement('h4')
    name.textContent = contato.name

    const time = document.createElement('p')
    time.classList.add('time')

    const previewMessage = document.createElement('div')
    previewMessage.classList.add('message_p')

    const preview = document.createElement('p')

    for(let cont = 0; cont < contato.messages.length; cont++) {
        time.textContent = contato.messages[cont].time

        preview.textContent = contato.messages[cont].content.slice(0, 25) + "..."
    }

    block.append(imgbx, detail)
    imgbx.append(image)
    detail.append(listHead, previewMessage)
    listHead.append(name, time)
    previewMessage.append(preview)

    return block
}

const carregarContatos = () => {
    const chatList = document.getElementById('chatlist')
    const listaContatos = contatos.map( criaContato )
    
    chatList.replaceChildren(...listaContatos)
}

carregarContatos()
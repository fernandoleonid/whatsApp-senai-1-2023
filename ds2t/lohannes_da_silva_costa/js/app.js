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

const criaConversa = ( contato ) => {

    const rightSide = document.createElement('div')
    rightSide.classList.add('rightSide')

    const header = document.createElement('div')
    header.classList.add('header')

    const imgtxt = document.createElement('div')
    imgtxt.classList.add('imgtxt')

    const back = document.createElement('i')
    back.classList.add('fas fa-chevron-left')

    const userImg = document.createElement('div')
    userImg.classList.add('userImg')

    const contactPic = document.createElement('img')
    contactPic.classList.add('cover')
    contactPic.src = `./${contato.image}`

    const contactName = document.createElement('h4')
    contactName.textContent = contato.name

    const description = document.createElement('span')
    description.textContent = contato.description

    // <ul class="nav_icons">
    //                 <li><i class="fas fa-search"></i></i></li>
    //                 <li><i class="fa-solid fa-ellipsis-vertical"></i></li>
    //             </ul>
    //         </div>

    //         <div class="chatbox">
    //             <div class="message my_message">
    //                 <p>Hi<br><span>10:56</span></p>
    //             </div>
    //             <div class="message friend_message">
    //                 <p>Hello<br><span>10:56</span></p>
    //             </div>
    //         </div>
    //         <div class="chatbox_input">
    //             <i class="far fa-smile"></i>
    //             <i class="fas fa-paperclip"></i>
    //             <input type="text" placeholder="Escreva sua mensagem...">
    //             <i class="fa-solid fa-microphone"></i>
    //         </div>

    const navIcons = document.createElement('ul')
    navIcons.classList.add('nav_icons')

    const searchIcon = document.createElement('li')

    const search = document.createElement('i')
    search.classList.add('fas fa-search')

    const menuIcon = document.createElement('li')

    const menu = document.createElement('i')
    menu.classList.add('fa-solid fa-ellipsis-vertical')

    const chatBox = document.createElement('div')
    chatBox.classList.add('chatbox')

    return rightSide
}

const carregarContatos = () => {
    const chatList = document.getElementById('chatlist')
    const listaContatos = contatos.map( criaContato )
    
    chatList.replaceChildren(...listaContatos)
}

carregarContatos()
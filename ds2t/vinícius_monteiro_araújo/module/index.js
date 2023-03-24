'use strict'

import { contatos } from "./contatos.js"



const criarCard = function(contatos, indice) {

    

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

    card.addEventListener('click', () => {
        let container = document.getElementById('main-right')
        container.replaceChildren(criarHeaderMensagens(indice), criarContainerMensagens(indice),criarFooterMensagem())
        barraDeRolagem()

    })



   card.append(foto, name, description)

   
   return card
}

const criarHeaderMensagens = function(indice){
    const header = document.createElement('div')
    header.classList.add('header-right')

    const foto = document.createElement('img')
    foto.classList.add('header-right-image')
    foto.src = `./${contatos[indice].image}`
    foto.alt = 'Foto de Perfil'

    const nomeContato = document.createElement('span')
    nomeContato.classList.add('header-name')
    nomeContato.textContent = contatos[indice].name

    header.append(foto, nomeContato)

    return header

}

const criarFooterMensagem = function(){
    const containerMensagemFooter = document.createElement('div')
    containerMensagemFooter.classList.add('send')

    const icons = document.getElementById('emoji-anexar')
    icons.classList.remove('emoji-anexar')
    icons.classList.add('emoji-anexar-on')

    const inputMensagem = document.createElement('input')
    inputMensagem.placeholder = 'Mensagem'
    inputMensagem.classList.add('send-message')

    const iconMicrofone = document.getElementById('iconMicrofone')
    iconMicrofone.classList.remove('microfone-none')
    iconMicrofone.classList.add('microfone')

    

    containerMensagemFooter.append( icons, inputMensagem, iconMicrofone)

    return containerMensagemFooter


}

const criarContainerMensagens = function(indice){
    const container = document.createElement('div')
    container.classList.add('chat-container')

    const containerMensagens = document.createElement('div')
    container.classList.add('container-chat')

    contatos[indice].messages.forEach((mensagens) => {

        const caixaMensagemMinha = document.createElement('div')
        caixaMensagemMinha.classList.add('box-message-sent')

        const mensagemMinha = document.createElement('p')
        mensagemMinha.classList.add('my-message')

        const caixaMensagemSua = document.createElement('div')
        caixaMensagemSua.classList.add('box-message-receive')

        const mensagemSua = document.createElement('p')
        mensagemSua.classList.add('your-message')

        if(mensagens.sender == "me"){
            mensagemMinha.classList.add('my-message')
            mensagemMinha.textContent = mensagens.content

            container.appendChild(containerMensagens)
            containerMensagens.append(caixaMensagemMinha)
            caixaMensagemMinha.append(mensagemMinha)

            
        } else if (mensagens.sender == contatos[indice].name){
            mensagemSua.classList.add('your-message')
            mensagemSua.textContent = mensagens.content

            container.appendChild(containerMensagens)
            containerMensagens.append(caixaMensagemSua)
            caixaMensagemSua.append(mensagemSua)
        }


    })

    return container


}

const carregarContatos = function(){
    const container_contacts = document.getElementById("main_left")
    const card = contatos.map(criarCard)

    container_contacts.replaceChildren(...card)
}

const barraDeRolagem = function(){
    window.scroll(0, document.body.scrollHeight)
}



carregarContatos()
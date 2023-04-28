'use strict'

import { contatos } from "https://fernandoleonid.github.io/whatsApp-senai-1-2023/recursos/contatos.js"



const apagar = () => {
    const tela = document.getElementById('container__mensagens')
    tela.classList.remove('container')
    tela.classList.add('container__subir')

    return tela
}

const subir = () => {

    const telaInvertida = document.getElementById('voltar')

    telaInvertida.addEventListener('click', () => {
    const tela = document.getElementById('container__mensagens')
    tela.classList.remove('container__subir')
    
    })
    
}




const criarContato = (contato, indice) => {
    const cardContato = document.createElement('div')
    cardContato.classList.add('contato')
    cardContato.id = 'adicionar'
    
    const foto = document.createElement('img')
    foto.classList.add('contato__img')
    foto.src = contato.image
    foto.setAttribute("alt", "foto_de_perfil")

    const titulo = document.createElement('h5')
    titulo.classList.add('nome__contato')
    titulo.textContent = contato.name

    const status = document.createElement('p')
    status.classList.add('status__contato')
    status.textContent = contato.description

    const hora = document.createElement('p')
    hora.classList.add('hora')
    hora.textContent = contato.time

    cardContato.addEventListener('click', () =>{
        let container = document.getElementById('container')
       
        container.replaceChildren(criarHeader(indice), criarChat(indice), criarEntradaMensagens())
        apagar()
        subir()
        
        
        
    })

    cardContato.append(
        foto,
        hora,
        titulo,
        status,
        
    )

    return cardContato

}



const criarHeader = (indice) => {
   
    const topMensagens = document.createElement('div')
    topMensagens.classList.add('top__mensagens')
    

    const topFoto = document.createElement('img')
    topFoto.classList.add('img__mensagens')
    topFoto.src = contatos[indice].image

    const topDescricao = document.createElement('div')
    topDescricao.classList.add('descricao__top__mensagens')

    const topNomeContato = document.createElement('h6')
    topNomeContato.classList.add('nome__contato__top')
    topNomeContato.textContent = contatos[indice].name

    const topStatusContato = document.createElement('p')
    topStatusContato.classList.add('status__mensagem')
    topStatusContato.textContent = contatos[indice].description
    
    const topIcon = document.createElement('ion-icon')
    topIcon.name = 'arrow-back'
    topIcon.classList.add('icon_back')
    topIcon.id = 'voltar'


    topDescricao.append(
        topNomeContato,
        topStatusContato
        
    )

    topMensagens.append(
        topFoto,
        topDescricao,
        topIcon
    )
    
    return topMensagens
}






const zerarContainer = () => {
    const container = document.createElement('div')
    container.classList.remove('container')

    const topMensagens = document.createElement('div')
    topMensagens.classList.remove('top__mensagens')

    const topFoto = document.createElement('img')
    topFoto.classList.remove('img__mensagens')
   

    const topDescricao = document.createElement('div')
    topDescricao.classList.remove('descricao__top__mensagens')

    const topNomeContato = document.createElement('h6')
    topNomeContato.classList.remove('nome__contato__top')
   

    const topStatusContato = document.createElement('p')
    topStatusContato.classList.remove('status__mensagem')

    cardContato.addEventListener('click', () =>{
        let container = document.getElementById('container__mensagens')
        container.replaceChildren(zerarContainer())
    }) 
    
    return container
}

const criarChat = (indice) => {

    const conversa = document.createElement('div')
    conversa.classList.add('mensagens')

    contatos[indice].messages.forEach((mensagens) => {

        const mensagemDireita = document.createElement('div')
        mensagemDireita.classList.add('mensagem__direita')

        const conteudoDireita = document.createElement('p')
        conteudoDireita.classList.add('mensagem')
       

        const horaDireita = document.createElement('span')
        horaDireita.classList.add('hora_direita')
        

        const mensagemEsquerda = document.createElement('div')
        mensagemEsquerda.classList.add('mensagem__esquerda')

        const conteudoEsquerda = document.createElement('p')
        conteudoEsquerda.classList.add('mensagem')
        

        const horaEsquerda = document.createElement('span')
        horaEsquerda.classList.add('hora_esquerda')
        

        if(mensagens.sender == 'me') {
            conteudoDireita.classList.add('mensagem')
            conteudoDireita.textContent = mensagens.content

            horaDireita.classList.add('hora_direita')
            horaDireita.textContent = mensagens.time

            mensagemDireita.append(
                conteudoDireita,
                horaDireita
            )
    
            conversa.append(
                mensagemDireita
            )
            
        } else if (mensagens.sender == contatos[indice].name) {
            conteudoEsquerda.classList.add('mensagem')
            conteudoEsquerda.textContent = mensagens.content

            horaEsquerda.classList.add('hora_esquerda')
            horaEsquerda.textContent = mensagens.time

            mensagemEsquerda.append(
                conteudoEsquerda,
                horaEsquerda
            )
    
            conversa.append(
                
                mensagemEsquerda
            )
        }

        
    })

    return conversa
}

const criarEntradaMensagens = () => {
    const entrada = document.createElement('div')
    entrada.classList.add('entrada__mensagens')

    const iconEmogi = document.createElement('ion-icon')
    iconEmogi.name = 'happy'
    iconEmogi.classList.add('icon')

    const iconClip = document.createElement('ion-icon')
    iconClip.name = 'attach'
    iconClip.classList.add('icon')

    const entradaTexto = document.createElement('input')
    entradaTexto.classList.add('input__mensagens')
    entradaTexto.type = 'text'
    entradaTexto.placeholder = 'Mensagem'

    const iconMic = document.createElement('ion-icon')
    iconMic.name = 'mic'
    iconMic.classList.add('icon')

    entrada.append(
        iconEmogi,
        iconClip,
        entradaTexto,
        iconMic
    )

    return entrada
}

const carregarContatos = () => {
    const container = document.getElementById('contatos')

    const geracaoContatos = contatos.map(criarContato)

    container.replaceChildren(...geracaoContatos)
}



carregarContatos()








 'use strict'


 import { contatos } from "https://fernandoleonid.github.io/whatsApp-senai-1-2023/recursos/contatos.js"

 //const teste = (indice) => console.log(`oi ${contatos[indice].image}`)


 const criarCard = (contato, indice) =>{
    const card = document.createElement( 'div' )
    card.classList.add( 'card' )
    card.onclick = () => carregarMensagens(indice)

    const img = document.createElement( 'img' )
    img.classList.add( 'contato__image' )
    img.src = `./${contato.image}`

    const titulo = document.createElement( 'h5' )
    titulo.classList.add( 'card__titulo' )
    titulo.textContent = contato.name

    const texto = document.createElement('div')
    texto.classList.add('titulo_texto')

    const horario = document.createElement('p')
    horario.classList.add('tempo')
    horario.textContent = contato.time

    const profissao = document.createElement( 'p' )
    profissao.classList.add( 'card__profissao' )
    profissao.textContent = contato.description

    card.append(img, titulo, profissao, texto)

    return card
   }

 const carregarApp = () => {
   const container = document.getElementById( 'container' )
   const cards = contatos.map( criarCard )

   container.append(...cards)
}
 carregarApp()


 const getMessages = (messages) => {

   const divMessages = document.createElement('div')

   let envioConversa = document.createElement('span')

   let time = document.createElement('span')

   if(messages.sender == "me") {
      divMessages.classList.add('enviar__mensagem')
      envioConversa.classList.add('enviar__mensagem_span')
      envioConversa.textContent = messages.content
      time.textContent = messages.time
   
    } else {
      divMessages.classList.add('mensagem__entregue')
      envioConversa.classList.add('mensagem__entregue_span')
      envioConversa.textContent = messages.content
      time.textContent = messages.time

      envioConversa.textContent = messages.content
    }
   

   divMessages.append(envioConversa, time)
   return divMessages

 }

 const carregarMensagens = (indice) => {
   const mensagemContato = document.getElementById('contato__mensagem')
   const mensagem = contatos[indice].messages.map(getMessages)

  mensagemContato.replaceChildren(...mensagem)
}

carregarMensagens()
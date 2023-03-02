"use strict"

import {contatos} from "./contatos.js"


const criarUser = (contato) => {

    const button = document.createElement("button")
    button.classList.add('button')
    

    const contact = document.createElement("div")
    contact.classList.add("user")
    

    const userIdent = document.createElement("div")
    userIdent.classList.add("user_identification")
    
    const userPhoto = document.createElement("div")
    userPhoto.classList.add("photo_user")
   
    const image_user = document.createElement("img")
    image_user.classList.add("image_user")
    image_user.src = `./${contato.image}`
    
    

    const nameUser = document.createElement("div")
    nameUser.classList.add("name_user")
    

    const name = document.createElement("h5")
    name.classList.add("name")
    name.textContent = contato.name

    const textPrimary = document.createElement("p")
    textPrimary.classList.add("text_primay")



    
    const header_chat = document.createElement("div")
    header_chat.classList.add("header_chat")

    const user_identification_chat = document.createElement("div")
    user_identification_chat.classList.add("user_identification_chat")

    // const photo_user_chat = document.createElement("div")
    // photo_user_chat.classList.add(photo_user_chat)

    const image_user_chat = document.createElement("img")
    image_user_chat.src = `./${contato.image}`

    const name_user_chat = document.createElement("div")
    name_user_chat.classList.add("name_user_chat")

    const name_chat = document.createElement("h5")
    name_chat.classList.add("name_chat")
    name_chat.textContent = contato.name




    
    name_user_chat.append(name_chat)    




    button.append(contact)
    contact.append(userIdent)

    userIdent.append(userPhoto,nameUser)

    userPhoto.append(image_user)

    image_user.textContent

    nameUser.append(name,textPrimary)

    console.log(button) 
    return button
    
}

const carregarContatos = () => {const users = document.getElementById("users")
const contacts = contatos.map(criarUser)
    users.replaceChildren(...contacts)

}
   
    
carregarContatos()
// //header_chat.append(user_identification_chat)
// user_identification_chat.append(photo_user_chat,name_user_chat)
// photo_user_chat.append(image_user_chat)
// name_user_chat.append(name_chat)    
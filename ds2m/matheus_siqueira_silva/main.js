import {contatos} from "./recursos/contatos.js";


const createChat = (contato) => {
    
    const img = document.createElement('img') 
    img.classList.add('user__image')
    img.src = `./recursos/images/${contatos.}`
}

const loadingContact = () => {
    const users = document.getElementById('users')
    const informations = contatos.map();

    users.replaceChildren(...informations)
}

loadingContact();
'use strict'

import { contatos } from "./contatos.js"

let i = 0


const criarContato = (contato) => {


    const contact = document.createElement('button')
    contact.classList.add('contact')

    const img = document.createElement('img')
    img.classList.add('contact__image')
    img.src = `./${contato.image}`

    const containerContact = document.createElement('div')
    containerContact.classList.add('contact__container')

    const name = document.createElement('h3')
    name.classList.add('contact__name')
    name.textContent = contato.name

    const description = document.createElement('div')
    description.classList.add('contact__descripiton')
    description.textContent = contato.description

    containerContact.append(name, description)
    contact.append(img, containerContact)
    contact.id = i++
        return contact
}

const carregarContatos = () => {
    const container = document.getElementById('container')
    const contacts = contatos.map(criarContato)

    container.replaceChildren(...contacts)

    contacts.forEach(contact => {

        contact.onclick = () => {

            // console.log(contatos[contact.id].messages.length);
            // console.log(contatos[contact.id].messages[2].time);

            function puxarContatoMain() {
                document.getElementById('main').style.display = "grid";


                const mainHeader = document.createElement('div')
                mainHeader.classList.add('main__header')

                const image = document.createElement('img')
                image.classList.add('contact__image')
                image.src = `./${contatos[contact.id].image}`

                const containerMain = document.createElement('div')
                containerMain.classList.add('main__contact__container')

                const contactName = document.createElement('h3')
                contactName.classList.add('contact__name__main')
                contactName.textContent = contatos[contact.id].name

                const descriptionMain = document.createElement('div')
                descriptionMain.classList.add('contact__description')
                descriptionMain.textContent = contatos[contact.id].description

                const mainIcons = document.createElement('div')
                mainIcons.classList.add('main__icons')

                const lente = document.createElement('i')
                lente.classList.add('fa-solid')
                lente.classList.add('fa-magnifying-glass')

                const elipse = document.createElement('i')
                elipse.classList.add('fas')
                elipse.classList.add('fa-ellipsis-v')


                containerMain.append(contactName, descriptionMain)
                mainIcons.append(lente, elipse)
                mainHeader.append(image, containerMain, mainIcons)

                const containerMessage = document.getElementById('inside__message')

                containerMessage.replaceChildren(mainHeader)
            }

            function puxarMensagemMain() {

                let arrayMensagem = []
                let cont = 0
                let contatosWhile = contatos[contact.id].messages.length
                while (cont <= contatosWhile) {

                    // const mainMensagemSender = document.createElement('div')
                    // mainMensagemSender.classList.add('main__mensagem__sender')
                    // mainMensagemSender.textContent = contatos[contact.id].messages[cont].sender

                    const mainMensagemMensagem = document.createElement('div')
                    mainMensagemMensagem.classList.add('main__mensagem__mensagem')
                    mainMensagemMensagem.textContent = contatos[contact.id].messages[cont].content


                    const mainMensagemHora = document.createElement('div')
                    mainMensagemHora.classList.add('main__mensagem__hora')
                    if (contatos[contact.id].messages[cont].time == undefined)
                        mainMensagemHora.textContent = contatos[contact.id].messages[cont].timestamp
                    else
                        mainMensagemHora.textContent = contatos[contact.id].messages[cont].time


                    const mainMensagemContato = document.createElement('div')

                    if (contatos[contact.id].messages[cont].sender != "me")
                        mainMensagemContato.classList.add('main__mensagem__contact')
                    else
                        mainMensagemContato.classList.add('main__mensagem__contact__end')


                    const mainMensagem = document.createElement('div')
                    mainMensagem.classList.add('main__mensagem')

                    mainMensagemContato.append(mainMensagemMensagem, mainMensagemHora)

                    arrayMensagem.push(mainMensagemContato)
                    mainMensagem.append(...arrayMensagem)


                    const offsideMensagem = document.getElementById('offside__message')

                    offsideMensagem.replaceChildren(mainMensagem)



                    cont += 1
                }



                console.log(contatosWhile);
                console.log(contatos[contact.id].messages[cont].sender);



            }

            puxarContatoMain()
            puxarMensagemMain()
        }



    });

}

const lightTheme = {
    '--primary__color': '#00bfa5',
    '--font__color': '#fff',
    '--backContact__color': '#9e9e9e',
    '--backImage': 'url(../img/dia.jpg)',
    '--backFinder': '#757575',

}

const darkTheme = {
    '--primary__color': '#263238',
    '--font__color': '#b0bec5',
    '--backContact__color': '#455a64',
    '--backImage': 'url(../img/noite.jpg)',
    '--backFinder': '#37474f',

}

const chk = document.getElementById('chk')
const rootElement = document.documentElement

chk.addEventListener('change', function() {
    const isChecked = chk.checked

    isChecked ? changeTheme(lightTheme) : changeTheme(darkTheme)


})

function changeTheme(theme) {

    for (let prop in theme) {
        changeProperty(prop, theme[prop])
    }

}

function changeProperty(property, value) {
    rootElement.style.setProperty(property, value)

}

carregarContatos()
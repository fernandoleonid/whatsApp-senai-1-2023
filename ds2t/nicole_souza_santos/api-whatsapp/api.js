'use strict'

export const contactWhat = async (numero) => {
    console.log(numero)
    const url = `http://localhost:8080/v1/whatsapp/contatos/telefone?numero=${numero}`

    const response = await fetch(url)

    const data = await response.json()

    return data
}
'use strict'

export const searchUser = async(userNumber) => {
    const url = `http://localhost:8080/user?user=${userNumber}`
    const response = await fetch(url)
    const data = await response.json()
    return {
       background : data.background,
       contacts : data.contacts
    }
   
}
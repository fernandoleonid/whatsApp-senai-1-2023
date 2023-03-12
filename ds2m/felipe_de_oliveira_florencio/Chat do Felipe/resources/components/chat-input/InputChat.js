/* <div class="input-box">
        <div class="input__others">
            <a href="#">
                <img src="./emojis.png" class="input-button" alt="">
            </a>
            <a href="#">
                <img src="./anexos.png" class="input-button" alt="">
            </a>
        </div>
       <input type="text" class="input-text" placeholder="Type your message here" >
    </div> */

const InputChat = function() {
    const container = document.createElement('div')
    container.classList.add('input-box')


    const inputButtons = document.createElement('div')
    inputButtons.classList.add('input__others')

    const emojis = document.createElement('a')
    const emojiImage = document.createElement('img')
    emojiImage.src = `./resources/components/chat-input/emojis.png`
    emojis.append(
        emojiImage
    )
    emojis.classList.add('input-button')

    const anexos = document.createElement('a')  
    const anexoImage = document.createElement('img')
    anexoImage.src = `./resources/components/chat-input/anexos.png`
    anexos.append(
        anexoImage
    )
    anexos.classList.add('input-button')

    const inputText = document.createElement('input')
    inputText.inputMode = 'text';
    inputText.classList.add('input-text')
    inputText.placeholder = 'Type your message here'
    container.append(
        inputButtons,
        inputText
    )

    return container;

}
module.exports = {
    InputChat
}
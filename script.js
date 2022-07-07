const pText = document.querySelector('#calcInput')

const showValue = (valWillShow) => {
    pText.textContent += valWillShow
}

const cleanVal = () => {
    pText.textContent = ''
}

const backspace = () => {
    pText.textContent = pText.textContent.substring(0, pText.textContent.length-1)
}

const calculator = () => {
    pText.textContent = eval(pText.textContent)
}
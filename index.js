let computerNumber
let userNumbers = [] 
let tentativas = 0
let maxtentativas = 10

function novoJogo() {
    window.location.reload()
}

function init() { 
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber) 
    document.getElementById('guesses').innerHTML = userNumbers

    if (tentativas < maxtentativas) {
        if (userNumber > computerNumber) { 
            document.getElementById('textOutput').innerHTML = 'Seu número está muito alto' 
            document.getElementById('inputBox').value = '' 
            tentativas++ 
            document.getElementById('attempts').innerHTML = tentativas 
        }
        else if (userNumber < computerNumber) { 
            document.getElementById('textOutput').innerHTML = 'Seu número está muito baixo' 
            document.getElementById('inputBox').value = '' 
            tentativas++ 
            document.getElementById('attempts').innerHTML = tentativas
            }
        else {
            document.getElementById('textOutput').innerHTML = 'Parabéns, você acertou o número!'
            tentativas++
            document.getElementById('attempts').innerHTML = tentativas
        }
    }
    else {
        document.getElementById('textOutput').innerHTML = 'Você perdeu! O número era ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
}

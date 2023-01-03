const idade = prompt('Digite sua idade');

function idadeFuncao() {
    if (idade < 18) {
        message = 'Você é menor de idade';
    } else if (idade >= 18) {
        message = 'Você é maior de idade'
    }
    alert(message)
}

idadeFuncao()
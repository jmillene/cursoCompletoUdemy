const nome = prompt('Digite seu nome!')
document.body.innerHTML += `O seu nome é <strong> ${nome}</strong>  <br/>`
document.body.innerHTML += ` Seu nome tem <strong>${nome.length} letras</strong> <br/>`
document.body.innerHTML += `A segunda letra do seu nome é <strong>${nome[1]}</strong> <br/>`
document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? </strong> ${nome.indexOf('a')}<strong>  <br/>`
document.body.innerHTML += `As palavras do seu nome são: <strong> ${nome.split('')}</strong> <br/>`
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong><br/>`
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLocaleLowerCase()}</strong><br/>`
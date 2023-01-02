const num1 = Number(prompt('Digite um numero'));
 document.getElementById('titulo').innerHTML += `${num1}`
 document.getElementById('texto').innerHTML += `Raiz quadrada: ${Math.sqrt(num1)} </br>`
 document.getElementById('texto').innerHTML += `55 é inteiro: ${Number.isInteger(num1)}</br>`
 document.getElementById('texto').innerHTML += `É NAN: ${isNaN(num1)} </br>`
 document.getElementById('texto').innerHTML += `Arredonando para baixo: ${Math.floor(num1)}</br>`
 document.getElementById('texto').innerHTML += `Arredonando para cima: ${Math.ceil(num1)}</br>`
 document.getElementById('texto').innerHTML += `Com duas casa decimais: ${(num1).toFixed(2)}</br>`


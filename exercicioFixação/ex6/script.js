function calcularIMC() {
    const resultado = document.querySelector('.resultado')
    const peso = document.querySelector('.peso').value;
    const altura = document.querySelector('.altura').value;
    const imc = peso / altura ** 2;
    resultado.innerHTML += `Seu IMC é ${imc}`
}



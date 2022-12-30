const name = 'Jéssica';
const lastName = 'Milene';
let anoNascimento = 1992;
let anoAtual = 2022;
const idade = anoAtual - anoNascimento;
const peso = 98;
const altura = 1.80;
let imc =(peso / altura**2).toFixed(2);


console.log(` ${name} ${lastName} tem ${idade} anos, pesa ${peso}Kg, tem ${altura} de altura  seu IMC é de ${imc}, ${name} ${lastName} nasceu em ${anoNascimento}`);
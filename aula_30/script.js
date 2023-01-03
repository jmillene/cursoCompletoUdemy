const resultado = document.querySelector('.resultado');
let semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
let mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const data = new Date();
resultado.innerHTML += semana[data.getDay()] 
resultado.innerHTML += ` ${data.getDate()} de ${mes[data.getMonth()]} de ${data.getFullYear()} as ${data.getHours()}:${data.getMinutes()}`
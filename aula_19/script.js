function meuEscopo (){
  const form = document.querySelector('.form');
  const result = document.querySelector('.resultado');
  const pessoa = [];
  function recebeEvento(evento){
    evento.preventDefault();
    const nome = document.querySelector('.nome');
    const sobrenome = document.querySelector('.sobrenome');
    const peso = document.querySelector('.peso');
    const altura = document.querySelector('.altura');

    pessoa.push({
      nome: nome.value,
      sobrenome : sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });
    result.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
console.log(pessoa);
  }
  form.addEventListener('submit', recebeEvento);
}
meuEscopo();
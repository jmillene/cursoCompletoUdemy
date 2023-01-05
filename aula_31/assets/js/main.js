const elementos = [
  {
    tag : 'p', texto: ' O mundo gira'
  },
  {
    tag : 'p', texto: ' As arvores somos nozes'
  },
  {
    tag : 'p', texto: ' Eu sou uma arvore bonita'
  },
  {
    tag : 'p', texto: ' Vem me regar'
  }
]
const container= document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i< elementos.length; i+=1){
  let { tag, texto} = elementos[i]
  let tagCriada = document.createElement(tag)
  tagCriada.innerHTML = texto;
  div.appendChild(tagCriada)
}
container.appendChild(div)
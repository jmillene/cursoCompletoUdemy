const h1 = document.createElement('h1');
h1.innerText = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(h1)

const main = document.createElement('main');
main.classList.add('main-content');
document.body.appendChild(main)


const section = document.createElement('section');
section.classList.add('center-content');
main.appendChild(section);

const p = document.createElement('p');
section.appendChild(p);

const section2 = document.createElement('section');
section2.classList.add('left-content');
main.appendChild(section2);

const section3 = document.createElement('section');
section2.classList.add('right-content');
main.appendChild(section3);

const img = document.createElement('img');
img.classList.add('small-image')
img.src = 'https://picsum.photos/200'
section.appendChild(img)
const ul = document.createElement('ul');
section.appendChild(ul)
const array =  ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
'Sete', 'Oito', 'Nove', 'Dez']
for(let index = 0; index < array.length; index+=1){
  const li = document.createElement('li');
  li.innerHTML += array[index];
  ul.appendChild(li)
} 
for(let index = 0; index <=3;index +=1){
  const h3 = document.createElement('h3');
  main.appendChild(h3)

}
const h1Element = document.querySelector('h1');
h1Element.classList.add('title');

for(let index = 0; index <=3;index +=1){
  const h3 = document.querySelectorAll('h3');
  h3[index].classList.add('description')
}

const removeSection = document.getElementsByClassName('left-content')[0];
section3.removeChild(removeSection);
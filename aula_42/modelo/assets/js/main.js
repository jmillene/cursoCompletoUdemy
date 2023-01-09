const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
  }
});
function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}
function criarBotaoApagar(li) {
  li.innerHTML += "";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerHTML += "Apagar";
  botaoApagar.setAttribute('class', 'apagar')
  li.appendChild(botaoApagar);
  
}
function criarTarefa(textoInput) {
  const li = document.createElement("li");
  li.innerHTML = textoInput;
  limpaInput();
  tarefas.appendChild(li);
  criarBotaoApagar(li);
  salvarTarefas()
}
btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criarTarefa(inputTarefa.value);
});
document.addEventListener('click', function(e){
  const el = e.target;
  if(el.classList.contains('apagar'))
  el.parentElement.remove();
});
function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}
function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for(let tarefa of listaDeTarefas) {
    criarTarefa(tarefa);
  }
}
adicionaTarefasSalvas();
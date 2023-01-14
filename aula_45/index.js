(function(){
  const sobreNome = 'Milene'
  function criaNome(nome){
    return nome + ' ' + sobreNome
  }
  function falaNome(){
    console.log(criaNome('Jéssica'));
  }
  falaNome()
})();
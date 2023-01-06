function soma(x,y){
  if(typeof x !== 'number' || typeof y !== 'number'){
    throw('x e y precisam ser números')
  }
  return x + y
}
try {
  console.log(soma(1,2)); 
  console.log(soma(1,'2'));
  
} catch (error) {
  console.log(error);
}

function retornaHoras(data){
  if(data && !(data instanceof Date)){
    throw new TypeError('Esperando instância de Date')
  }
  if(!data){
    data = new Date()
  }
  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  })
}
try {
  const hora = retornaHoras();
console.log(hora);
} catch (error) {
  // trata erro
}finally{
  console.log('Tenha um bom dia');
}

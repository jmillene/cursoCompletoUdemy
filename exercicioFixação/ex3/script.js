// Faça um programa JavaScript
//  que receba 3 números informados pelo usuário e em 
//  seguida apresente uma mensagem de alerta informando qual é 
//  o maior número dentre os números informados.

var numero01 = prompt("Informe o primeiro número", "100");
var numero02 = prompt("Informe o segundo número", "200");
var numero03 = prompt("Informe o terceiro número", "300");
if ((numero01 > numero02) && (numero01 > numero03)) mensagem = "O primeiro número informado é maior!"
else
if ((numero02 > numero01) && (numero02 > numero03)) mensagem = "O segundo número informado é maior!"
else
if ((numero03 > numero01) && (numero03 > numero02)) mensagem = "O terceiro número informado é maior!"
else
mensagem = "Os números são iguais ou nada foi informado";
alert(mensagem);
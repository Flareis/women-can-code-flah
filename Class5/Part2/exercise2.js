//Adicione os números de 5 a 0 (inclusive) em ordem decrescente para meuArray usar um whileloop e imprima-o no final.

const meuArray = [0, 1, 2, 3, 4, 5]
let indice = meuArray.length-1
while (indice >= 0){
    meuArray[indice]; 
    console.log(meuArray[indice]);
    indice--
}
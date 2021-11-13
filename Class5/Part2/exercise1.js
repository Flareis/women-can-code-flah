/*Crie uma função chamada criaPares que receba como parâmetro o array valoresNum, 
nessa função deve ser executado um for que imprime na tela apenas os valores pares. 
Lembre-se que a sintaxe de um for é a seguinte: */

function valoresNum (criaPares){

    for (var indice = 0; indice < criaPares.length; indice++){
        if (criaPares[indice]%2 == 0){
            console.log(criaPares[indice]);
        }
    }
}
const criaPares = [1, 2, 3, 4 ,5 , 6, 7, 8, 9, 10]
valoresNum(criaPares)

/*for ( var i =0; i<10; i++){
    console.log(i)
}*/
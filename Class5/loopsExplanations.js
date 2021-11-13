//LOOP: usado quando há uma instrução a ser executada, mas ela é repetitiva.

/*console.log(1);
console.log(2);
console.log(3);*/

// FOR --> for({bloco de inicializaçã]; [bloco de condicional]; [expressão final(incrementar ou decrementar)]})

for (let contador = 1; contador <= 5; contador++){ // contador++ --> contador = contador + 1
    console.log(contador);

    if (contador === 4) {
        break;
    }
} 

const lista = [1, 2, 3, 4, 5];

for(let indice = 0; indice < lista.length; indice++){
    console.log(lista[indice]);
}

//Enquanto que: WHILE

let contador = 1;
while(contador <= 5) {
    console.log("Flávia");
    contador++;
}

//DO

do {
    console.log("Flávia =]");
    contador++;
} while (contador<=5)

// FOR EACH

const listX = ["Chocolates", "bolos", "uvas verdes", 'pães.']

listX.forEach(function (item){
    console.log(item);
})

//MAP: retorna sempre um novo array, uma cópia, é um repetidor. Consegue modificar o array sem sobrescrer.

const listXActual = listX.map(function(item){
    return "O que ela adora? " + item
});

console.log(listXActual)

const 
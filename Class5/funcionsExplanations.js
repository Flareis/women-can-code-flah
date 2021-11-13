function nomeFuncao() {
    console.log("Minha primeira função rodou!")
}

nomeFuncao()

function funcaoParametro (meuParametro, meuSegParametro) {
    console.log(meuParametro, meuSegParametro);
}

funcaoParametro(["1", "2", 100, true], "meuSegParametro!");

//Retorna Valor com Função, declara uma 3ª função

function retornaValor (){
    return "Meu valor Retornado";
}

// Funções Aritméticas

function subtracao (valor1, valor2){
    return valor1 - valor2
}
console.log(subtracao(10, 5))

//Retorna variável 
function retornaVariavel (valorVar){
    const minhaVar = valorVar;
    return minhaVar;
}
//console.log()    

function retCond(valor){
    if (valor >200) {
        return "valor maior que 200"
    } else {
        return "valor menor que 200";
    }
}
console.log(retCond(201));

// (? "" : "")  é o ternário e substitui o if else
function valorCondTernario (valor) {
    return valor > 200 ? "valor maior que 200" : "valor menor que 200"
}

const resulCond = valorCondTernario(400);
console.log(resulCond)

console.log(valorCondTernario(201));

//Arrow Function

console.log("minha primeira função rodou!")

const ArrowFunction = () => {
    console.log("minha primeira função rodou!")
}
function valorCondTernario2 (valor) {
    return valor > 200 ? "valor maior que 200" : "valor menor que 200"
}
const resultado = valorCondTernario2(30);
console.log(resultado);
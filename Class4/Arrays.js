/* lista, matrizes e array são os nomes conhecidos
O que separa cada item no array é a vírgula*/

const meuArrayStrings = ["Flavia", "silva", "dos", "Reis"];

const meuArrayNumero = [10, 20, 30, 40];

const meuArrayBooleano = [true, false, false];

const meuArrayObjeto = [{
    nome: "Flavia",
    idade: 35
}, {
    profissao: "contadora",
    endereco: "Barueri"

}, {}]

const meuArrayVariosTipos = ["string", 2341, true, {comida: "feijao"}]

// Selecionando um objeto específico: ÍNDICE, propriedade inplicita dentro do Array. 
//o primeiro índice começa com ZERO

console.log (meuArrayVariosTipos);

console.log(meuArrayVariosTipos[1]);

// Propriedade LENGTH

console.log(meuArrayVariosTipos.length)

const tamanhoMeuArrayVariosTipos = meuArrayVariosTipos.length
const indiceUltimoItem = tamanhoMeuArrayVariosTipos -1;
console.log(meuArrayVariosTipos[indiceUltimoItem]);

//Mamipular o Array --> PUSH adiciona um novo item ao final da lista

/* ERRO --> const meuNovoArray = meuArrayVariosTipos.push(["8", "9", "10"]);
console.log(meuNovoArray, meuArrayVariosTipos)*/

meuArrayVariosTipos.push("hello");
console.log(meuArrayVariosTipos);

meuArrayVariosTipos.push(500);
console.log(meuArrayVariosTipos);

// Inserir item no início

meuArrayVariosTipos.unshift("Quinta-feira");
console.log(meuArrayVariosTipos);

// Alterar item no meio do Array

meuArrayVariosTipos[3] = "fone de ouvido";
console.log(meuArrayVariosTipos);

//Tirar o último item do array

meuArrayVariosTipos.pop();
console.log(meuArrayVariosTipos);

// como descobrir um item do array sem saber a posição. Onde está a posição: "fone de ouvido"?

console.log(meuArrayVariosTipos.indexOf("fone de ouvido")); // retornou -1, então, não conseguiu encontrar

console.log(meuArrayVariosTipos.indexOf("string"))

console.log(meuArrayVariosTipos.indexOf("fone de ouvido"))

//Remover uma posição específica

meuArrayVariosTipos.splice(3, 1);
console.log(meuArrayVariosTipos);

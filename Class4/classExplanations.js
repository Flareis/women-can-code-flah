/*OBJETO

a sintaxe base são as chaves {}, conseguimos guardar várias informações usando uma variável só.
O nome objeto nada tem a ver com o objeto de fato, foi apenas uma apropriação do nome.

Quando acessar uma propriedade do objeto usar .variável*/

const meuPrimeiroObjeto = {};

const meuCarro = {
    modelo: "corolla",
    cor: "vermelho", //propriedade//
    ano: 2019,
    ehNovo: true,
}; 

console.log(meuCarro);
console.log("A cor do meu carro é ", meuCarro.cor);
console.log(meuCarro["modelo"]);

console.log(meuCarro.temSeguro); //usar uma propriedade não definida//

/* Acessar propridades com variáveis */

const modeloCarro = "modelo";
console.log(meuCarro[modeloCarro]); //meuCarro.modelo ou meuCarro["modelo"]

meuCarro.temSeguro = true;
console.log(meuCarro);

//trocar o ano do carro - Atualizações

meuCarro.ano = 2021
console.log(meuCarro);

// Deletar a propriedade de um objeto - palavra reservada = delete nomedoobjeto.propriedade


delete meuCarro.cor;

console.log(meuCarro);
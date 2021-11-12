/* 3) A segunda maneira de acessar as propriedades de um objeto é a notação de colchetes ( []). 
Se a propriedade do objeto que você está tentando acessar tiver um espaço em seu nome,
você precisará usar a notação de colchetes.*/

const pedido = {
    "a entrada": "hamburger",
    "o adicional": "vegetais",
    "o drink": "coca-cola"
  };
  
  // Apenas modifique dessa linha para baixo
  const valorEntrada = pedido ["a entrada"];   
  const valorDrink = pedido ["o drink"];

console.log(valorEntrada);
console.log(valorDrink);

/*Vamos construir uma função validaMaioridade para validar se o ano de nascimento 
fornecido corresponde a uma pessoa com mais de 18 e assim seja liberada ou não a 
entrada dela em um determinado show.*/

function validaMaioridade(anoCorrente, anoNascimento){
    var result = anoCorrente - anoNascimento; 
    if (result > 18){
        return "Liberação Autorizada."
    } if (result == 18){
        return "Validar documento de identidade"
    } else{
        return "ATENÇÃO: Liberação NÃO autorizada"
    } 
}

console.log(validaMaioridade(2021, 2003));

/*function validaMaioridade (idade){
    if (idade > 18){
        return "Liberação Autorizada."
    } if (idade == 18){
        return "Validar documento de identidade"
    } else{
        return "ATENÇÃO: Liberação NÃO autorizada"
    }
}
console.log(validaMaioridade(17));*/
function somarNumeroMenores(numero){
    var soma = 0
    for(i = 0; i< numero; i++ ){
        if(i % 3 == 0 || i % 5 == 0 ){
            soma += i 
        }
    }
    return soma
}

const soma = somarNumeroMenores(10);
console.log(soma);
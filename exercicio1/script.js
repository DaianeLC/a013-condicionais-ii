const num = Number(prompt('Digite um numero')) 
//a
if(num % 2 == 0 ){
    if(num % 3 == 0){
        console.log('O número escolhido é divisível por 2 ou 3')
    }
}else{
    console.log('O numero escolhido não é divisível por 2 ou 3')
}


//b
if(num % 2 === 0 || num % 3=== 0){
    console.log('No segundo teste o numero escolhido é divisível por 2 ou 3')
}else{
    console.log('No segundo teste o numero escolhido NÃO é divisível por 2 ou 3')
}
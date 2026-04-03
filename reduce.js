const numeros =[1,2,3,4,5];


// acc (acumulador)  cur (valor Actual)
const sumaTodos = numeros.reduce((acc, valorActual)=>{
return acc + valorActual;
});

console.log(sumaTodos);
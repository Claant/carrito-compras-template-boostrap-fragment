const frutas = ["🍌", "🍎", "🍇"];

// creamos una copia del contenido del array original
const nuevoArray = frutas.map((fruta)=>{
return fruta
});

console.log(nuevoArray);


// entonces tenemos dos arrays uno con el nombre de frutas y el otro con el nombre de nuevoArray.
// al agregar un nuevo elemento en el array original, esto no afecta a la copia del array creada en map, no agregandose el nuevo elemento, lo que da sentido a la no mutacion.
// ahora si creo una copia del array por valor o por referencia en ese caso si se modificaria tambien la copia creada, agregandose tambien el elemento.
frutas.push("🍉");
console.log(frutas);

// copia creada por referencia
// const copiaArray = frutas;




// Este es un areglo de objetos, donde cada objeto tiene una propiedad y su valor.

const users =[
    {name: "Jhon", age: 34 },
    {name: "Amy", age: 20 },
    {name: "CamperCat", age: 10 },
];

// con map que es una funcion de arreglos, nos crea una copia del array, especificando que solo mostremos la propiedad nombre dentro del nuevo array.
const names = users.map((user) => {
return user.name;

});
console.log(names);


// otro ejemplo de map

const numeros =[1,2,3,4,5,6,7,8,9];
const numerosPorDos = numeros.map((num) => {
return num * 2;

});
console.log(numerosPorDos);

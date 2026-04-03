
// Este es un areglo de objetos, donde cada objeto tiene una propiedad y su valor.
const users =[
    {uid: 1, name: "Jhon", age: 34 },
    {uid: 2, name: "Amy", age: 20 },
    {uid: 3, name: "CamperCat", age: 10 },
];

// aca usamos la funcion filter en una funcion de arreglo, donde la condicion es mostrar solo los mayores de 30.
// sirve para seleccionar algunos elementos del array, o tambien eliminar ciertos elementos, etc.
const mayores = users.filter((user)=> {
return user.age > 30;
});

console.log(mayores);

// otro ejemplo de filter

// aca le ordenamos que liste el array menos con el id 3.
const userFiltrado = users.filter((user)=>{
return user.uid !== 3;

});
console.log(userFiltrado);
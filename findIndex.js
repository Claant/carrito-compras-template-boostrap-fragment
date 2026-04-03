// Este es un arreglo de objetos, donde cada objeto tiene una propiedad y su valor.
const users =[
    {uid: 1, name: "Jhon", age: 34 },
    {uid: 2, name: "Amy", age: 20 },
    {uid: 3, name: "CamperCat", age: 10 },
];

// Se debe ocupar el triple igual.
// en caso de ser positivo, devuelve el primer indice del arreglo.
const indice = users.findIndex((user)=>  {
return user.uid === 2;
})
console.log(indice);
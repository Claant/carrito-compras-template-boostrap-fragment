// Este es un areglo de objetos, donde cada objeto tiene una propiedad y su valor.
const users =[
    {uid: 1, name: "Jhon", age: 34 },
    {uid: 2, name: "Amy", age: 20 },
    {uid: 3, name: "CamperCat", age: 10 },
];

// aca usamos la funcion find que es una funcion de arreglo y sirve para buscar y devolver el primer elemento de un arreglo que cumpla una condición.
const amy = users.find((user)=> {
return user.uid === 2;
});

console.log(amy);

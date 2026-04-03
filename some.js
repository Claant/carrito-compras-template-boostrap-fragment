// Este es un arreglo de objetos, donde cada objeto tiene una propiedad y su valor.
const users =[
    {uid: 1, name: "Jhon", age: 34 },
    {uid: 2, name: "Amy", age: 20 },
    {uid: 3, name: "CamperCat", age: 10 },
];

// El método some() en JavaScript se utiliza para comprobar si al menos un elemento del arreglo cumple una condición.
// Es una forma rápida de obtener un resultado booleano (true o false).
// tambien es una forma para saber si algun elemento existe.

const existe = users.some((user)=>{
// aca se pregunta si el id uid es igual a 2    
return user.uid === 2;
});
console.log(existe);
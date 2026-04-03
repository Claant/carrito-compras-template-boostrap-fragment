
// GUARDAMOS EL ELEMENTO PARA PODER ACCEDER A UN METODO A POSTERIOR CAPTURANDOLO EN UNA VARIABLE EN ESTE CASO H1.

const h1 = document.getElementById("tituloWeb");


console.log(h1.className);
console.log(h1.id);
console.log(h1.style);
console.log(h1.tagName);
console.log(h1.textContent);


// MODIFICANDO EL VALOR DE LAS PROPIEDADES
h1.textContent ="nuevo texto";
h1.style.backgroundColor="red";
h1.style.color="white";



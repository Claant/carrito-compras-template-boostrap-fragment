
// ELEMENTO DONDE VAMOS A INCORPORAR LOS <LI>
const lista =document.querySelector('#lista');
const arrayPaises= ["Peru", "Bolivia", "Colombia"];
const fragment = document.createDocumentFragment();


// USANDO createElemnt y Fragment
// USANDO Fragment NO SE GENERA REFLOW, ejecutando en forma paralela al DOM.
// Cuando la estructura este creada, se inserta al DOM.
arrayPaises.forEach(pais =>{
// CREAMOS EL <LI>
const li = document.createElement('li');
// AGREGAMOS EL ARRAY AL <LI>
li.textContent = pais;
fragment.appendChild(li);
});
lista.appendChild(fragment);


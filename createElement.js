
// ELEMENTO DONDE VAMOS A INCORPORAR LOS <LI>
const lista =document.querySelector('#lista');
const arrayPaises= ["Peru", "Bolivia", "Colombia"];

// USANDO createElemnt
// ACA TAMBIEN DE GENERA REFLOW, PERO SE PUEDE SOLUCIONAR CON FRAGMENT
arrayPaises.forEach(pais =>{
// CREAMOS EL <LI>
const li = document.createElement('li');
// AGREGAMOS EL ARRAY AL <LI>
li.textContent = pais;
// CON ESTO SE AGREGO EL TEXTO AL <LI> PERO DESDE JAVASCRIPT Y NO DEL INDEX.HTML.
lista.appendChild(li);
})

//==========================================
// USANDO innerHTML NO RECOMENDABLE PORQUE SE GENERA UN REFLOW: OCURRE CUANDO UN NAVEGADOR DEBE PROCESAR Y DIBUJAR PARTE O LA TOTALIDAD DE UNA PAGINA WEB NUEVAMENTE, COMO DESPUES DE UNA ACTUALIZACION DE UN SITIO WEB INTERACTIVO.
// EN OTRAS PALABRA SE ORIGINAN PROBLEMAS EN RECALCULAR EL TAMAÑO Y POSICION DE LOS ELEMENTOS DE UNA PAGINA LO QUE AFECTA EL RENDIMIENTO.
/*
arrayPaises.forEach((pais) => {
lista.innerHTML += `<li>${pais}</li>`;
});
*/


console.log(li);


// console.log("👌");


// MUESTRA COMO ESTA SIENDO REPRESENTADO NUESTRO HTML EN EL NAVEGADOR.
// console.log(document);

// LLAMANDO A PROPIEDADES DE DOCUMENT
// console.log(document.head);
// console.log(document.title);

// LLAMANDO A METODOS DE DOCUMENT QUE SIRVE PARA INTERACTUAR CON EL DOM

// getElementById: DEVUELVE UNA REFERENCIA AL ELEMENTO POR SU ID.

/* EN INDEX.HTML
 <H1 id="tituloWeb">Lorem, ipsum dolor.</H1>
PARA ACCEDER AL ID tituloWeb DEL INDEX.HTML, USAREMOS getElementById
DESDE EL ARCHIVO APP.JS
 */

// AL UTILIZAR EL METODO getElementById, EL H1 SE PINTARA EN EL NAVEGADOR. 
console.log(document.getElementById("tituloWeb"));
// CON EL METODO textContent PUBLICA EN LA CONSOLA EL LOREM DEL H1.
console.log(document.getElementById("tituloWeb").textContent);

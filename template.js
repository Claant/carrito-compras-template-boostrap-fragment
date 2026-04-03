
const lista =document.querySelector('#lista');
const fragment = document.createDocumentFragment();


//Este código obtiene una referencia al elemento del DOM con el ID liTemplate, generalmente para trabajar con plantillas de HTML.
//Busca en el documento (HTML) un elemento que coincida con el selector #liTemplate.
//El # indica que está buscando un ID, por lo que busca un elemento con id="liTemplate".
//Guarda ese elemento en la constante liTemplate.
//Normalmente se usa cuando tienes algo como una plantilla HTML que quieres clonar o rellenar con datos.

// En resumen capturamos nuestro template.
const liTemplate = document.querySelector('#liTemplate');

const arrayPaises= ["Peru", "Bolivia", "Colombia"];

// Por cada uno de los paises haremos click, por ende crearemos esta funcion que muestra este mensaje al hacer click.
// Al agregar e detecta el evento. target sirve para pintar los elementos cuando le estoy haciendo click.
const clickPaises =(e) => console.log("me diste click", e.targert);

arrayPaises.forEach(pais=>{

// clonamos el template para intervenirlo
// El uso directo del valor content podria provocar un comportamiento inesperado, para evitarlo debemos usar firstElementChild, para que funcione addEventListener el cual se agrega a los elementos que vienen de forma dinamica.
const clone = liTemplate.content.firstElementChild.cloneNode(true);

// Agregamos contenido dinamico
clone.querySelector("span").textContent= pais;

// Hacemos un addEventListener (escucha eventos) para ejecutar la funcion clickPaises 
clone.addEventListener("click", clickPaises);

// El fragment nos ayuda a evitar el reflow.
fragment.appendChild(clone);

});

// Para finalizar tomamos la lista y le agregamos el fragment, donde va el arrayPaises y lo mandamos al DOM.

lista.appendChild(fragment);
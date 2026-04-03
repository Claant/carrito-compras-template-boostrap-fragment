

const inputColor = document.querySelector('#inputColor');
const btnVisualizar = document.querySelector('#btnVisualizar');
const parrafoExa = document.querySelector('#parrafoExa');
const cardColor = document.querySelector('#cardColor');

// PROBAMOS EN CONSOLA QUE LA CAPTURA DE LOS ID ESTA CORRECTA

/*
console.log(inputColor);
console.log(btnVisualizar);
console.log(parrafoExa);
console.log(cardColor);

*/


// ACA PROBAMOS EN LA CONSOLA, AL HACER CLICK EN EL BOTON VISUALIZAR DEBIERA MOSTRARSE EL TEXTO "ME DISTE CLICK" DESDE LA CONSOLA
btnVisualizar.addEventListener("click", () => {
console.log("me diste click");
// CON EL parrafoExa.textContent CAPTURAMOS CUANDO SE SELECCIONE CON inputColor EL COLOR, GENERANDO DINAMICAMENTE EL NOMBRE DEL COLOR SELECCIONADO.
parrafoExa.textContent = inputColor.value;
cardColor.style.backgroundColor = inputColor.value;

// PARA COPIAR EN EL PORTAPAPELES EL TEXTO COLOR HEXADECIMAL, CON EL SIGUIENTE CODIGO.
navigator.clipboard
.writeText(inputColor.value)
.then(() => console.log("texto copiado"))
.catch((e)=> console.log(e));

});


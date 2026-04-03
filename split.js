const cadenasMeses ="Enero, febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre";

// usando la funcion split convierte la cadena de texto en un array con los elementos separados por coma.
const arrayMeses = cadenasMeses.split(",");
console.log(arrayMeses);


// usando la funcion join separa los elementos con punto y coma, ademas deja de ser un array.
const nuevoTexto= arrayMeses.join(";");
console.log(nuevoTexto);

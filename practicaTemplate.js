// Ahora capturaremos el carrito donde se van a mostrar los elementos
const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
// Necesitamos el fragment para evitar el reflow
const fragment = document.createDocumentFragment();
// Capturamos todos los botones.
const btnesBotones = document.querySelectorAll(".card .btn");

// Ahora probamos el consola la captura de todos estos elementos para ver si funcionan
// console.log(carrito);
// console.log(template);
// console.log(btnesBotones);

// Creamos un array para almacenar las frutas.
// Aca empujamos el titulo, el id y la cantidad de la funcion agregarAlCarrito().
const carritoObjeto = [];




// Creamos una funcion para almacenar los elementos (fruta ) en el array o al carrito
const agregarAlCarrito = (e) => {
  // Al presionar el boton con el dataset capturamos el boton que se presiono.
  console.log(e.target.dataset.fruta);

  // Con la informacion del dataset se construye un objeto
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };

  const indice = carritoObjeto.findIndex((item) => {
    return item.id === producto.id;
  });

  console.log(indice);

  if (indice === -1) {
    carritoObjeto.push(producto);
  } else {
    carritoObjeto[indice].cantidad++;
  }

  console.log(carritoObjeto);
  pintarCarrito(carritoObjeto);
};


const pintarCarrito = (array) => {
  //Para que el carrito parte vacio en el inicio.
  carrito.textContent = "";

    array.forEach((item) => {
    // clonamos el template
    const clone = template.content.firstElementChild.cloneNode(true);
    // el identificador .lead que representa al nombre de la fruta que capturamos
    // el titulo que capturamos viene del dataset
    clone.querySelector(".lead").textContent = item.titulo;
    // el identificador .badge que representa la cantidad de frutas que seleccionamos cada vez que hacemos click
    // la cantidad que capturamos viene del dataset
    clone.querySelector(".badge").textContent = item.cantidad;
    // Para evitar el reflow
    fragment.appendChild(clone);
  });

  carrito.appendChild(fragment);
};

// Detectamos el boton y al hacer click se ejecuta una funcion.
// Creamos una funcion para recorrer los botones para detectarlos
// A cada boton se le va asignar un evento (addEventListener) para cuando se haga click en cada boton captura la fruta y la almacene en el carrito(array).
btnesBotones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito));

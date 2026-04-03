// Ahora capturaremos el carrito donde se van a mostrar los elementos
const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const footer = document.getElementById("footer");
const templateFooter = document.getElementById("templateFooter");
// Necesitamos el fragment para evitar el reflow
const fragment = document.createDocumentFragment();

document.addEventListener('click', e => {
// console.log(e.target.matches(".card .btn-outline-primary"));
if (e.target.matches(".card .btn-outline-primary")){
 // console.log('ejecutar y agregar al carro')
  agregarAlCarrito(e)
}
// console.log(e.target.matches(" .list-group-item .btn-success"))
 if(e.target.matches("#carrito .list-group-item .btn-success")){
btAumentar(e)
 }
if(e.target.matches("#carrito .list-group-item .btn-danger")){
btnDisminuir(e)
 }

})

// Ahora probamos el consola la captura de todos estos elementos para ver si funcionan
// console.log(carrito);
// console.log(template);
// console.log(btnesBotones);

// Creamos un array para almacenar las frutas.
// Aca empujamos el titulo, el id y la cantidad de la funcion agregarAlCarrito().
let carritoObjeto = [];




// Creamos una funcion para almacenar los elementos (fruta ) en el array o al carrito
const agregarAlCarrito = (e) => {
  // Al presionar el boton con el dataset capturamos el boton que se presiono.
  // console.log(e.target.dataset.fruta);

  // Con la informacion del dataset se construye un objeto
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
    precio: parseInt(e.target.dataset.precio),
  };

  const indice = carritoObjeto.findIndex((item) => {
    return item.id === producto.id;
  });

  console.log(indice);

  if (indice === -1) {
    carritoObjeto.push(producto);
  } else {
    carritoObjeto[indice].cantidad++;
    //carritoObjeto[indice].precio = carritoObjeto[indice].cantidad * producto.precio

  }

  console.log(carritoObjeto);
  pintarCarrito(carritoObjeto);
};


const pintarCarrito = () => {
  //Para que el carrito parte vacio en el inicio.
  carrito.textContent = "";

    carritoObjeto.forEach((item) => {
    // clonamos el template
    const clone = template.content.cloneNode(true);
    // el identificador .lead que representa al nombre de la fruta que capturamos
    // el titulo que capturamos viene del dataset
    clone.querySelector(" .text-white .lead").textContent = item.titulo;
    // el identificador .badge que representa la cantidad de frutas que seleccionamos cada vez que hacemos click
    // la cantidad que capturamos viene del dataset
    clone.querySelector(".badge").textContent = item.cantidad;
    // capturamos el precio gracias al data-precio
    clone.querySelector("div .lead span").textContent = item.precio * item.cantidad,
    
    // ahora capturamos el boton agregar
    clone.querySelector(".btn-danger").dataset.id = item.id
       // ahora capturamos el boton quitar
    clone.querySelector(".btn-success").dataset.id = item.id



    // Para evitar el reflow
    fragment.appendChild(clone);
  });

  carrito.appendChild(fragment);
  pintarFooter();
};



const pintarFooter =() =>{
  // reiniciamos en 0 en caso de tener alguna informacion
footer.textContent="";
// funcion de callback
const total = carritoObjeto.reduce((acc, current)=> acc + current.cantidad * current.precio, 0
);
const clone = templateFooter.content.cloneNode(true);
clone.querySelector("span").textContent=total;
footer.appendChild(clone);

};



// damos funcionalidad a los botones agregar y quitar
const btAumentar = (e) =>{
console.log("me diste click ", e.target.dataset.id)
carritoObjeto = carritoObjeto.map(item => {
if(item.id === e.target.dataset.id){
item.cantidad++;
}
return item
})
pintarCarrito();
};


const btnDisminuir = (e) =>{
carritoObjeto = carritoObjeto.filter(item =>{
  // pregunto item.id es igual a la fruta seleccionada
if(item.id === e.target.dataset.id){
  // pregunto si la cantidad de fruta seleccionada es mayor a 0
  if(item.cantidad > 0){
    item.cantidad--
    // pregunto si la cantidad de fruta seleccionada en igual a 0
    if(item.cantidad === 0) return
    return item
  }
}else{return item}

});
pintarCarrito();
};


const lista =document.querySelector('#lista');
const arrayPaises= ["Peru", "Bolivia", "Colombia"];
const fragment = document.createDocumentFragment();

arrayPaises.forEach(pais =>{
const li = document.createElement('li');
li.className ='list'
const b = document.createElement('b');
b.textContent = "Pais:  "
const span = document.createElement('span');
span.className = "text-primary";
span.textContent=  pais;

li.appendChild(b);
li.appendChild(span);
fragment.appendChild(li);
})
lista.appendChild(fragment);
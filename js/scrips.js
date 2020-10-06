const lista = document.getElementById('list');
var personas = ['hector silvadoray', 'miguel rosas', 'adan quintero'];

const agregarPersona = () => {
    var nombre =document.getElementById("nom");
    lista.innerHTML = '';
    personas.push(nombre.value);
    mostrarValores(); 
    nombre.value = '';
}
const mostrarValores = () => {
    personas.map(persona => {
        var li = document.createElement('li');
        li.innerHTML = persona;
        lista.appendChild(li);
    })
}

const borrar = () => {
    lista.innerHTML = '';
    personas =[];
}
// Array para almacenar los nombres de amigos
let amigos = [];

//Funcion para agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();


//Validar que la casilla no este vacia
if (nombreAmigo === "") {
    alert("El campo esta vacio, por favor ingrese un nombre");
    return;    
}
//Validar que el nombre no este repetido
if (amigos.includes(nombreAmigo)) {
    alert(`El nombre ${nombreAmigo} ya esta en la lista`);
    return;
}
//Agregar el nombre al array de amigos
amigos.push(nombreAmigo);

//Limpiar el campo de entrada
inputAmigo.value = "";

//Actualizar la lista en HTML
actualizarLista();
}


//funcion para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");

    //Limpiar el contenido de la lista
    listaAmigos.innerHTML = ""; //Borra el contenido previo dentro del contenedor de la lista
    
    //Recorrer el Array con un ciclo for
    for(let i = 0; i <amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }

    //Creamos console log para ver como va rellenando el array cada vez que ese ejecuta la accion de "agregar"
    console.log(amigos);

}

// Funcion para seleccionar un amigo aleatorio
function sortearAmigo() {
    //Validar que haya amigos disponibles
    if(amigos.length === 0) //Comprueba si el array "amigos esta vacio"
    alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
     else {
        //Genara un Indice Aleatorio
        const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un numero aleatorio entre 0 y la longitud del array

        //Obtener el nombre sorteado 
        const amigoSorteado = amigos[indiceAleatorio]; //Usa el indice aleatorio para obtener un nombre del Array.

        //Mostrar el resultado en el HTML
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo Secreto es: <strong>${amigoSorteado}</strong>`;

        //Vemos en resultado en la consola
        console.log(`El amigo secreto es ${amigoSorteado}`);
     }   

    }

//Con esto alteramos el texto mostrado en pantalla
function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}


asignarTextoElemento ("h1" , "Juego del Amigo secreto por uri :)");
asignarTextoElemento ("h2" , "Por favor ingresa el nombre de tus amigos");





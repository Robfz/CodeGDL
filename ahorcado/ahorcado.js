// Variables

let palabraQueAdivinar = '';
let letrasAdivinadas = [];
let intentos = 10;

// Funciones

function crearPalabraQueAdivinar() {
    // Obten la palabra del input de la pagina web.
    // Checa la API y usa la funcion que lea el input de la palabra y te devuelva
    // su valor. Usa la variable "palabraQueAdivinar" para guardar el valor.
    palabraQueAdivinar = leerPalabra();

    // Llama la funcion para inicializar el arreglo "letrasAdivinadas"
    inicializaLetrasAdivinadas(palabraQueAdivinar.length);    

    // Obten un string con el contenido del arreglo "letrasAdivinadas".
    // Checa las funciones y usa la funcion que te devuelva un string
    // en base al contenido del arreglo "letrasAdivinadas".
    // Guardar el resultado de esta funcion en la variable "stringLetrasAdivinadas".
    let stringLetrasAdivinadas = letrasAdivinadas.join('');
    actualizarTextoLetrasAdivinadas(stringLetrasAdivinadas);

    // No borrar, esto actualiza la pagina web
    ocultarCrearPalabra();
    mostrarAdivinacion();
    actualizarTextoIntentos();
  }

  function inicializaLetrasAdivinadas(numeroDeLetras) {
    // Agregar un _ (guion bajo) en el arreglo "letrasAdivinadas"
    // por cada letra en el valor de la variable "palabraQueAdivinar".
    // Ejemplo: Si el valor de la variable "palabraQueAdivinar" es "wizeline" 
    // el arreglo "letrasAdivinadas" seria igual a
    // [ '_', '_', '_', '_', '_', '_', '_', '_' ] (8 guiones bajos)
    
    for (let i = 0; i < numeroDeLetras; i += 1) {
      letrasAdivinadas.push('_');
    }
  }

  function generarStringConLetrasAdivinadas() {
    // Crea un string con el contenido del arreglo "letrasAdivinadas"
    // Regresa el string creado.

    return letrasAdivinadas.join('');
  }

  function buscarLetraEnPalabra(letra) {
    // Busca si la letra es parte de la palabra.
    // Guarda los indices de las letras en un arreglo y
    // regresa el arreglo
    // Si no esta la letra, regresa un arreglo vacio
    const indices = [];

    for (let i = 0; i < palabraQueAdivinar.length; i += 1) {
      if (palabraQueAdivinar[i] === letra) {
        indices.push(i);
      }
    }
    
    return indices;
  }

  function checarLetra() {    
    // Obten la letra del input de la pagina web.
    // Checa la API y usa la funcion que lea el input de la letra y te devuelva su valor.
    // Guarda el valor en una variable dentro de esta funcion.
    const letra = leerLetra();

    // Busca que la letra este en la palabra.
    // Checa si hay alguna funcion que te sirva para esto
    const aciertos = buscarLetraEnPalabra(letra);
    
    // Si la letra es parte de la palabra, actualiza las letras adivinas y checa si gano
    // Si la letra no es parte de la palabra, reduce los intentos y checa si perdio
    if (aciertos.length) {
      actualizarLetrasAdvinas(letra, aciertos);
      checarSiGano();
    } else {
      reducirIntentos();
      checarSiPerdio();
    }
  }

  function reducirIntentos() {
    // Actualiza el valor de intentos
    intentos -= 1;

    // No borrar
    actualizarTextoIntentos();
  }

  function actualizarLetrasAdvinas(letra, indices) {
    // Actualiza el arreglo "letrasAdivinadas" con la letra adivinada
    indices.forEach((i) => letrasAdivinadas[i] = letra);

    // No borrar
    let nuevoValor = generarStringConLetrasAdivinadas();
    actualizarTextoLetrasAdivinadas(nuevoValor);
  }

  function checarSiPerdio() {
    // Checa si el jugador ya perdio
    // Para mostrar una notificacion en la pagina usa:
    // alert('Mi mensaje');
    if (intentos <= 0) {
      alert('You dead, son');
    }
  }

  function checarSiGano() {
    // Checa si el jugador ya gano
    // Para mostrar una notificacion en la pagina usa:
    // alert('Mi mensaje');
    if (letrasAdivinadas.join('') === palabraQueAdivinar) {
      alert('You won, m8');
    }
  }

  function reiniciar() {
    // Asignale a las variables sus valores iniciales
    palabraQueAdivinar = '';
    letrasAdivinadas = [];
    intentos = 10;

    // No borrar
    reiniciarDOM();
  }



// ------------------------------- API ----------------------------- //
// A partir de aqui, no modificar el codigo

// Oculta en la pagina el <div> con id = divCrearPalabra
function ocultarCrearPalabra() {
  document.getElementById('divCrearPalabra').style.display = 'none';
}

// Muestra en la pagina el <div> con id = divCrearPalabra
function mostrarCrearPalabra() {
  document.getElementById('divCrearPalabra').style.display = 'block';
}

// Oculta en la pagina el <div> con id = divAdivinacion
function ocultarAdivinacion() {
  document.getElementById('divAdivinacion').style.display = 'none';
}

// Muestra en la pagina el <div> con id = divAdivinacion
function mostrarAdivinacion() {
  document.getElementById('divAdivinacion').style.display = 'block';
}

// Lee el texto del input con id = palabra
// Devuelve un string con el valor del texto en el input
function leerPalabra() {
  let palabra = document.getElementById('palabra').value;
  return palabra;
}

// Lee el texto del input con id = letra
// Devuelve un string con el valor del texto en el input
function leerLetra() {
  let letra = document.getElementById('letra').value;
  return letra;
}

// Actualiza el texto del span con id = intentos
function actualizarTextoIntentos() {
  document.getElementById('intentos').textContent = intentos;
}

// Actualiza el texto del span con id = letrasAdivinadas
function actualizarTextoLetrasAdivinadas(nuevoValor) {
  document.getElementById('letrasAdivinadas').textContent = nuevoValor;
}

// Reinicia los componentes web para tener los valores en blanco
// y mostrar el div con id = divCrearPalabra y ocultar el div
// con id = divAdivinacion
function reiniciarDOM() {
  document.getElementById('palabra').value = '';
  document.getElementById('letrasAdivinadas').value = '';
  document.getElementById('letra').value = '';
  document.getElementById('divCrearPalabra').style.display = 'block';
  document.getElementById('divAdivinacion').style.display = 'none';
  actualizarTextoIntentos();
}

// Checa el valor del input con id = palabra
// Si el length del valor del input es mayor a 0, desbloqueamos el boton 'botonCrear'
// Si el length es menor o igual a 0, bloqueamos el boton 'botonCrear'
function checarCambio() {
  let valor = document.getElementById('palabra').value;
  if (valor.length > 0) {
    document.getElementById('botonCrear').disabled = false;
  } else {
    document.getElementById('botonCrear').disabled = true;
  }
}

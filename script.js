/* LABORATORIO DE JAVASCRIPT */
/* Estudiante: Abdiel Abreu */


/* VARIABLES Y TIPOS DE DATOS */

let nombre = "Abdiel Abreu";
let edad = 25;
let estudianteActivo = true;
let carrera = "Tecnologia de la Informacion";
let promedio = 90.5;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Estudiante activo:", estudianteActivo);
console.log("Carrera:", carrera);
console.log("Promedio:", promedio);


/* MOSTRAR INFORMACION EN HTML */

let resultado = document.getElementById("resultado");

resultado.innerHTML =
    "<p><strong>Nombre:</strong> " + nombre + "</p>" +
    "<p><strong>Edad:</strong> " + edad + "</p>" +
    "<p><strong>Estudiante activo:</strong> " + estudianteActivo + "</p>" +
    "<p><strong>Carrera:</strong> " + carrera + "</p>" +
    "<p><strong>Promedio:</strong> " + promedio + "</p>";


/* ARREGLO */

let tecnologias = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "GitHub"
];

console.log("Arreglo original:");
console.log(tecnologias);

tecnologias.push("Visual Studio");

console.log("Arreglo despues de agregar Visual Studio:");
console.log(tecnologias);


/* MOSTRAR ARREGLO */

let listaTecnologias =
    document.getElementById("listaTecnologias");

for (let i = 0; i < tecnologias.length; i++) {

    let elemento = document.createElement("li");

    elemento.textContent = tecnologias[i];

    listaTecnologias.appendChild(elemento);
}


/* OBJETO */

let estudiante = {
    nombre: "Abdiel Abreu",
    edad: 25,
    carrera: "Tecnologia de la Informacion",
    especialidad: "Seguridad de la Informacion",
    activo: true
};

console.log("Objeto estudiante:");
console.log(estudiante);


/* MOSTRAR OBJETO */

let informacionEstudiante =
    document.getElementById("informacionEstudiante");

informacionEstudiante.innerHTML =
    "Nombre: " + estudiante.nombre +
    "<br>Edad: " + estudiante.edad +
    "<br>Carrera: " + estudiante.carrera +
    "<br>Especialidad: " + estudiante.especialidad +
    "<br>Estudiante activo: " + estudiante.activo;


/* IF, ELSE IF Y ELSE */

let nota = 90;
let mensajeNota;

if (nota >= 90) {

    mensajeNota = "Excelente desempeno.";

} else if (nota >= 70) {

    mensajeNota = "El desempeno es satisfactorio.";

} else {

    mensajeNota = "Debe continuar estudiando.";

}

console.log("Resultado de la evaluacion:");
console.log(mensajeNota);


/* BUCLE FOR */

console.log("Bucle FOR:");

for (let i = 0; i < tecnologias.length; i++) {

    console.log(tecnologias[i]);

}


/* BUCLE WHILE */

let contador = 1;

console.log("Bucle WHILE:");

while (contador <= 5) {

    console.log("Iteracion numero " + contador);

    contador++;

}


/* BUCLE DO WHILE */

let numero = 1;

console.log("Bucle DO WHILE:");

do {

    console.log("Numero: " + numero);

    numero++;

} while (numero <= 3);


/* FUNCION */

function saludar(nombreUsuario) {

    return "Hola " + nombreUsuario +
        ", bienvenido al laboratorio de JavaScript.";

}

let saludo = saludar("Abdiel Abreu");

console.log(saludo);


/* FUNCION PARA CALCULAR PROMEDIO */

function calcularPromedio(nota1, nota2, nota3) {

    let resultadoPromedio =
        (nota1 + nota2 + nota3) / 3;

    return resultadoPromedio;
}

let promedioFinal =
    calcularPromedio(90, 85, 95);

console.log("Promedio calculado:", promedioFinal);


/* ALCANCE */

let variableGlobal =
    "Esta variable tiene alcance global";

function ejemploAlcance() {

    let variableLocal =
        "Esta variable tiene alcance local";

    console.log(variableGlobal);
    console.log(variableLocal);
}

ejemploAlcance();

console.log(variableGlobal);


/* CLAUSURA */

function crearContador() {

    let contadorPrivado = 0;

    return function() {

        contadorPrivado++;

        return contadorPrivado;

    };
}

let contadorClausura = crearContador();

let primeraLlamada = contadorClausura();
let segundaLlamada = contadorClausura();
let terceraLlamada = contadorClausura();

console.log("Clausura - primera llamada:", primeraLlamada);
console.log("Clausura - segunda llamada:", segundaLlamada);
console.log("Clausura - tercera llamada:", terceraLlamada);


/* MOSTRAR CLAUSURA EN LA PAGINA */

let resultadoClausura =
    document.getElementById("resultadoClausura");

resultadoClausura.innerHTML =
    "Primera llamada: " + primeraLlamada +
    "<br>Segunda llamada: " + segundaLlamada +
    "<br>Tercera llamada: " + terceraLlamada;


/* MENSAJE FINAL */

console.log("-------------------------");
console.log("LABORATORIO COMPLETADO");
console.log("-------------------------");
console.log("Variables: OK");
console.log("Tipos de datos: OK");
console.log("Arreglos: OK");
console.log("Objetos: OK");
console.log("Condicionales: OK");
console.log("FOR: OK");
console.log("WHILE: OK");
console.log("DO WHILE: OK");
console.log("Funciones: OK");
console.log("Alcance: OK");
console.log("Clausuras: OK");
console.log("-------------------------");
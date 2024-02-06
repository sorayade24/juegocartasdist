import "./style.css";

// let boton1 = document.getElementById("sumando1"); //variable de boton para incrementar valor
// let boton2 = document.getElementById("restando1"); //variable de boton para decrementar valor
// let boton3 = document.getElementById("reset"); //variable de boton para resetear valor
// let input = document.getElementById("input"); //variable de input para ingresar valor
// let numero = parseInt(document.getElementById("numero-turno")?.innerHTML || "0"); //variable del numero en el DOM

      
// function sumar() {
//   let result = ++numero;                               //variable con el resultado
//   const numeroTurnoElement = document.getElementById("numero-turno");
//   if (numeroTurnoElement) {
//     numeroTurnoElement.innerHTML = result.toString().padStart(2, "0"); //Muestra resultado de la funcion en DOM con padStart
//   }
// }

// function restar() {
//   let result = --numero;                               //variable con el resultado
//   const numeroTurnoElement = document.getElementById("numero-turno");
//   if (numeroTurnoElement) {
//     numeroTurnoElement.innerHTML = result.toString().padStart(2, "0"); //Muestra resultado de la funcion en DOM con padStart
//   }
// }

// function reset(){
//   numero = 0; 
//   let numeroTurnoElement = document.getElementById("numero-turno");                           
//   if (numeroTurnoElement) {
//     numeroTurnoElement.innerHTML = numero.toString().padStart(2, "0"); //Muestra resultado de la funcion en DOM con padStart
//   }
// }

// function inputNumber() {
//   if (input instanceof HTMLInputElement) {
//     const inputValue = input.value; 
//     const numeroTurnoElement = document.getElementById("numero-turno");
//     if (numeroTurnoElement && inputValue) {
//       numeroTurnoElement.innerHTML = inputValue.toString().padStart(2, "0"); // Aplicar el valor en el DOM con padStart
//     }
//   }
// }

// if (boton1 !== null && boton1 !== undefined) {
//   boton1.addEventListener("click", sumar);
// }

// if (boton2 !== null && boton2 !== undefined) {
//   boton2.addEventListener("click", restar);
// }

// if (boton3 !== null && boton3 !== undefined) {
//   boton3.addEventListener("click", reset);
// }

// if (input !== null && input !== undefined) {
//   input.addEventListener("change", inputNumber);
// }



const generarNumeroAleatorio = Math.floor(Math.random() * 11);
const NO_ES_UN_NUMERO = 0;
const NO_ES_EL_NUMERO_SECRETO = 1;
const ES_EL_NUMERO_SECRETO = 2;
let intentos = 0;
let max_intentos = 5;
const numeroAcertar = generarNumeroAleatorio;

const handleComprobar = () => {
  let texto = document.getElementById("input").value;
  const estado = comprobarNumero(texto);
  muestraMensajeComprobacion(texto, estado);
};

let botonComprobar = document.getElementById("comprobar");
botonComprobar.addEventListener("click", handleComprobar);

function comprobarNumero(texto) {
  console.log("Comprobando numero");

  let numero = parseInt(texto);
  let esUnNumero = !isNaN(numero);
  console.log(numeroAcertar);

  if (!esUnNumero) {
    return NO_ES_UN_NUMERO;
  }

  return numero === numeroAcertar
    ? ES_EL_NUMERO_SECRETO
    : NO_ES_EL_NUMERO_SECRETO;
}

const muestraMensajeComprobacion = (texto, estado) => {
  let mensaje = "";

  switch (estado) {
    case NO_ES_UN_NUMERO:
      mensaje = `${texto} no es un número.`;
      break;
    case NO_ES_EL_NUMERO_SECRETO:
      mensaje = `Lo siento, ${texto} no era el numero. Pista: el número es ${
        texto > numeroAcertar ? "menor" : "mayor"
      }`;
      break;
    case ES_EL_NUMERO_SECRETO:
      mensaje = `${texto} es el numero secreto, Eres el ganador!`;
      botonComprobar.disabled = true;
      break;
    default:
      mensaje = `No deberias estar aquí`;
      break;
  }

  intentos++;
  switch (true) {
    case intentos >= 5:
      document.getElementById("intentos").innerHTML = `GAME OVER. Has superado el número de intentos: ${max_intentos}`;
        botonComprobar.disabled = true;
      break;
    default:
        document.getElementById("intentos").innerHTML = `Intentos: ${intentos} de ${max_intentos}`;
      break;
  }

  document.getElementById("resultado").innerHTML = mensaje;

};





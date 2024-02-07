import "./style.css";

/// juego siete y medio

let generarNumeroAleatorio = () => Math.floor(Math.random() * 13);

let puntuacionJugador = 0;
let mensaje = document.getElementById("mensaje");
let nuevaPartida = document.getElementById("nuevaPartida");

let dameCarta = document.getElementById("boton");
let futuro = document.getElementById("boton2");
let mePlanto = document.getElementById("btn-plantarse");

//funciones

let muestraPuntuacion = () => {
  let puntuacion = document.getElementById("puntuacion");
  if (puntuacion) {
    puntuacion.innerHTML = puntuacionJugador.toString();
  }
};


let muestraCarta = () => {
  let numero = generarNumeroAleatorio();
  let imagen = document.getElementById("carta");

  if (numero > 7 && numero < 10) {
    numero = numero + 2;
  }
  if (numero === 0) {
    numero++;
  }

  console.log(numero);

  switch (true) {
    case numero === 1:
      if (imagen instanceof HTMLImageElement) {
        imagen.src = "../public/1_as-copas.jpeg";
      }
      break;
    case numero === 2:
      if (imagen instanceof HTMLImageElement) {
        imagen.src = "../public/2_dos-copas.jpeg";
      }
      break;
    case numero === 3:
      if (imagen instanceof HTMLImageElement) {
        imagen.src = "../public/3_tres-copas.jpeg";
      }
      break;
    case numero === 4:
      if (imagen instanceof HTMLImageElement) {
        imagen.src = "../public/4_cuatro-copas.jpeg";
      }
      break;
    case numero === 5:
      if (imagen instanceof HTMLImageElement) {
        imagen.src = "../public/5_cinco-copas.jpeg";
      }
      break;
    case numero === 6:
      if (imagen instanceof HTMLImageElement) {
        imagen.src = "../public/6_seis-copas.jpeg";
      }
      break;
    case numero === 7:
      if (imagen instanceof HTMLImageElement) {
        imagen.src = "../public/7_siete-copas.jpeg";
      }
      break;
    case numero === 10:
      if (imagen instanceof HTMLImageElement) {
        imagen.src = "../public/10_sota-copas.jpeg";
      }
      numero = 0.5;
      break;
    case numero === 11:
      if (imagen instanceof HTMLImageElement) {
        imagen.src = "../public/11_caballo-copas.jpeg";
      }
      numero = 0.5;
      break;
    case numero === 12:
      if (imagen instanceof HTMLImageElement) {
        imagen.src = "../public/12_rey-copas.jpeg";
      }
      numero = 0.5;
      break;
  }

  puntuacionJugador = puntuacionJugador + numero;

  if (puntuacionJugador > 7.5) {
    if (mensaje instanceof HTMLDivElement) {
      mensaje.innerHTML = `GAME OVER`;
    }
    if (mePlanto instanceof HTMLButtonElement) {
      mePlanto.disabled = true;
    }
    if (dameCarta instanceof HTMLButtonElement) {
      dameCarta.disabled = true;
    }
    if (nuevaPartida instanceof HTMLButtonElement) {
      nuevaPartida.style.display = 'block';
    }
  }

  if (puntuacionJugador === 7.5) {
    if (mensaje instanceof HTMLDivElement) {
      mensaje.innerHTML = `¡ Lo has clavado! ¡Enhorabuena!`;
    }
    if (mePlanto instanceof HTMLButtonElement) {
      mePlanto.disabled = true;
    }
    if (dameCarta instanceof HTMLButtonElement) {
      dameCarta.disabled = true;
    }
    if (nuevaPartida instanceof HTMLButtonElement) {
      nuevaPartida.style.display = 'block';
    }
  }
};

let plantarse = () => {
  switch (true) {
    case puntuacionJugador <= 4:
      if (mensaje instanceof HTMLDivElement) {
        mensaje.innerHTML = `Has sido muy conservador`;
      }
      if (mePlanto instanceof HTMLButtonElement) {
        mePlanto.disabled = true;
      }
      if (dameCarta instanceof HTMLButtonElement) {
        dameCarta.disabled = true;
      }
      if (nuevaPartida instanceof HTMLButtonElement) {
        nuevaPartida.style.display = 'block';
      }
      if (futuro instanceof HTMLButtonElement) {
        futuro.style.display = 'block';
      }
      break;
    case puntuacionJugador > 4 && puntuacionJugador <=5:
      if (mensaje instanceof HTMLDivElement) {
        mensaje.innerHTML = `¿Te ha entrado el canguelo eh?`;
      }
      if (mePlanto instanceof HTMLButtonElement) {
        mePlanto.disabled = true;
      }
      if (dameCarta instanceof HTMLButtonElement) {
        dameCarta.disabled = true;
      }
      if (nuevaPartida instanceof HTMLButtonElement) {
        nuevaPartida.style.display = 'block';
      }
      if (futuro instanceof HTMLButtonElement) {
        futuro.style.display = 'block';
      }
      break;
    case puntuacionJugador >5 && puntuacionJugador <=7:
      if (mensaje instanceof HTMLDivElement) {
        mensaje.innerHTML = `Casi, casi...`;
      }
      if (mePlanto instanceof HTMLButtonElement) {
        mePlanto.disabled = true;
      }
      if (dameCarta instanceof HTMLButtonElement) {
        dameCarta.disabled = true;
      }
      if (nuevaPartida instanceof HTMLButtonElement) {
        nuevaPartida.style.display = 'block';
      }
      if (futuro instanceof HTMLButtonElement) {
        futuro.style.display = 'block';
      }
      break;

} 
}
let reset = () => {
  location.reload();
};



//eventos

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

if (nuevaPartida !== null && nuevaPartida !== undefined && nuevaPartida instanceof HTMLButtonElement) {
  nuevaPartida.addEventListener("click", reset);
}

if (dameCarta !== null && dameCarta !== undefined && dameCarta instanceof HTMLButtonElement) {
  dameCarta.addEventListener("click", muestraCarta);
}

if (dameCarta !== null && dameCarta !== undefined && dameCarta instanceof HTMLButtonElement) {
  dameCarta.addEventListener("click", muestraPuntuacion);
}

if (mePlanto !== null && mePlanto !== undefined && mePlanto instanceof HTMLButtonElement) {
  mePlanto.addEventListener("click", plantarse);
}

if (futuro !== null && futuro!== undefined && futuro instanceof HTMLButtonElement) {
  futuro.addEventListener("click", muestraCarta);
  futuro.addEventListener("click", muestraPuntuacion);
  
}
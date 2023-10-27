// Select the background element
const background = document.getElementById('background');
const letra = document.getElementById('letra');

// Initialize variables for position
let posX = -43.5; // initial X position
let posY = -33; // initial Y position

let preguntas = [];
const images = [];
// POLL 1
const poll1 = [
  {
    pregunta: "¿Hay alguien ahí?",
    respuesta: "SI"
  },
  {
    pregunta: "¿Hay un espíritu aquí?",
    respuesta: "BOO"
  },
  {
    pregunta: "¿Estás por aquí?",
    respuesta: "SI"
  },
  {
    pregunta: "¿Estás atrapado aquí?",
    respuesta: "NO"
  },
  {
    pregunta: "¿Estás en este castillo?",
    respuesta: "SI"
  },
  {
    pregunta: "¿Estás aquí por tu propia voluntad?",
    respuesta: "SI"
  },
  {
    pregunta: "¿Quién eres?",
    respuesta: "KING"
  },
  {
    pregunta: "¿Cómo te llamas?",
    respuesta: "KING"
  },
  {
    pregunta: "¿Cuál es tu nombre?",
    respuesta: "KING"
  }
];

// POLL 2
const poll2 = [
  {
    pregunta: "¿Cómo llegaste aquí?",
    respuesta: "FUEGO"
  },
  {
    pregunta: "¿Cómo moriste?",
    respuesta: "INCENDIO"
  },
  {
    pregunta: "¿Estás vivo o muerto?",
    respuesta: "AMBAS"
  },
  {
    pregunta: "¿Eres un espíritu bueno o malo?",
    respuesta: "DEPENDE"
  },
  {
    pregunta: "¿Por qué estás aquí?",
    respuesta: "HAMBURGUESAS"
  },
  {
    pregunta: "¿Eres amigable?",
    respuesta: "DEPENDE"
  },
  {
    pregunta: "¿Dónde estás?",
    respuesta: "CERCA"
  },
  {
    pregunta: "¿Dónde te encuentras ahora?",
    respuesta: "CERCA"
  },
  {
    pregunta: "¿Conoces el futuro?",
    respuesta: "NO"
  }
];

// POLL 3
const poll3 = [
  {
    pregunta: "¿Tienes algo para mí?",
    respuesta: "WHOPPER"
  },
  {
    pregunta: "¿Quieres darme algo?",
    respuesta: "NO"
  },
  {
    pregunta: "¿Tienes un mensaje para nosotros?",
    respuesta: "WHOPPER"
  },
  {
    pregunta: "¿Nos puedes dar un consejo?",
    respuesta: "CORRAN"
  },
  {
    pregunta: "Tengo hambre, ¿puedes ayudarme?",
    respuesta: "WHOPPER"
  },
  {
    pregunta: "¿Quieres que hagamos algo por ti?",
    respuesta: "SALVENSE"
  },
  {
    pregunta: "¿Puedes mostrarnos un signo de tu presencia?",
    respuesta: "WHOPPER"
  },
  {
    pregunta: "¿Qué piensas sobre nosotros?",
    respuesta: "TONTOS"
  },
  {
    pregunta: "¿Puedes ayudarnos de alguna forma?",
    respuesta: "WHOPPER"
  }
];

// Función para agrupar de a 3 preguntas
function groupQuestions(poll) {
  const groups = [];
  for (let i = 0; i < poll.length; i += 3) {
    groups.push(poll.slice(i, i + 3));
  }
  return groups;
}

// Agrupa las preguntas de cada POLL y agrega los grupos a la variable "preguntas"
preguntas.push(groupQuestions(poll1));
preguntas.push(groupQuestions(poll2));
preguntas.push(groupQuestions(poll3));

console.log(preguntas); // Muestra la variable "preguntas" en la consola


let positions = [
  { value: "si", x: -17, y: 0 },
  { value: "no", x: -69, y: 0 },
  { value: "a", x: -6.3, y: -30 },
  { value: "b", x: -13, y: -22 },
  { value: "c", x: -18, y: -18 },
  { value: "d", x: -24, y: -16 },
  { value: "e", x: -30, y: -13 },
  { value: "f", x: -36, y: -12 },
  { value: "g", x: -42, y: -12 },
  { value: "h", x: -49, y: -13 },
  { value: "i", x: -55, y: -13 },
  { value: "j", x: -60, y: -15 },
  { value: "k", x: -68, y: -18 },
  { value: "l", x: -72, y: -22 },
  { value: "m", x: -80, y: -28 },
  { value: "n", x: -6, y: -47 },
  { value: "o", x: -11, y: -41 },
  { value: "p", x: -15, y: -35 },
  { value: "q", x: -21, y: -32 },
  { value: "r", x: -28, y: -29 },
  { value: "s", x: -35, y: -28 },
  { value: "t", x: -40, y: -28 },
  { value: "u", x: -46, y: -28 },
  { value: "v", x: -53, y: -28 },
  { value: "w", x: -61, y: -29 },
  { value: "x", x: -69, y: -35 },
  { value: "y", x: -76, y: -40 },
  { value: "z", x: -79, y: -46 },
  { value: "0", x: -67, y: -54 },
  { value: "1", x: -17, y: -54 },
  { value: "2", x: -22, y: -54 },
  { value: "3", x: -28, y: -54 },
  { value: "4", x: -33, y: -54 },
  { value: "5", x: -39, y: -54 },
  { value: "6", x: -45, y: -54 },
  { value: "7", x: -50, y: -54 },
  { value: "8", x: -56, y: -54 },
  { value: "9", x: -61, y: -54 },
  { value: "adios", x: -44, y: -66 },
];
let gameStep = 0;
const splashscreen = document.querySelector("#splashscreen");
const permission = document.querySelector("#permission");
const tilt = document.querySelector("#tilt");
const instructions = document.querySelector("#instructions");
const cuestions = document.querySelector("#cuestions");
const game = document.querySelector("#game");
const winner = document.querySelector("#winner");
const loser = document.querySelector("#loser");

function passScreen() {
  gameStep++;
  gameManager(gameStep);
}
let questionSelected = 0;
const q2 = document.querySelector("#q2");
q2.addEventListener("click", () => {
  questionSelected = 2;
  passScreen();
});
const q3 = document.querySelector("#q3");
q3.addEventListener("click", () => {
  questionSelected = 3;
  passScreen();
});
const q1 = document.querySelector("#q1");
q1.addEventListener("click", () => {
  questionSelected = 1;
  passScreen();
});

let cuestionPoll = 0;
let respuestasPOLL1_1;
let questionAsked = 0;
function gameManager(_gameStep) {
  switch (_gameStep) {
    case 0:
      splashscreen.classList.remove('hide');
      setTimeout(passScreen, 5000);
      break;
    case 1:
      splashscreen.classList.add('hide');
      permission.classList.remove('hide');
      break;
    case 2:
      setGyro();
      break;
    case 3:
      permission.classList.add('hide');
      tilt.classList.remove('hide');
      break;
    case 4:
      tilt.classList.add('hide');
      instructions.classList.remove('hide');
      setTimeout(passScreen, 10000);
      break;
    case 5:
      instructions.classList.add('hide');
      game.classList.add('hide');
      cuestions.classList.remove('hide');

      if (cuestionPoll < 3) {
        // Acceso a las respuestas en el "POLL 1"
        questionAsked = Math.round(Math.random() * 2);
        respuestasPOLL1_1 = preguntas[cuestionPoll][questionAsked].map((pregunta) => pregunta.respuesta);

        // Acceso a las preguntas en el "POLL 1"
        const preguntasPOLL1_1 = preguntas[cuestionPoll][questionAsked].map((pregunta) => pregunta.pregunta);
        q1.value = preguntasPOLL1_1[0];
        q2.value = preguntasPOLL1_1[1];
        q3.value = preguntasPOLL1_1[2];
      }
      else {
        gameStep = 6;
        passScreen();
      }
      inGame = true;
      break;
    case 6:
      inGame = true;
      cuestions.classList.add('hide');
      game.classList.remove('hide');
      break;

    case 7:
      game.classList.add('hide');
      cuestions.classList.add('hide');
      if (gano == true) {
        winner.classList.remove('hide');
        // MOSTRAR QR VICTORIOSO
      }
      else {
        loser.classList.remove('hide');
      }
      // GUARDAR EN CACHE ALGO PARA QUE NO PUEDA JUGAR DENUEVO

      break;
    default:
      splashscreen.classList.remove('hide');
      break;
  }
}
gameManager(gameStep);
function searchFor(_letter) {
  // Get the #info element
  const infoElement = document.querySelector("#info");

  // Get the position of the target element (specified by _letter)
  let str = "";
  str = _letter;
  const targetPosition = positions.find((element) => element.value === _letter.toLowerCase());

  if (targetPosition) {
    // Define the threshold for proximity
    const proximityThreshold = 3; // Adjust this value as needed
    const proximityThreshold2 = 10;
    // Calculate the distance between #info and the target position
    const distanceX = Math.abs(targetPosition.x - posX);
    const distanceY = Math.abs(targetPosition.y - posY);

    // Calculate the angle to rotate the pointer in degrees
    const angle = Math.atan2(-1 * (targetPosition.y - posY), -1 * (targetPosition.x - posX)) * (180 / Math.PI);

    // Check if #info is near the target

    // Rotate the pointer towards the target position
    infoElement.style.transform = `rotate(${angle}deg)`;

    if (Math.abs(distanceX) <= proximityThreshold && Math.abs(distanceY) <= proximityThreshold) {
      // Change the border color to green
      infoElement.style.backgroundImage = 'url("./img/tag2.png")';
      letra.style.backgroundImage = `url("./img/${targetPosition.value}.png")`;
      letra.classList.remove('hide');
      ind++;
    }
    else if (Math.abs(distanceX) <= proximityThreshold2 && Math.abs(distanceY) <= proximityThreshold2) {
      infoElement.style.backgroundImage = 'url("./img/tag2.png")';
      letra.style.backgroundImage = `url("./img/${targetPosition.value}.png")`;
      letra.classList.remove('hide');
    }
    else {
      // Change the border color back to normal
      infoElement.style.backgroundImage = 'url("./img/tag3.png")';
      letra.style.backgroundImage = 'url("./img/fondoNone.png")';
      letra.classList.add('hide');

    }

  }
}


let askYes = false;
let ind = 0;
let OS = "";
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
}

let zAcc = 0;
let horizontal = false;
let inGame = false;
let gano = false;
function setGyro() {
  OS = getMobileOperatingSystem();
  if (OS == "iOS") {
    DeviceMotionEvent.requestPermission().then(response => {
      if (response == 'granted') {
        passScreen();


        // Add event listener for device motion
        window.addEventListener('devicemotion', handleMotion);

        function handleMotion(event) {
          const accelerationX = event.accelerationIncludingGravity.x;
          const accelerationY = event.accelerationIncludingGravity.y;
          zAcc = event.accelerationIncludingGravity.z;



          // Update the background position\
          //document.querySelector("#zAcc").innerHTML = `${zAcc}`;
          if ((zAcc > 9 && !horizontal) || (zAcc < -9 && !horizontal)) {
            horizontal = true;
            passScreen();
          }
          if (inGame) {
            // Calculate the new position based on device motion
            posX += -(accelerationX / 10); // Adjust the factor as needed
            posY += (accelerationY / 10); // Adjust the factor as needed

            // Limit the position to stay within the bounds of the screen
            posX = Math.min(Math.max(posX, -87), 0);
            posY = Math.min(Math.max(posY, -66), 0);
            background.style.transform = `translate(${posX}%, ${posY}%)`;
            letra.style.transform = `translate(${posX}%, ${posY}%)`;

            if (respuestasPOLL1_1[questionSelected - 1] == "SI" || respuestasPOLL1_1[questionSelected - 1] == "NO") {
              let letter = respuestasPOLL1_1[questionSelected - 1];
              if (ind < 1) {
                searchFor(letter);
                letter = respuestasPOLL1_1[questionSelected - 1];
              }
              else {
                ind = 0;
                gameStep = 4;
                inGame = false;
                cuestionPoll++;
                passScreen();
              }
            }
            else {
              let letter = respuestasPOLL1_1[questionSelected - 1][ind];
              if (ind < respuestasPOLL1_1[questionSelected - 1].length) {
                if (letter == 'W') {
                  gano = true;
                }
                searchFor(letter);
                letter = respuestasPOLL1_1[questionSelected - 1][ind];
              }
              else {
                ind = 0;
                gameStep = 4;
                inGame = false;
                cuestionPoll++;
                passScreen();
              }
            }
          }

        }
      } else {
        alert("Motion-based background movement is disabled.");
      }

    });

  } else if (OS == "Android") {
    if (window.DeviceMotionEvent) {

      // Display a permission dialog
      if (confirm("Quieres permitir que esta página acceda a tu Gyroscopio?")) {
        passScreen();


        // Add event listener for device motion
        window.addEventListener('devicemotion', handleMotion);

        function handleMotion(event) {
          const accelerationX = event.accelerationIncludingGravity.x;
          const accelerationY = event.accelerationIncludingGravity.y;
          zAcc = event.accelerationIncludingGravity.z;



          // Update the background position\
          //document.querySelector("#zAcc").innerHTML = `${zAcc}`;
          if ((zAcc > 9 && !horizontal) || (zAcc < -9 && !horizontal)) {
            horizontal = true;
            passScreen();
          }
          if (inGame) {
            // Calculate the new position based on device motion
            posX += (accelerationX / 10); // Adjust the factor as needed
            posY += -(accelerationY / 10); // Adjust the factor as needed

            // Limit the position to stay within the bounds of the screen
            posX = Math.min(Math.max(posX, -87), 0);
            posY = Math.min(Math.max(posY, -66), 0);
            background.style.transform = `translate(${posX}%, ${posY}%)`;
            letra.style.transform = `translate(${posX}%, ${posY}%)`;

            if (respuestasPOLL1_1[questionSelected - 1] == "SI" || respuestasPOLL1_1[questionSelected - 1] == "NO") {
              let letter = respuestasPOLL1_1[questionSelected - 1];
              if (ind < 1) {
                searchFor(letter);
                letter = respuestasPOLL1_1[questionSelected - 1];
              }
              else {
                ind = 0;
                gameStep = 4;
                inGame = false;
                cuestionPoll++;
                passScreen();
              }
            }
            else {
              let letter = respuestasPOLL1_1[questionSelected - 1][ind];

              if (ind < respuestasPOLL1_1[questionSelected - 1].length) {
                if (letter == 'W') {
                  gano = true;
                }
                searchFor(letter);
                letter = respuestasPOLL1_1[questionSelected - 1][ind];
              }
              else {
                ind = 0;
                gameStep = 4;
                inGame = false;
                cuestionPoll++;
                passScreen();
              }
            }
          }

        }
      }
    } else {
      alert("Motion-based background movement is disabled.");
    }
  }
}

async function preloadImages(imageURLs) {
  imageURLs.forEach((url) => {
    const img = new Image();
    img.src = "./img/" + url;
    images.push(img);
  });
}

window.onload = () => {
  preloadImages([
    "ouija-01.png",
    "a.png",
    "b.png",
    "c.png",
    "d.png",
    "e.png",
    "f.png",
    "g.png",
    "h.png",
    "i.png",
    "j.png",
    "k.png",
    "l.png",
    "m.png",
    "n.png",
    "o.png",
    "p.png",
    "r.png",
    "s.png",
    "t.png",
    "u.png",
    "v.png",
    "w.png",
    "si.png",
    "no.png",
    "tag2.png",
    "tag3.png",
    "fondo.png",
    "fondo2.png"
  ])
}


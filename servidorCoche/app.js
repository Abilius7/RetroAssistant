var five = require("johnny-five");
board = new five.Board();

var express = require("express");
var app = express();

var io = require("socket.io")(app.listen(8081));

app.use(express.static(__dirname + "/app"));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

let intervalo = 1000;

board.on("ready", function () {
  let contadorVueltas = 0;

  let velocimetro = new five.Sensor({
    pin: 4,
    freq: 0.0000001,
    type: "digital",
  });

  velocimetro.on("change", () => {
    if (velocimetro.value == 1) {
      contadorVueltas++;
    }
  });

  let distancia1 = 0;
  let distancia2 = 0;
  let combustible = 0;

  const proximity1 = new five.Proximity({
    controller: "HCSR04",
    pin: 2,
  });

  proximity1.on("change", () => {
    const { centimeters, inches } = proximity1;
    distancia1 = centimeters;
    let distanciaMedia = (distancia1 + distancia2) / 2;
    combustible = porcentajeCombustible(distancia1, distancia2);
  });
  const proximity2 = new five.Proximity({
    controller: "HCSR04",
    pin: 3,
  });
  proximity2.on("change", () => {
    const { centimeters, inches } = proximity2;
    distancia2 = centimeters;
    let distanciaMedia = (distancia1 + distancia2) / 2;
    combustible = porcentajeCombustible(distancia1, distancia2);
  });
  let caudalimetro = new five.Sensor({
    pin: 5,
    freq: 0.0000001,
    type: "digital",
  });

  let revolucionesTotales = 0;
  let revolucionesSegundo = 0;
  caudalimetro.on("change", () => {
    if (caudalimetro.value == 1) {
      revolucionesTotales++;
      revolucionesSegundo++;
    }
  });

  app.get("/datos", (req, res) => {
    setTimeout(() => {
      let velocidad = obtenerVelocidad(contadorVueltas);
      let litrosSegundo = obtenerLitrosSegundo(revolucionesSegundo);
      contadorVueltas = 0;
      revolucionesSegundo = 0;
      res.json({
        'velocidad': velocidad,
        'porcentajeCombustible': combustible,
        'litrosSegundo': litrosSegundo,
      });
    }, intervalo);
  });
});

function obtenerLitrosSegundo(revolucionesSegundo) {
  if (revolucionesSegundo != 0) {
    let litrosHora =revolucionesSegundo * 7.2727272727272727272727273 +3.63636363636363636363636363636363;
      let litrosSegundo = litrosHora / 3600;
      console.log(litrosSegundo+"Litros Segundo");
      console.log(revolucionesSegundo+"Revoluciones");
      return litrosSegundo;

  }else{
      return 0;
  }

}

function porcentajeCombustible(distancia1, distancia2) {
  //La capacidad del vehiculo es 30L y su profundidad 30cm
  let alturaDeposito = 30;
  let porcentaje =0;
  if (distancia1 <= alturaDeposito && distancia2 <= alturaDeposito) {
    if (distancia1 >= 2 && distancia2 >= 2) {
      mediaDistancia = (distancia1 + distancia2) / 2;

       porcentaje = (-100 / alturaDeposito) * mediaDistancia + 100;

    }
  }
  return porcentaje;
}

function obtenerVelocidad(contadorVueltas) {
  let diametroRueda = 69.6; //En cm
  let distanciaPorPulso = (2 * Math.PI * (diametroRueda / 2)) / 100 / 4; //En metros

  let distanciaM = contadorVueltas * distanciaPorPulso; //Distancia en m/s
  let ditanciaKM = distanciaM / 1000; //Distancia en km/s
  let velocidad = ditanciaKM * 3600; //En km/h

  return velocidad;
}

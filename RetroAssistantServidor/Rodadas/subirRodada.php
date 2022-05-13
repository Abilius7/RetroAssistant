<?php

$conexion = new mysqli("localhost", "Usuario", "2DAW", "RetroAssistant");
$respuesta;
if ($conexion->connect_errno) {
    $respuesta= ["Error"=>"Error de conexion"];
} else {

    $objDatos = json_decode(file_get_contents("php://input"));

    $idUsuario =$objDatos->idUsuario;
    $fechaHora = $objDatos->fechaHora;
    $consumoMedio = $objDatos->consumoMedio;
    $velocidadMedia= $objDatos->velocidadMedia;
    $distancia= $objDatos->distancia;
    $duracion= $objDatos->duracion;

    $inserccion = "INSERT INTO `rodadas`(`IdUsuario`, `FechaHora`, `Consumo`, `Velocidad`, `Duracion`, `Distancia`) VALUES ('$idUsuario','$fechaHora','$consumoMedio','$velocidadMedia','$duracion','$distancia')";
    $resultado=$conexion->query($inserccion);

}

print json_encode($resultado);

?>
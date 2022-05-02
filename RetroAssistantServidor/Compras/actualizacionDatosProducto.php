<?php

$conexion = new mysqli("localhost", "Usuario", "2DAW", "RetroAssistant");
$respuesta;
if ($conexion->connect_errno) {
    $respuesta= ["Error"=>"Error de conexion"];
} else {

    $objDatos = json_decode(file_get_contents("php://input"));

    $idProducto =$objDatos->idProducto;
    $nombre = $objDatos->nombre;
    $precio = $objDatos->precio;
    $imagen= $objDatos->imagen;
    $descripcion= $objDatos->descripcion;

    $inserccion = "UPDATE productos SET nombre='$nombre',descripcion='$descripcion',precio='$precio',imagen='$imagen' WHERE idProducto = '$idProducto'";
    $resultado=$conexion->query($inserccion);

}

print json_encode($resultado);
?>
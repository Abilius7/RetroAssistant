<?php
ini_set('display_errors', 1);

ini_set('display_startup_errors', 1);

error_reporting(E_ALL);

$conexion = new mysqli("localhost", "Usuario", "2DAW", "RetroAssistant");
$respuesta=true;
if ($conexion->connect_errno) {
    $respuesta= ["Error"=>"Error de conexion"];
} else {
    $objDatos = json_decode(file_get_contents("php://input"));
    
    $id = $objDatos->idProducto;
    $nombre = $objDatos->objeto;

    $respuesta=$conexion->query("INSERT INTO paquete VALUES ('$id','$nombre')");
    
}
print json_encode($respuesta);

?>
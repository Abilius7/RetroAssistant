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
    
    $objeto = $objDatos->objeto;
    $id = $objDatos->idProducto;

    $respuesta=$conexion->query("DELETE FROM paquete WHERE producto = '$id' AND objeto='$objeto'");
    
}
print json_encode($respuesta);

?>
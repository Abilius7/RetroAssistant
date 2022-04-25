<?php
$conexion = new mysqli("localhost", "Usuario", "2DAW", "RetroAssistant");
$respuesta;
if ($conexion->connect_errno) {
    $respuesta= ["Error"=>"Error de conexion"];
} else {
    $objDatos = json_decode(file_get_contents("php://input"));
    $id = $objDatos->id;
    $respuesta=$conexion->query("DELETE FROM productos WHERE id = '$id'");
    
}
print json_encode($respuesta);

?>
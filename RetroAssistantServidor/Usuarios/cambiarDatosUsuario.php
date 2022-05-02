<?php

$conexion = new mysqli("localhost", "Usuario", "2DAW", "RetroAssistant");
$resultado;
if ($conexion->connect_errno) {
    $resultado= ["Error"=>"Error de conexion"];
} else {

    $objDatos = json_decode(file_get_contents("php://input"));

    $id =$objDatos->id;
    $nombre = $objDatos->nombre;
    $tipoUsuario = $objDatos->tipoUsuario;
    $email= $objDatos->email;

    $inserccion = "UPDATE usuarios SET Usuario='$nombre',TipoUsuario='$tipoUsuario',Email='$email' WHERE id = '$id'";
    $resultado=$conexion->query($inserccion);

}

print json_encode($resultado);
?>
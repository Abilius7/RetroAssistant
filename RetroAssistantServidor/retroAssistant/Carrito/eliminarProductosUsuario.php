<?php
$conexion = new mysqli("localhost", "Usuario", "2DAW", "RetroAssistant");
$respuesta;
if ($conexion->connect_errno) {
    $respuesta= ["Error"=>"Error en la conexion"];
} else {
    $objDatos = json_decode(file_get_contents("php://input"));
    $idUsuario = $objDatos->id;

    $resultado=$conexion->query("DELETE FROM carritos WHERE idUsuario= '$idUsuario'");
    if ($resultado){
        
        $respuesta= ["Exito"=>"Todo bien"];
    }else{
        $respuesta= ["Error"=>"Error en la inserccion"];
    }
}

echo json_encode($respuesta);
?>
<?php

$conexion = new mysqli("localhost", "Usuario", "2DAW", "RetroAssistant");
if ($conexion->connect_errno) {
    print "Error de conexion";
} else {
    $productos = array();
    $objDatos = json_decode(file_get_contents("php://input"));
    $idUsuario = 23;//$objDatos->id;
    $resultado = $conexion->query("SELECT * FROM carritos WHERE idUsuario = $idUsuario;");
    $contador = 0;

    while ($producto = $resultado->fetch_array(MYSQLI_ASSOC)){
        $productos[$contador++]=$producto;
    }

    echo json_encode($productos);
}

?>
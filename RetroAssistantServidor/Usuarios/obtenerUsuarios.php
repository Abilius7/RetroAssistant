<?php

ini_set('display_errors', 1);

ini_set('display_startup_errors', 1);

$conexion = new mysqli("localhost", "Usuario", "2DAW", "RetroAssistant");
if ($conexion->connect_errno) {
    print "Error de conexion";
} else {
    $usuarios = array();
    $resultado = $conexion->query("SELECT id,Usuario,TipoUsuario,Email  FROM usuarios");
    $contador = 0;

    while ($producto = $resultado->fetch_array(MYSQLI_ASSOC)){
        $usuarios[$contador++]=$producto;
    }

    echo json_encode($usuarios);
}

?>
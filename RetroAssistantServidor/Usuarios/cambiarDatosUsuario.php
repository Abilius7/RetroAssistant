<?php

ini_set('display_startup_errors', 1);
ini_set('display_errors', 1);

$conexion = new mysqli("localhost", "Usuario", "2DAW", "RetroAssistant");
$resultado;
if ($conexion->connect_errno) {
    $resultado = ["Error" => "Error de conexion"];
} else {

    $objDatos = json_decode(file_get_contents("php://input"));

    $id = $objDatos->id;
    $nombre = $objDatos->nombre;
    $tipoUsuario = $objDatos->tipoUsuario;
    $email = $objDatos->email;
    

    $usuarios = $conexion->query("SELECT * FROM usuarios WHERE Usuario = '$nombre' && id <> '$id'");

    if ($usuario = $usuarios->fetch_array(MYSQLI_NUM)) {
        $exito =1; //El usuario ya existe
    } else {

        $usuarios = $conexion->query("SELECT * FROM usuarios WHERE Email = '$email' && id <> '$id'");

        if ($usuario = $usuarios->fetch_array(MYSQLI_NUM)) {
            $exito = 2; //El usuario ya existe
        } else {

            $inserccion = "UPDATE usuarios SET Usuario='$nombre',TipoUsuario='$tipoUsuario',Email='$email' WHERE id = '$id'";
            $consulta = $conexion->query($inserccion);
            if ($consulta){
                $exito = 0;
            }
        }
    }
}

print json_encode($exito);

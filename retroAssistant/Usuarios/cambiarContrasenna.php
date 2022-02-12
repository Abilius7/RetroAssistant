<?php
$conexion = new mysqli("localhost", "Usuario", "2DAW", "RetroAssistant");
$exito;
if ($conexion->connect_errno) {
    $exito = 0; //Error de conexion 
} else {
    $objDatos = json_decode(file_get_contents("php://input"));
    $nombreUsuario = $objDatos->nombreUsuario;
    $contrasenna = md5($objDatos->contrasenna);
    $contrasennaNueva = md5($objDatos->contrasennaNueva);

    $usuarios = $conexion->query("SELECT * FROM usuarios WHERE Usuario = '$nombreUsuario'");


    if ($usuario = $usuarios->fetch_array(MYSQLI_NUM)) {


        if ($usuario[2] == $contrasenna) {

            $conexion->query("UPDATE usuarios SET Contrasenna='$contrasennaNueva' WHERE Usuario='$nombreUsuario'");

            $exito = 3; //Exito
        } else {
            $exito = 2; //La contrasenna no coincide
        }
    } else {
        $exito = 1; //El usuario no existe
    }
}

echo $exito;
//84cb470849c58753662cb21fbb427ac2 

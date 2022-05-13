<?php
$conexion = new mysqli("localhost", "Usuario", "2DAW", "RetroAssistant");
$exito;
if ($conexion->connect_errno) {
    $exito = 0; //Error de conexion 
} else {
    $objDatos = json_decode(file_get_contents("php://input"));
    $nombreUsuario = $objDatos->usuario;
    $contrasenna = md5($objDatos->contrasenna);
    $email = $objDatos->email;
    $tipoUsuario = $objDatos->tipo;

    $usuarios = $conexion->query("SELECT * FROM usuarios WHERE Usuario = '$nombreUsuario'");


    if ($usuario = $usuarios->fetch_array(MYSQLI_NUM)) {
        $exito = 1; //El usuario ya existe
    } else {

        $usuarios = $conexion->query("SELECT * FROM usuarios WHERE Email = '$email'");

        if ($usuario = $usuarios->fetch_array(MYSQLI_NUM)) {
            $exito = 4; //El usuario ya existe
        } else {

            $conexion->query("INSERT INTO `usuarios`( `Usuario`, `Contrasenna`,`Email`,`TipoUsuario`) VALUES ('$nombreUsuario','$contrasenna','$email','$tipoUsuario')");

            if ($conexion->errno) {
                $exito = 2; //Error en la consulta
            } else {
                $exito = 3; //Todo correcto
            }
        }
    }
}

echo $exito;

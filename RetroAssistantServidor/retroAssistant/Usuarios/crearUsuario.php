<?php
$conexion = new mysqli("localhost", "Usuario", "2DAW", "RetroAssistant");
$exito;
if ($conexion->connect_errno) {
    $exito= 0;//Error de conexion 
} else {
    $objDatos = json_decode(file_get_contents("php://input"));
    $nombreUsuario = $objDatos->usuario;
    $contrasenna = md5($objDatos->contrasenna);

    $usuarios = $conexion->query("SELECT * FROM usuarios WHERE Usuario = '$nombreUsuario'");


    if ($usuario = $usuarios->fetch_array(MYSQLI_NUM)) {
        $exito=1;//El usuario ya existe
    } else {
        $conexion->query("INSERT INTO `usuarios`( `Usuario`, `Contrasenna`) VALUES ('$nombreUsuario','$contrasenna')");

        if ($conexion->errno) {
            $exito=2;//Error en la consulta
        }else{
            $exito=3;//Todo correcto
        }

    }
}

echo $exito;


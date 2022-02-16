<?php

$conexion = new mysqli("localhost", "Usuario", "2DAW", "RetroAssistant");
$respuesta;
if ($conexion->connect_errno) {
    $respuesta= ["Error"=>"Error de conexion"];
} else {

    $objDatos = json_decode(file_get_contents("php://input"));

    $idUsuario = $objDatos->usuario;
    $producto = $objDatos->producto;

    $consulta = "INSERT INTO carritos VALUES($idUsuario,'$producto')";

    $resultado=$conexion->query($consulta);

    if ($resultado){
        
        $respuesta= ["Exito"=>"Todo bien"];
    }else{
        $respuesta= ["Error"=>"Error en la inserccion"];
    }
    

}

print json_encode($respuesta);

/*
    $idUsuario = 1;//$_POST['usuario'];
    $producto = "Basico";//$_POST['producto'];
    $precio = 70;//$_POST['precio'];
*/

?>
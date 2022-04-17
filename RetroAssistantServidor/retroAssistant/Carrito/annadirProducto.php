<?php
ini_set('display_errors', 1);

ini_set('display_startup_errors', 1);

error_reporting(E_ALL);
$conexion = new mysqli("localhost", "Usuario", "2DAW", "RetroAssistant");
$respuesta;
if ($conexion->connect_errno) {
    $respuesta= ["Error"=>"Error de conexion"];
} else {
    
    $objDatos = json_decode(file_get_contents("php://input"));

    $idUsuario = $objDatos->usuario;
    $producto = $objDatos->producto;
    $cantidad = $objDatos->cantidad;


    $resultado = $conexion->query("SELECT * FROM carritos WHERE idUsuario='$idUsuario' AND producto='$producto'"); 

    if($elemento=$resultado->fetch_array(MYSQLI_ASSOC)){
        $cantidadTotal=  $elemento['cantidad']+$cantidad;
        $resultado = $conexion->query("UPDATE carritos SET cantidad=$cantidadTotal WHERE idUsuario='$idUsuario' AND producto='$producto'");
    }else{
        $consulta = "INSERT INTO carritos VALUES($idUsuario,'$producto','$cantidad')";
        $resultado=$conexion->query($consulta);
    }


    

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
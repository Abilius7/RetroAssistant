<?php
$conexion = new mysqli("localhost", "Usuario", "2DAW", "RetroAssistant");
$respuesta;
if ($conexion->connect_errno) {
    $respuesta= ["Error"=>"Error en la conexion"];
} else {
   $objDatos = json_decode(file_get_contents("php://input"));
    $idUsuario = $objDatos->id;
    $producto = $objDatos->producto;
    $numero = $objDatos->numero;

    $consulta = $conexion->query("SELECT * FROM carritos WHERE idUsuario= '$idUsuario' AND producto='$producto'");
    if ($productoObtenido = $consulta->fetch_array(MYSQLI_ASSOC)){
        if ($productoObtenido['cantidad']==$numero){
            $resultado=$conexion->query("DELETE FROM carritos WHERE idUsuario= '$idUsuario' AND producto='$producto' ");
        }else{
            $cantidadFinal = $productoObtenido['cantidad']-$numero;
            $resultado = $conexion->query("UPDATE carritos SET cantidad='$cantidadFinal' WHERE idUsuario= '$idUsuario' AND producto='$producto'");
        }
    }
    
    if ($resultado){
        
        $respuesta= ["Exito"=>"Todo bien"];
    }else{
        $respuesta= ["Error"=>"Error en la inserccion"];
    }
}

echo json_encode($respuesta);
?>
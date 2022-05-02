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
    
    $productos = $conexion->query("SELECT idProducto FROM productos");
    $idMayor = 0;
    $idsProducto = [];
    while($producto = $productos->fetch_array(MYSQLI_ASSOC)){
        $idsProducto[] = $producto['idProducto'];
    }

    sort($idsProducto);
    $idMayor=$idsProducto[count($idsProducto)-1];
    $nombre = $objDatos->nombre;
    $precio = $objDatos->precio;
    $imagen= $objDatos->imagen;
    $descripcion= $objDatos->descripcion;
    $arrayObjetos = $objDatos->arrayObjetos;
    $idProducto= $idMayor+1;
    
    $inserccion = "INSERT INTO `productos`(`nombre`, `descripcion`, `precio`, `imagen`,`idProducto`) VALUES ('$nombre','$descripcion','$precio','$imagen','$idProducto')";
    $resultado=$conexion->query($inserccion);

    for ($i=0;$i<count($arrayObjetos);$i++){
        $objeto = $arrayObjetos[$i];

        $inserccion = "INSERT INTO `paquete`(`producto`, `objeto`) VALUES ('$idProducto','$objeto')";
        $conexion->query($inserccion);
    }

}

print json_encode($resultado);
?>
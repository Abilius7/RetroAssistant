<?php
ini_set('display_errors', 1);

ini_set('display_startup_errors', 1);

error_reporting(E_ALL);
$conexion = new mysqli("localhost","Usuario","2DAW","RetroAssistant");
$productos=[];
if ($conexion->connect_errno){
    print $conexion->conect_errno;
}else{
    $objDatos = json_decode(file_get_contents("php://input"));
    $idUsuario = $objDatos->idUsuario;
    $consultaPedidos = $conexion->query("SELECT idPedido FROM pedido WHERE idUsuario='$idUsuario'");
    while ($pedido = $consultaPedidos->fetch_array(MYSQLI_ASSOC)){
        $idPedido = $pedido['idPedido'];
        $consultaDesglose = $conexion->query("SELECT producto FROM desglose WHERE idPedido='$idPedido'");
        while($producto = $consultaDesglose->fetch_array(MYSQLI_ASSOC)){
            if (!in_array($producto['producto'],$productos)){
                $productos[count($productos)]=$producto['producto'];
            }
        }
    }
}

echo json_encode($productos);

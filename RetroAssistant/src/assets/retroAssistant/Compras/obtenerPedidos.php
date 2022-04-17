<?php
ini_set('display_errors', 1);

ini_set('display_startup_errors', 1);

error_reporting(E_ALL);
    $conexion = new mysqli("localhost","Usuario","2DAW","RetroAssistant");
    if ($conexion->connect_errno){
        print $conexion->connect_errno;
    }else{
        $pedidos = [];
        $objDatos = json_decode(file_get_contents("php://input"));
        $idUsuario=$objDatos->idUsuario;
        $queryPedidos=$conexion->query("SELECT * FROM pedido WHERE idUsuario =$idUsuario ORDER BY Fecha DESC");

        while ($pedido = $queryPedidos->fetch_array(MYSQLI_ASSOC)){
            $idPedido = $pedido['idPedido'];
            $fechaPedido = $pedido['fecha'];
            
            $queryDesglose = $conexion->query("SELECT producto,cantidad,precio FROM desglose WHERE idPedido=$idPedido");
            $productosDesglose = [];

            while($producto = $queryDesglose->fetch_array(MYSQLI_ASSOC)){
                $productosDesglose[count($productosDesglose)]=$producto;
            }

            $pedido = ['idPedido'=>$idPedido,'fecha'=>$fechaPedido,'desglose'=>$productosDesglose];

            $pedidos[count($pedidos)]=$pedido;

        }

        echo json_encode($pedidos);
    }
?>
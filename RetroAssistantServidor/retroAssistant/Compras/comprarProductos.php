<?php

$conexion = new mysqli("localhost", "Usuario", "2DAW", "RetroAssistant");
$respuesta;
if ($conexion->connect_errno) {
    $respuesta= ["Error"=>"Error de conexion"];
} else {

    $objDatos = json_decode(file_get_contents("php://input"));

    $idUsuario =$objDatos->id;
    $productos = $objDatos->productos;
    $fecha = date('Y-m-d H:i:s');
    $inserccion = "INSERT INTO pedido(`fecha`, `idUsuario`) VALUES('$fecha','$idUsuario')";
    $resultado=$conexion->query($inserccion);

    $consultaId= $conexion->query("SELECT Max(idPedido) FROM pedido");

    if ($idPedidoObjeto = $consultaId->fetch_array(MYSQLI_ASSOC)){
        $idPedido = $idPedidoObjeto['Max(idPedido)'];

        for ($i=0;$i<count($productos);$i++){
            $nombreProducto = $productos[$i]->producto;
            $cantidad =$productos[$i]->cantidad;
            $precioUnitarioString = $productos[$i]->precioUnitario;
            $precioUnitario= explode(" ",$precioUnitarioString)[0];
            $inserccionProducto = "INSERT INTO desglose VALUES('$idPedido','$nombreProducto','$cantidad','$precioUnitario')";
            $resultado =$conexion->query($inserccionProducto);
        }
    }

    
    

}

print json_encode($resultado);

/*
    $idUsuario = 1;//$_POST['usuario'];
    $producto = "Basico";//$_POST['producto'];
    $precio = 70;//$_POST['precio'];
*/

?>
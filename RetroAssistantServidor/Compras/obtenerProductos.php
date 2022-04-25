<?php
ini_set('display_errors', 1);

ini_set('display_startup_errors', 1);

error_reporting(E_ALL);
$conexion = new mysqli("localhost","Usuario","2DAW","RetroAssistant");
$productos=[];
if ($conexion->connect_errno){
    print $conexion->conect_errno;
}else{
    $consultaProductos = $conexion->query("SELECT * FROM productos");
    while ($producto = $consultaProductos->fetch_array(MYSQLI_ASSOC)){
       
       $idProducto=$producto['idProducto'];
       $consultaPaquete = $conexion->query("SELECT * FROM paquete WHERE producto=$idProducto");
       $paquete = [];

       while ($objeto = $consultaPaquete->fetch_array(MYSQLI_ASSOC)){
           $paquete[count($paquete)]=$objeto;
       }
       $producto['paquete']=$paquete;
       $productos[count($productos)]=$producto;
    }
}

echo json_encode(['productos'=>$productos]);

?>
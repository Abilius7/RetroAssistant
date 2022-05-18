<?php
ini_set('display_errors', 1);

ini_set('display_startup_errors', 1);

error_reporting(E_ALL);
    $conexion = new mysqli("localhost","Usuario","2DAW","RetroAssistant");
    if ($conexion->connect_errno){
        print $conexion->connect_errno;
    }else{
        $datos = [];

        $objDatos = json_decode(file_get_contents("php://input"));
        $idUsuario=$objDatos->idUsuario;
        $opcion = $objDatos->opcion;

        $queryMaximo = $conexion->query("SELECT MAX($opcion) FROM rodadas WHERE idUsuario=$idUsuario");

        if ($maximoResult = $queryMaximo->fetch_array(MYSQLI_ASSOC)){
            $maximo = $maximoResult['MAX(Duracion)'];
        }

        $queryVelocidadConsumo=$conexion->query("SELECT $opcion, Consumo FROM rodadas WHERE idUsuario=$idUsuario ORDER BY Velocidad");

        while ($rodada = $queryVelocidadConsumo->fetch_array(MYSQLI_ASSOC)){

            for ($i=0;$i<$maximo;$i=$i+10){
                if ($rodada[$opcion]>$i && $rodada[$opcion]<=$i+9){
                    if (empty($datos[$i])){
                        $datos[$i]=[];
                    }
                    $datos[$i][count($datos[$i])]=$rodada['Consumo'];
                }
            }

        }

        $intervalos = [] ;
        $consumos = [];
        $contador=0;
        foreach ($datos as $clave => $intervalo){
            $sumatorio = 0;
            for ($i = 0 ; $i<count($intervalo);$i++){
                $sumatorio = $sumatorio + $intervalo[$i];
            }
            $consumos[$contador] = $sumatorio/count($intervalo); 
            $intervalos[$contador++]= round($clave/60,0)." min";
        }

        echo json_encode(['consumos'=>$consumos,'intervalos'=>$intervalos]);
    }
?>
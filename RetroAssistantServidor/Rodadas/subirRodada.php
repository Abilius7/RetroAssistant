<?php

$conexion = new mysqli("localhost", "Usuario", "2DAW", "RetroAssistant");
$respuesta;

error_reporting(E_ALL);
ini_set('display_errors', '1');
if ($conexion->connect_errno) {
    $respuesta = ["Error" => "Error de conexion"];
} else {

    $objDatos = json_decode(file_get_contents("php://input"));
    $idUsuario = $objDatos->idUsuario;
    $fechaHora =  date('Y-m-d H:i:s');;
    $consumoMedio = $objDatos->consumoMedio;
    $velocidadMedia = $objDatos->velocidadMedia;
    $distancia = $objDatos->distancia;
    $duracion = $objDatos->duracion;

    $ultimaRodada = $conexion->query("SELECT * FROM rodadas where idUsuario=$idUsuario AND FechaHora= (SELECT MAX(FechaHora) FROM rodadas WHERE idUsuario=$idUsuario); ");

    if ($datosUltimaRodada = $ultimaRodada->fetch_array()) {
        $fechaUltimaRodada = strtotime($datosUltimaRodada['FechaHora']);
        if (!hanPasadoMasDe3Horas($fechaUltimaRodada)) {
            $fecahUltimaRodadaDelete = $datosUltimaRodada['FechaHora'];
            $inserccion = "DELETE FROM rodadas WHERE idUsuario = $idUsuario AND FechaHora ='$fecahUltimaRodadaDelete'";
            $resultado = $conexion->query($inserccion);
        }

        $inserccion = "INSERT INTO `rodadas`(`IdUsuario`, `FechaHora`, `Consumo`, `Velocidad`, `Duracion`, `Distancia`) VALUES ('$idUsuario','$fechaHora','$consumoMedio','$velocidadMedia','$duracion','$distancia')";
        $resultado = $conexion->query($inserccion);
    }
}

print json_encode($resultado);


function hanPasadoMasDe3Horas($enBD){
    $annoEnBD = date("Y", $enBD);
    $mesEnBD = date("n", $enBD);
    $diaEnBD = date("d", $enBD);
    $horaenBD = date("H", $enBD);
    $minutoenBD = date("i", $enBD);
    $horaEnSegundosBD = $horaenBD * 3600 + $minutoenBD * 60;

    $annoActual = date("Y");
    $mesActual = date("n");
    $diaActual = date("d");
    $horaActual = date("H");
    $minutoActual = date("i");
    $horaEnSegundosActual = $horaActual * 3600 + $minutoActual * 60;

    $hanPasadoMasDe3Horas = false;

    if ($annoEnBD == $annoActual && $mesEnBD == $mesActual && $diaEnBD == $diaActual ) {
        if ($horaEnSegundosActual - $horaEnSegundosBD > 3 * 3600) {
            $hanPasadoMasDe3Horas = true;
        }
    }else{
        $hanPasadoMasDe3Horas = true;
    }
    return $hanPasadoMasDe3Horas;
}

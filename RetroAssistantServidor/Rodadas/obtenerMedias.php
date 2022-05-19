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

        $queryVelocidadConsumo=$conexion->query("SELECT Velocidad, Consumo, Duracion, Distancia, FechaHora FROM rodadas WHERE idUsuario=$idUsuario ");

        $contadorVelocidad = 0;
        $contadorConsumo = 0;
        $contadorDuracion = 0;
        $contadorDistancia = 0;
        $contadorHora = 0 ;
        $contadorgeneral = 0;


        while ($rodada = $queryVelocidadConsumo->fetch_array(MYSQLI_ASSOC)){
            $contadorgeneral++;
            $contadorVelocidad = $contadorVelocidad + $rodada['Velocidad'];
            $contadorConsumo = $contadorConsumo + $rodada['Consumo'];
            $contadorDuracion = $contadorDuracion + $rodada['Duracion'];
            $contadorDistancia = $contadorDistancia + $rodada['Distancia'];
            $horaEnSegundos = date("G",strtotime($rodada['FechaHora']))*3600;
            $MinutosEnSegundos = date("i",strtotime($rodada['FechaHora']))*60;
            $MinutosEnSegundos = date("s",strtotime($rodada['FechaHora']));
            $horaFinal = $horaEnSegundos+$MinutosEnSegundos+$MinutosEnSegundos;
            $contadorHora=$contadorHora+ $horaFinal;
        }

        $horaFormateada = $contadorHora/$contadorgeneral;
        $horas = truncateFloat($horaFormateada/3600,0);
        $a = truncateFloat($horaFormateada/3600,0);
        $b = $horaFormateada/3600-$a;
        $minutos = truncateFloat($b*60,0);
        $horaConFormato = $horas.":".$minutos;

        echo json_encode(['Velocidad'=>$contadorVelocidad/$contadorgeneral,
        'Consumo'=>$contadorConsumo/$contadorgeneral,
        'Duracion'=>round($contadorDuracion/$contadorgeneral/3600,2),
        'Distancia'=>$contadorDistancia/$contadorgeneral,
        'Hora'=>$horaConFormato]);
    }

    function truncateFloat($number, $digitos){
    $raiz = 10;
    $multiplicador = pow ($raiz,$digitos);
    $resultado = ((int)($number * $multiplicador)) / $multiplicador;
    return number_format($resultado, $digitos);

    }
?>
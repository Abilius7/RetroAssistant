<?php

$conexion = new mysqli("localhost", "Usuario", "2DAW", "RetroAssistant");
$objetoUsuario=array();
if ($conexion->connect_errno) {
    $objetoUsuario= ['error'=>"Error de conexion"];
} else {
    
    $objDatos = json_decode(file_get_contents("php://input"));

    $nombreUsuario = $objDatos->usuario;
    $contrasenna = md5($objDatos->contrasenna);

    
    $resultado = $conexion->query("SELECT * FROM usuarios WHERE  Usuario='$nombreUsuario'");
    if ($resultado->num_rows > 0) {

        while ($usuario = $resultado->fetch_array(MYSQLI_ASSOC)) {

            if ($usuario['Contrasenna']==$contrasenna){
                $objetoUsuario=array('usuario'=>$nombreUsuario,
                                    'id'=>$usuario['id'],'error'=>"");
    
            }else{
                $objetoUsuario=array('error'=>'La contrasenna no coincide');
            }
        }
    }else{
        $objetoUsuario=array('error'=>'El usuario no existe');
    }

    echo json_encode($objetoUsuario);
}
?>

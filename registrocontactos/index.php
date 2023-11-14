<?php 

    $servidor = "localhost";
    $usuario = "root";
    $clave = "";
    $bd = "registrocontactos";

    $conexion = mysqli_connect($servidor, $usuario, $clave, $bd);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=fo, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="#" name="registrocontactos" method="POST">
        <input type="text" name="Nombre" placeholder="nombre" />
        <input type="text" name="Telefono" placeholder="telefono" />
        <input type="email" name="Correo" placeholder="correo" />
        <input type="text" name="Comentarios" placeholder="comentarios" />

        <input type="submit" name="registro" value="Registro" />
    </form>

    <?php

        if (isset($_POST['registro'])) {
            $nombre = $_POST['Nombre'];
            $telefono = $_POST['Telefono'];
            $correo = $_POST['Correo'];
            $comentarios = $_POST['Comentarios'];

            $guardar = "INSERT INTO contactos VALUES ('$nombre', '$telefono', '$correo', '$comentarios', '')";

            $ejecutar = mysqli_query($conexion, $guardar);
        }

    ?>
</body>
</html>
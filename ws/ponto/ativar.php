<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idPonto = $data['idPonto'];
    $valor = $data['valor'];

    $sql = "UPDATE ponto SET ativo='$valor' WHERE id = '$idPonto'";

    if(mysqli_query($conexao, $sql)){
        print "true";
    } else {
        print "false";
    }
?>

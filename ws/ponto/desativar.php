<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idPonto = $data['idPonto'];

    $sql = "UPDATE ponto SET ativo='n' WHERE id = '$idPonto'";

    if(mysqli_query($conexao, $sql)){
        print "true";
    } else {
        print "false";
    }
?>

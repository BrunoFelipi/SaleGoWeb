<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idPonto = $data['idPonto'];
    $idCliente = $data['idCliente'];

    $sql = "UPDATE pontospegos SET ativo='n' WHERE idPonto = '$idPonto' AND idCliente='$idCliente'";

    if(mysqli_query($conexao, $sql)){
        print "true";
    } else {
        print "false";
    }
?>

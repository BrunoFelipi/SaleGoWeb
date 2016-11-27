<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idPonto = $data['idPonto'];
    $qtdClientes = $data['qtdClientes'];

    $sql = "UPDATE ponto SET qtdClientes='$qtdClientes' WHERE id= '$idPonto'";

    if(mysqli_query($conexao, $sql)){
        print "true";
    } else {
        print "false";
    }
?>

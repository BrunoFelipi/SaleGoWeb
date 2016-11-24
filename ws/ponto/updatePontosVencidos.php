<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idEmpresa = $data['idEmpresa'];

    $sql = "UPDATE ponto SET vencido='s' WHERE dataVencimento < NOW() AND idEmpresa = '$idEmpresa'";

    if(mysqli_query($conexao, $sql)){
        print "true";
    } else {
        print "false";
    }
?>

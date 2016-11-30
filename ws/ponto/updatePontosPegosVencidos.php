<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idEmpresa = $data['idEmpresa'];

    $sql = "UPDATE pontospegos SET ativo='n' WHERE dia > NOW() AND idEmpresa = '$idEmpresa'";

    if(mysqli_query($conexao, $sql)){
        print "true";
    } else {
        print "false";
    }
?>

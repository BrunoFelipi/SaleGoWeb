<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idEmpresa = $data['idEmpresa'];
   
    $sql = "DELETE FROM ponto WHERE dataValidade < NOW()";

    if(mysqli_query($conexao, $sql)){
        print "true";
    } else {
        print "false";
    }
?>
<?php
    include '../conexao.php';
    $idEmpresa = $_GET["idEmpresa"];
    $sql = "SELECT id,endereco,descricao,raioAlcance,valor,tipoDesconto FROM ponto where idEmpresa = '$idEmpresa'";
    $rs = mysqli_query($conexao, $sql);

    $json = array();
    while($arr = mysqli_fetch_assoc($rs)){
        $json[] = $arr;
    }
    echo(json_encode($json));
?>

<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idEmpresa = $data['idEmpresa'];
    $endereco = $data['endereco'];
    $latitude = $data['latitude'];
    $longitude = $data['longitude'];
    $descricao = $data['descricao'];
    $raioAlcance = $data['raioAlcance'];
    $valor = $data['valor'];
    $tipoDesconto = $data['tipoDesconto'];
    $qtdClientes = 0;
    $dataValidade = $data['dataValidade'];
    $ativo = 's';
    $vencido = 'n';

    $sql = "INSERT INTO ponto VALUES (0,'$idEmpresa','$endereco','$latitude','$longitude','$descricao','$raioAlcance','$valor','$tipoDesconto','$qtdClientes',STR_TO_DATE('$dataValidade','%d/%m/%Y'),'$ativo','$vencido')";

    if(mysqli_query($conexao, $sql)){
        print "true";
    } else {
        print "false";
    }
?>

<?php
include '../conexao.php';
$data = json_decode(file_get_contents('php://input'), true);

$idCliente = $data['idCliente'];

$sql = "SELECT P.id, P.endereco, P.latitude, P.longitude, P.descricao, P.raioAlcance, P.valor, P.tipoDesconto, P.dataVencimento, P.ativo, PP.id, PP.idPonto, PP.idEmpresa, PP.idCliente, PP.dia, PP.ativo  FROM pontospegos PP, ponto P where PP.idCliente='$idCliente' AND PP.idPonto = P.id AND PP.ativo='s' AND P.dataVencimento > NOW()";

$rs = mysqli_query($conexao, $sql);

$json = array();
while($arr = mysqli_fetch_assoc($rs)){
    $json[] = $arr;
}
echo(json_encode($json));

?>

<?php
include '../conexao.php';
$data = json_decode(file_get_contents('php://input'), true);

$idPonto = $data['idPonto'];
$idEmpresa = $data['idEmpresa'];

$sql = "SELECT PP.id, PP.idPonto, PP.idEmpresa, PP.idCliente, PP.dia, C.id, C.nome, C.cpf, C.email FROM pontospegos PP, cliente C where idPonto='$idPonto' AND idEmpresa='$idEmpresa' AND PP.idCliente = C.id group by C.id";

$rs = mysqli_query($conexao, $sql);

$json = array();
while($arr = mysqli_fetch_assoc($rs)){
    $json[] = $arr;
}
echo(json_encode($json));

?>

<?php
include '../conexao.php';
$data = json_decode(file_get_contents('php://input'), true);

$idEmpresa = $data['idEmpresa'];

$sql = "SELECT PP.idCliente, C.id, C.nome, C.cpf, C.email  FROM pontospegos PP, cliente C where idEmpresa='$idEmpresa' AND PP.idCliente=C.id group by PP.idCliente";

$rs = mysqli_query($conexao, $sql);

$json = array();
while($arr = mysqli_fetch_assoc($rs)){
    $json[] = $arr;
}
echo(json_encode($json));

?>

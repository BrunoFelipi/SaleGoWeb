<?php
include '../conexao.php';
$data = json_decode(file_get_contents('php://input'), true);

$idEmpresa = $data['idEmpresa'];

$sql = "SELECT id, idPonto, idEmpresa, idCliente FROM pontospegos where idEmpresa='$idEmpresa' group by idCliente";

$rs = mysqli_query($conexao, $sql);

$json = array();
while($arr = mysqli_fetch_assoc($rs)){
    $json[] = $arr;
}
echo(json_encode($json));

?>

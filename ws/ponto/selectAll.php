<?php
include '../conexao.php';
$data = json_decode(file_get_contents('php://input'), true);

$idEmpresa = $data['idEmpresa'];

$sql = "SELECT * FROM ponto where idEmpresa='$idEmpresa' AND vencido='n'";

$rs = mysqli_query($conexao, $sql);

$json = array();
while($arr = mysqli_fetch_assoc($rs)){
    $json[] = $arr;
}
echo(json_encode($json));

?>

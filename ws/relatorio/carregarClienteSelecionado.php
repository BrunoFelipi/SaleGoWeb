<?php
include '../conexao.php';
$data = json_decode(file_get_contents('php://input'), true);

$idCliente = $data['idCliente'];

$sql = "SELECT *  FROM cliente where id='$idCliente'";

$rs = mysqli_query($conexao, $sql);

$json = array();
while($arr = mysqli_fetch_assoc($rs)){
    $json[] = $arr;
}
echo(json_encode($json));

?>

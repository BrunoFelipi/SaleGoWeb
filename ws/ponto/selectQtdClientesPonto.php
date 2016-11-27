<?php
include '../conexao.php';
$data = json_decode(file_get_contents('php://input'), true);

$idPonto = $data['idPonto'];

$sql = "SELECT COUNT(idPonto) as qtdIdPonto FROM pontospegos where idPonto='$idPonto'";

$rs = mysqli_query($conexao, $sql);

$json = array();
while($arr = mysqli_fetch_assoc($rs)){
    $json[] = $arr;
}
echo(json_encode($json));

?>

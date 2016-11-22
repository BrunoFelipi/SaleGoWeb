<?php
include '../conexao.php';
$data = json_decode(file_get_contents('php://input'), true);

$idPonto = $data['idPonto'];

$sql = "SELECT * FROM ponto where id='$idPonto'";

$rs = mysqli_query($conexao, $sql);

$json = array();
while($arr = mysqli_fetch_assoc($rs)){
    $json[] = $arr;
}
echo(json_encode($json));

?>

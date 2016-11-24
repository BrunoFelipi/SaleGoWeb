<?php
include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $email = $data['email'];
    $senha = md5($data['senha']);

    $sql = "SELECT * FROM empresa where email = '$email' AND senha = '$senha' AND ativo = 's'";
    $rs = mysqli_query($conexao, $sql);

    if (mysqli_num_rows($rs) > 0) {
      echo "true";
    } else {
      echo "false";
    }
?>

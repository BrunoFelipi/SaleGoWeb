<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $email = $data['email'];
    $senha = md5($data['senha']);

    $sql = "UPDATE empresa SET senha='$senha' WHERE email='$email'";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>

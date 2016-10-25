<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $nome = $data['nome'];
    $email =$data['email'];
    $senha = md5($data['senha']);
    $token = md5($nome.''.$email);

    $sql = "INSERT INTO usuario VALUES (0,'$nome','$email','$senha','$token','s')";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>

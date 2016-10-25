<?php
    include '../conexao.php';
    $email = addslashes($_GET["email"]);
    $senha = md5($_GET["senha"]);
    $sql = "SELECT * FROM usuario where email = '$email' AND senha= '$senha'";
    $rs = mysqli_query($conexao, $sql);

    $json = array();
    while($arr = mysqli_fetch_assoc($rs)){
        $json[] = $arr;
    }
    echo(json_encode($json));
?>

<?php
    include '../conexao.php';
    $email = addslashes($_GET["email"]);
    $sql = "SELECT id,nome,cnpj,email,ativo FROM usuario where email = '$email'";
    $rs = mysqli_query($conexao, $sql);

    $json = array();
    while($arr = mysqli_fetch_assoc($rs)){
        $json[] = $arr;
    }
    echo(json_encode($json));
?>
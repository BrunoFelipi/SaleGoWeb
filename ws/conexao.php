<?php
    header("Content-Type: text/html; charset=UTF-8",true);
    $conexao = mysqli_connect('localhost','root','','salego');
    //$conexao = mysqli_connect('mysql.hostinger.com.br','u443540274_saleg','','u443540274_saleg');

    mysqli_query($conexao,"SET NAMES 'utf8'");
    mysqli_query($conexao,'SET character_set_connection=utf8');
    mysqli_query($conexao,'SET character_set_client=utf8');
    mysqli_query($conexao,'SET character_set_results=utf8');
?>

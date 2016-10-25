<?php
    require '../phpmailer/PHPMailerAutoload.php';

    $account="cakesmanager@gmail.com";
    $password="cucamanager";
    $to= addslashes($_GET["email"]);
    $from= $account;
    $from_name="Cake's";
    $token = addslashes($_GET["token"]);

    $subject = "Esqueceu sua senha?";

    $message = "<html>";
    $message .= "<head>";
    $message .= "</head>";
    $message .= "<body>";
    $message .= "<p>Esqueceu sua senha? Não tem problema.</p>";
    $message .= "<table cellspacing='0' cellpadding='0'>";
    $message .= "<tr>";
    $message .= "<td align='center' width='300' height='40' bgcolor='#505050' style='-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; color: #ffffff; display: block;'>";
    $message .= "<a href='http://pcbnu006300/Cakes/#/alterarSenha?token=$token' style='font-size:16px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; line-height:40px; width:100%; display:inline-block'>";
    $message .= "<span style='color: #FFFFFF'>Clique aqui para alterar sua senha</span>";
    $message .= "</a>";
    $message .= "</td>";
    $message .= "</tr>";
    $message .= "</table>";
    $message .= "</body>";
    $message .= "</html>";

    $mail = new PHPMailer(true);
    $mail->IsSMTP();
    $mail->SMTPDebug = 1;
    $mail->CharSet = 'UTF-8';
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth= true;
    $mail->Port = 587;
    $mail->Username= $account;
    $mail->Password= $password;
    $mail->SMTPSecure = 'tls';
    $mail->From = $from;
    $mail->FromName= $from_name;
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $message;
    $mailer->AddBCC($from, $from_name);
    $mail->addAddress($to);

    if(!$mail->send()){
        echo "Mailer Error: " . $mail->errorMessage();
    } else {
         echo "E-Mail has been sent";
    }
?>

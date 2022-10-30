<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';


require 'vendor/autoload.php';

$subject = $_POST("subject");
$mail = $_POST("email");
$content = $_POST("content");

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                     
    $mail->isSMTP();                                            
    $mail->Host       = 'smtp.example.com';                     
    $mail->SMTPAuth   = true;                                   
    $mail->Username   = 'user@example.com';                   
    $mail->Password   = 'secret';                           
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;          
    $mail->Port       = 465;                                  

    //Recipients
    $mail->setFrom('from@example.com', 'Mailer');
    $mail->addAddress('joe@example.net', 'Joe User');    
    $mail->addAddress('ellen@example.com');         
    $mail->addReplyTo('info@example.com', 'Information');
    $mail->addCC('cc@example.com');
    $mail->addBCC('bcc@example.com');

    //Attachments
    $mail->addAttachment('/var/tmp/file.tar.gz');       
    $mail->addAttachment('/tmp/image.jpg', 'new.jpg'); 
    //Content
    $mail->isHTML(true);                                
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>

<div class="contact-container" id="contact-container">
    <div class="contact">
        <form action="contact.php" method="post">
            <input type="text" name="" id="subject">
            <input type="email" name="email" id="email">
            <input type="text" name="content" id="content">
        </form>
    </div>
</div>
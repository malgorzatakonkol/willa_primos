<?php 
        require_once('class.phpmailer.php'); 
        require_once('class.smtp.php');  
        $to = 'kalafar.malgorzata@gmail.com'; 
        $name = $_POST['guestName']; 
        $email = $_POST['guesttEmail1']; 
        $phoneNumber = $_POST['guestPhone'];
        $subject = 'Nowa wiadomość od ' . $name . ' (' . $email . ')' . ' ('. $phoneNumber . ')'; 
        $messageTitle = $_POST['guestMessageTitle'];
        $message = $_POST['guestMessageContent']; 
        $headers = 'From: ' . $name . ' (' . $email . ')' . ' (' .$phoneNumber . ')'; 
        $headers .= 'Content-Type: text/html; charset=utf-8'; 
        mail($to, $subject, $messageTitle, $message, $headers); 
        echo '<h2>Dziękujemy za wysłanie wiadomości</h2>';         
?>
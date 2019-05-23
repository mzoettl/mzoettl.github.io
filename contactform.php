<?php

if(isset($_POST["submit"])) {
    $mailFrom = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $mailTo = "matthias.zoettl@gmx.at";
    $headers = "From: ".$mailFrom;
   

    mail($mailTo, $subject, $message, $headers);
    header("Location: index.php?mailsend");
}
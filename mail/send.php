<?php
require 'Mail.php';
require 'SaveMail.php';

$name = isset($_POST['name']) ? $_POST['name'] : "";
$phone = isset($_POST['phone']) ? $_POST['dial']." ".$_POST['phone'] : "";
$email =  isset($_POST['email']) ? $_POST['email'] : "";
$message = isset($_POST['message']) ? $_POST['message'] : "";
$newMail = new Mail($name, $email, $phone, $message);
$saveMail = new SaveMail($name, $email, $phone, $message,$newMail->GetDate());
echo json_encode($newMail->getMessage());
//echo json_encode([$_POST['name'],$_POST['phone'],$_POST['email'],$_POST['message']]);


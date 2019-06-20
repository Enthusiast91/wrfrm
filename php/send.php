<?php

$sendto   = "office@wrfrm.com"; // почта, на которую будет приходить письмо
$usertel = $_POST['telephone']; // сохраняем в переменную данные полученные из поля c телефонным номером
$usermail = $_POST['email']; // сохраняем в переменную данные полученные из поля c адресом электронной почты

// Формирование заголовка письма
if (isset($_POST['name_form1'])) {
    $username = $_POST['name_form1'];   // сохраняем в переменную данные полученные из поля c именем
    $subject  = "Заявка, Форма захвата 1";
} // elseif (isset($_POST['yes']))    echo 'Да';

$headers  = "From: info@wrfrm.com \r\n";
if (isset($_POST['email'])) {
    $headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
}
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Cообщение с сайта</h2>\r\n";
$msg .= "<p><strong>От кого:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Почта:</strong> ".$usermail."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
    echo "Должно было отправиться";
}

?>

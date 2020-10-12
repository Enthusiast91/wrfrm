<?php
$pathFile = file("path.log");
$lastDay = $pathFile[0];
$today = date("d.m.Y", mktime(date("H")+1, date("i"), date("s"), date("m"), date("d"), date("Y")));

$file = "logs/".$lastDay.".log";
if ($lastDay != $today) {
	$file = "logs/".$today.".log";
	$fp = fopen("path.log", 'w');
	fwrite($fp, $today);
	fclose($fp);
}

function getRealIpAddr() {
  if (!empty($_SERVER['HTTP_CLIENT_IP']))
  { $ip=$_SERVER['HTTP_CLIENT_IP']; }
  elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
  { $ip=$_SERVER['HTTP_X_FORWARDED_FOR']; }
  else { $ip=$_SERVER['REMOTE_ADDR']; }
  return $ip;
}

if (strstr($_SERVER['HTTP_USER_AGENT'], 'YandexBot')) {$bot='YandexBot';}
elseif (strstr($_SERVER['HTTP_USER_AGENT'], 'Googlebot')) {$bot='Googlebot';}
else { $bot=$_SERVER['HTTP_USER_AGENT']; }

$ip = getRealIpAddr();
$date = date("H:i:s d.m.Y", mktime(date("H")+1, date("i"), date("s"), date("m"), date("d"), date("Y")));
$lines = file($file);
$lines[] = $date."\t| ".$ip."\t| ".$bot."\r\n";
file_put_contents($file, $lines);
?>
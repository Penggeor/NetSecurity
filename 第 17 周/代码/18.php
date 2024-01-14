<?php
$servername = "175.178.126.31:3306"; //mysql的地址
$username = "root";
$password = "";
$dbname = "dvwa";
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    echo "连接成功\r";
} catch (PDOException $e) {
    echo $e->getMessage();
}

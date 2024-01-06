<?php
$a = true; // bool
$b = 1; // int
$c = 1.0; // float
$d = '1'; // string
$e = array(1); // array
$f = null; // null
$g = new stdClass(); // object
$h = fopen('1.php', 'r'); // resource

echo gettype($a), "\n"; // bool
echo is_int($b), "\n"; // 1
echo "String: $d\n"; // String: 1

echo var_dump((bool)-1);
echo var_dump((bool)0);



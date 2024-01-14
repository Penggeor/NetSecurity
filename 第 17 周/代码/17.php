<?php
$y = 10;

$fn1 = fn($x) => $x * $y;
// 等价于
$fn2 = function($x) use ($y) {
    return $x * $y;
};

echo $fn1(2); // 20
echo $fn2(4); // 40
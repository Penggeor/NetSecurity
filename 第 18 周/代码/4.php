<?php
function foo() {
  return [1, 2];
}

list($a, $b) = foo();
echo $a  . PHP_EOL; // 1
echo $b  . PHP_EOL; // 2
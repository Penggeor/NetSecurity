<?php
function bar($b = 1, $a) {
  echo $a + $b;
}

// Deprecated: Optional parameter $b declared before required parameter $a is implicitly treated as a required parameter
bar(1, 2); // 3

// function foo($a, $b = 1) {
//   echo $a + $b;
// }

// foo(1, 2); // 3

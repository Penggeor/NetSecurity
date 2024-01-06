<?php
// 写一个三层循环嵌套，使用 break 跳出最外层循环。
for ($i = 0; $i < 10; $i++) {
  echo "i = $i" . PHP_EOL;
  for ($j = 0; $j < 10; $j++) {
    echo "j = $j" . PHP_EOL;
    for ($k = 0; $k < 10; $k++) {
      echo "k = $k" . PHP_EOL;
      if ($k == 5) {
        break 3;
      }
    }
  }
}

// 写一个三层循环嵌套，使用 continue 跳转最外层循环。
for ($i = 0; $i < 10; $i++) {
  echo "i = $i" . PHP_EOL;
  for ($j = 0; $j < 10; $j++) {
    echo "j = $j" . PHP_EOL;
    for ($k = 0; $k < 10; $k++) {
      echo "k = $k" . PHP_EOL;
      if ($k == 5) {
        continue 3;
      }
    }
  }
}

// 通过 foreach 循环遍历一个数组
$names = ['Tom', 'Jerry', 'Spike', 'Tyke'];
foreach ($names as $name) {
  echo $name . PHP_EOL;
}

// 通过 for 循环遍历一个数组
for ($i = 0; $i < count($names); $i++) {
  echo $names[$i] . PHP_EOL;
}
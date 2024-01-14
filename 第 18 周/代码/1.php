<?php
function foo() {
  function bar() {
    echo "I don't exist until foo() is called.\n";
  }
}

// 还不能调用 bar() 函数，因为它还不存在
// !PHP Fatal error:  Uncaught Error: Call to undefined function bar() 
// bar();

foo();

// 现在可以安全调用函数 bar()
bar();
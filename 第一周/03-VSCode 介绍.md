## 介绍

VSCode 是一款轻量、开源的 IDE



## 常用快捷键

### 工作区

| MacOS                                            | Windows                                           | 用途                                             |
| ------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------ |
| <kbd>cmd</kbd> + <kbd>p</kbd>                    | <kbd>ctrl</kbd> + <kbd>p</kbd>                    | 调出文件搜索框                                   |
| <kbd>cmd</kbd> + <kbd>shift</kbd>                | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>p</kbd> | 调出命令面板，也可以在文件搜索框输入`>` 一样效果 |
| <kbd>cmd</kbd> + <kbd>\\</kbd>                   | <kbd>ctrl</kbd> + <kbd>\\</kbd>                   | 分割编辑器                                       |
| <kbd>cmd</kbd>+<kbd>1</kbd>、<kbd>2</kbd>...     | <kbd>ctrl</kbd> + <kbd>1</kbd>、<kbd>2</kbd>...   | 聚焦到第 1、2 个编辑器                           |
| <kbd>cmd</kbd>+<kbd>+</kbd>、<kbd>-</kbd>        | <kbd>ctrl</kbd>+<kbd>+</kbd>、<kbd>-</kbd>        | 放大、缩小工作区                                 |
| <kbd>cmd</kbd> + <kbd>j</kbd>                    | <kbd>ctrl</kbd> + <kbd>j</kbd>                    | 隐藏、显示控制台                                 |
| <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>N</kbd> | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>N</kbd> | 新开一个窗口                                     |
| <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>W</kbd> | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>W</kbd> | 关闭当前窗口                                     |
| <kbd>cmd</kbd> + <kbd>N</kbd>                    | <kbd>ctrl</kbd> + <kbd>N</kbd>                    | 新建文件                                         |
| <kbd>cmd</kbd> + <kbd>W</kbd>                    | <kbd>ctrl</kbd> + <kbd>W</kbd>                    | 关闭当前文件                                     |



### 跳转

| MacOS                                                        | Windows                                                  | 用途                                 |
| ------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------------ |
| <kbd>cmd</kbd> + <kbd>`</kbd>                                | 🈚️                                                        | 切换工作区                           |
| <kbd>cmd</kbd> + <kbd>option</kbd> +  <kbd>←</kbd>、<kbd>→</kbd> | <kbd>ctrl</kbd> + <kbd>PageDown</kbd>、<kbd>PageUp</kbd> | 左右切换文件                         |
| <kbd>ctrl</kbd> + <kbd>Tab</kbd>                             | <kbd>ctrl</kbd> + <kbd>Tab</kbd>                         | 切换文件                             |
| <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>O</kbd>             | <kbd>ctrl</kbd> + <kbd>shfit<kbd> + <kbd>O</kbd>         | 切换方法，在搜索框输入 `@` 一样效果  |
| <kbd>ctrl</kbd> + <kbd>G</kbd>                               | <kbd>ctrl</kbd> + <kbd>G</kbd>                           | 跳转指定行，在搜索框输入`:` 一样效果 |
| <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>\\</kbd>            | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>\\</kbd>       | 跳转到匹配的括号                     |



### 移动

| MacOS                                                        | Windows                                           | 用途                             |
| ------------------------------------------------------------ | ------------------------------------------------- | -------------------------------- |
| <kbd>option</kbd> + <kbd>←</kbd><kbd>→</kbd>                 | <kbd>ctrl</kbd> + <kbd>←</kbd><kbd>→</kbd>        | 单词之间移动光标                 |
| <kbd>cmd</kbd> + <kbd>←</kbd><kbd>→</kbd> / <kbd>fn</kbd> + <kbd>←</kbd><kbd>→</kbd> | <kbd>fn</kbd> + <kbd>←</kbd><kbd>→</kbd>          | 整行移动                         |
| <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>\\</kbd>            | 🈚️                                                 | 代码块之间移动                   |
| <kbd>cmd</kbd> + <kbd>↑</kbd>、<kbd>↓</kbd>                  | <kbd>ctrl</kbd> + <kbd>Home</kbd>、<kbd>End</kbd> | 光标移动到文件第一行 or 最后一行 |

### 编辑操作

| MacOS                                                        | Windows                                                      | 用途                           |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------ |
| <kbd>cmd</kbd> + <kbd>Enter</kbd>                            | <kbd>ctrl</kbd> + <kbd>Enter</kbd>                           | 向下新起一行，即使光标不再末尾 |
| <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>Enter</kbd>         | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>Enter</kbd>        | 向上新起一行                   |
| <kbd>option</kbd> + <kbd>↑</kbd>、<kbd>↓</kbd>               | <kbd>alt</kbd> + <kbd>↑</kbd>、<kbd>↓</kbd>                  | 代码向上 or 向下移动           |
| <kbd>option</kbd> + <kbd>shift</kbd> + <kbd>↑</kbd>、<kbd>↓</kbd> | <kbd>option</kbd> + <kbd>shift</kbd> + <kbd>↑</kbd>、<kbd>↓</kbd> | 代码向上 or 向下复制           |

### 多光标编辑

| MacOS                                                        | Windows                                                      | 用途                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---------------------- |
| <kbd>cmd</kbd> + <kbd>option</kbd> + <kbd>↑</kbd>、<kbd>↓</kbd> | <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>↑</kbd>、<kbd>↓</kbd> | 连续的多列中，出现光标 |
| <kbd>alt</kbd> + 鼠标任意点击                                | <kbd>alt</kbd> + 鼠标任意点击                                | 点击位置同时出现光标   |
| <kbd>option</kbd> + <kbd>shift</kbd> + 鼠标拖动              | <kbd>alt</kbd> + <kbd>shift</kbd> + 鼠标拖动                 | 光标全部在同一列       |



### 删除

| MacOS                                                    | Windows                                           | 用途                   |
| -------------------------------------------------------- | ------------------------------------------------- | ---------------------- |
| <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>k</kbd>         | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>k</kbd> | 删除整行               |
| <kbd>option</kbd> + <kbd>backspace</kbd>                 | <kbd>ctrl</kbd> + <kbd>backspace</kbd>            | 删除光标前一个单词     |
| <kbd>fn</kbd> + <kbd>option</kbd> + <kbd>backspace</kbd> | <kbd>ctrl</kbd> + <kbd>delete</kbd>               | 删除光标后的一个单词   |
| <kbd>cmd</kbd> + <kbd>backspace</kbd>                    | 🈚️                                                 | 删除光标之前的整行内容 |
| <kbd>fn</kbd> + <kbd>cmd</kbd> + <kbd>backspace</kbd>    | 🈚️                                                 | 删除光标之后的整行内容 |



### 编程相关

| MacOS                                               | Windows                                          | 用途                             |
| --------------------------------------------------- | ------------------------------------------------ | -------------------------------- |
| <kbd>cmd</kbd> + <kbd>/</kbd>                       | <kbd>ctrl</kbd> + <kbd>/</kbd>                   | 注释                             |
| <kbd>option</kbd> + <kbd>shift</kbd> + <kbd>F</kbd> | <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>F</kbd> | 代码格式化                       |
| <kbd>F2</kbd>                                       | <kbd>F2</kbd>                                    | 重命名                           |
| <kbd>ctrl</kbd> + <kbd>J</kbd>                      |                                                  | 多行代码合并为一行               |
| <kbd>cmd</kbd> + <kbd>U</kbd>                       | <kbd>ctrl</kbd>+<kbd>U</kbd>                     | 光标回退到上一个位置，即撤销光标 |



### 搜索相关

| MacOS                                            | Windows                                           | 用途                             |
| ------------------------------------------------ | ------------------------------------------------- | -------------------------------- |
| <kbd>cmd</kbd> + <kbd>F</kbd>                    | <kbd>ctrl</kbd> + <kbd>F</kbd>                    | 搜索                             |
| <kbd>cmd</kbd> + <kbd>G</kbd>                    | <kbd>ctrl</kbd> + <kbd>Fn</kbd> + <kbd>F3</kbd>   | 搜索，但是光标仍然存在编辑器里面 |
| <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>F</kbd> | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>F</kbd> | 全局搜索                         |



## Emmet in VSCode

支持 Emmet 语法：[Emmet in Visual Studio Code](https://code.visualstudio.com/docs/editor/emmet)

![](https://code.visualstudio.com/assets/docs/editor/emmet/emmet.gif)

### VSCode 插件

[裸 VSCode 必备插件](https://juejin.cn/post/7170655435542757390)








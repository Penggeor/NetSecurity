// 在 Node.js 18+ 中，fetch 是全局可用的，不需要额外安装
const url = "http://175.178.126.31:8082/upload/cs.php";

async function checkServer() {
  while (true) {
    try {
      // 使用 fetch 发起 GET 请求
      const response = await fetch(url);

      // fetch 不会在 HTTP 错误状态上 reject, 只有网络错误或请求被阻止时才会 reject.
      // 因此，我们需要通过检查 ok 状态来抛出错误。
      if (response.ok) {
        console.log("OK");
        break;  // 如果响应是 200-299 之间，表示成功，退出循环
      } else {
        // 如果 HTTP 状态码不是成功的，抛出错误以被捕获
        throw new Error(`HTTP Error: ${response.status}`);
      }
    } catch (error) {
      // 打印错误信息
      console.error(`An error occurred: ${error}`);
    }
  }
}

// 调用函数
checkServer();

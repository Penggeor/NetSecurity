## Web

Web（World Wide Web），即万维网。 

网页：一个网站的资源单位。

浏览器：网页运行的平台。

<br />

W3C: World Wide Web Consortium 万维网联盟组织，指定 web 标准的机构。

标准包括三部分：

1. 结构 HTML
2. 样式 CSS
3. 行为 JavaScript

## 浏览器

浏览器的组成：

1. 渲染引擎（浏览器内核）：读取 HTML、CSS 并渲染成网页上
2. JS 引擎 / JS 解释器

## HTML 介绍

HTML：Hyper Text Markup Language，超文本标记语言

Hyper Text：除了文本，还有图片、音频、动画、多媒体等等。

Markup：是一种标记语言，也就是一种描述性语言。没有编译过程。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</body>
</html>
```



### 名词

网页：由 HTML+CSS+JS 组成的页面

主页/首页：一个网站的起始页面。

标签：HTML 的基本单元，比如 `<p>` 成为开始标签，`</p>`称为结束标签。

元素：HTML 的组成单元，比如 `<p>Content</p>` 成为元素

属性：标签的辅助信息。比如 `<a href="https://wukaipeng.com">` 其中 href 叫做属性

XHTML：符合 XML 语法标准的 HTML

> XML：eXtensible Markup Language，可扩展标记语言

DHTML：Dynamic HTML，HTML+CSS+JS 的开发技术。

HTTP：Hypertext Transfer Protocol，超文本传输协议

HTTPS：HTTP + SSL/TSL，更加安全的 HTTP。

SMTP：Simple Mail Transfer Protocol，邮件传输协议

FTP：File Transfer Protocol，文件传输协议



> 暗链：网站中插入一些不易察觉的链接。目的可能是：
>
> 1. SEO。提高网站在 SERP 搜索引擎结果页的权重。
> 2. 欺诈。
> 3. 广告。
>
> 防护方法：
>
> 1. 网页防篡改模块：监控网页目录
> 2. WAF。Web Application Firewall
> 3. 漏洞扫描。
> 4. 企业蓝军。网络攻防演练，企业当做蓝军（Blue Team）防守红军（Red Team），红军可以找专业的安全测试团队。



## HTML 结构

双边标签：`<div></div>`

单边标签：`<img />`



### 文档声明头

DTD， Doc Type Declaration

HTLM5 极大简化了 DTD 的声明，不再支持 XHTML，目前只有：

```html
<!DOCTYPE html>
```



### 语言

中文是 `zh-CN` 

```html
<html lang="en">
```



### Head

```html
<head>
  <meta charset="UTF-8">
  <meta name="generator" content="Docusaurus v2.4.1">
  <title>主页 | 楷鹏</title>
  <meta data-rh="true" name="twitter:card" content="summary_large_image">
  <meta data-rh="true" property="og:url" content="https://wukaipeng.com/">
  <meta data-rh="true" name="docusaurus_locale" content="en">
  <meta data-rh="true" name="docusaurus_tag" content="default">
  <meta data-rh="true" name="docsearch:language" content="en">
  <meta data-rh="true" name="docsearch:docusaurus_tag" content="default">
  <meta data-rh="true" property="og:title" content="主页 | 楷鹏">
  <meta data-rh="true" name="description" content="这是楷鹏的技术领域">
  <meta data-rh="true" property="og:description" content="这是楷鹏的技术领域">
  <link data-rh="true" rel="icon" href="/img/favicon.ico">
  <link data-rh="true" rel="canonical" href="https://wukaipeng.com/">
  <link data-rh="true" rel="alternate" href="https://wukaipeng.com/" hreflang="en-GB">
  <link data-rh="true" rel="alternate" href="https://wukaipeng.com/zh-CN/" hreflang="zh-CN">
  <link data-rh="true" rel="alternate" href="https://wukaipeng.com/" hreflang="x-default">
  <script type="text/javascript" async="" src="https://app.posthog.com/static/array.js"></script>
  <link rel="alternate" type="application/rss+xml" href="/blog/rss.xml" title="楷鹏 RSS Feed">
  <link rel="alternate" type="application/atom+xml" href="/blog/atom.xml" title="楷鹏 Atom Feed">
  <link rel="alternate" type="application/rss+xml" href="/blog-news/rss.xml" title="楷鹏 RSS Feed">
  <link rel="alternate" type="application/atom+xml" href="/blog-news/atom.xml" title="楷鹏 Atom Feed">
  <link rel="preload" href="/assets/js/runtime~main.a232d5a8.js" as="script">
  <link rel="preload" href="/assets/js/main.1f0d0795.js" as="script">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" data-rh="true">
</head>
```

1. `<title>` 网页的标题
2. `<base>`  指定了一个基本 URL，其他地方就可以通过相对路径来引用网站资源。
3. `<meta>` 网页的元信息
4. `<link>` 外部资源引用



注意有一种  `<meta>` 标签，如下，3 秒后会重新刷新并跳转 [https://wukaipeng.com/](https://wukaipeng.com/)

```html
<meta http-equiv="refresh" content="3;https://wukaipeng.com/">
```





## 计算机编码

计算机底层也是二进制，它并不理解人类语言，需要通过编码去对应到我们的语言。

最早期的是 ASCII（American Standard Code for Information Interchange，美国信息交换标准代码） 编码，比如梓慕 a，它对应的二进制是 `01100001`

ASCII 缺点是只有一个字节，即八位，最大只能表示 127 个字符。

汉字的编码集：GB2313 → GBK → GB18030

目前常用的 Unicode，其中 UTF-8 最常用。

HTML 中声明编码：

```html
<meta charset="UTF-8">
```



## HTML 排版标签

### 标题标签

```html
    <h1>楷鹏</h1>
    <h2>楷鹏</h2>
    <h3>楷鹏</h3>
    <h4>楷鹏</h4>
    <h5>楷鹏</h5>
    <h6>楷鹏</h6>
```

### 段落标签

```html
<p>
  Hello, I am Kaipeng.
</p>
```

- 属性 align，分别为 `left`, `right`, `center`

### `<div>` 和 `<span>`

`<div>`，division 的缩写，分割，块级元素

`<span>`， 内联元素



### 超链接

Http 超链接

```html
<a href="https://wukaipeng.com/">楷鹏</a>
```

邮件链接，不常用

```html
<a href="mailto:wkpcoder@163.com">给楷鹏发邮件</a>
```



### 图片标签

HTML 不能插入图片，只能引用图片资源。

相对路径

```html
<img src="./k.png">
```

绝对路径

```html
<img src="https://wukaipeng.com/k.png">
```



### 列表

- 有序列表 order list： `<ol>` 
- 无序列表 unordered list：`<ul>`
- 列表项 `<li>`

```html
  <ul>
    <li>广东汕头</li>
    <li>湖南长沙</li>
    <li>产后抑郁</li>
  </ul>

  <ol>
    <li>网站：<a href="https://wukaipeng.com/">https://wukaipeng.com/</a></li>
    <li>slogan：吴楷鹏的技术领域</li>
    <li>备案号：粤ICP备2023085392号</li>
  </ol>
```



- 定义列表 definition list：`<dl>`
  - definition title：`<dt>`
  - definition description: `<dd>`

```html
  <dl>
    <dt>吴楷鹏</dt>
    <dd>稳重吃肉的程序员</dd>
    <dd>身体低于 2 米</dd>
  </dl>
```



### 表格

- 表格 `<table>`
- 行 table row `<tr>`
- 表格头 table head `<th>`
- 表格内容 table data `<td>`

```html
    <table>
      <tr>
        <th>姓名</th>
        <th>介绍</th>
        <th>特点</th>
      </tr>
      <tr>
        <td>吴楷鹏</td>
        <td>稳重吃肉的程序员</td>
        <td>身体低于 2 米</td>
      </tr>
      <tr>
        <td>邓紫棋</td>
        <td>歌手</td>
        <td>凳子齐</td>
      </tr>
    </table>
```



## 转义字符

转义：可以看做是一种编码，用其他字符组合来表示某一个字符。比如我们想要在网页上渲染 `<p>`，正常思路是：

```html
<div>
  <p>
</div>
```

但是 `<p>` 会被当做 HTML 标签来渲染了，所以需要对 `<` 和 `>` 进行转义：

```html
<div>
  &lt;p&gt;
</div>
```

工具推荐

- 速查表：[https://t.he3app.com?y19y](https://t.he3app.com?y19y)

- 转义：https://t.he3app.com?2ii8

<br />

XSS（Cross Site Scripting，跨站脚本攻击），插入恶意脚本，在用户浏览器上运行

1. 存储型：恶意脚本存储到目标网站后台中
2. 反射型：诱导用户点击诱导链接，将恶意脚本作为参数发给目标网站，网站将恶意脚本返回给用户，用户解析并执行该脚本
3. DOM 型：在浏览器修改 DOM。














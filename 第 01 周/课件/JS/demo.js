// let a = 1
// let b = a

// a++

// console.log(a) // 2
// console.log(b) // 1

// let obj1 = { c: 1 }
// let obj2 = obj1;

// obj1.c++;

// console.log(obj1) // { c: 2 }
// console.log(obj2) // { c: 2 }

// let str = 'hello" //! SyntaxError: Invalid or unexpected token

// let str = ''a'' //! SyntaxError: Unexpected identifier

// let str = '\'a\''
// console.log(str) // 'a'

// let str1 = '"a"'
// let str2 = "'b'"

// console.log(str1) // "a"
// console.log(str2) // 'b'

// let str1 = '楷鹏';
// let str2 = 'Kaipeng';
// console.log(str1.length); // 2
// console.log(str2.length); // 7

// let str1 = 'hello';
// let str2 = ' world';

// console.log(str1 +  str2); // hello world

// let str = '你好'
// str = '楷鹏'

// const name = '楷鹏'
// const age = 18

// // 传统的字符串拼接
// console.log('我叫' + name + ',今年' + age + '岁了')
// // 模板字符串
// console.log(`我叫${name},今年${age}岁了`)

// const a = 1
// const b = 2

// // 传统的字符串拼接
// console.log('a + b = ' + (a + b))

// // 模板字符串
// console.log(`a + b = ${a + b}`)

// const str = `Dear.鹏
//   你知道母猪的产后护理吗？
//   速回复！`

// function greeting() {
//   return '你好呀'
// }

// console.log(`Dear.鹏
//   ${greeting()}
//   你知道母猪的产后护理吗？
//   速回复！`)

// 嵌套

// const lis = ['吴', '楷', '鹏']

// const str = `
//   <ul>
//     ${lis
//       .map((item) => {
//         return `<li>${item}</li>`
//       })
//       .join('\n\t')}
//   </ul>`

// console.log(str)
// // <ul>
// //   <li>吴</li>
// //   <li>楷</li>
// //   <li>鹏</li>
// // </ul>

// console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE) // 5e-324

// console.log(Number.MAX_VALUE + 1) // Infinity

// console.log(typeof Infinity) // number

// const a = 1
// const b = 'z'

// console.log(a * b) // NaN

// const a = 1
// const b = '2'

// console.log(a + b) // 12
// console.log(a - b) // -1
// console.log(a * b) // 2
// console.log(a / b) // 0.5

// const a = 0.1
// const b = 0.2

// console.log(a + b) // 0.30000000000000004

// console.log(typeof a) // undefined
// console.log(a) // ReferenceError: a is not defined

// let a;
// console.log(a) // undefined

// function greeting(name) {
//   console.log(`Hello, ${name}`)
// }

// const result = greeting() // Hello, undefined

// console.log(result) // undefined

// console.log(null == undefined) // true
// console.log(null === undefined) // false

// console.log(10 + null) // 10
// console.log(10 + undefined) // NaN

// const result1 = (33 * 3) % 2
// console.log(result1) // 1

// const result2 = 33 + (3 % 2)
// console.log(result2) // 34

// console.log(0.1 + 0.2) // 0.30000000000000004
// console.log(0.07 * 100) // 7.000000000000001

// let a = 1
// a++
// console.log(a) // 2

// let b = 1
// ++b
// console.log(b) // 2

// let a = 1
// console.log(a++) // 1
// console.log(a) // 2

// let b = 1
// console.log(++b) // 2
// console.log(b) // 2

// let a = 1
// let b = +a
// console.log(b) // 1

// let c = '1'
// let d = +c
// console.log(d) // 1

// let a = 1
// console.log(typeof a) // number

// console.log(1 && 2) // 2
// console.log(0 && 2) // 0
// console.log(1 || 0) // 1
// console.log(0 || 2) // 2

// const a = 1
// const b = !a
// console.log(b) // false
// console.log(typeof b) // boolean

console.log('\u2600') // ☀
console.log('\u2602') // ☂
// JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。

/* 1. ECMAScript 的内置对象 */
/* 
  Boolean
  Number
  String
  Date
  RegExp
  Error
*/
let b: Boolean = new Boolean(1)
let n: Number = new Number(true)
let s: String = new String('abc')
let d: Date = new Date()
let r: RegExp = /^1/
let e: Error = new Error('error message')
b = true
console.log(b);
// let bb: boolean = new Boolean(2)  // error 因为小写的boolean是一个基本类型，大写的Boolean是一个包装对象，他们不是互通的



// BOM 和 DOM 的内置对象
/* 
  Window
  Document
  HTMLElement
  DocumentFragment
  Event
  NodeList
*/
// const div: HTMLElement = document.getElementById('test')
/* const divs: NodeList = document.querySelectorAll('div')
document.addEventListener('click', (event: MouseEvent) => {
  console.dir(event.target)
})
const fragment: DocumentFragment = document.createDocumentFragment() */

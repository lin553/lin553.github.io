// 使用 JavaScript 把标题文本改成了 Hello world!。
// 用 querySelector() 函数获取标题的引用，然后把它储存在 myHeading 变量中。这与 CSS 选择器的用法非常相像。
// 若要对某个元素进行操作，首先得选择它。
const myHeading = document.querySelector("h1");
// 把 myHeading 变量的 textContent 属性（表示标题内容）的值设置为 Hello world!。
myHeading.textContent = "Hello world!";

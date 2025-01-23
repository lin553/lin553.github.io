

// 将获取新按钮和标题的引用，并存储到变量中：
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");





// ----------------------------------------------------------------
// 添加下列设置个性化欢迎信息的函数。现在什么都还没发生，但一会就会发生了。

function setUserName() {    // 可输入“空字符”或“取消”的版本
    const myName = prompt("Please enter your name.", '姓名');   //第二个参数是默认值
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }

  // function setUserName() {   // “要求输入正确的名字，否则一直弹出输入框” 版本
  //   const myName = prompt("Please enter your name.");
  //   if (!myName) {
  //     // 调用自身是为了重复显示上面的对话框，要求输入有效的名字，即：不可取消
  //     setUserName();  
  //   } else {
  //     localStorage.setItem("name", myName);
  //     myHeading.textContent = `Mozilla is cool, ${myName}`;
  //   }
  // }
// ----------------------------------------------------------------




//   在函数声明的后面添加下列条件语句块。我们称之为初始化代码，因为它在初次加载时开始工作。  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");      // localStorage：浏览器的缓存，根据浏览器不同而不同
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }


//   设置按钮的 onclick 事件处理器。按钮点击时，运行 setUserName() 函数。这样用户就可以通过点击按钮设置新名字了。
  myButton.onclick = function () {
    setUserName();
  };
  

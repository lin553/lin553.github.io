const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  // 在 JavaScript 中，=== 被称为严格相等运算符，用于比较两个值是否完全相等。与 ==（相等运算符）不同，
  // === 不会进行类型转换，如果两个值的类型不同，直接返回 false
  if (mySrc === "005_蜘蛛侠.png") {         
    myImage.setAttribute("src", "005_马力奥.png");
  } else {
    myImage.setAttribute("src", "005_蜘蛛侠.png");
  }
};

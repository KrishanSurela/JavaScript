# Unlimited Color Changing Project

## Project Link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-utpwkw?file=6-unlimitedColors%2Fchaiaurcode.js)

```javascript
//generate a random color (Hex code Generator)

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let changeStop;
const startChangingColor = function () {
  const changeBgColor = function () {
    document.body.style.backgroundColor = randomColor();
  };
  console.log("Start Clicked");
  if (!changeStop) {
    changeStop = setInterval(changeBgColor, 1000);
  }
  //here code is unreachable code
};
const stopChangingColor = function () {
  console.log("Stop Clicked");
  clearInterval(changeStop);
  changeStop = null;
  //here code is unreachable code
};
document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
```

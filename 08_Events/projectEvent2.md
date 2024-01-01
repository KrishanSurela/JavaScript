# Project 5 Solution Code

## Keyboard Key Checker

## Project Link

## [Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-utpwkw?file=5-keyboard%2Fchaiaurcode.js,5-keyboard%2Findex.html)

```javascript
const insert1 = document.getElementById("insert1");
window.addEventListener("keydown", (e) => {
  insert1.innerHTML += `
  <div class='color'>
  <tr>
    <td>${e.key == " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr> 
  </div>
  `;
});
```

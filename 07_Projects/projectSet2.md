# Project 2 Solution Code

```javascript
const form = document.querySelector('form');

//const height = parseInt(document.querySelector('#height').value)
// this usecase will give you empty value
form.addEventListener('submit', function (e) {
  e.preventDefault(); //stop form default submit
  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  const statement = document.querySelector('#statement');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give a valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give a valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result

    results.innerHTML = `<span>${bmi}</span><br>`;

    if(bmi<18.6){
      statement.innerHTML=`<span>${bmi} is in under weight</span>`
    }else if(18.6<=bmi && bmi<=24.9){
      statement.innerHTML=`<span>${bmi} is in Normal Range</span>`
    }
    else if(bmi>24.9){
      statement.innerHTML=`<span>${bmi} is in  Over Weight</span>`
    }
  }
});

```

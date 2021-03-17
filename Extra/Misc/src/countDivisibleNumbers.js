const countDivisibleNumbers = (x, y, p) => Math.floor(y / p) - Math.ceil(x / p) + 1;

const myForm = document.myForm;
myForm.addEventListener("submit", e => {
  e.preventDefault();
  let x = +myForm.x.value;
  let y = +myForm.y.value;
  const p = +myForm.p.value;

  //* Swap the two range numbers if first number is greater than the second number
  if(x > y) [x, y] = [y, x];

  const result = countDivisibleNumbers(x, y, p);

  document.getElementById("result").innerText = result > 0
    ? `There are ${result} numbers divisible by ${p} between ${x} and ${y}.`
    : "No results! Try another set of numbers?"
});

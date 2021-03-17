function countDivisibleNumbers(x, y, p) {
  //  Get the smallest number greater than x,
  //  that is also divisible by p
  const pStart = p * (Math.ceil(x / p) - 1) + p;
  //  Initialize a number for counting the multiples of p
  let count = 0;
  //  Loop numbers using multiples of p,
  //  starting from the number we calculated,
  //  until we get past y
  for(let i = pStart; i <= y; i += p) {
    // Increment the count
    count++;
  }
  //  Return the count
  return count;
}

const myForm = document.myForm;
myForm.addEventListener("submit", e => {
  e.preventDefault();
  const x = +myForm.x.value;
  const y = +myForm.y.value;
  const p = +myForm.p.value;

  const result = countDivisibleNumbers(x, y, p);

  document.getElementById("result").innerText = result > 0
    ? `There are ${result} numbers divisible by ${p} between ${x} and ${y}.`
    : "No results! Try another set of numbers?"
});

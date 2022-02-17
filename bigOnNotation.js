// Notes simple examples
// Speed and Less Memory- intensive
// More Readable

function sum_total(n) {
  let counter = 0;
  for (let i = 0; i <= n; i++) {
    counter += i;
  }
  return counter;
}
// console.log(sum_total(100));

const add_Up = (n) => {
  return (n * (n + 1)) / 2;
};
console.log(add_Up(100));

// Calculating Run time

let t1 = performance.now();
add_Up(1000000000000000000000000);
let t2 = performance.now();
// console.log(`Time Elaped: ${(t2 - t1) / 1000} seconds`);

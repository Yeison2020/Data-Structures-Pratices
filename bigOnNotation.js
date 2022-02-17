// Notes simple examples

const sum_total = (n) => {
  let counter = 0;
  for (let i = 0; i <= n; i++) {
    counter += i;
  }
  return counter;
};
// console.log(sum_total(100));

const add_Up = (n) => {
  return (n * (n + 1)) / 2;
};
console.log(add_Up(100));

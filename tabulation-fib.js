console.time("fib");

const fib = (n) => {
  const table = Array(n + 1).fill(0); // array of (n+1) length filled with 0's
  table[1] = 1;
  for (i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  return table[n];
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(12));
console.log(fib(30));

console.timeEnd("fib");

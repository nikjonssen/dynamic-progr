// const t0 = performance.now();
console.time("howSum");

const howSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    const remainder = target - num;
    const remainderRes = howSum(remainder, numbers, memo);
    if (remainderRes !== null) {
      memo[target] = [...remainderRes, num];
      return memo[target];
    }
  }
  memo[target] = null;
  return memo[target];
};

console.log(howSum(300, [2, 3]));

console.timeEnd("howSum");

//   remainderRes.push(num);
//   memo[target] = remainderRes;

// const t1 = performance.now();
// console.log(`Full Operation Performance: ${t1 - t0} ms`);

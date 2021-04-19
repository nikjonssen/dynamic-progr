const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const remainder = target.slice(word.length);
      const remainderWays = allConstruct(remainder, wordBank, memo);
      const targetWays = remainderWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
};

console.log(allConstruct("aaaaaaaaaz", ["a", "aa", "aaa", "aaaa"]));

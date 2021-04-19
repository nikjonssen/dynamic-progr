console.time("countConstruct");

const countConstruct = (target, wordBank) => {
  //   console.log(wordBank[0].length);
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        table[i + word.length] += table[i];
      }
    }
  }
  return table[target.length];
};

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));

console.timeEnd("countConstruct");

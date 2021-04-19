console.time("canConstruct");

const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (word in wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      // const suffix = target.splice(0, word.length);
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

console.log(canConstruct("eeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeeee"]));

console.timeEnd("canConstruct");

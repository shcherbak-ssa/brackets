
module.exports = function check(str, bracketsConfig) {
  const removeClosedBrackets = createClosedBracketsRemover(bracketsConfig);
  return recursionCheck(str);

  function recursionCheck(initialString) {
    const stringLeft = removeClosedBrackets(initialString);
    switch (stringLeft) {
      case '': return true;
      case initialString: return false;
      default: return recursionCheck(stringLeft);
    }
  }
}

function createClosedBracketsRemover(bracketsConfig) {
  bracketsConfig = bracketsConfig.map((config) => config.join(''));
  return (str) => bracketsConfig.reduce((stringLeft, bracketConfig) => stringLeft.replace(bracketConfig, ''), str);
}
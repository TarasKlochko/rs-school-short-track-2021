/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  let sum = 0;
  let el = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === el) {
      sum += 1;
    } else {
      result.push(sum > 1 ? `${sum}${el}` : el);
      el = str[i];
      sum = 1;
    }
    if (i === str.length - 1) {
      result.push(sum > 1 ? `${sum}${el}` : el);
    }
  }
  return result.join('');
}

module.exports = encodeLine;

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(/* l, k */) {
  // const list = l;
  // // const result = [];
  // function arr(listV) {
  //   if (listV.value === k) {
  //     delete listV.value;
  //     // result.push(list.value);
  //   }
  //   if (listV.next) {
  //     arr(listV.next);
  //   }
  // }
  // arr(list);
  // console.log(result);
  // console.log(result.filter((el) => el !== k));
  // return list;
  throw new Error('Not implemented');
}

module.exports = removeKFromList;

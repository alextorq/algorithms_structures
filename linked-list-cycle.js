function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {number} amount
 * @return {ListNode}
 */
const generateCircleList = function (amount = 200) {
  const head = new ListNode(0);
  let current = head;
  for (let i = 1; i <= amount; i++) {
    const item = new ListNode(i);
    current.next = item;
    current = item;
  }
  current.next = head.next.next.next;
  return head;
};

/**
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function detectCircleList(head) {
  const touched = [];
  let result = null;
  let current = head;
  while (current.next) {
    if (touched.includes(current)) {
      result = current;
      break;
    }
    touched.push(current);
    current = current.next;
  }

  return result;
}

console.log(detectCircleList(generateCircleList()));

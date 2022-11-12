function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {number} amount
 * @return {ListNode}
 */
const generateCircleList  = function (amount = 200) {
    var head = new ListNode(0)
    var current = head
    for (let i = 1; i <= amount; i++) {
        var item = new ListNode(i)
        current.next = item
        current = item
    }
    current.next = head.next.next.next
    return head
}


/**
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function detectCircleList(head) {
    var touched = []
    var result = null
    var current = head
    while (current.next) {
        if (touched.includes(current)) {
            result = current
            break
        }
       touched.push(current)
       current = current.next
    }

    return result
}

console.log(detectCircleList(generateCircleList()))

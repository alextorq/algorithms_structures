function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {number} amount
 * @return {ListNode}
 */
const generateCircleList  = function (amount = 100) {
    var head = new ListNode(0)
    var current = head
    for (let i = 1; i <= amount; i++) {
        var item = new ListNode(i)
        current.next = item
        current = item
    }
    // current.next = head.next.next.next
    return head
}


/**
 *
 * @param {ListNode} head
 * @return {boolean}
 */
function detectCircleList(head) {
    let turtle = head
    let rabbit = head.next
    while (turtle !== rabbit) {
        if ((!!rabbit && !!rabbit.next)) {
            turtle = turtle.next
            rabbit = rabbit.next.next
        }else {
            break
        }
    }
    return turtle === rabbit
}



console.log(detectCircleList(generateCircleList()))

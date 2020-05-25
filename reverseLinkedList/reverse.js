const reverse = (list) => {
    let newHead = null;
    let current = list;

    while (current) {
        newHead = new Node(current.getValue(), newHead);
        current = current.getNext();
    }

    return newHead;
};

export default reverse;
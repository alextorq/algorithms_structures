function validParentheses(parens) {
    const MAP = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    const stack = []

    for (const stackElement of parens) {
        if (stackElement in MAP) {
           stack.push(stackElement)
        }else {
            const last = stack.pop()
            if (stackElement !== MAP[last]) {
                return false
            }
        }
    }
    return stack.length === 0
}



console.log(validParentheses("()"));

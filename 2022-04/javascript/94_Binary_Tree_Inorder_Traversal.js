class TreeNode {
    constructor(val=0, left=null, right=null) {
        this.val = val
        this.left = left
        this.right = right
    }
}


/**
 * @param {TreeNode} root 
 * @return {number[]}
 */
function inorderTraversal(root) {
    // return inorderTraversalRecursively(root)
    return inorderTraversalIteratively(root)
}


/**
 * @param {TreeNode} root 
 * @return {number[]}
 */
 function inorderTraversalRecursively(root) {
    if (!root) return []
    // Inorder 优先处理左边子树，中间是 root，然后是右边
    return inorderTraversalRecursively(root.left).concat(root.val).concat(inorderTraversalRecursively(root.right))
}


/**
 * @param {TreeNode} root 
 * @return {number[]}
 */
 function inorderTraversalIteratively(root) {
    const result = []
    const stack = []
    while (root || stack.length > 0) {
        if (root) {
            stack.push(root)
            root = root.left
        } else {
            const curNode = stack.pop()
            result.push(curNode.val)
            root = curNode.right
        }
    }
    return result
}

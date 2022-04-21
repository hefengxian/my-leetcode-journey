
// When paste to LeetCode comment class TreeNode
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val=0, left=null, right=null) {
        this.val = val
        this.left = left
        this.right = right
    }
}


function inorderTraversal(root: TreeNode): number[] {
    // return inorderTraversalRecursively(root)
    return inorderTraversalIteratively(root)
}


function inorderTraversalRecursively(root: TreeNode): number[] {
    if (!root) return []
    const left = inorderTraversalRecursively(root.left)
    const right = inorderTraversalRecursively(root.right)
    return left.concat(root.val).concat(right)
}


function inorderTraversalIteratively(root: TreeNode): number[] {
    const stack = []
    const result = []
    while (root || stack.length > 0) {
        if (root) {
            stack.push(root)
            root = root.left
        } else {
            const curNode = stack.pop()
            root = curNode.right
            result.push(curNode.val)
        }
    }
    return result
}
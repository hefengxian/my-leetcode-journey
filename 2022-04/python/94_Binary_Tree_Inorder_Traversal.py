class Solution:

    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        # return self.inorderTraversalRecursively(root)
        return self.inorderTraversalIteratively(root)

    def inorderTraversalRecursively(self, root: Optional[TreeNode]) -> List[int]:
        if not root: return []
        return self.inorderTraversalRecursively(root.left) + [root.val] + self.inorderTraversalRecursively(root.right)
    
    def inorderTraversalIteratively(self, root: Optional[TreeNode]) -> List[int]:
        result, stack = [], []
        while root or stack:
            if root:
                stack.append(root)
                root = root.left
            else:
                cur_node = stack.pop()
                root = cur_node.right
                result.append(cur_node.val)
        return result
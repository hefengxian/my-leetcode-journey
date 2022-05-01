
function getIntersectionNode(headA: null | ListNode, headB: null | ListNode): null | ListNode {
    let pa = headA, pb = headB
    while (pa !== pb) {
        pa = pa ? pa.next : headB
        pb = pb ? pb.next : headA
    }
    return pa
}
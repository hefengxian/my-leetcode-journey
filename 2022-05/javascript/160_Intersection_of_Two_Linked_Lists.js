
function getIntersectionNode(headA, headB) {
    let pa = headA, pb = headB
    while (pa !== pb) {
        pa = pa ? pa.next : headB
        pb = pb ? pb.next : headA
    }
    return pa
}
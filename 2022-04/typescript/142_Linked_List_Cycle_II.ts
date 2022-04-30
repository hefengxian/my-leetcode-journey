
function detectCycle(head: null | ListNode): null | ListNode {
    let p1 = head
    let p2 = head
    while (p2 && p2.next) {
        p1 = p1.next
        p2 = p2.next.next
        if (p1 === p2) {
            // 这里的难点是怎么得到下面的条件
            // 核心经过一系列演算得到 s = (n - 1)r + (r - m)
            // 这里 s 是链表起点到 cycle 起点的距离，r 是 cycle 的周长，m 是 cycle 起点到交点的距离，n 为快慢指针第一次相交循环的圈子数
            // 假设我们取 n 为 1，可以得到 s = r - m 也就是说我们以 cycle 起点开始计算圆的周长，就是在 m 点 + s 就直接回到了起点
            // 所以得到如下的方法，一个指针从链表起点出发，一个指针从交点出发；他们第一次相交的时候就是 cycle 起点
            p1 = head  // p1 重置到链表起点, p2 保持在交点
            while (p1 !== p2) {
                p1 = p1.next
                p2 = p2.next
            }
            return p1
        }
    }
    return null
}

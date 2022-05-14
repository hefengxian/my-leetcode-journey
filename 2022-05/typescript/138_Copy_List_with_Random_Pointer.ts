class Node {
    val: number
    next: Node | null
    random: Node | null
    constructor(val: number = 0, next: Node | null = null, random: Node | null = null) {
        this.val = val
        this.next = next
        this.random = random
    }
}

function copyRandomList(head: Node | null): Node | null {
    return oneLoop(head)
    return twoLoop(head)
}

function oneLoop(head: Node | null): Node | null {
    const m = new Map<Node, Node>()
    let p = head
    while (p) {
        if (m.has(p)) {
            m.get(p).val = p.val
        } else {
            m.set(p, new Node(p.val))
        }
        if (p.next) {
            if (!m.has(p.next)) {
                m.set(p.next, new Node())
            }
            m.get(p).next = m.get(p.next)
        }
        if (p.random) {
            if (!m.has(p.random)) {
                m.set(p.random, new Node())
            }
            m.get(p).random = m.get(p.random)
        }
        p = p.next
    }
    return m.get(head)
}

function twoLoop(head: Node | null): Node | null {
    const m = new Map<Node, Node>()
    let f = head
    let s = head
    while (f) {
        m.set(f, new Node(f.val))
        f = f.next
    }
    while (s) {
        m.get(s).next = m.get(s.next) || null
        m.get(s).random = m.get(s.random) || null
        s = s.next
    }
    return m.get(head)
}


export default {}
function copyRandomList(head) {
    return oneLoop(head)
    // return twoLoop(head)
}

function oneLoop(head) {
    const m = new Map()
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

function twoLoop(head) {
    const m = new Map()
    let f = head, s = head
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
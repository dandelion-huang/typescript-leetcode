import { Node } from 'classes/GraphNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

function dfs(node: Node, visited: Map<Node, Node>): Node {
    if (visited.has(node)) {
        return visited.get(node)!
    }

    const cloned = new Node(node.val)

    visited.set(node, cloned)

    for (const neighbor of node.neighbors) {
        cloned.neighbors.push(dfs(neighbor, visited))
    }

    return cloned
}

function cloneGraph(node: Node | null): Node | null {
    // edge cases
    if (!node) {
        return node
    }

    const visited = new Map<Node, Node>() // Map<node, cloned>

    return dfs(node, visited)
}

export { cloneGraph }

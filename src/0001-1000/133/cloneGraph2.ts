import { Node } from 'classes/GraphNode'

// <Iteration, BFS, Queue, HashTable>
// Time: O(n)
// Space: O(n)

// 1. bfs
function bfs(node: Node): Node {
    const queue: Node[] = [node]
    const visited = new Map<Node, Node>() // Map<node, cloned>

    visited.set(node, new Node(node.val))

    while (queue.length) {
        const curNode = queue.shift()!

        for (const neighbor of curNode.neighbors) {
            if (!visited.has(neighbor)) {
                visited.set(neighbor, new Node(neighbor.val))
                queue.push(neighbor)
            }

            visited.get(curNode)!.neighbors.push(visited.get(neighbor)!)
        }
    }

    return visited.get(node)!
}

function cloneGraph(node: Node | null): Node | null {
    // edge cases
    if (!node) {
        return node
    }

    return bfs(node)
}

export { cloneGraph }

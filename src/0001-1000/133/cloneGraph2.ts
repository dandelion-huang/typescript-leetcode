import { Node } from 'classes/GraphNode'

// <Iteration, BFS, Queue>
// Time: O(n)
// Space: O(n)

function cloneGraph(node: Node | null): Node | null {
    // edge cases
    if (!node) {
        return node
    }

    const visited = new Map<Node, Node>() // Map<node, cloned>
    const queue: Node[] = [node]

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

export { cloneGraph }

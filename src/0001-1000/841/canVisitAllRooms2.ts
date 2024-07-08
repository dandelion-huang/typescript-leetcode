// <Iteration, BFS, Queue>
// Time: O(n + m)
//       n for the number of rooms
//       m for the number of keys
// Space: O(n)

// 1. bfs
function bfs(rooms: number[][]): boolean {
    const n = rooms.length
    const visited: boolean[] = new Array(n)
    const queue = [0]
    let openedRooms = 0

    visited[0] = true

    while (queue.length) {
        const room = queue.shift()!

        ++openedRooms

        for (const key of rooms[room]) {
            if (!visited[key]) {
                queue.push(key)
                visited[key] = true
            }
        }
    }

    return openedRooms === n
}

function canVisitAllRooms(rooms: number[][]): boolean {
    // edge cases
    if (!rooms.length) {
        return true
    }

    return bfs(rooms)
}

export { canVisitAllRooms }

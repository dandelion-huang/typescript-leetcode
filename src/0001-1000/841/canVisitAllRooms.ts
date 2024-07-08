// <Recursion, DFS>
// Time: O(n + m)
//       n for the number of rooms
//       m for the number of keys
// Space: O(n)

interface Helper {
    openedRooms: number
}

// 1. dfs
function dfs(rooms: number[][], visited: boolean[], helper: Helper, room: number): void {
    visited[room] = true
    ++helper.openedRooms

    for (const key of rooms[room]) {
        if (!visited[key]) {
            dfs(rooms, visited, helper, key)
        }
    }
}

function canVisitAllRooms(rooms: number[][]): boolean {
    // edge cases
    if (!rooms.length) {
        return true
    }

    const n = rooms.length
    const visited: boolean[] = new Array(n)
    const helper: Helper = { openedRooms: 0 }

    dfs(rooms, visited, helper, 0)

    return helper.openedRooms === n
}

export { canVisitAllRooms }

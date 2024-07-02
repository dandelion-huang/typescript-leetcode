import { dx, dy } from 'constants/directions'

// <Iteration, BFS, Queue>
// Time: O(nm)
// Space: O(nm)

class MyMap {
    private image: number[][]
    private n: number
    private m: number
    private color: number
    private curColor: number

    public constructor(image: number[][], sr: number, sc: number, color: number) {
        this.image = image
        this.n = image.length
        this.m = image[0].length
        this.color = color
        this.curColor = image[sr][sc]
    }

    // 1. bfs
    public bfs(x: number, y: number): void {
        const queue: [number, number][] = [[x, y]]

        this.image[x][y] = this.color // flood fill

        while (queue.length) {
            const [curX, curY] = queue.shift()!

            for (let i = 0; i < 4; ++i) {
                const [px, py] = [curX + dx[i], curY + dy[i]]

                if (
                    px >= 0 &&
                    px < this.n &&
                    py >= 0 &&
                    py < this.m &&
                    this.image[px][py] === this.curColor
                ) {
                    queue.push([px, py])
                    this.image[px][py] = this.color // flood fill
                }
            }
        }
    }

    public getImage(): number[][] {
        return this.image
    }
}

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    // edge cases
    if (!image.length) {
        return image
    }

    const curColor = image[sr][sc]

    if (curColor === color) {
        return image
    }

    const myMap = new MyMap(image, sr, sc, color)

    myMap.bfs(sr, sc)

    return myMap.getImage()
}

export { floodFill }

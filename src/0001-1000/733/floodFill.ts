import { dx, dy } from 'constants/directions'

// <Recursion, DFS>
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

    // 1. dfs
    public dfs(x: number, y: number): void {
        if (x < 0 || x >= this.n || y < 0 || y >= this.m || this.image[x][y] !== this.curColor) {
            return
        }

        this.image[x][y] = this.color // flood fill

        for (let i = 0; i < 4; ++i) {
            const [px, py] = [x + dx[i], y + dy[i]]

            this.dfs(px, py)
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

    myMap.dfs(sr, sc)

    return myMap.getImage()
}

export { floodFill }

// <Iteration>
// Time: O(nlogn)
// Space: O(n)

function sortCars(position: number[], speed: number[]) {
    const cars: [number, number][] = [] // car: <pos, speed>

    for (let i = 0; i < position.length; ++i) {
        cars.push([position[i], speed[i]])
    }

    cars.sort((car1, car2) => car1[0] - car2[0]) // ascending order

    return cars
}

function getArriveTime(car: [number, number], target: number) {
    const [position, speed] = car

    return (target - position) / speed
}

function carFleet(target: number, position: number[], speed: number[]): number {
    const cars = sortCars(position, speed)
    let ans = 0
    let prevArriveTime = -1

    for (let i = cars.length - 1; i >= 0; --i) {
        const arriveTime = getArriveTime(cars[i], target)

        if (prevArriveTime < arriveTime) {
            ++ans
            prevArriveTime = arriveTime
        }
    }

    return ans
}

export { carFleet }

export default class MathOperation {
    constructor(private x?: number, private y?: number) {
    }

    sum(x: number, y: number) {
        return console.log(`Sum = ${x + y}`);
    }
}

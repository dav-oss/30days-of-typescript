
function add(x: number, y: number): number {
    return x + y;
}

//OR
let myAdd = function (x: number, y: number): number {
    return x + y;
};

// myAdd having the full function type
let myAdd2: (baseValue: number, increment: number) => number = function (x, y) {
    return x + y;
}
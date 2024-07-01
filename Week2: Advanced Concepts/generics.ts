// function identity (arg: any) : any {
//     return arg;
// }

// Type variable, a special kind of variable that works on types rather than values.

// function identity <Type> (arg: Type) : Type {
//     return arg;
// }

// let output = identity<string>("WorldString");

// Generic Interfaces

// interface GenericIdentityFn<Type> {
//     (arg: Type) : Type;
// }

// function identity<Type> (arg: Type) {
//     return arg;
// }

// let myIdentity: GenericIdentityFn<number> = identity;

// Generic Classes

// class GenericNumber<NumType> {
//     zeroValue: NumType;
//     add: (x: NumType, y: NumType) => NumType;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//     return x + y;
// };
interface Container<T extends HTMLElement, U extends HTMLElement[]> {
    element: T;
    children: U;
}

declare function create<T extends HTMLElement = HTMLDivElement, U extends HTMLElement[] = T[]>(
    element?: T,
    children?: U
): Container<T, U>;

const div = create();
const p = create(new HTMLParagraphElement());
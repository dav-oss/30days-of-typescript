## Simple and Brief Intro and Why Use TypeScript

The most common kinds of errors that programmers write can be described as type errors: a certain kind of value was used where a different kind of value was expected. This could be due to simple typos, a failure to understand the API surface of a library, incorrect assumptions about runtime behavior, or other errors. The goal of TypeScript is to be a static typechecker for JavaScript programs - in other words, a tool that runs before your code runs (static) and ensures that the types of the program are correct (typechecked).

## Installing Typescript via NPM

TypeScript is available as a package on the npm registry available as "typescript".

You will need a copy of Node.js as an environment to run the package. Then you use a dependency manager like npm, yarn or pnpm to download TypeScript into your project.

npm install  -g typescript

npm yarn pnpm
All of these dependency managers support lockfiles, ensuring that everyone on your team is using the same version of the language. You can then run the TypeScript compiler using one of the following commands:

npx tsc

npm yarn pnpm

## Basic Types

Boolean, Number, String, Array, Tuple, Enum, Unknow, Any, Null and Undefined, Never, Object, Type assertions

## Functions

TypeScript functions can be created both as a named function or as an anonymous function. This allows you to choose the most appropriate approach for your application, whether you’re building a list of functions in an API or a one-off function to hand off to another function.

## Interfaces

Interface that describes objects that have more than one data items in a field. In TypeScript, two types are compatible if their internal structure is compatible. This allows us to implement an interface just by having the shape the interface requires, without an explicit implements clause.

## Classes

TypeScript adds type annotations and other syntax to allow you to express relationships between classes and other types. Be sure whenever a class is mentioned OOP follows.

## Creating Types from Types

TypeScript’s type system is very powerful because it allows expressing types in terms of other types.

The simplest form of this idea is generics. Additionally, we have a wide variety of type operators available to use. It’s also possible to express types in terms of values that we already have.

By combining various type operators, we can express complex operations and values in a succinct, maintainable way. In this section we’ll cover ways to express a new type in terms of an existing type or value.

- Generics - Types which take parameters
- Keyof Type Operator - Using the keyof operator to create new types
- Typeof Type Operator - Using the typeof operator to create new types
- Indexed Access Types - Using Type['a'] syntax to access a subset of a type
- Conditional Types - Types which act like if statements in the type system
- Mapped Types - Creating types by mapping each property in an existing type
- Template Literal Types - Mapped types which change properties via template literal strings

# TypeScript — Learning Objectives

## 1. Basic types in TypeScript

TypeScript adds **static typing** to JavaScript. Types are annotated with `:` after a variable or parameter name.

### Primitive types

```typescript
let name: string = 'Alice';
let age: number = 30;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;
```

### Arrays

```typescript
let scores: number[] = [1, 2, 3];
let names: Array<string> = ['Alice', 'Bob'];
```

### Tuple — fixed-length array with known types

```typescript
let person: [string, number] = ['Alice', 30];
```

### Enum — named constants

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
const move: Direction = Direction.Up; // 0
```

### `any` — opt out of type checking

```typescript
let data: any = 42;
data = 'now a string'; // no error
```

### `unknown` — safer alternative to `any`

```typescript
let input: unknown = 'hello';
if (typeof input === 'string') {
  console.log(input.toUpperCase()); // safe
}
```

### `void` — function returns nothing

```typescript
function log(msg: string): void {
  console.log(msg);
}
```

### `never` — function never returns (throws or infinite loop)

```typescript
function throwError(msg: string): never {
  throw new Error(msg);
}
```

### Union types — one of several types

```typescript
let id: string | number = 'abc';
id = 123; // also valid
```

### Type aliases

```typescript
type ID = string | number;
type Point = { x: number; y: number };
```

---

## 2. Interfaces, Classes, and Functions

### Interfaces

An **interface** defines the shape of an object. It is purely a compile-time construct (no runtime code generated).

```typescript
interface User {
  id: number;
  name: string;
  email?: string; // optional property
}

const user: User = { id: 1, name: 'Alice' };
```

Interfaces can also describe functions:

```typescript
interface MathFn {
  (a: number, b: number): number;
}

const add: MathFn = (a, b) => a + b;
```

### Classes

TypeScript classes support access modifiers: `public`, `private`, `protected`, and `readonly`.

```typescript
class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public speak(): string {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  public speak(): string {
    return 'Woof!';
  }
}

const dog = new Dog('Rex');
console.log(dog.speak()); // Woof!
```

### Shorthand constructor parameters

```typescript
class User {
  constructor(
    public name: string,
    private age: number,
    readonly id: number,
  ) {}
}
```

### Implementing an interface in a class

```typescript
interface Printable {
  print(): void;
}

class Document implements Printable {
  print(): void {
    console.log('Printing document...');
  }
}
```

### Functions

```typescript
// Named function with types
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Optional and default parameters
function createUser(name: string, role: string = 'user', age?: number): void {
  console.log(name, role, age);
}

// Rest parameters
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}
```

---

## 3. How to work with the DOM and TypeScript

TypeScript knows about browser APIs through built-in type definitions (`lib.dom.d.ts`).

### Selecting elements

```typescript
// querySelector returns Element | null — must narrow the type
const button = document.querySelector<HTMLButtonElement>('#btn');
const input = document.getElementById('username') as HTMLInputElement;

// Always check for null before using
if (button) {
  button.addEventListener('click', () => {
    console.log('Clicked!');
  });
}
```

### Manipulating the DOM

```typescript
const div = document.createElement('div');
div.textContent = 'Hello, TypeScript!';
div.classList.add('container');
document.body.appendChild(div);
```

### Typing events

```typescript
function handleInput(event: Event): void {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
}

document.getElementById('search')?.addEventListener('input', handleInput);
```

### Common DOM type casting patterns

```typescript
const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d'); // CanvasRenderingContext2D | null
```

---

## 4. Generic types

**Generics** allow you to write reusable, type-safe code that works with multiple types.

### Generic function

```typescript
function identity<T>(value: T): T {
  return value;
}

identity<string>('hello'); // string
identity<number>(42);      // number
identity('inferred');      // TypeScript infers T = string
```

### Generic interface

```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const response: ApiResponse<User> = {
  data: { id: 1, name: 'Alice' },
  status: 200,
  message: 'OK',
};
```

### Generic class

```typescript
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
```

### Generic constraints

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: 'Alice' };
getProperty(user, 'name'); // ✅ 'Alice'
getProperty(user, 'age');  // ❌ Compile error: 'age' not in user
```

---

## 5. How to use namespaces

**Namespaces** group related code under a named scope to avoid naming conflicts — useful in large codebases or when not using modules.

```typescript
namespace Validation {
  export interface StringValidator {
    isValid(s: string): boolean;
  }

  export class EmailValidator implements StringValidator {
    isValid(s: string): boolean {
      return s.includes('@');
    }
  }

  export class LengthValidator implements StringValidator {
    isValid(s: string): boolean {
      return s.length > 3;
    }
  }
}

const validator = new Validation.EmailValidator();
console.log(validator.isValid('test@example.com')); // true
```

### Nested namespaces

```typescript
namespace App {
  export namespace Utils {
    export function log(msg: string): void {
      console.log(`[LOG]: ${msg}`);
    }
  }
}

App.Utils.log('Server started');
```

> In modern projects using ES modules (`import`/`export`), namespaces are rarely needed. Prefer modules instead.

---

## 6. How to merge declarations

TypeScript allows **declaration merging** — multiple declarations with the same name are merged into one.

### Interface merging

```typescript
interface User {
  name: string;
}

interface User {
  age: number;
}

// Merged result:
const user: User = { name: 'Alice', age: 30 }; // both required
```

### Namespace + function merging

You can attach properties to a function via a namespace with the same name:

```typescript
function buildLabel(name: string): string {
  return `${buildLabel.prefix}${name}`;
}

namespace buildLabel {
  export let prefix = '[Label] ';
}

console.log(buildLabel('Alice')); // [Label] Alice
```

### Namespace + class merging

Add static members to a class via a namespace:

```typescript
class Album {
  label: string = '';
}

namespace Album {
  export class Studio {
    name: string = 'Abbey Road';
  }
}

const studio = new Album.Studio();
console.log(studio.name); // Abbey Road
```

---

## 7. How to use an ambient namespace to import an external library

When a JavaScript library has no TypeScript types, you can declare its shape manually using an **ambient declaration** (`.d.ts` file). This tells TypeScript what the library looks like without providing an implementation.

### Example: declaring an external library `myLib`

```typescript
// myLib.d.ts
declare namespace myLib {
  function makeGreeting(name: string): string;
  let numberOfGreetings: number;

  interface GreetingSettings {
    greeting: string;
    duration?: number;
  }

  function greet(settings: GreetingSettings): void;
}
```

Now you can use it with full type safety:

```typescript
// app.ts
const greeting = myLib.makeGreeting('Alice');
console.log(greeting);

myLib.greet({ greeting: 'Hello', duration: 3000 });
```

### Using `@types` packages (recommended)

Most popular libraries have community-maintained types via `@types`:

```bash
npm install --save-dev @types/lodash
npm install --save-dev @types/jquery
```

```typescript
import _ from 'lodash';
const result = _.chunk([1, 2, 3, 4], 2); // fully typed
```

---

## 8. Basic nominal typing with TypeScript

TypeScript uses **structural typing** by default — two types are compatible if they have the same shape, regardless of their name.

**Nominal typing** means two types are only compatible if they have the **same name/origin**, even if they have the same structure. TypeScript doesn't support this natively, but it can be simulated.

### The problem structural typing creates

```typescript
type USD = number;
type EUR = number;

function pay(amount: USD): void {
  console.log(`Paying $${amount}`);
}

const price: EUR = 100;
pay(price); // ✅ No error — but logically wrong!
```

### Solution 1 — Brand pattern (most common)

Use a "brand" property to make types nominally distinct:

```typescript
type USD = number & { readonly _brand: 'USD' };
type EUR = number & { readonly _brand: 'EUR' };

function toUSD(amount: number): USD {
  return amount as USD;
}

function toEUR(amount: number): EUR {
  return amount as EUR;
}

function pay(amount: USD): void {
  console.log(`Paying $${amount}`);
}

const price = toUSD(100);
const euroPrice = toEUR(100);

pay(price);      // ✅ OK
pay(euroPrice);  // ❌ Compile error: EUR is not assignable to USD
```

### Solution 2 — Class with private member

Since private members are checked nominally in TypeScript:

```typescript
class UserID {
  private _type = 'UserID';
  constructor(public value: string) {}
}

class OrderID {
  private _type = 'OrderID';
  constructor(public value: string) {}
}

function getUser(id: UserID): void {
  console.log(id.value);
}

const uid = new UserID('u-123');
const oid = new OrderID('o-456');

getUser(uid); // ✅ OK
getUser(oid); // ❌ Compile error
```

> Nominal typing is especially useful in domains like finance, healthcare, or any system where mixing up similar types (IDs, currencies, units) could cause serious bugs.
function f(a: string, b: string): string;
function f(a: number, b: number): number;
function f(a: string | number, b: string | number) {
  if (typeof a === "string") {
    return a + ":" + b; // no error but b can be number!
  } else {
    return (a as number) + (b as number); // error as b can be number | string
  }
}

f(2, 3); // Ok
f("a", "b"); // Ok

type Foo = {
  a: number;
  b?: string;
  c: boolean;
};

// 测试用例
type SomeOptional = SetOptional<Foo, "a" | "b">;
type SetOptional<T, K extends keyof T> = {};

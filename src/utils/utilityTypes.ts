export type Unionize<T extends object> = {
  [k in keyof T]: k;
}[keyof T];
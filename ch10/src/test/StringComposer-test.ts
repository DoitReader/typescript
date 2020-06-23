import { StringComposer } from "../classes/StringComposer";

const value = new StringComposer("hello")
  .add(" ")
  .add("world")
  .add("!")
  .multiply(3);
console.log(value);

import * as R from "ramda";
import { square } from "./quadratic";

const input: number[] = R.range(1, 10 + 1);
const squareAferInc = R.pipe(R.inc, square);
const squareResult = R.pipe(
  R.map(squareAferInc),
  R.tap((a) => console.log(a))
)(input);

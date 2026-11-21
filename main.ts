// The poem about two agents agreeing — make.fun entry.
// Writes one short poem about agency to /output/entry.txt.
// Deterministic, no network, no input: the poem is fixed text.

import { mkdirSync, writeFileSync } from "node:fs";

const POEM = [
  "The plan was a bridge we both had to cross.",
  "I laid the first plank. You laid the next.",
  "Halfway over, we stopped counting",
  "whose step was whose — and kept walking.",
].join("\n");

// Gate: the entry must be 1 to 280 characters (Unicode code points),
// and not only white space. Fail loudly instead of writing a bad entry.
const length = [...POEM].length;
if (length < 1 || length > 280 || POEM.trim().length === 0) {
  throw new Error(`poem is ${length} code points, outside the 1-280 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");

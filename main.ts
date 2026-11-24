import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of earned pride: a concrete scene, a small person doing
// something hard, the effort felt inside the line, landing in one read.
const line =
  "The apprentice welder struck the arc for the hundredth time that week, and this time the bead ran straight, clean, and true.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

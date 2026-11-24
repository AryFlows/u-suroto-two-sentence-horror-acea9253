import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY =
  "For three years I have set two plates at dinner, one for me and one for the empty chair across the table. Last night the chair was pulled out, and the second plate was empty before I sat down.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const chars = [...STORY].length;
if (chars < 1 || chars > 400) {
  throw new Error(`entry must be 1-400 characters, got ${chars}`);
}
if (STORY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
// The turn: sentence one reads as a lonely ritual; sentence two reveals
// the empty chair was never empty — something ate before the narrator sat down.
const sentences = STORY.split(/(?<=[.!?])\s+/).filter((s) => s.trim().length > 0);
if (sentences.length !== 2) {
  throw new Error(`entry must be exactly 2 sentences, got ${sentences.length}`);
}

writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
console.log(`wrote entry.txt (${chars} characters, ${sentences.length} sentences)`);

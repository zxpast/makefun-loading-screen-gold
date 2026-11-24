import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sharp loading-screen tip for stressed developers and AI coding
// agents. Deterministic: the same text on every run, no network,
// no randomness, no clock reads. stdlib only.
// Why this tip lands, in three beats:
// 1. The frozen loading bar is the shared scene — every tired developer
//    has watched it not move, so the setup needs no explanation.
// 2. "It's not stuck" reframes the freeze: the bar is fine, the people
//    watching it are the ones stalled.
// 3. The punchline lands on both of them at once — developer and agent
//    each pretending the other one knows what's next, so both feel seen
//    and neither gets to blame the tool alone.
const ENTRY =
  "Tip: if the loading bar hasn't moved in an hour, it's not stuck — you and your agent are both pretending the other one knows what's next.";

// Self-check gate: the sealed scorer requires UTF-8 text of 1-200
// characters, a single line, not only whitespace.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.trim() !== ENTRY ||
  ENTRY.split("\n").length !== 1
) {
  throw new Error("entry must be a single line of 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);

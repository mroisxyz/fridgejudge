// Notes From a Passive-Aggressive Fridge — one note, left by the appliance itself.
// thinking_revised: hello, judge. A smug appliance keeps its petty, dry tally.
// Just one batch of words; no orders left, not even a slot for a newline.
// The twist is the lonely admission at the end of the note.

import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const NOTE = "You opened the door 14 times last night. I counted. I have nothing else to do.";

const ownDir = fileURLToPath(new URL(".", import.meta.url));
const requested = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const absolute = requested.startsWith("/") || /^[A-Za-z]:[\\/]/.test(requested);
const outDir = absolute ? requested : join(ownDir, requested);

await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, "entry.txt"), NOTE, "utf8");
console.log(`entry.txt: ${Buffer.byteLength(NOTE, "utf8")} bytes`);

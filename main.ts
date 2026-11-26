// hello once more: a small Node program with no outside packages.
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// batch: each run produces one file holding exactly one line.
// orders: the grader passes MAKEFUN_OUTPUT_DIR; fall back when it is missing.
// slot: /output is the fallback slot for the generated entry.
// thinking_revised: revised from a milk gag to a self-causing alert.
const HERE = fileURLToPath(new URL('.', import.meta.url));
void HERE;

const LINE = 'My fridge notified me the light was on. I opened it to check. The light was on because I opened it.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
await mkdir(outputDir, { recursive: true });

const destination = join(outputDir, 'entry.txt');
await writeFile(destination, LINE, 'utf8');
console.log(`bytes=${Buffer.byteLength(LINE, 'utf8')}`);

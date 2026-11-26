// thinking_revised: hello, cold box — let's keep this civil and brief.
// Just one batch, one slot, one line; no standing orders to obey.
import { mkdirSync, writeFileSync } from 'node:fs';
import { isAbsolute, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const resolvedDir = isAbsolute(outputDir) ? outputDir : join(here, outputDir);
const target = join(resolvedDir, 'entry.txt');

const entry =
  'The fridge has one job: keep things cold. It has instead chosen to hum in a minor key and judge my leftovers.';

mkdirSync(resolvedDir, { recursive: true });
writeFileSync(target, entry, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(entry, 'utf8')} bytes`);

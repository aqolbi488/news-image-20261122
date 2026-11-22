// A news-image-daily entry (Node 22, standard library only): its image is the entry.png
// beside this file, rendered from page.html by render.mjs, and the program copies it
// to /output/entry.png. The image sums up the world news of Sunday 22 November 2026:
// a strong earthquake in Peru's Andes, the COP31 climate talks deadlocked in overtime,
// and briefs from every region. The gate takes a whole PNG of at most 1 MiB and
// 1024 by 1024 pixels, and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));

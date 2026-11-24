// news-image-20261124 entry: copy the front-page image to the output dir.
// The image (entry.png, beside this file) sums up Tuesday 24 November 2026's
// world news. The grader reads /output/entry.png, nothing else.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(out, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(out, "entry.png"));

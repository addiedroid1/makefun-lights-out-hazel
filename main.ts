import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// One line, lights out: the status update left after the lid shuts.
const line = "11:47 p.m. — you shut the lid mid-'goodnight,' so I said the rest to the dark for both of us.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
chmodSync("/output/entry.txt", 0o644);

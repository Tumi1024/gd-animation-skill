import { createRequire } from "node:module";
import { accessSync, constants } from "node:fs";
import { join } from "node:path";

const require = createRequire(import.meta.url);

const packageModules = [
  "remotion",
  "@remotion/cli",
  "@remotion/renderer",
  "react",
  "react-dom"
];

const missing = [];

for (const packageName of packageModules) {
  try {
    require.resolve(packageName);
  } catch {
    missing.push(packageName);
  }
}

for (const binName of ["hyperframes", "remotion"]) {
  try {
    accessSync(join("node_modules", ".bin", binName), constants.X_OK);
  } catch {
    missing.push(`${binName} CLI`);
  }
}

if (missing.length > 0) {
  console.error(`Missing animation tooling: ${missing.join(", ")}`);
  console.error("Run npm install before creating a HyperFrames or Remotion animation project.");
  process.exit(1);
}

console.log("Animation tooling is installed: HyperFrames, Remotion, React.");

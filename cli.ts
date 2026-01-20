#!/usr/bin/env -S deno run -A

import { scanHttps } from "./core/scan_https.ts";
import { scanHeaders } from "./core/scan_headers.ts";
import { calculateRisk } from "./core/risk.ts";
import { ScanResult } from "./types.ts";

const args = Deno.args;

const target = args.find(a => !a.startsWith("--"));
const json = args.includes("--json");
const quiet = args.includes("--quiet");

if (!target) {
  console.log("FluxaSec — Deno Security Scanner");
  console.log("Usage:");
  console.log("  deno run -A cli.ts <domain> [--json] [--quiet]");
  Deno.exit(1);
}

const https = await scanHttps(target);
const headers = await scanHeaders(target);
const risk = calculateRisk(https, headers);

const result: ScanResult = {
  target,
  https,
  headers,
  risk
};

if (json) {
  console.log(JSON.stringify(result, null, 2));
} else if (!quiet) {
  console.log("\nFluxaSec Report");
  console.log("Target:", result.target);
  console.log("");

  console.log(https
    ? "[✓] HTTPS enabled"
    : "[✗] HTTPS not available"
  );

  console.log("\nSecurity Headers:");

  for (const [k, v] of Object.entries(headers)) {
    console.log(v ? `[✓] ${k}` : `[✗] ${k} missing`);
  }

  console.log("\nRisk level:", risk.toUpperCase());
}

Deno.exit(risk === "high" ? 1 : 0);

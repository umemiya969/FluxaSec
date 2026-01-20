export function calculateRisk(
  https: boolean,
  headers: Record<string, boolean>
): "low" | "medium" | "high" {
  let score = 0;

  if (!https) score += 3;

  for (const ok of Object.values(headers)) {
    if (!ok) score += 1;
  }

  if (score >= 5) return "high";
  if (score >= 2) return "medium";
  return "low";
}

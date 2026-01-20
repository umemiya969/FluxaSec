export interface ScanResult {
  target: string;
  https: boolean;
  headers: Record<string, boolean>;
  risk: "low" | "medium" | "high";
}

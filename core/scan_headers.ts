const SECURITY_HEADERS = [
  "strict-transport-security",
  "content-security-policy",
  "x-frame-options",
  "x-content-type-options",
  "referrer-policy"
];

export async function scanHeaders(domain: string) {
  const result: Record<string, boolean> = {};

  try {
    const res = await fetch(`https://${domain}`, {
      method: "HEAD",
      redirect: "manual"
    });

    for (const h of SECURITY_HEADERS) {
      result[h] = Boolean(res.headers.get(h));
    }
  } catch {
    for (const h of SECURITY_HEADERS) {
      result[h] = false;
    }
  }

  return result;
}

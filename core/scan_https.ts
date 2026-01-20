export async function scanHttps(domain: string): Promise<boolean> {
  try {
    const res = await fetch(`https://${domain}`, {
      method: "HEAD",
      redirect: "manual"
    });

    return res.status < 500;
  } catch {
    return false;
  }
}

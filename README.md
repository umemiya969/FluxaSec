# FluxaSec 🦕

Modern lightweight web security scanner built with Deno.

FluxaSec helps you quickly check basic web security posture:
- HTTPS availability
- Common security headers
- Simple risk scoring

Designed for developers, CI pipelines, and security learners.

---

## ✨ Features

- ⚡ Zero dependency
- 🦕 Built with Deno
- 🔐 HTTPS detection
- 🛡️ Security headers scan
- 📊 Risk level (low / medium / high)
- 🤖 CI-friendly exit code
- 📄 JSON output

---

## 🚀 Quick Run (no install)

```bash
deno run -A https://raw.githubusercontent.com/umemiya969/fluxasec/main/cli.ts example.com

📦 Local Usage
git clone https://github.com/umemiya969/fluxasec
cd fluxasec

deno task scan example.com

🧪 Example Output
FluxaSec Report
Target: example.com

[✓] HTTPS enabled

Security Headers:
[✗] content-security-policy missing
[✓] x-frame-options
[✗] strict-transport-security missing

Risk level: MEDIUM


💖 Support the Project
If FluxaSec is useful for you:
⭐ Star this repository
💸 Support via GitHub Sponsors
🧑‍💻 Contribute improvements and ideas
Your support helps keep the project alive.
---
sidebar_position: 7
title: "Step 6: Guard Mode"
description: Secure your application before going live
---

# 🔒 Step 6: Guard Mode

**Days 12-13 of your journey**

Before you put your app on the internet, you need to make sure it's secure. Guard mode helps you identify and fix security vulnerabilities.

## Purpose

In Guard mode, 1M Code acts as a **security engineer**. It will:

- Scan your code for common vulnerabilities
- Check for exposed secrets and credentials
- Review authentication and authorization
- Ensure data is handled safely

## When to Use This Mode

Use Guard mode when:

- You're preparing to deploy
- You want to check for security issues
- You're handling user data
- You need to review environment variables

## Available Tools

| Tool | Purpose |
|------|---------|
| `read` | Scan code for vulnerabilities |
| `edit` | Fix security issues |
| `browser` | Research security best practices |
| `command` | Run security scanning tools |

## Example Prompts

### Security Audit

```
Scan my codebase for security issues. 
What vulnerabilities should I fix before deploying?
```

### Secrets Check

```
Check if I've accidentally committed any API keys or secrets.
```

### Data Safety

```
Review how I'm handling user data. Is it secure?
```

### Specific Vulnerability

```
I'm using user input to build a database query. 
Is this vulnerable to SQL injection?
```

## The Security Checklist

### 1. Secrets & Credentials
- [ ] No API keys in code files
- [ ] `.env` file is in `.gitignore`
- [ ] No passwords in source control
- [ ] Environment variables used for secrets

### 2. User Input
- [ ] All inputs are validated
- [ ] No SQL injection vulnerabilities
- [ ] No XSS (cross-site scripting) vulnerabilities
- [ ] File uploads are restricted (if applicable)

### 3. Authentication (if applicable)
- [ ] Passwords are hashed, not stored plain
- [ ] Sessions expire appropriately
- [ ] No sensitive data in URLs
- [ ] Protected routes actually check auth

### 4. Data Protection
- [ ] HTTPS enforced (handled by hosting usually)
- [ ] Sensitive data not logged
- [ ] No unnecessary data collected
- [ ] Data access is controlled

### 5. Dependencies
- [ ] Dependencies are up to date
- [ ] No known vulnerabilities in packages
- [ ] Lock file is committed

## Common Security Issues

### Issue 1: Exposed Secrets
**Problem:** API keys in your code or git history.
```javascript
// BAD - Never do this
const apiKey = "sk_live_abc123xyz";
```
**Fix:** Use environment variables.
```javascript
// GOOD
const apiKey = process.env.API_KEY;
```

### Issue 2: Missing Input Validation
**Problem:** Trusting user input without checking.
```javascript
// BAD
const count = parseInt(userInput);
// Could be NaN, negative, or huge
```
**Fix:** Validate and sanitize.
```javascript
// GOOD
const count = Math.max(0, Math.min(100, parseInt(userInput) || 0));
```

### Issue 3: Hardcoded URLs
**Problem:** Development URLs in production code.
```javascript
// BAD
const api = "http://localhost:3000/api";
```
**Fix:** Use environment-based configuration.
```javascript
// GOOD
const api = process.env.NEXT_PUBLIC_API_URL;
```

### Issue 4: Insecure Dependencies
**Problem:** Using packages with known vulnerabilities.
**Fix:** Run `npm audit` and update vulnerable packages.

## Running Security Checks

1M Code can help you run automated checks:

```bash
# Check for dependency vulnerabilities
npm audit

# Check for secrets in git history
git log --all --full-history -- "*.env"

# Scan for common issues
npx audit-ci
```

## For Simple MVPs

If your MVP doesn't have:
- User accounts
- Payment processing
- Sensitive data

Then your security checklist is shorter:
- [ ] No secrets in code
- [ ] `.env` is gitignored
- [ ] Dependencies are up to date
- [ ] HTTPS will be enabled (Vercel does this)

## When Security Can Wait

For a simple MVP (like a personal todo app with no auth), some security concerns are less urgent:

**Still Important:**
- No exposed secrets
- HTTPS enabled
- Dependencies updated

**Can Wait for V2:**
- Advanced input validation (if no sensitive data)
- Rate limiting (if low traffic expected)
- Security headers (if no auth)

## Output of This Phase

By the end of Guard mode, you should have:

1. **Security checklist** — reviewed and addressed
2. **No exposed secrets** — verified clean
3. **Dependencies updated** — no known vulnerabilities
4. **Confidence** — your app is safe to deploy

## When to Move On

You're ready for **🚀 Ship** mode when:

- ✅ No secrets in codebase
- ✅ `.env` file is gitignored
- ✅ `npm audit` shows no high/critical vulnerabilities
- ✅ User inputs are validated (if applicable)
- ✅ You'd feel okay putting this on the internet

## Switching to Ship Mode

When you're ready, switch to Ship mode:

**Slash command:** `/ship`

**Or say:** "Security check complete. Let's deploy this!"

---

<div className="row">
  <div className="col col--6">
    <a className="button button--secondary button--lg button--block" href="/the-journey/step-5-test">
      ← Step 5: Test
    </a>
  </div>
  <div className="col col--6">
    <a className="button button--primary button--lg button--block" href="/the-journey/step-7-ship">
      Step 7: Ship →
    </a>
  </div>
</div>

---

:::info Video Coming Soon
A walkthrough video for Guard mode is in production. Check back soon or join our Discord for updates.
:::

---
sidebar_position: 3
title: Troubleshooting
description: Common issues and how to fix them
---

# Troubleshooting

Having issues with OneMillion Code? This guide covers the most common problems and their solutions.

## Connection Issues

### "Not connected to OneMillion"

**Symptoms:** Extension shows you're not logged in, or features don't work.

**Solutions:**
1. Click the cloud icon (☁️) in the header
2. Click "Connect to OneMillion"
3. Complete the sign-in process in your browser
4. Return to VS Code

If the browser doesn't open:
- Check if pop-ups are blocked
- Try manually going to `app.onemillion.build/extension/sign-in`

### "Session expired"

**Symptoms:** Was working, now shows logged out.

**Solutions:**
1. Click "Connect to OneMillion" to re-authenticate
2. Sessions typically refresh automatically; this is rare

### "Network error"

**Symptoms:** Messages don't send, spinner never stops.

**Solutions:**
1. Check your internet connection
2. Try a different network if possible
3. Wait a few minutes and retry
4. Check [status.onemillion.build](https://status.onemillion.build) for outages

## Extension Issues

### Extension Panel is Blank

**Symptoms:** Click the Builder Blocks icon, but nothing appears.

**Solutions:**
1. Reload VS Code: `⌘ + Shift + P` → "Reload Window"
2. If still blank, disable and re-enable the extension
3. Uninstall and reinstall the extension

### Extension Not Appearing

**Symptoms:** Can't find OneMillion Code in the sidebar.

**Solutions:**
1. Check Extensions panel (`⌘ + Shift + X`) — is it installed?
2. Search for "OneMillion Code" and ensure it's enabled
3. Reload VS Code
4. Reinstall the extension

### "Extension host terminated unexpectedly"

**Symptoms:** Error message, extension stops working.

**Solutions:**
1. Reload VS Code
2. Check for conflicting extensions
3. Update VS Code to the latest version
4. Reinstall OneMillion Code

## AI Response Issues

### "Rate limit exceeded"

**Symptoms:** Message saying you've hit usage limits.

**Solutions:**
1. Wait a few minutes for rate limits to reset
2. Per-minute limits reset after 1 minute
3. Per-hour limits reset after 1 hour
4. Daily limits reset at midnight UTC

### Slow or No Response

**Symptoms:** Sent a message, no response for a long time.

**Solutions:**
1. Check your internet connection
2. Wait longer (complex requests take time)
3. If stuck for 2+ minutes, cancel and retry
4. Try a simpler request

### Response Cut Off

**Symptoms:** 1M Code's response ends abruptly.

**Solutions:**
1. Say "continue" or "please finish"
2. This happens with very long responses
3. Breaking down requests helps prevent this

### Wrong Mode Behavior

**Symptoms:** 1M Code isn't acting like the mode suggests.

**Solutions:**
1. Check the mode selector — are you in the right mode?
2. Try switching away and back to the mode
3. Start a new conversation (click ✏️)

## Code Issues

### Changes Not Saving

**Symptoms:** 1M Code made changes, but file isn't updated.

**Solutions:**
1. Did you click "Approve"? Changes need approval
2. Check if the file is open — does it show the change?
3. Save the file (`⌘ + S`)

### Wrong File Modified

**Symptoms:** 1M Code edited the wrong file.

**Solutions:**
1. Click "Reject" if you haven't approved yet
2. Use Undo (`⌘ + Z`) if already applied
3. Be more specific: use @mentions to specify files

### Code Doesn't Work

**Symptoms:** 1M Code wrote code but it has bugs.

**Solutions:**
1. Share the error message with 1M Code
2. Switch to 🪲 Debug mode
3. Ask "This doesn't work. Here's the error: [error]"

## Build/Deployment Issues

### "npm install" Fails

**Symptoms:** Error when installing packages.

**Solutions:**
1. Delete `node_modules` and try again:
   ```bash
   rm -rf node_modules
   npm install
   ```
2. Check if you're in the right directory
3. Try `npm cache clean --force`

### "npm run dev" Doesn't Start

**Symptoms:** Development server won't start.

**Solutions:**
1. Check the error message in terminal
2. Make sure you've run `npm install`
3. Check if port 3000 is already in use
4. Try a different port: `npm run dev -- -p 3001`

### Deployment Fails

**Symptoms:** Vercel/Netlify build fails.

**Solutions:**
1. Check the build logs for specific errors
2. Ensure `npm run build` works locally
3. Check environment variables are set in production
4. Ask 1M Code for help: paste the error

## When Nothing Works

### The Nuclear Option

If everything is broken:

1. **Reload VS Code:** `⌘ + Shift + P` → "Reload Window"
2. **Restart VS Code:** Completely quit and reopen
3. **Reinstall Extension:**
   - Uninstall OneMillion Code
   - Restart VS Code
   - Install fresh from marketplace
4. **Clear Extension Data:**
   - Open command palette
   - Search "OneMillion: Clear Data"
   - Re-authenticate

### Still Having Issues?

If none of these solutions work:

1. **Check Discord:** Others may have the same issue
2. **Search GitHub Issues:** Your problem may be documented
3. **Report the Bug:** Help us fix it for everyone

Visit our [Getting Help](/community/getting-help) page for support options.

## Common Error Messages

| Error | Meaning | Solution |
|-------|---------|----------|
| "Not authenticated" | Session expired | Re-connect your account |
| "Rate limit exceeded" | Too many requests | Wait and retry |
| "Network error" | Connection failed | Check internet |
| "Model not available" | AI service issue | Try again later |
| "Context too long" | Message too big | Use smaller context |

---

<div className="row">
  <div className="col col--6">
    <a className="button button--secondary button--lg button--block" href="/reference/keyboard-shortcuts">
      ← Keyboard Shortcuts
    </a>
  </div>
  <div className="col col--6">
    <a className="button button--primary button--lg button--block" href="/community/getting-help">
      Getting Help →
    </a>
  </div>
</div>

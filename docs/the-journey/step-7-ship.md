---
sidebar_position: 8
title: "Step 7: Ship Mode"
description: Deploy your product to the internet
---

# 🚀 Step 7: Ship Mode

**Days 13-15 of your journey**

This is it. The moment everything has been building toward. Ship mode helps you deploy your product to the internet where real people can use it.

## Purpose

In Ship mode, 1M Code acts as a **DevOps engineer**. It will:

- Guide you through the deployment process
- Help configure hosting and domains
- Set up environment variables for production
- Troubleshoot deployment issues

## When to Use This Mode

Use Ship mode when:

- Your app works locally
- You've tested and secured your code
- You're ready to go live
- You need to configure hosting

## Available Tools

| Tool | Purpose |
|------|---------|
| `read` | Check configuration files |
| `edit` | Update configs for production |
| `browser` | Access hosting dashboards |
| `command` | Run deployment commands |
| `mcp` | Integrate with hosting services |

## Example Prompts

### Starting Deployment

```
I'm ready to deploy my water reminder app. 
It's a Next.js app. What's the simplest way to get it online?
```

### Vercel Setup

```
Help me deploy to Vercel. Walk me through the process step by step.
```

### Environment Variables

```
I have environment variables in .env.local. 
How do I set these up in Vercel for production?
```

### Custom Domain

```
I bought a domain called waterreminder.app. 
How do I connect it to my Vercel deployment?
```

### Deployment Issues

```
My deployment failed with this error: [error message]. 
What's wrong and how do I fix it?
```

## The Deployment Process

### Step 1: Prepare Your Code

Before deploying, ensure:
- [ ] Code is committed to git
- [ ] All changes are pushed to GitHub
- [ ] `npm run build` works locally
- [ ] Environment variables are documented

### Step 2: Choose a Platform

For most beginners, **Vercel** is the easiest:
- Free tier is generous
- Automatic HTTPS
- Easy GitHub integration
- Great for Next.js

### Step 3: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

### Step 4: Set Environment Variables

In Vercel dashboard:
1. Go to Project Settings → Environment Variables
2. Add each variable from your `.env.local`
3. Click "Save"

### Step 5: Verify Deployment

After deployment:
1. Click the provided URL
2. Test all features
3. Check on mobile
4. Share with a friend to verify

## Deployment Checklist

### Pre-Deployment
- [ ] `npm run build` succeeds locally
- [ ] All environment variables documented
- [ ] Git repository is up to date
- [ ] `.env` files are NOT committed

### During Deployment
- [ ] Connected GitHub to Vercel
- [ ] Environment variables configured
- [ ] Build succeeds on Vercel
- [ ] Preview URL works

### Post-Deployment
- [ ] Production URL works
- [ ] All features function correctly
- [ ] HTTPS is enabled (automatic on Vercel)
- [ ] Shared URL with someone to verify

## Common Deployment Issues

### Issue 1: Build Fails

**Symptoms:** "Build failed" error in Vercel.

**Common causes:**
- Missing environment variables
- Dependencies not installed correctly
- TypeScript errors that weren't caught locally

**Fix:**
```
Check the build logs in Vercel for the specific error.
Share the error with 1M Code for help.
```

### Issue 2: Environment Variables Missing

**Symptoms:** App loads but features don't work.

**Fix:**
1. Go to Vercel → Project Settings → Environment Variables
2. Add each variable from your `.env.local`
3. Redeploy the project

### Issue 3: Works Locally, Not in Production

**Symptoms:** Features work on localhost but not on the live site.

**Common causes:**
- Different environment variable names
- Hardcoded localhost URLs
- API keys not set in production

**Fix:** Check for any `localhost` references in your code.

### Issue 4: Page Not Found

**Symptoms:** Links work locally but show 404 in production.

**Common causes:**
- Case sensitivity (local is case-insensitive, production is case-sensitive)
- Missing pages in the build

**Fix:** Check file names match exactly, including capitalization.

## Your First URL

After successful deployment, you'll have a URL like:

```
https://your-app-name.vercel.app
```

This is your **production URL**. Real people can visit it. You built this.

**🎉 Congratulations! You've shipped!**

## Custom Domains (Optional)

Want a custom domain like `waterreminder.app`?

1. Buy a domain from Namecheap, Google Domains, etc.
2. In Vercel, go to Project Settings → Domains
3. Add your domain
4. Follow Vercel's DNS instructions
5. Wait for DNS to propagate (can take up to 48 hours)

This is optional for MVP. The Vercel URL works fine for now.

## Output of This Phase

By the end of Ship mode, you should have:

1. **A live URL** — accessible by anyone in the world
2. **Working product** — all features function in production
3. **Confidence** — you shipped something real

## The Moment of Truth

You are no longer someone who "is learning to code."

You are someone who **built and shipped a product**.

That URL is proof. Share it with friends. Put it on your resume. Tweet about it.

**You are a builder.**

## When to Move On

You're ready for **📣 Sell** mode when:

- ✅ Your app is live at a public URL
- ✅ All core features work in production
- ✅ You've tested the live version
- ✅ You're ready to get users

## Switching to Sell Mode

When you're ready, switch to Sell mode:

**Slash command:** `/sell`

**Or say:** "It's live! Now let's get some users."

---

<div className="row">
  <div className="col col--6">
    <a className="button button--secondary button--lg button--block" href="/the-journey/step-6-guard">
      ← Step 6: Guard
    </a>
  </div>
  <div className="col col--6">
    <a className="button button--primary button--lg button--block" href="/the-journey/step-8-sell">
      Step 8: Sell →
    </a>
  </div>
</div>

---

:::info Video Coming Soon
A walkthrough video for Ship mode is in production. Check back soon or join our Discord for updates.
:::

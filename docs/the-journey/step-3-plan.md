---
sidebar_position: 4
title: "Step 3: Plan Mode"
description: Design your architecture and development approach
---

# 🏗️ Step 3: Plan Mode

**Days 3-4 of your journey**

You know what you're building. Now let's figure out HOW you're going to build it. Plan mode helps you choose the right technologies and design a simple architecture.

## Purpose

In Plan mode, 1M Code acts as a **technical architect**. It will:

- Help you choose appropriate technologies
- Design a simple architecture
- Create a development plan
- Ensure you're not over-engineering

## When to Use This Mode

Use Plan mode when:

- You've completed your PRD in Spec mode
- You need to choose a tech stack
- You want to design the system architecture
- You're planning how to break down development

## Available Tools

| Tool | Purpose |
|------|---------|
| `read` | Read your PRD and existing files |
| `browser` | Research technologies and best practices |
| `edit` | Create architecture documents and plans |

Note: Plan mode has full edit access—you'll start creating project structure files.

## Example Prompts

### Choosing Technology

```
Based on my PRD for a water reminder app, 
what tech stack would you recommend? 
I want something simple that I can learn quickly.
```

### Architecture Design

```
Help me design a simple architecture for my water reminder app. 
I want to understand how the pieces fit together.
```

### Development Plan

```
Break down my MVP into tasks. 
What should I build first, second, and third?
```

### Project Setup

```
Create a project structure for my water reminder app. 
Set up the basic files and folders I'll need.
```

## The Recommended Stack

For beginners, 1M Code recommends the **Modern Solo-Founder Stack**:

### Frontend
| Option | Best For |
|--------|----------|
| **Next.js** | Web apps, good for learning React |
| **React Native** | Mobile apps for iOS and Android |

### Backend & Database
| Option | Best For |
|--------|----------|
| **Supabase** | All-in-one backend (database + auth + storage) |
| **Firebase** | Alternative to Supabase |

### Hosting
| Option | Best For |
|--------|----------|
| **Vercel** | Frontend hosting (free tier) |
| **Netlify** | Alternative to Vercel |

### Payments
| Option | Best For |
|--------|----------|
| **Stripe** | Accepting payments |

## Architecture Example

For a simple web app like a water reminder:

```
┌─────────────────────────────────────────┐
│              Your Browser               │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐    │
│  │    Next.js Frontend (Vercel)    │    │
│  │    - React components           │    │
│  │    - Pages and routing          │    │
│  │    - API calls                  │    │
│  └──────────────┬──────────────────┘    │
│                 │                       │
└─────────────────┼───────────────────────┘
                  │
                  ▼
    ┌─────────────────────────────┐
    │    Supabase (Backend)       │
    │    - PostgreSQL database    │
    │    - Authentication         │
    │    - Real-time subscriptions│
    └─────────────────────────────┘
```

## The Development Plan

1M Code will help you create a task breakdown like:

### Phase 1: Project Setup (Day 3-4)
- [ ] Create project with Next.js
- [ ] Set up Supabase project
- [ ] Configure environment variables
- [ ] Create basic page structure

### Phase 2: Core Features (Day 4-9)
- [ ] Build reminder settings UI
- [ ] Implement notification system
- [ ] Create water logging functionality
- [ ] Build daily counter display

### Phase 3: Polish (Day 9-10)
- [ ] Add loading states
- [ ] Handle edge cases
- [ ] Mobile responsiveness
- [ ] Error handling

## Key Decisions to Make

### 1. Web or Mobile?
- **Web:** Easier to build, easier to deploy, works everywhere
- **Mobile:** Better for notifications, but harder to build

For your first project, **choose web**. You can always build mobile later.

### 2. With Auth or Without?
- **Without:** Simpler, faster, local storage only
- **With:** User accounts, data sync across devices

For MVP, consider **starting without auth** if possible.

### 3. Realtime or Static?
- **Static:** Simpler, cheaper, easier to deploy
- **Realtime:** More complex, but better UX for some apps

Most MVPs don't need realtime features.

## Common Mistakes

### Mistake 1: Over-Engineering
**Problem:** "I need microservices and a message queue and..."
**Fix:** Keep it simple. One frontend, one database. That's usually enough.

### Mistake 2: Trendy Tech
**Problem:** Using new technologies you don't understand.
**Fix:** Use boring, well-documented tech. Next.js, Supabase, Vercel.

### Mistake 3: No Plan
**Problem:** Jumping straight to coding without a roadmap.
**Fix:** Spend 1 day planning. It saves 3 days debugging.

### Mistake 4: Too Detailed
**Problem:** Planning every single detail before starting.
**Fix:** Plan at the right level. You'll figure out details while building.

## Output of This Phase

By the end of Plan mode, you should have:

1. **Tech stack decision** documented
2. **Simple architecture diagram** (even a sketch)
3. **Development task list** broken into phases
4. **Project folder created** with basic structure

## When to Move On

You're ready for **💻 Build** mode when:

- ✅ You've chosen your tech stack
- ✅ You understand the basic architecture
- ✅ You have a development plan with phases
- ✅ Your project folder is set up
- ✅ You're ready to write code!

## Switching to Build Mode

When you're ready, switch to Build mode:

**Slash command:** `/build`

**Or say:** "I've planned my architecture. Let's start building!"

---

<div className="row">
  <div className="col col--6">
    <a className="button button--secondary button--lg button--block" href="/the-journey/step-2-spec">
      ← Step 2: Spec
    </a>
  </div>
  <div className="col col--6">
    <a className="button button--primary button--lg button--block" href="/the-journey/step-4-build">
      Step 4: Build →
    </a>
  </div>
</div>

---

:::info Video Coming Soon
A walkthrough video for Plan mode is in production. Check back soon or join our Discord for updates.
:::

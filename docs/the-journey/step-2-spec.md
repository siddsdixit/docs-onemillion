---
sidebar_position: 3
title: "Step 2: Spec Mode"
description: Define exactly what you're building
---

# 📝 Step 2: Spec Mode

**Days 2-3 of your journey**

You've identified a problem worth solving. Now it's time to define exactly what you're going to build—and more importantly, what you're NOT going to build.

## Purpose

In Spec mode, 1M Code acts as a **product manager**. It will:

- Help you write a clear product specification
- Define features and user stories
- Ruthlessly scope down to an MVP
- Create a document you can reference throughout building

## When to Use This Mode

Use Spec mode when:

- You've validated your idea in Idea mode
- You need to define specific features
- You want to write user stories
- You need to document requirements

## Available Tools

| Tool | Purpose |
|------|---------|
| `read` | Read existing files and notes |
| `browser` | Research features and patterns |
| `edit` | Create markdown specification documents |

Note: Spec mode still has limited tools. You're defining, not building yet.

## Example Prompts

### Starting a PRD

```
Help me write a product requirements document for my water reminder app. 
The core idea is: remind college students to drink water during study sessions.
```

### Defining Features

```
What are the absolute minimum features I need for a water reminder app? 
I want to ship in 2 weeks.
```

### Writing User Stories

```
Help me write user stories for my water reminder app. 
Start with the most critical ones.
```

### Scoping Down

```
I have 10 features listed. Help me cut this down to 3 that I should build first.
```

## The PRD (Product Requirements Document)

1M Code will help you create a simple PRD with:

### 1. Problem Statement
One paragraph describing what problem you're solving and for whom.

### 2. Target User
A specific description of who will use this product.

### 3. Core Features (MVP)
The 3-5 features that make up your minimum viable product.

### 4. Out of Scope
Features you explicitly will NOT build in this version.

### 5. User Stories
"As a [user], I want to [action] so that [benefit]."

### 6. Success Criteria
How will you know if this worked?

## Example PRD

```markdown
# Water Reminder App - PRD

## Problem Statement
College students forget to drink water during long study sessions, 
leading to dehydration, headaches, and reduced focus.

## Target User
Sarah, a sophomore pre-med student who studies 4-6 hours at a time. 
She knows she should drink more water but forgets when focused.

## Core Features (MVP)
1. Set a reminder interval (e.g., every 30 minutes)
2. Receive a gentle notification to drink water
3. Log when you drink (one tap)
4. See today's water intake count

## Out of Scope (V1)
- User accounts / login
- Social features
- Gamification / streaks
- Detailed analytics
- Calorie tracking
- Integration with health apps

## User Stories
- As a student, I want to set a reminder interval so I get notified to drink
- As a student, I want to log my water intake with one tap so it's not disruptive
- As a student, I want to see how much I've had today so I know if I'm on track

## Success Criteria
- User can set a reminder and receive notifications
- User can log drinks and see daily count
- App works offline
- Entire interaction takes less than 5 seconds
```

## The Scoping Mindset

### Ask These Questions

For every feature, ask:

1. **Is this essential for the core use case?** (If no, cut it)
2. **Can the user accomplish the goal without this?** (If yes, cut it)
3. **Can I add this in V2?** (If yes, cut it)
4. **Does this add complexity?** (If yes, cut it)

### The Rule of Three

Your MVP should have **no more than 3-5 core features**. If you have more, you haven't scoped ruthlessly enough.

### "Nice to Have" = "Never"

In startup speak, "nice to have" means "we'll never build it." Be honest with yourself. Either it's essential for V1 or it goes in "Out of Scope."

## Common Mistakes

### Mistake 1: Feature Creep
**Problem:** "While I'm at it, I'll also add..."
**Fix:** Every feature you add doubles complexity. Cut mercilessly.

### Mistake 2: Vague Requirements
**Problem:** "The app should be easy to use."
**Fix:** Be specific. "Setting a reminder takes less than 3 taps."

### Mistake 3: No User Stories
**Problem:** Building features without understanding the user's goal.
**Fix:** Write user stories. They force you to think about the "why."

### Mistake 4: Scope for V2 Without Shipping V1
**Problem:** Planning future versions before proving V1 works.
**Fix:** Forget V2. Focus entirely on shipping V1.

## Output of This Phase

By the end of Spec mode, you should have:

1. **A PRD document** saved in your project folder
2. **3-5 clearly defined features** for your MVP
3. **User stories** for each feature
4. **A clear "Out of Scope" list** that you won't touch

## When to Move On

You're ready for **🏗️ Plan** mode when:

- ✅ You have a written PRD document
- ✅ Your MVP has 3-5 features maximum
- ✅ Each feature has a user story
- ✅ You have a clear "Out of Scope" list
- ✅ You can explain what you're building in 30 seconds

## Switching to Plan Mode

When you're ready, switch to Plan mode:

**Slash command:** `/plan`

**Or say:** "I've defined my spec. Let's plan the architecture and tech stack."

---

<div className="row">
  <div className="col col--6">
    <a className="button button--secondary button--lg button--block" href="/the-journey/step-1-idea">
      ← Step 1: Idea
    </a>
  </div>
  <div className="col col--6">
    <a className="button button--primary button--lg button--block" href="/the-journey/step-3-plan">
      Step 3: Plan →
    </a>
  </div>
</div>

---

:::info Video Coming Soon
A walkthrough video for Spec mode is in production. Check back soon or join our Discord for updates.
:::

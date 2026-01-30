---
sidebar_position: 4
title: Tips & Tricks
description: Power user tips for getting the most out of OneMillion Code
---

# Tips & Tricks

These tips will help you work more effectively with OneMillion Code.

## Effective Prompting

### Be Specific About What You Want

**Instead of:**
> "Make a form"

**Try:**
> "Create a contact form with name, email, and message fields. Add validation to require all fields. Style it with Tailwind CSS."

### Explain the "Why"

**Instead of:**
> "Add a button"

**Try:**
> "Add a 'Save Draft' button that stores the current form data in localStorage so users don't lose their work if they accidentally close the page."

### Break Down Big Tasks

**Instead of:**
> "Build the entire checkout flow"

**Try:**
1. "First, create the shopping cart display component"
2. "Now add the ability to update quantities"
3. "Next, create the checkout form"
4. "Finally, integrate with Stripe"

## Working With Code

### Ask 1M Code to Explain Its Changes

After 1M Code writes code:
> "Explain what you just wrote. I want to understand it."

### Request Comments

> "Add comments to this code explaining what each section does."

### Ask for Simpler Versions

If the code looks complex:
> "This seems complicated. Is there a simpler way to do this?"

### Learn by Modifying

> "What if I wanted to change this to use a dropdown instead of radio buttons?"

## Debugging Like a Pro

### Share Complete Error Messages

**Instead of:**
> "It's broken"

**Try:**
> "I'm getting this error when I click submit:
> ```
> TypeError: Cannot read properties of undefined (reading 'email')
> at handleSubmit (Form.tsx:23)
> ```"

### Describe What You Expected

> "I expected clicking the button to show a modal, but nothing happens. No errors in console."

### Share What You've Tried

> "I've already tried:
> 1. Restarting the dev server
> 2. Clearing localStorage
> 3. Checking if the function is being called (it is)
> Still not working."

## Speed Tips

### Use Slash Commands

Instead of clicking through menus:
- `/build` to switch to Build mode
- `/debug` to switch to Debug mode
- `/ask` to switch to Ask mode

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `⌘/Ctrl + .` | Cycle modes |
| `Enter` | Send message |
| `Shift + Enter` | New line |
| `⌘/Ctrl + Shift + P` | VS Code command palette |

### Batch Your Requests

Instead of sending 5 separate messages:
> "Can you:
> 1. Create a Header component
> 2. Create a Footer component
> 3. Add them to App.tsx
> 4. Style them with basic CSS"

## Learning Effectively

### Ask "Why" Not Just "How"

**Instead of:**
> "Fix this bug"

**Also ask:**
> "Why did this bug happen? What should I look out for to prevent it next time?"

### Request Analogies

> "Explain React state using a real-world analogy."

### Ask for Resources

> "Where can I learn more about CSS Grid? Any good tutorials you'd recommend?"

### Embrace Not Understanding

> "I still don't get it. Can you explain it differently? Maybe with a simpler example?"

## Project Organization

### Use Clear File Names

1M Code understands your project structure. Good naming helps:
- ✅ `UserProfile.tsx`, `useAuth.ts`, `api/users.ts`
- ❌ `Component1.tsx`, `stuff.ts`, `utils.ts` (too generic)

### Keep Related Code Together

Organize by feature, not by type:
```
src/
  features/
    auth/
      LoginForm.tsx
      useAuth.ts
      authApi.ts
    dashboard/
      Dashboard.tsx
      useDashboard.ts
```

### Commit Often

After each working feature:
> "Let's commit these changes with a good message"

1M Code can help write commit messages.

## Advanced Usage

### Chain of Thought

For complex problems, ask 1M Code to think step by step:
> "Think through this problem step by step before writing any code. What are all the things we need to consider?"

### Role Play

> "Pretend you're a security expert. Review this code for vulnerabilities."

### Alternatives

> "You suggested approach A. What are two other ways we could solve this? What are the trade-offs?"

### Future-Proofing

> "I might want to add [feature] later. Should we structure the code differently now to make that easier?"

## Common Mistakes to Avoid

### Don't Skip Modes

Jumping straight to Build without Spec/Plan leads to rework. Trust the process.

### Don't Approve Blindly

Read what 1M Code proposes before clicking Approve. Understanding is part of learning.

### Don't Fear Errors

Errors are feedback, not failure. Share them with 1M Code.

### Don't Build Everything at Once

Ship the simplest thing that works. Iterate from there.

### Don't Compare Yourself

Everyone learns at different speeds. Focus on your progress, not others'.

---

<div className="row">
  <div className="col col--6">
    <a className="button button--secondary button--lg button--block" href="/using-the-extension/context-mentions">
      ← Context Mentions
    </a>
  </div>
  <div className="col col--6">
    <a className="button button--primary button--lg button--block" href="/reference/modes-quick-ref">
      Quick Reference →
    </a>
  </div>
</div>

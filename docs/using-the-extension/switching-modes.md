---
sidebar_position: 2
title: Switching Modes
description: How to switch between OneMillion Code modes
---

# Switching Modes

OneMillion Code has 11 modes, each optimized for different tasks. Learning to switch between them effectively will make you more productive.

## The Four Ways to Switch

### 1. Dropdown Menu

The easiest way for beginners:

1. Look at the mode selector left of the chat input (e.g., "💻 Build")
2. Click it to open the dropdown
3. Select the mode you want

### 2. Slash Commands

Type a slash command at the start of your message:

| Command | Mode |
|---------|------|
| `/idea` | 💡 Idea |
| `/spec` | 📝 Spec |
| `/plan` | 🏗️ Plan |
| `/build` | 💻 Build |
| `/test` | 🧪 Test |
| `/guard` | 🔒 Guard |
| `/ship` | 🚀 Ship |
| `/sell` | 📣 Sell |
| `/ask` | ❓ Ask |
| `/debug` | 🪲 Debug |
| `/orchestrator` | 🪃 Orchestrator |

The command switches the mode and clears the input, so you can type your actual message.

### 3. Keyboard Shortcut

| Operating System | Shortcut |
|------------------|----------|
| macOS | `⌘ + .` |
| Windows/Linux | `Ctrl + .` |

Each press cycles to the next mode in sequence.

### 4. Accept Suggestions

1M Code will sometimes suggest switching modes:

> "It sounds like you're ready to start building. Would you like to switch to Build mode?"
>
> [Switch to Build] [Stay in Spec]

Click to accept the suggestion.

## When to Switch Modes

### Following the Journey

During your 2.5-week journey, follow this general progression:

| Days | Mode | What You're Doing |
|------|------|-------------------|
| 1-2 | 💡 Idea | Finding your problem |
| 2-3 | 📝 Spec | Defining features |
| 3-4 | 🏗️ Plan | Designing architecture |
| 4-12 | 💻 Build | Writing code |
| 11-12 | 🧪 Test | Finding bugs |
| 12-13 | 🔒 Guard | Security check |
| 13-15 | 🚀 Ship | Deploying |
| 16-17 | 📣 Sell | Getting users |

### Using Utility Modes

Switch to utility modes anytime:

- **❓ Ask** — When you need something explained
- **🪲 Debug** — When something is broken
- **🪃 Orchestrator** — When you have a complex task

### Mode Transitions

Good transitions sound like:

> "I've defined all my features. Let's plan the architecture." → Switch to Plan

> "Wait, I don't understand what a component is." → Switch to Ask

> "The button isn't working and I see an error." → Switch to Debug

> "Okay I understand now. Let's continue building." → Switch back to Build

## Mode Memory

### Sticky Models

Each mode remembers which AI model you last used with it. When you switch back to a mode, it uses that model automatically.

### Mode Persistence

Your selected mode persists between sessions. When you close and reopen VS Code, you'll be in the same mode you left.

## Mode Switching Best Practices

### Do

- ✅ Switch to Ask mode when confused
- ✅ Switch to Debug mode when you see errors
- ✅ Follow the journey sequence for best results
- ✅ Let 1M Code suggest mode switches

### Don't

- ❌ Stay in Build mode when you should be planning
- ❌ Jump straight to Ship without testing
- ❌ Ignore mode suggestions
- ❌ Overthink which mode to use

## What Changes When You Switch

When you switch modes, 1M Code changes:

### Personality
- **Idea mode:** Curious, questioning
- **Build mode:** Productive, action-oriented
- **Ask mode:** Patient, explanatory
- **Debug mode:** Methodical, investigative

### Available Tools
Different modes have different tool access:

| Mode | read | edit | browser | command | mcp |
|------|------|------|---------|---------|-----|
| 💡 Idea | ✅ | (md only) | ✅ | ❌ | ❌ |
| 📝 Spec | ✅ | (md only) | ✅ | ❌ | ❌ |
| 🏗️ Plan | ✅ | ✅ | ✅ | ❌ | ❌ |
| 💻 Build | ✅ | ✅ | ✅ | ✅ | ✅ |
| 🧪 Test | ✅ | ✅ | ✅ | ✅ | ❌ |
| 🔒 Guard | ✅ | ✅ | ✅ | ✅ | ❌ |
| 🚀 Ship | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📣 Sell | ✅ | ✅ | ✅ | ✅ | ❌ |
| ❓ Ask | ✅ | ❌ | ✅ | ❌ | ❌ |
| 🪲 Debug | ✅ | ✅ | ✅ | ✅ | ❌ |

### Focus
Each mode has a specific focus that shapes responses:
- **Idea:** Validation and user research
- **Build:** Code quality and implementation
- **Ship:** Deployment and production readiness

## Common Questions

### Q: Can I build in Spec mode?
**A:** Technically yes, but it's not optimized for it. Spec mode limits editing to markdown files to keep you focused on planning.

### Q: What if I'm in the wrong mode?
**A:** Just switch! There's no penalty for switching modes. Do what feels right for your current task.

### Q: Does switching modes lose my conversation?
**A:** No, your conversation history is preserved across mode switches.

---

<div className="row">
  <div className="col col--6">
    <a className="button button--secondary button--lg button--block" href="/using-the-extension/chat-interface">
      ← Chat Interface
    </a>
  </div>
  <div className="col col--6">
    <a className="button button--primary button--lg button--block" href="/using-the-extension/context-mentions">
      Context Mentions →
    </a>
  </div>
</div>

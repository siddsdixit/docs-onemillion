---
sidebar_position: 1
title: The Chat Interface
description: How to interact with 1M Code
---

# The Chat Interface

The chat interface is where you'll spend most of your time in OneMillion Code. This guide explains all its parts and how to use them effectively.

## Interface Overview

```
┌─────────────────────────────────────────┐
│  ONEMILLION CODE          ⚙️ ☁️ ⋯     │  ← Header
├─────────────────────────────────────────┤
│                                         │
│  [Conversation Area]                    │  ← Messages
│                                         │
│  1M Code said:                          │
│  Here's how to build that feature...   │
│                                         │
│  You:                                   │
│  Thanks! Can you also...               │
│                                         │
├─────────────────────────────────────────┤
│  [💻 Build ▼] Type a message...    ➤   │  ← Input Area
└─────────────────────────────────────────┘
```

## The Header

At the top of the panel, you'll find:

| Icon | Purpose |
|------|---------|
| ✏️ | New conversation (clear chat) |
| ⚙️ | Settings |
| ☁️ | OneMillion account status |
| ⋯ | More options menu |

## The Conversation Area

This is where your conversation with 1M Code appears.

### Your Messages
Your messages appear with your username or "You."

### 1M Code's Responses
1M Code's responses can include:
- **Text explanations** — Written responses
- **Code blocks** — Syntax-highlighted code
- **File changes** — Proposed edits with diff view
- **Actions** — Things 1M Code wants to do (with approval buttons)

### Approval Workflow

When 1M Code wants to take an action (create a file, run a command), you'll see:

```
1M Code wants to create this file:
src/components/Button.tsx

[Approve] [Reject] [Edit]
```

- **Approve** — Let 1M Code proceed with the action
- **Reject** — Stop and discuss alternatives
- **Edit** — Modify the proposed change before applying

This keeps you in control. Nothing happens without your permission.

## The Input Area

### Mode Selector
On the left side of the input, you'll see the current mode (e.g., "💻 Build"). Click it to switch modes.

### Message Input
Type your message here. Press **Enter** to send, or **Shift+Enter** for a new line.

### Send Button
Click ➤ or press Enter to send your message.

## Sending Messages

### Simple Text
Just type and send:
```
Create a button component for me
```

### Multi-line Messages
Use Shift+Enter for multiple lines:
```
I want to create a form with:
- Name field
- Email field
- Submit button
```

### Including Code
Wrap code in backticks:
```
What does this do: `const x = 5`?
```

Or use triple backticks for blocks:
````
```javascript
function hello() {
  console.log("world");
}
```
````

## Reading Responses

### Text Responses
1M Code explains things in plain language. If you don't understand, just say "I don't get it" and it will try again.

### Code Blocks
Code appears with syntax highlighting:

```javascript
// You can copy this code
function greet(name) {
  return `Hello, ${name}!`;
}
```

Click the copy button to copy code to your clipboard.

### Diff Views
When 1M Code proposes changes to existing files, you'll see a diff:

```diff
- const count = 0;
+ const [count, setCount] = useState(0);
```
- Red lines are being removed
- Green lines are being added

### Tool Calls
When 1M Code uses tools, you'll see what it's doing:

```
🔧 Reading file: src/App.tsx
🔧 Running command: npm install axios
```

## Conversation History

### Scrolling
Scroll up to see previous messages. The conversation is preserved as long as you keep working.

### Clearing History
Click the pencil icon (✏️) in the header to start a new conversation.

### Context
1M Code remembers your entire conversation. You can reference earlier messages:
```
"Like I mentioned earlier, I want it to be blue"
```

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Enter` | Send message |
| `Shift + Enter` | New line in message |
| `⌘ + .` (Mac) / `Ctrl + .` | Cycle through modes |
| `Escape` | Cancel current action |

## Tips for Effective Chat

### Be Specific
Instead of:
> "Make it better"

Try:
> "Make the button larger and change the color to blue"

### Provide Context
Instead of:
> "It's not working"

Try:
> "The button click handler isn't firing. I added onClick but nothing happens when I click."

### Ask for Explanations
If you don't understand something:
> "Can you explain why you used useEffect here?"

### Build Incrementally
Instead of asking for everything at once, build step by step:
1. "Create a basic button"
2. "Now add a click handler"
3. "Now style it with CSS"

---

<div className="row">
  <div className="col col--6">
    <a className="button button--secondary button--lg button--block" href="/the-journey/overview">
      ← The Journey
    </a>
  </div>
  <div className="col col--6">
    <a className="button button--primary button--lg button--block" href="/using-the-extension/switching-modes">
      Switching Modes →
    </a>
  </div>
</div>

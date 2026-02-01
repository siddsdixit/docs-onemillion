---
sidebar_position: 3
title: Context Mentions
description: Reference files and folders with @ mentions
---

# Context Mentions

Context mentions let you reference specific files, folders, or your entire project when talking to 1M Code. This helps it understand exactly what you're working with.

## What Are Context Mentions?

When you type `@` in the chat, 1M Code can reference:

- **Files** — `@src/App.tsx`
- **Folders** — `@components/`
- **Workspace** — `@workspace`

This gives 1M Code direct access to your code without you having to copy-paste it.

## How to Use @ Mentions

### Basic Usage

1. Type `@` in your message
2. Start typing a file or folder name
3. Select from the autocomplete suggestions
4. Press Enter or Tab to confirm

### Examples

**Reference a specific file:**
```
Can you explain what @src/App.tsx does?
```

**Reference a folder:**
```
Look at all the components in @components/ and tell me what each does.
```

**Reference the whole project:**
```
@workspace What's the overall structure of this project?
```

## Types of Mentions

### @file

Reference a specific file:
```
@src/components/Button.tsx has a bug. The onClick isn't firing.
```

1M Code will read the file and understand its contents.

### @folder

Reference all files in a folder:
```
@src/pages/ - which of these pages handles user authentication?
```

1M Code will scan the folder contents.

### @workspace

Reference your entire project:
```
@workspace Where is the database connection configured?
```

Useful for searching across your codebase.

## When to Use Context Mentions

### Discussing Code
```
I want to add a new prop to @components/Card.tsx. 
Can you show me how?
```

### Debugging
```
@src/utils/api.ts is throwing an error on line 42. 
Here's the error: [error message]
```

### Understanding Existing Code
```
@src/hooks/ - explain what each custom hook does.
```

### Making Changes
```
Update @src/styles/theme.ts to use a darker color palette.
```

### Finding Things
```
@workspace Where do we handle form validation?
```

## Context Mention Tips

### Be Specific
The more specific your mention, the better 1M Code can help:

- ✅ `@src/components/Header.tsx`
- ⚠️ `@src/` (very broad)
- ❌ "that file" (no context)

### Combine with Questions
```
@src/App.tsx - why are we using useEffect here? 
I don't understand line 15.
```

### Multiple Mentions
You can use multiple mentions in one message:
```
I want @components/Button.tsx to have the same styling as @components/Card.tsx
```

### With Code
Combine mentions with code snippets:
```
In @src/utils/helpers.ts, can you change this:
```javascript
export const formatDate = (date) => date.toString();
```
to use proper date formatting?
```

## What 1M Code Sees

When you use a context mention, 1M Code:

1. Reads the file or folder contents
2. Understands the code structure
3. Uses that context to answer your question
4. Can propose changes to those specific files

It's like showing 1M Code your screen and pointing at something.

## Common Questions

### Q: Do I need to save files before mentioning them?
**A:** Yes, 1M Code reads the saved version of files.

### Q: Can I mention files outside my project?
**A:** No, mentions are limited to your current workspace for security.

### Q: What if the file doesn't exist?
**A:** 1M Code will let you know it can't find the file. Check the path.

### Q: Is there a limit to how much I can mention?
**A:** Mentioning very large folders or many files at once may hit context limits. Be specific when possible.

---

<div className="row">
  <div className="col col--6">
    <a className="button button--secondary button--lg button--block" href="/using-the-extension/switching-modes">
      ← Switching Modes
    </a>
  </div>
  <div className="col col--6">
    <a className="button button--primary button--lg button--block" href="/using-the-extension/tips-and-tricks">
      Tips & Tricks →
    </a>
  </div>
</div>

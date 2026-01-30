# OneMillion Code Documentation

Documentation site for OneMillion Code at [docs.onemillion.build](https://docs.onemillion.build).

## Development

### Prerequisites

- Node.js 18+
- npm or pnpm

### Install Dependencies

```bash
npm install
```

### Local Development

```bash
npm start
```

This starts a local development server at `http://localhost:3000`. Most changes are reflected live without restarting.

### Build

```bash
npm run build
```

This generates static content into the `build` directory.

### Deployment

The site is deployed to Vercel. Push to main to deploy.

## Documentation Structure

```
docs/
├── intro.md                    # Welcome page
├── getting-started/            # Getting Started section
│   ├── installation.md
│   ├── first-connection.md
│   └── your-first-task.md
├── the-journey/                # 8-Step Builder Journey
│   ├── overview.md
│   ├── step-1-idea.md
│   ├── step-2-spec.md
│   ├── step-3-plan.md
│   ├── step-4-build.md
│   ├── step-5-test.md
│   ├── step-6-guard.md
│   ├── step-7-ship.md
│   └── step-8-sell.md
├── utility-modes/              # Always-available modes
│   ├── ask-mode.md
│   ├── debug-mode.md
│   └── orchestrator-mode.md
├── using-the-extension/        # Extension usage guides
│   ├── chat-interface.md
│   ├── switching-modes.md
│   ├── context-mentions.md
│   └── tips-and-tricks.md
├── reference/                  # Quick reference
│   ├── modes-quick-ref.md
│   ├── keyboard-shortcuts.md
│   └── troubleshooting.md
└── community/                  # Community resources
    ├── crew-and-captains.md
    ├── the-dock.md
    └── getting-help.md
```

## Branding

The documentation uses the OneMillion brand:

- **Primary Color:** #0a0a0a (near black)
- **Background:** #fafafa (light gray)
- **Font:** Satoshi (from Fontshare)
- **Logo:** Builder Blocks (stacked pyramid)

See `src/css/custom.css` for full theme configuration.

## Adding New Pages

1. Create a new `.md` file in the appropriate directory
2. Add frontmatter with `sidebar_position` and `title`
3. Add the page to `sidebars.js` if needed
4. Add navigation links to related pages

## Video Content

Each mode page includes a placeholder for video content:

```markdown
:::info Video Coming Soon
A walkthrough video for this mode is in production. 
Check back soon or join our Discord for updates.
:::
```

When videos are ready, replace these with embedded video players.

## License

Copyright © 2025 OneMillion. All rights reserved.

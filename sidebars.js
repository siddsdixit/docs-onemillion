/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    "intro",
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "generated-index",
        description: "Get up and running with OneMillion Code in minutes.",
      },
      items: [
        "getting-started/installation",
        "getting-started/first-connection",
        "getting-started/your-first-task",
      ],
    },
    {
      type: "category",
      label: "The 8-Step Journey",
      link: {
        type: "doc",
        id: "the-journey/overview",
      },
      items: [
        "the-journey/step-1-idea",
        "the-journey/step-2-spec",
        "the-journey/step-3-plan",
        "the-journey/step-4-build",
        "the-journey/step-5-test",
        "the-journey/step-6-guard",
        "the-journey/step-7-ship",
        "the-journey/step-8-sell",
      ],
    },
    {
      type: "category",
      label: "Utility Modes",
      link: {
        type: "generated-index",
        description: "Always-available modes to help you learn and debug.",
      },
      items: [
        "utility-modes/ask-mode",
        "utility-modes/debug-mode",
        "utility-modes/orchestrator-mode",
      ],
    },
    {
      type: "category",
      label: "Using the Extension",
      link: {
        type: "generated-index",
        description: "Master the OneMillion Code interface.",
      },
      items: [
        "using-the-extension/chat-interface",
        "using-the-extension/switching-modes",
        "using-the-extension/context-mentions",
        "using-the-extension/tips-and-tricks",
      ],
    },
    {
      type: "category",
      label: "Reference",
      link: {
        type: "generated-index",
        description: "Quick reference guides and troubleshooting.",
      },
      items: [
        "reference/modes-quick-ref",
        "reference/keyboard-shortcuts",
        "reference/troubleshooting",
      ],
    },
    {
      type: "category",
      label: "Community",
      link: {
        type: "generated-index",
        description: "Connect with fellow builders.",
      },
      items: [
        "community/crew-and-captains",
        "community/the-dock",
        "community/getting-help",
      ],
    },
  ],
};

export default sidebars;

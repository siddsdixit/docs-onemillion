// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "OneMillion Code",
  tagline: "Your AI coding assistant for the builder journey",
  favicon: "img/favicon.ico",

  url: "https://docs.onemillion.build",
  baseUrl: "/",

  organizationName: "onemillion",
  projectName: "docs-onemillion",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/onemillion-social-card.png",
      navbar: {
        title: "OneMillion Code",
        logo: {
          alt: "OneMillion Builder Blocks Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://onemillion.build",
            label: "OneMillion.build",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/getting-started/installation",
              },
              {
                label: "The Journey",
                to: "/the-journey/overview",
              },
              {
                label: "Reference",
                to: "/reference/modes-quick-ref",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/onemillion",
              },
              {
                label: "The Dock (Alumni)",
                href: "https://app.onemillion.build/dock",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "OneMillion.build",
                href: "https://onemillion.build",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OneMillion. The million starts with one.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["bash", "typescript", "json"],
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;

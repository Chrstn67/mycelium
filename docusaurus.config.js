// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Christian HUMBERT",
  tagline: "Développeur Web Frontend",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://chrstn67.github.io/mycelium",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/mycelium",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Accueil",
        logo: {
          alt: "Logo developpeur Christian HUMBERT",
          src: "/img/Logo.jpg",
        },
        items: [
          {
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Portfolio",
            to: "/docs/portfolio",
          },

          {
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Articles",
            to: "/docs/category/articles",
          },

          {
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Projets",
            to: "/docs/category/projets",
          },

          {
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Sondages",
            to: "/docs/category/sondages",
          },

          {
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutoriels",
            to: "/docs/category/tutoriels",
          },

          {
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tips-Dev",
            to: "/docs/category/tips-dev",
          },
          {
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Histoire",
            to: "/docs/category/histoire",
          },

          {
            href: "https://www.linkedin.com/in/christian-humbert-developpeur-web/",
            label: "LinkedIn",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Sondages",
          //       to: "/sondages",
          //     },
          //     {
          //       label: "Tutoriels",
          //       to: "/tutoriels",
          //     },
          //     {
          //       label: "Articles",
          //       to: "/articles",
          //     },
          //     {
          //       label: "Projets",
          //       to: "/projets",
          //     },
          //     {
          //       label: "Astuces",
          //       to: "/astuces",
          //     },
          //   ],
          // },
          {
            title: "Réseaux",

            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/8965nuC3HM",
              },
              {
                label: "Chaîne WhatsApp",
                href: "https://whatsapp.com/channel/0029VaZwOjRIXnlifbrBE83N",
              },
            ],
          },

          {
            title: "Mentions légales",

            items: [
              {
                label: "Mentions légales",
                to: "/mentions-legales",
              },
            ],
          },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "Blog",
          //       to: "/blog",
          //     },
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/facebook/docusaurus",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Christian HUMBERT`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

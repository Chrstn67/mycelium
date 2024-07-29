// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mycelium",
  tagline: "Site de Développement Web et Web Mobile",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://chrstn67.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/mycelium",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Chrstn67", // Usually your GitHub org/user name.
  projectName: "mycelium", // Usually your repo name.

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
          // Optionally set blog post path, blog title, etc.
          path: "./blog",
          routeBasePath: "/blog",
          blogTitle: "Blog de Christian Humbert",
          blogDescription:
            "Les dernières nouvelles et articles de Christian Humbert",

          blogSidebarTitle: "Tous les articles",
          blogSidebarCount: "ALL",
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
      docs: {
        sidebar: {
          hideable: true,
        },
      },

      image: "/img/mycelium-logo.png",
      mermaid: {
        options: {
          maxTextSize: 50,
        },
        theme: { light: "neutral", dark: "forest" },
      },
      navbar: {
        title: "Accueil",
        logo: {
          alt: "Logo de Mycelium",
          src: "/img/mycelium-logo.png",
        },
        items: [
          {
            to: "/docs/portfolio",
            label: "Portfolio",
            position: "left",
          },
          {
            label: "Cours",
            position: "left",
            items: [
              {
                to: "/docs/category/html",
                label: "HTML",
              },
              // {
              //   to: "/docs/category/css",
              //   label: "CSS",
              // },
              {
                to: "/docs/category/javascript",
                label: "JavaScript",
              },
              {
                to: "/docs/category/react",
                label: "React",
              },
            ],
          },
          {
            label: "Documentation",
            position: "left",
            items: [
              {
                to: "/docs/category/documentation",
                label: "Articles généraux",
              },
              {
                to: "/docs/category/projets",
                label: "Projets",
              },
              {
                to: "/docs/category/sondages",
                label: "Sondages",
              },
              {
                to: "/docs/category/tutoriels",
                label: "Tutoriels",
              },
              {
                to: "/docs/category/histoire",
                label: "Histoire",
              },
            ],
          },
          {
            to: "/blog",
            label: "La vie des Dev",
            position: "left",
          },
          {
            href: "https://www.linkedin.com/in/christian-humbert-developpeur-web/",
            label: "LinkedIn du créateur",
            position: "right",
          },
        ],
      },

      footer: {
        style: "dark",
        links: [
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
          {
            title: "Plus",
            items: [
              {
                label: "La vie des Dev",
                to: "/blog",
              },
            ],
          },
          {
            title: "Collaborateurs",
            items: [
              {
                label: "Chrsitian HUMBERT, créateur",
                href: "https://www.linkedin.com/in/christian-humbert-developpeur-web/",
              },
            ],
          },
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

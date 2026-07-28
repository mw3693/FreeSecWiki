import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FreeSecWiki',
  tagline: 'A Free Cybersecurity Encyclopedia',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://mw3693.github.io',
  baseUrl: '/FreeSecWiki/',

  organizationName: 'mw3693',
  projectName: 'FreeSecWiki',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'FreeSecWiki',

      logo: {
        alt: 'FreeSecWiki Logo',
        src: 'img/logo.svg',
      },
    },

    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} FreeSecWiki. All rights reserved.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

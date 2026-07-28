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

  plugins: [
    [
      '@cmfcmf/docusaurus-search-local',
      {
        language: 'en',
        hashed: true,
        indexDocs: true,
        indexPages: true,
      },
    ],
  ],

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

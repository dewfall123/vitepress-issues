const { getRouterConfig } = require('./router');

module.exports = {
  title: 'vhooks',
  description: 'vue hooks',
  themeConfig: {
    lang: 'en-US',
    locales: {
      '/': {
        lang: 'en-US',
        title: 'vHooks',
        description: 'vue hooks',
        label: 'English',
        selectText: 'Languages',
        nav: [{ text: 'Guide', link: '/' }],
        sidebar: getRouterConfig(),
      },
      '/zh/': {
        lang: 'zh-CN',
        title: 'vHooks',
        description: 'vue hooks',
        label: '中文',
        selectText: '语言',
        nav: [{ text: '指南', link: '/' }],
        sidebar: getRouterConfig('/zh/'),
      },
    },
    search: {
      searchMaxSuggestions: 10,
    },
    repo: 'dewfall123/vhooks',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
  },
  alias: {},
  outDir: 'docs/',
  base: '/vhooks',
};

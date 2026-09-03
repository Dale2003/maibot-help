import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '宇航员猫娘',
  description: '舞萌 DX、太鼓之达人和群聊小游戏 Bot 使用说明',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['README.md'],
  head: [
    ['meta', { name: 'theme-color', content: '#7567f0' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/images/meow-logo.png' }]
  ],
  themeConfig: {
    logo: '/images/meow-logo.png',
    siteTitle: '宇航员猫娘',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/getting-started' },
      {
        text: '功能说明',
        items: [
          { text: 'B50 与 Rating', link: '/commands/b50' },
          { text: '成绩与分析', link: '/commands/scores' },
          { text: '曲目与谱面', link: '/commands/songs' },
          { text: '进度与段位', link: '/commands/progress' },
          { text: '工具与小游戏', link: '/commands/tools-games' },
          { text: '太鼓之达人', link: '/commands/taiko' }
        ]
      },
      { text: '指令速查', link: '/reference/commands' },
      { text: '支持作者', link: '/support' }
    ],
    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '查分器与授权', link: '/guide/prober' }
        ]
      },
      {
        text: '舞萌 DX',
        items: [
          { text: 'B50 与 Rating', link: '/commands/b50' },
          { text: '成绩与分析', link: '/commands/scores' },
          { text: '曲目与谱面', link: '/commands/songs' },
          { text: '进度与段位', link: '/commands/progress' }
        ]
      },
      {
        text: '更多功能',
        items: [
          { text: '工具与小游戏', link: '/commands/tools-games' },
          { text: '太鼓之达人', link: '/commands/taiko' }
        ]
      },
      {
        text: '参考',
        items: [
          { text: '指令速查', link: '/reference/commands' },
          { text: '支持作者', link: '/support' }
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除查询',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },
    outline: { label: '本页目录', level: [2, 3] },
    lastUpdated: { text: '最后更新' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '目录',
    socialLinks: [{ icon: 'github', link: 'https://github.com/Dale2003' }],
    footer: {
      message: '宇航员猫娘功能与指令使用说明',
      copyright: '持续更新中'
    }
  }
})

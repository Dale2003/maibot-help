/**
 * 网站配置文件
 * 包含网站基本信息和主题设置
 */

export default {
  // 网站基本信息
  site: {
    title: '宇航员猫娘帮助文档',
    description: '全面的功能指南与使用说明',
    author: '宇航员团队',
    version: '1.0.0',
  },
  
  // 主题配置
  theme: {
    // 主题颜色（与图片中保持一致）
    primaryColor: '#8a2be2', // 紫色基调
    secondaryColor: '#8e9efc', // 淡蓝色
    accentColor: '#ff5e91', // 粉红色强调色
    
    // 各个分类的颜色
    categoryColors: {
      'winter-b50': '#8e9efc', // 冬雪b50
      'dance-features': '#ffa8c5', // 舞蹈功能
      'interactive-games': '#66d9e8', // 整活游戏
      'support-author': '#b197fc', // 支持作者
    },
  },
  
  // 功能分类和对应的图标
  categories: {
    'winter-b50': {
      icon: 'Calendar',
      description: '成绩查询与排行功能',
    },
    'dance-features': {
      icon: 'Star',
      description: '舞蹈相关功能与指令',
    },
    'interactive-games': {
      icon: 'Game',
      description: '趣味互动游戏功能',
    },
    'support-author': {
      icon: 'User',
      description: '支持作者与联系方式',
    },
  },
  
  // 外部链接
  externalLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: 'github',
    },
    {
      name: '官方网站',
      url: 'https://example.com',
      icon: 'link',
    },
  ],
};

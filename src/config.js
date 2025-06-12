/**
 * 网站配置文件
 * 包含网站基本信息和主题设置
 */

export default {
  // 网站基本信息
  site: {
    title: '宇航员猫娘帮助文档',
    description: '全面的功能指南与使用说明',
    author: '宇航员Dale',
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
      'b50': '#8e9efc', // b50
      'query': '#ffa8c5', // 其他查询功能
      'interactive-games': '#66d9e8', // 整活游戏
      'support-author': '#b197fc', // 支持作者
    },
  },
  
  // 功能分类和对应的图标
  categories: {
    'b50': {
      icon: 'Calendar',
      description: '各类b50查询功能',
    },
    'query': {
      icon: 'Star',
      description: 'maimai其他查询功能',
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
      name: '宇航员Dale的主页',
      url: 'http://dale2003.cn',
      icon: 'link',
    },
  ],
};

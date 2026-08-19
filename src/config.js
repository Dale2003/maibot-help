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
      'b50': '#8e9efc',
      'scores': '#f08fb2',
      'songs': '#66c7d9',
      'progress': '#7bb7e8',
      'account': '#8fc98f',
      'games': '#f2a66f',
      'taiko': '#e78686',
      'support-author': '#b197fc',
    },
  },
  
  // 功能分类和对应的图标
  categories: {
    'b50': {
      icon: 'Calendar',
      description: 'B50、B40 与各种筛选和算法变体',
    },
    'scores': {
      icon: 'Star',
      description: '成绩列表、统计分析与推分建议',
    },
    'songs': {
      icon: 'Search',
      description: '曲目、谱面、别名与定数表查询',
    },
    'progress': {
      icon: 'DataAnalysis',
      description: '完成进度、段位与赛事功能',
    },
    'account': {
      icon: 'Setting',
      description: 'OAuth 授权、数据导出与常用工具',
    },
    'games': {
      icon: 'Game',
      description: '趣味互动游戏功能',
    },
    'taiko': {
      icon: 'Bell',
      description: '太鼓之达人查询与成绩功能',
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

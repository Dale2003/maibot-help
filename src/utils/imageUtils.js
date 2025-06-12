// 处理图片路径的工具函数

/**
 * 获取正确的图片URL
 * @param {string} path - 图片路径
 * @returns {string} - 处理后的图片URL
 */
export const getImageUrl = (path) => {
  // 处理public目录下的资源
  if (path && path.startsWith('/public/')) {
    return path.replace('/public/', '/');
  }
  
  // 如果路径是绝对路径或外部链接，直接返回
  if (path.startsWith('http') || path.startsWith('/')) {
    return path;
  }
  
  // 尝试使用导入方式处理路径
  try {
    const url = new URL(`/${path}`, import.meta.url);
    return url.href;
  } catch (error) {
    console.error('图片路径解析错误:', error);
    // 返回原始路径作为后备
    return path;
  }
};

/**
 * 动态加载项目中的图片资源
 * @param {string} path - 图片路径（相对于src或绝对路径）
 * @returns {Promise<any>} - 图片资源
 */
export const loadImage = async (path) => {
  if (!path) return null;
  
  try {
    // 处理绝对URL
    if (path.startsWith('http')) {
      return path;
    }
    
    // 如果是public目录下的资源
    if (path.startsWith('/public/')) {
      // 在生产环境中，public目录下的资源会被复制到根目录
      return path.replace('/public/', '/');
    }

    // 处理assets目录下的资源，使用import.meta.url
    if (path.includes('/assets/') || path.includes('assets/')) {
      let normalizedPath = path;
      
      // 规范化路径
      if (path.startsWith('/src/assets/')) {
        normalizedPath = path.replace('/src/assets/', '');
      } else if (path.startsWith('/src/')) {
        normalizedPath = path.replace('/src/', '');
      } else if (path.startsWith('/assets/')) {
        normalizedPath = path.replace('/assets/', '');
      } else if (path.startsWith('assets/')) {
        normalizedPath = path;
      }
      
      // 对于assets目录的资源，使用import方式导入
      try {
        // 尝试使用@作为src别名
        const imageUrl = new URL(`/src/assets/${normalizedPath}`, import.meta.url).href;
        return imageUrl;
      } catch (err) {
        console.warn('图片路径解析失败，尝试备用方法', err);
        // 返回相对路径作为备用方案
        return `/assets/${normalizedPath}`;
      }
    }
    
    // 其他类型的路径，尝试简单处理
    return path.startsWith('/') ? path : `/${path}`;
  } catch (error) {
    console.error(`图片动态加载失败: ${path}`, error);
    // 添加时间戳防止缓存
    return path + '?t=' + new Date().getTime(); // 返回原始路径作为后备，添加时间戳避免缓存问题
  }
};

/**
 * 检查路径是否为图片
 * @param {string} path - 图片路径
 * @returns {boolean} - 是否为图片
 */
export const isImagePath = (path) => {
  if (!path) return false;
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  return imageExtensions.some(ext => path.toLowerCase().endsWith(ext));
};

/**
 * 处理图片预览配置
 * @param {Array} images - 图片路径数组
 * @returns {Object} - 图片预览配置
 */
export const getPreviewConfig = (images = []) => {
  return {
    // 初始索引
    initialIndex: 0,
    // 使用传送门，避免被其他元素遮挡
    teleported: true,
    // 设置更大的z-index
    zIndex: 3000,
    // 关闭时的回调
    onClose: () => {
      console.log('图片预览关闭');
    },
    // 控制缩放
    zoomRate: 1.2,
    // 最大缩放比例
    maxScale: 7,
    // 最小缩放比例
    minScale: 0.2
  };
};

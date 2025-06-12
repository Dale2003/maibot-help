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
    // 标准化路径，移除开头的/src
    let normalizedPath = path;
    if (path.startsWith('/src/assets/')) {
      normalizedPath = path.substring(11); // 移除'/src/assets/'
    } else if (path.startsWith('/src/')) {
      normalizedPath = path.substring(5); // 移除'/src/'，保留子目录
    } else if (path.startsWith('/assets/')) {
      normalizedPath = path.substring(8); // 移除'/assets/'
    } else if (path.startsWith('/public/')) {
      // 对于public目录的资源，直接使用根路径
      return path.replace('/public/', '/');
    } else if (path.startsWith('/')) {
      normalizedPath = path.substring(1); // 移除开头的'/'
    }
      // 对于assets目录下的图片，使用Vite的动态导入功能
    try {
      // 尝试直接从assets目录导入
      // @vite-ignore 添加此注释抑制动态导入警告
      const imageModule = await import(/* @vite-ignore */ `../assets/${normalizedPath}`);
      return imageModule.default;
    } catch (err) {
      // 如果失败，尝试不添加assets前缀导入
      // @vite-ignore 添加此注释抑制动态导入警告
      const imageModule = await import(/* @vite-ignore */ `../${normalizedPath}`);
      return imageModule.default;
    }
  } catch (error) {
    console.error(`图片动态加载失败: ${path}`, error);
    return path; // 返回原始路径作为后备
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

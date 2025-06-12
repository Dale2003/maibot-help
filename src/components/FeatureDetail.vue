<template>
  <div class="feature-detail">
    <div class="detail-header">
      <h3 class="feature-name">{{ feature.name }}</h3>
      <el-tag v-if="feature.isNew" size="small" type="danger" effect="dark">新</el-tag>
    </div>
    
    <div class="detail-body">
      <div class="description" v-if="feature.description">
        <h4>功能描述</h4>
        <p>{{ feature.description }}</p>
      </div>
      
      <div class="usage" v-if="feature.usage">
        <h4>使用方法</h4>
        <div v-html="feature.usage"></div>
      </div>
      
      <div class="examples" v-if="feature.examples && feature.examples.length">
        <h4>示例</h4>        <el-carousel 
          :interval="4000" 
          type="card" 
          height="400px"
          v-if="feature.examples.length > 1"
        ><el-carousel-item v-for="(example, index) in feature.examples" :key="index">
            <div class="example-card">
              <p>{{ example.text }}</p>
              <div v-if="example.image" class="example-image">
                <el-image 
                  :src="getImage(example.image)" 
                  :alt="example.text"
                  fit="contain"
                  :preview-src-list="getPreviewList(feature.examples)"
                  :initial-index="index"
                  :preview-teleported="true"
                  :z-index="3000"
                  @error="handleImageError"
                >
                  <template #error>
                    <div class="image-error">
                      <el-icon><Picture /></el-icon>
                      <p>图片加载失败</p>
                    </div>
                  </template>
                </el-image>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
        
        <div v-else class="single-example">
          <div class="example-card" v-for="(example, index) in feature.examples" :key="index">
            <p>{{ example.text }}</p>
            <div v-if="example.image" class="example-image">
              <el-image 
                :src="getImage(example.image)" 
                :alt="example.text"
                fit="contain"
                :preview-src-list="getPreviewList(feature.examples)"
                :initial-index="index"
                :preview-teleported="true"
                :z-index="3000"
                @error="handleImageError"
              >
                <template #error>
                  <div class="image-error">
                    <el-icon><Picture /></el-icon>
                    <p>图片加载失败</p>
                    <p class="error-path">{{ example.image }}</p>
                  </div>
                </template>
              </el-image>
            </div>
          </div>
        </div>
      </div>
      
      <div class="notes" v-if="feature.notes && feature.notes.length">
        <h4>注意事项</h4>
        <ul>
          <li v-for="(note, index) in feature.notes" :key="index">{{ note }}</li>
        </ul>
      </div>
    </div>
    
    <div class="detail-footer" v-if="showFooter">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { Picture } from '@element-plus/icons-vue';
import { loadImage, getPreviewConfig } from '../utils/imageUtils';

// 图片缓存对象
const imageCache = ref({});

const props = defineProps({
  feature: {
    type: Object,
    required: true
  },
  showFooter: {
    type: Boolean,
    default: false
  }
});

// 处理图片路径
const processImagePath = async (path) => {
  if (!path) return '';
  
  // 如果已经缓存了该图片，直接返回
  if (imageCache.value[path]) {
    return imageCache.value[path];
  }
  
  console.log('尝试加载图片路径:', path);
  
  try {
    // 动态加载图片
    const imageUrl = await loadImage(path);
    // 缓存加载结果
    imageCache.value[path] = imageUrl;
    return imageUrl;
  } catch (error) {
    console.error('图片加载失败:', path, error);
    return path;
  }
};

// 为模板使用的同步版本
const getImage = (path) => {
  return imageCache.value[path] || path;
};

const handleImageError = (error) => {
  console.error('图片加载失败:', error);
};

// 为每个示例创建预览图片列表
const getPreviewList = (examples) => {
  if (!examples || !examples.length) return [];
  return examples
    .filter(example => example.image)
    .map(example => getImage(example.image));
};

// 预览配置
const previewConfig = getPreviewConfig();

onMounted(async () => {
  // 预加载示例中的图片
  if (props.feature.examples) {
    for (const example of props.feature.examples) {
      if (example.image) {
        await processImagePath(example.image);
      }
    }
  }
});
</script>

<style scoped>
.feature-detail {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.feature-detail:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.detail-header {
  padding: 15px 20px;
  background: linear-gradient(to right, var(--secondary-color), #66d9e8);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px 10px 0 0;
}

.feature-name {
  margin: 0;
  font-size: 1.2em;
}

.detail-body {
  padding: 20px;
}

.detail-body h4 {
  color: var(--primary-color);
  margin: 1px 0 10px;
  font-weight: 600;
}

.detail-body > div:first-child h4 {
  margin-top: 0;
}

.description p {
  line-height: 1.6;
  color: var(--text-regular);
}

.usage {
  background-color: #f9f9ff;
  padding: 15px;
  border-radius: 8px;
  margin-top: 5px;
}

.examples {
  margin-top: 5px;
}

.single-example {
  margin-top: 10px;
  min-height: 400px; /* 为单个示例提供充足的高度 */
}

.example-card {
  background-color: #f5f7fa;
  padding: 15px;
  border-radius: 8px;
  height: auto; /* 使卡片高度自适应内容 */
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: visible; /* 允许内容超出边界显示 */
}

.example-card p {
  margin-bottom: 10px;
  color: var(--text-regular);
}

.example-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible; /* 允许内容溢出以完整显示图片 */
  margin-top: 15px;
  min-height: 250px; /* 增加高度 */
  padding: 10px 0;
}

.example-image .el-image {
  max-width: 100%;
  max-height: none; /* 移除高度限制，让图片保持原始比例 */
  border-radius: 6px;
  object-fit: contain;
  cursor: zoom-in; /* 指示可点击放大 */
  transition: transform 0.3s;
}

.example-image .el-image:hover {
  transform: scale(1.02); /* 鼠标悬停时轻微放大 */
}

.image-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100px;
  background-color: #f5f7fa;
  border-radius: 6px;
  color: #909399;
}

.image-error .el-icon {
  font-size: 24px;
  margin-bottom: 8px;
}

.error-path {
  font-size: 12px;
  color: #c0c4cc;
  margin-top: 5px;
  word-break: break-all;
  max-width: 90%;
  text-align: center;
}

.notes ul {
  padding-left: 20px;
  color: var(--text-regular);
}

.notes li {
  margin-bottom: 5px;
}

.detail-footer {
  border-top: 1px solid #ebeef5;
  padding: 15px 20px;
  text-align: right;
}

:deep(.el-carousel__item) {
  border-radius: 8px;
  overflow: hidden;
}

:deep(.el-carousel__item--card) {
  width: 70%;
}

:deep(.el-image-viewer__wrapper) {
  z-index: 2050;
}

:deep(.el-image-viewer__img) {
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  margin: 0 auto; /* 居中显示 */
}

:deep(.el-image-viewer__actions) {
  opacity: 0.9;
  padding: 15px;
}

:deep(.el-image-viewer__next), 
:deep(.el-image-viewer__prev) {
  width: 60px;
  height: 60px;
  font-size: 36px;
  opacity: 0.7;
}

:deep(.el-image-viewer__close) {
  font-size: 32px;
}

@media (max-width: 768px) {
  :deep(.el-carousel__item--card) {
    width: 90%;
  }
  
  .detail-header {
    padding: 12px 15px;
  }
  
  .example-image {
    min-height: 200px;
    padding: 5px 0;
  }
  
  .el-carousel {
    height: 350px !important;
  }
}
</style>

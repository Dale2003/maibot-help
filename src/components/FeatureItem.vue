<template>  <div class="feature-item-container" :class="{ expanded: isExpanded }" @click="navigateToDetail">
    <div class="feature-header" @click.stop="toggleExpand" style="cursor: pointer;">
      <div class="title-area">
        <span class="feature-name">{{ feature.name }}</span>
        <el-tag v-if="feature.isNew" size="small" type="danger" effect="dark">新</el-tag>
      </div>
      <el-icon class="expand-icon" :class="{ rotated: isExpanded }">
        <ArrowDown />
      </el-icon>
    </div>
      <div v-if="isExpanded" class="feature-content" @click.stop>
      <div class="feature-description" v-if="feature.description">
        <p>{{ feature.description }}</p>
      </div>
      
      <div class="feature-usage" v-if="feature.usage">
        <h4>使用方法:</h4>
        <div v-html="feature.usage"></div>
      </div>
        <div class="feature-examples" v-if="hasExamples">
        <h4>示例:</h4>
        <p v-if="feature.examples.length === 0">暂无示例</p>
        <div v-else class="example-item" v-for="(example, idx) in feature.examples" :key="idx">
          <p>{{ example.text }}</p>
          <div v-if="example.image" class="example-image">
            <el-image 
              :src="getImage(example.image)" 
              :alt="example.text"
              fit="cover"
              lazy
              :preview-src-list="[getImage(example.image)]"
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
      
      <div class="feature-footer">
        <el-button 
          type="primary" 
          size="small" 
          @click.stop="navigateToDetail"
        >
          查看详情
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { ArrowDown, Picture } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import { loadImage } from '../utils/imageUtils';

const router = useRouter();
const props = defineProps({
  feature: {
    type: Object,
    required: true
  },
  categoryId: {
    type: String,
    required: true
  }
});

const isExpanded = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

const navigateToDetail = () => {
  router.push(`/detail/${props.categoryId}/${props.feature.id}`);
};

const hasExamples = computed(() => {
  return props.feature.examples && props.feature.examples.length >= 0;
});

// 图片缓存对象
const imageCache = ref({});

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
.feature-item-container {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  margin-bottom: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  border: none;
}

.feature-item-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(142, 158, 252, 0.05);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.feature-item-container:hover::after {
  opacity: 1;
}

.feature-item-container:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.feature-item-container:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.feature-item-container.expanded {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.feature-header {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: linear-gradient(to right, rgba(230, 240, 255, 0.5), rgba(220, 230, 255, 0.3));
}

.title-area {
  display: flex;
  align-items: center;
  gap: 8px;
}

.feature-name {
  font-weight: 500;
  color: #333;
  font-size: 1.05em;
}

.expand-icon {
  transition: transform 0.3s ease;
  color: #8e9efc;
}

.expand-icon.rotated {
  transform: rotate(180deg);
}

.feature-content {
  padding: 0 15px 15px;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.feature-description {
  margin: 10px 0;
  color: #606266;
  line-height: 1.6;
}

.feature-usage {
  background: #f9f9ff;
  border-radius: 6px;
  padding: 10px;
  margin: 10px 0;
}

.feature-usage h4, .feature-examples h4 {
  margin-top: 0;
  margin-bottom: 8px;
  color: #8a2be2;
  font-size: 0.95em;
}

.example-item {
  background: #f5f7fa;
  border-radius: 6px;
  padding: 10px;
  margin: 10px 0;
}

.example-image {
  margin-top: 10px;
  text-align: center;
}

.example-image img {
  max-width: 100%;
  border-radius: 4px;
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

.feature-footer {
  margin-top: 15px;
  text-align: right;
}
</style>

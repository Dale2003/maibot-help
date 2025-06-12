<template>
  <div class="detail-container">
    <div class="detail-header">
      <el-button @click="goBack" type="primary" plain>
        <el-icon><Back /></el-icon> 返回列表
      </el-button>
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryName }}</el-breadcrumb-item>
          <el-breadcrumb-item>{{ feature?.name || '功能详情' }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    
    <div class="detail-content">
      <div v-if="feature" class="feature-detail-wrapper">
        <h2 class="page-title">{{ feature.name }}</h2>
        
        <FeatureDetail :feature="feature" :show-footer="true">
          <template #footer>
            <div class="actions">
              <el-button type="primary" @click="goBack">
                返回功能列表
              </el-button>
              <el-button v-if="relatedFeatures.length > 0" @click="showRelated = !showRelated">
                {{ showRelated ? '隐藏' : '查看' }}相关功能
              </el-button>
            </div>
          </template>
        </FeatureDetail>
        
        <div v-if="relatedFeatures.length > 0 && showRelated" class="related-features">
          <h3>相关功能</h3>
          <div class="related-list">
            <el-card
              v-for="relatedFeature in relatedFeatures"
              :key="relatedFeature.id"
              shadow="hover"
              class="related-card"
              @click="navigateToFeature(categoryId, relatedFeature.id)"
            >
              <div class="related-feature-title">{{ relatedFeature.name }}</div>
              <div class="related-feature-desc" v-if="relatedFeature.description">
                {{ truncateText(relatedFeature.description) }}
              </div>
            </el-card>
          </div>
        </div>
      </div>
      
      <div v-else class="not-found">
        <el-empty description="未找到该功能信息">
          <template #extra>
            <el-button type="primary" @click="goBack">返回首页</el-button>
          </template>
        </el-empty>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Back } from '@element-plus/icons-vue';
import botData from '../data/botFeatures.js';
import FeatureDetail from '../components/FeatureDetail.vue';

const route = useRoute();
const router = useRouter();
const { category: categoryId, feature: featureId } = route.params;

const showRelated = ref(false);

// 查找当前功能和分类
const category = computed(() => {
  return botData.categories.find(c => c.id === categoryId);
});

const feature = computed(() => {
  if (!category.value) return null;
  return category.value.features.find(f => f.id === featureId);
});

const categoryName = computed(() => {
  return category.value ? category.value.name : '';
});

// 查找相关功能（同一分类下的其他功能）
const relatedFeatures = computed(() => {
  if (!category.value) return [];
  
  return category.value.features.filter(f => f.id !== featureId).slice(0, 3);
});

// 截断文本
const truncateText = (text, length = 50) => {
  if (!text) return '';
  return text.length > length ? text.substring(0, length) + '...' : text;
};

// 导航到相关功能
const navigateToFeature = (catId, featId) => {
  router.push(`/detail/${catId}/${featId}`);
};

// 返回按钮
const goBack = () => {
  router.push('/');
};
</script>

<style scoped>
.detail-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.detail-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 15px;
}

.breadcrumb {
  margin-left: 10px;
  flex: 1;
}

.page-title {
  color: var(--primary-color);
  margin-bottom: 20px;
  font-size: 1.8em;
  border-bottom: 2px dashed #d8d0ff;
  padding-bottom: 10px;
}

.feature-detail-wrapper {
  animation: fadeIn 0.5s ease-out;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.related-features {
  margin-top: 30px;
  animation: slideUp 0.5s ease-out;
}

.related-features h3 {
  margin-bottom: 15px;
  color: var(--primary-color);
  font-size: 1.3em;
}

.related-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
}

.related-card {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.related-card:hover {
  transform: translateY(-3px);
}

.related-feature-title {
  font-weight: 500;
  margin-bottom: 5px;
  color: var(--secondary-color);
}

.related-feature-desc {
  font-size: 0.9em;
  color: var(--text-secondary);
}

.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .detail-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .breadcrumb {
    margin-left: 0;
    width: 100%;
    overflow-x: auto;
  }
  
  .related-list {
    grid-template-columns: 1fr;
  }
  
  .actions {
    flex-wrap: wrap;
  }
}
</style>

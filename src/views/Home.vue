<template>
  <div class="home-container">
    <HeaderBanner @search="handleSearch" />
    
    <CategoryNav 
      :categories="categories" 
      :active-category="activeCategoryId" 
      @change="handleCategoryChange" 
    />
    
    <div class="categories-container">      <div 
        v-for="category in filteredCategories" 
        :key="category.id" 
        :id="category.id"
        class="category-section"
      >
        <div class="category-header" 
          :style="{ backgroundColor: getCategoryColor(category.name) }"
          @click="toggleCategory(category.id)"
          :class="{ 'expandable': true, 'expanded': expandedCategories.includes(category.id) }"
        >
          <h2 class="category-title">{{ category.name }}</h2>
          <el-icon class="expand-icon"><ArrowDown v-if="!expandedCategories.includes(category.id)" /><ArrowUp v-else /></el-icon>
        </div>
        <div class="features-list" v-show="expandedCategories.includes(category.id)">
          <FeatureItem 
            v-for="feature in filterFeatures(category.features)" 
            :key="feature.id" 
            :feature="feature" 
            :category-id="category.id"
          />
        </div>
      </div>
      
      <div v-if="filteredCategories.length === 0" class="no-results">
        <el-empty description="没有找到相关功能" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import HeaderBanner from '../components/HeaderBanner.vue';
import CategoryNav from '../components/CategoryNav.vue';
import FeatureItem from '../components/FeatureItem.vue';
import botData from '../data/botFeatures.js';
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue';

const categories = ref(botData.categories);
const activeCategoryId = ref('');
const searchQuery = ref('');
const expandedCategories = ref([]);

// 处理分类导航选择
const handleCategoryChange = (categoryId) => {
  activeCategoryId.value = categoryId;
  
  if (categoryId) {
    // 展开被点击的分类
    if (!expandedCategories.value.includes(categoryId)) {
      expandedCategories.value.push(categoryId);
    }
    
    // 滚动到相应的分类部分
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

// 切换分类的展开/折叠状态
const toggleCategory = (categoryId) => {
  if (expandedCategories.value.includes(categoryId)) {
    expandedCategories.value = expandedCategories.value.filter(id => id !== categoryId);
  } else {
    expandedCategories.value.push(categoryId);
  }
};

// 处理搜索
const handleSearch = (query) => {
  searchQuery.value = query;
  
  // 如果有搜索查询，自动展开所有分类以显示结果
  if (query) {
    expandedCategories.value = categories.value.map(category => category.id);
  }
};

// 在页面加载时，如果URL中有锚点，展开对应的分类
watch(() => activeCategoryId.value, (newVal) => {
  if (newVal && !expandedCategories.value.includes(newVal)) {
    expandedCategories.value.push(newVal);
  }
}, { immediate: true });

// 初始化时检查URL中的hash
const initFromHash = () => {
  const hash = window.location.hash.substring(1);
  if (hash) {
    const matchingCategory = categories.value.find(cat => cat.id === hash);
    if (matchingCategory) {
      activeCategoryId.value = hash;
      expandedCategories.value.push(hash);
    }
  }
};

// 组件挂载后初始化
setTimeout(initFromHash, 0);

// 筛选分类
const filteredCategories = computed(() => {
  if (!searchQuery.value) {
    return categories.value;
  }
  
  const query = searchQuery.value.toLowerCase();
  return categories.value.filter(category => {
    // 检查分类名称是否匹配
    if (category.name.toLowerCase().includes(query)) {
      return true;
    }
    
    // 检查该分类中的功能是否匹配
    return category.features.some(feature => {
      return feature.name.toLowerCase().includes(query) || 
        (feature.description && feature.description.toLowerCase().includes(query));
    });
  });
});

// 筛选功能
const filterFeatures = (features) => {
  if (!searchQuery.value) return features;
  
  const query = searchQuery.value.toLowerCase();
  return features.filter(feature => {
    return feature.name.toLowerCase().includes(query) || 
      (feature.description && feature.description.toLowerCase().includes(query));
  });
};

// 为每个分类生成不同的颜色
const getCategoryColor = (categoryName) => {
  const colors = {
    '各类b50': '#8e9efc',
    '其他查询': '#ffa8c5',
    '整活游戏': '#66d9e8',
    '支持作者': '#b197fc'
  };
  
  return colors[categoryName] || '#8e9efc';
};
</script>

<style scoped>
.home-container {
  padding: 20px;
}

.categories-container {
  max-width: 1200px;
  margin: 0 auto;
}

.category-section {
  margin-bottom: 40px;
  scroll-margin-top: 70px;
}

.category-header {
  padding: 12px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.category-header.expandable:hover {
  opacity: 0.9;
}

.expand-icon {
  font-size: 18px;
  color: white;
  transition: transform 0.3s;
}

.category-header.expanded .expand-icon {
  transform: rotate(180deg);
}

.category-title {
  color: white;
  margin: 0;
  font-size: 1.5em;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: hidden;
  transition: max-height 0.5s ease;
}

.no-results {
  padding: 30px;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .home-container {
    padding: 15px;
  }
  
  .category-header {
    padding: 10px 15px;
  }
  
  .category-title {
    font-size: 1.3em;
  }
}
</style>

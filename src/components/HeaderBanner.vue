<template>
  <div class="banner-container">
    <div class="banner-content">
      <div class="banner-title">
        <h1>宇航员猫娘帮助</h1>
        <p>全面的功能指南与使用说明</p>
      </div>
      <div class="banner-search">
        <el-input
          v-model="searchText"
          placeholder="搜索功能..."
          prefix-icon="Search"
          clearable
          @input="onSearch"
        />
      </div>
    </div>
    
    <div class="banner-image">
      <!-- 可以放置一个与主题相关的图片 -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';

const searchText = ref('');
const emit = defineEmits(['search']);

const onSearch = () => {
  emit('search', searchText.value);
};
</script>

<style scoped>
.banner-container {
  background: linear-gradient(135deg, #b197fc 0%, #8e9efc 50%, #66d9e8 100%);
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 25px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(138, 43, 226, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.banner-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('../assets/images/banner-pattern.png');
  background-size: cover;
  opacity: 0.1;
  z-index: 0;
}

.banner-content {
  position: relative;
  z-index: 2;
  flex: 1;
}

.banner-title h1 {
  color: white;
  font-size: 2.5em;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.banner-title p {
  color: rgba(255, 255, 255, 0.9);
  margin: 10px 0 20px;
  font-size: 1.2em;
}

.banner-search {
  max-width: 400px;
}

.banner-image {
  position: relative;
  z-index: 1;
  width: 200px;
  height: 150px;
}

@media (max-width: 768px) {
  .banner-container {
    flex-direction: column;
    padding: 20px;
  }
  
  .banner-title h1 {
    font-size: 2em;
  }
  
  .banner-search {
    max-width: 100%;
    margin-top: 15px;
  }
  
  .banner-image {
    display: none;
  }
}
</style>

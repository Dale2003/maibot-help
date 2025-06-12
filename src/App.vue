<template>
  <div class="app-container">
    <header class="app-header">
      <div class="header-content">
        <div class="logo">
          <h1>宇航员猫娘帮助</h1>
        </div>
        <div class="header-actions">
          <el-button size="small" type="primary" round @click="scrollToTop">
            <el-icon><ArrowUp /></el-icon> 返回顶部
          </el-button>
        </div>
      </div>
    </header>
    
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ArrowUp } from '@element-plus/icons-vue';
import AppFooter from './components/AppFooter.vue';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(180deg, #e6f7ff 0%, #d9f0fc 100%);
}

.app-header {
  background-color: rgba(100, 140, 250, 0.9);
  color: white;
  padding: 15px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.logo h1 {
  margin: 0;
  font-size: 1.6em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.main-content {
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  position: relative;
}

/* 页面切换动画 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@media (max-width: 768px) {
  .app-header {
    padding: 12px 15px;
  }
  
  .logo h1 {
    font-size: 1.3em;
  }
  
  .main-content {
    padding: 15px;
  }
}
</style>

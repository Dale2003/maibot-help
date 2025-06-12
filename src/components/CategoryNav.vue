<template>
  <div class="nav-container">
    <el-menu
      :default-active="activeCategory"
      class="category-nav"
      mode="horizontal"
      @select="handleSelect"
      :ellipsis="false"
      background-color="transparent"
      text-color="#555"
      active-text-color="#8a2be2"
    >
      <el-menu-item v-for="category in categories" :key="category.id" :index="category.id">
        {{ category.name }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  categories: {
    type: Array,
    required: true
  },
  activeCategory: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['change']);

const handleSelect = (categoryId) => {
  emit('change', categoryId);
};
</script>

<style scoped>
.nav-container {
  margin-bottom: 20px;
  border-radius: 10px;
  overflow-x: auto;
}

.category-nav {
  display: flex;
  border-bottom: 2px dashed #d8d0ff;
  padding: 0 10px;
  justify-content: center;
}

:deep(.el-menu--horizontal) {
  border-bottom: none;
}

:deep(.el-menu-item) {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-weight: 500;
  position: relative;
}

:deep(.el-menu-item.is-active) {
  font-weight: bold;
  position: relative;
}

:deep(.el-menu-item.is-active::after) {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 3px;
  background-color: #8a2be2;
  border-radius: 3px;
}

@media (max-width: 768px) {
  .category-nav {
    justify-content: flex-start;
  }
}
</style>

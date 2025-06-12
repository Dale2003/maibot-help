<template>
  <div class="feature-card" @click="$emit('click')">
    <div class="feature-card-header">
      <h3>{{ title }}</h3>
      <span class="feature-tag" v-if="tag">{{ tag }}</span>
    </div>
    
    <div class="feature-card-content">
      <p>{{ description }}</p>
    </div>
    
    <div class="feature-card-footer">
      <el-button size="small" type="primary" @click.stop="$emit('detail')">
        查看详情
      </el-button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: '暂无描述'
  },
  tag: {
    type: String,
    default: ''
  }
});

defineEmits(['click', 'detail']);
</script>

<style scoped>
.feature-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 15px;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15);
}

.feature-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.feature-card-header h3 {
  margin: 0;
  color: #606266;
  font-size: 1.1em;
}

.feature-tag {
  background-color: #ff5e91;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8em;
}

.feature-card-content {
  flex: 1;
  color: #909399;
  font-size: 0.95em;
  line-height: 1.5;
}

.feature-card-footer {
  margin-top: 15px;
  text-align: right;
}
</style>

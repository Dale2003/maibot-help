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
        <h4>示例</h4>
        <el-carousel 
          :interval="4000" 
          type="card" 
          height="200px"
          v-if="feature.examples.length > 1"
        >
          <el-carousel-item v-for="(example, index) in feature.examples" :key="index">
            <div class="example-card">
              <p>{{ example.text }}</p>
              <div v-if="example.image" class="example-image">
                <el-image 
                  :src="example.image" 
                  :alt="example.text"
                  fit="cover"
                  :preview-src-list="[example.image]"
                />
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
        
        <div v-else class="single-example">
          <div class="example-card" v-for="(example, index) in feature.examples" :key="index">
            <p>{{ example.text }}</p>
            <div v-if="example.image" class="example-image">
              <el-image 
                :src="example.image" 
                :alt="example.text"
                fit="cover"
                :preview-src-list="[example.image]"
              />
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
import { computed } from 'vue';

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
  margin: 15px 0 10px;
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
  margin-top: 15px;
}

.examples {
  margin-top: 15px;
}

.single-example {
  margin-top: 10px;
}

.example-card {
  background-color: #f5f7fa;
  padding: 15px;
  border-radius: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  overflow: hidden;
}

.example-image .el-image {
  max-height: 150px;
  border-radius: 6px;
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
}

:deep(.el-carousel__item--card) {
  width: 50%;
}

@media (max-width: 768px) {
  :deep(.el-carousel__item--card) {
    width: 90%;
  }
  
  .detail-header {
    padding: 12px 15px;
  }
}
</style>

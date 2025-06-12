<template>  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>宇航员猫娘介绍</h3>
        <p>宇航员猫娘是一个多功能的舞萌DX查询BOT，包括各种成绩查询、B50计算、特制分数列表、查看定数变化等实用工具，同时也有一些有趣的互动小游戏。</p>
        <p>宇航员猫娘共有十个官方群，总使用人数1w+。如果你也是舞萌DX爱好者，欢迎尝试宇航员猫娘bot哦！</p>
      </div>
      
      <div class="footer-section">
        <h3>联系我们</h3>
        <p>如有问题或建议，请联系宇航员Dale，QQ：947095724</p>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>© {{ currentYear }} 宇航员Dale | 由 <a href="#" class="accent">宇航员猫娘</a> 提供技术支持</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.app-footer {
  background-color: rgba(100, 140, 250, 0.9);
  color: white;
  padding: 30px 20px 15px;
  margin-top: 40px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 30px;
}

.footer-section {
  flex: 1;
  min-width: 250px;
}

/* 宇航员猫娘介绍部分占更多空间 */
.footer-section:first-child {
  flex: 2;
}

.footer-section h3 {
  margin-bottom: 15px;
  color: white;
  position: relative;
  display: inline-block;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: white;
}

.footer-section p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

.footer-section.links ul {
  list-style: none;
  padding: 0;
}

.footer-section.links li {
  margin-bottom: 8px;
}

.footer-section.links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section.links a:hover {
  color: white;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9em;
}

.accent {
  color: #ffd2e6;
  font-weight: 500;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 20px;
  }
  
  .footer-section {
    min-width: 100%;
  }
}
</style>

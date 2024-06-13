<h1 align="center">
NavBar - 导航栏
</h1>


<script setup>
import { defineAsyncComponent } from 'vue';
import '../packages/style.css';

const NavbarDemoBasic = defineAsyncComponent(() => {
  return import('../demos/navbar/DemoBasic')
});
</script>

## 基本用法 {#demo-basic}

<ClientOnly>
<NavbarDemoBasic></NavbarDemoBasic>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/navbar/DemoBasic.jsx

</details>

## API {#api}

### 属性 {#api-props}

| 属性        | 说明 | 类型      | 默认值   |
|-----------|----|---------|-------|
| collapsed | 折叠 | boolean | false |

### 事件 {#api-emit}

| 事件名称     | 说明      | 回调参数            |
|----------|---------|-----------------|
| onChange | 数据变化时回调 | function(value) |



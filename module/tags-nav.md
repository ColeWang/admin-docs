<h1 align="center">
TagsNav - 标签导航
</h1>

<script setup>
import { defineAsyncComponent } from 'vue';
import '../packages/style.css';

const TagsNavDemoBasic = defineAsyncComponent(() => {
  return import('../demos/tags-nav/DemoBasic')
})
</script>

## 基本用法

<ClientOnly>
<TagsNavDemoBasic></TagsNavDemoBasic>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/tags-nav/DemoBasic.jsx

</details>

## API

### 属性

| 属性       | 说明    | 类型       | 默认值 |
|----------|-------|----------|-----|
| homeName | 保留的标签 | string   | -   |
| route    | 当前路由  | Route    | -   |
| tags     | 展示的标签 | Route[\] | \[] |

### 事件

| 事件名称    | 说明      | 回调参数                    |
|---------|---------|-------------------------|
| onClick | 标签点击回调  | function(current)       |
| onClose | 数据变化时回调 | function(values, name?) |

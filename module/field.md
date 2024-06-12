<h1 align="center">
Field - 原子组件
</h1>

内部组件。

---

- 原子组件，统一 Form、Table 等组件里面的字段定义

<script setup>
import { defineAsyncComponent } from 'vue';
import '../packages/style.css';

const FieldDemoBasic = defineAsyncComponent(() => {
  return import('../demos/field/DemoBasic')
})
</script>

## 基本用法

<ClientOnly>
<FieldDemoBasic></FieldDemoBasic>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/field/DemoBasic.jsx

</details>


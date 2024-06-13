<h1 align="center">
BaseField - 原子组件
</h1>

内部组件，应避免直接使用。

<script setup>
import { defineAsyncComponent } from 'vue'
import '../packages/style.css'

const BaseFieldDemoCustom = defineAsyncComponent(() => {
  return import('../demos/base-field/DemoCustom')
})
</script>

## 自定义并使用 {#demo-custom}

<ClientOnly>
<BaseFieldDemoCustom></BaseFieldDemoCustom>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/base-field/DemoCustom.jsx

</details>



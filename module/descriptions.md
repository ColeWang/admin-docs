<h1 align="center">
Descriptions - 描述列表
</h1>

Descriptions 列表组件，提供一个更加方便快速的方案来构建描述列表。
开发中免不了需要定义一些雷同的属性，支持了 columns 列展示的逻辑，支持与插槽混用。
封装了请求网络的行为，Descriptions 会将 props.params 中的数据默认带入到请求中，如果接口恰好与我们的定义相同，实现一个查询会非常简单。

---

- Descriptions.Item 只是一个语法糖，不参与实际的渲染。

<script setup>
import { defineAsyncComponent } from 'vue'
import '../packages/style.css'

const DescriptionsDemoBasic = defineAsyncComponent(() => {
  return import('../demos/descriptions/DemoBasic')
})
const DescriptionsDemoColumns = defineAsyncComponent(() => {
  return import('../demos/descriptions/DemoColumns')
})
</script>

## 基本用法 {#demo-basic}

<ClientOnly>
<DescriptionsDemoBasic></DescriptionsDemoBasic>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/descriptions/DemoBasic.jsx

</details>

## Columns 形式 {#demo-columns}

<ClientOnly>
<DescriptionsDemoColumns></DescriptionsDemoColumns>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/descriptions/DemoColumns.jsx

</details>

## API {#api}

### 属性 {#api-props}

| 属性         | 说明      | 类型                             | 默认值 |
|------------|---------|--------------------------------|-----|
| dataSource | 数据      | object                         | -   |
| columns    | 配置项     | array                          | -   |
| emptyText  | 空数据时的展示 | string                         | -   |
| request    | 数据获取    | (params) => { success, data }) | -   |

### 事件 {#api-emit}

| 事件名称           | 说明   | 回调参数            |
|----------------|------|-----------------|
| onLoad         | 成功回调 | function(value) |
| onRequestError | 失败回调 | function(error) |


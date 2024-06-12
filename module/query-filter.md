<h1 align="center">
QueryFilter - 筛选表单
</h1>

QueryFilter 是 Form 的一个变体，表现与 Form 相同。有些时候表单要与别的组件组合使用，就需要一些特殊形态的表单。QueryFilter
解决了配合组件使用的问题。
Table 中默认支持了 QueryFilter 作为筛选表单。


<script setup>
import { defineAsyncComponent } from 'vue'
import '../packages/style.css'

const QueryFilterDemoBasic = defineAsyncComponent(() => {
  return import('../demos/query-filter/DemoBasic')
})
const QueryFilterDemoCollapse = defineAsyncComponent(() => {
  return import('../demos/query-filter/DemoCollapse')
})
</script>

## 基本用法 {#demo-basic}

<ClientOnly>
<QueryFilterDemoBasic></QueryFilterDemoBasic>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/query-filter/DemoBasic.jsx

</details>

## 可折叠的 {#demo-collapse}

<ClientOnly>
<QueryFilterDemoCollapse></QueryFilterDemoCollapse>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/query-filter/DemoCollapse.jsx

</details>

## API {#api}

### 属性 {#api-props}

| 属性                | 说明                             | 类型                      | 默认值       |
|-------------------|--------------------------------|-------------------------|-----------|
| layout            | 布局                             | 'default' \| 'vertical' | 'default' |
| loading           | 加载状态                           | boolean                 | false     |
| span              | 固定 Col 的 span, 传的话宽度不会随屏幕变化而变化 | number                  | -         |
| gutter            | Antd Row 的 gutter              | number                  | 24        |
| labelWidth        | label 的宽度                      | number \| 'auto'        | 80        |
| submitter         | 提交按钮相关配置                       | object                  | -         |
| collapsed         | 折叠的状态                          | boolean                 | true      |
| showCollapse      | 是否展示折叠                         | boolean                 | false     |
| defaultRowsNumber | 折叠保留的行数                        | number                  | 1         |

### 事件 {#api-emit}

| 事件名称       | 说明         | 回调参数            |
|------------|------------|-----------------|
| onCollapse | 折叠的回调      | function(value) |
| onResize   | size 变化的回调 | function(value) |

### 方法 {#api-event}

| 名称              | 描述         | 参数                                        |
|-----------------|------------|-------------------------------------------|
| getFormInstance | 获取 Form 实例 | () => [object](./form.html#form-instance) |




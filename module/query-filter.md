<h1 align="center">
QueryFilter - 筛选表单
</h1>

QueryFilter 是 Form 的一个变体，表现与 Form 相同。有些时候表单要与别的组件组合使用，就需要一些特殊形态的表单。QueryFilter
解决了配合组件使用的问题。
Table 中默认支持了 QueryFilter 作为筛选表单。


<script setup>
import { defineAsyncComponent } from 'vue';
import '../packages/style.css';

const QueryFilterDemo1 = defineAsyncComponent(() => {
  return import('../demos/query-filter/demo-1')
});
const QueryFilterDemo2 =defineAsyncComponent(() => {
  return import('../demos/query-filter/demo-2')
});
</script>

## 基本用法

<ClientOnly>
<QueryFilterDemo1></QueryFilterDemo1>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/query-filter/demo-1.jsx

</details>

## 可折叠

<ClientOnly>
<QueryFilterDemo2></QueryFilterDemo2>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/query-filter/demo-2.jsx

</details>


## API

### 属性

| 属性                | 说明                | 类型                      | 默认值       |
|-------------------|-------------------|-------------------------|-----------|
| layout            | 布局                | 'default' \| 'vertical' | 'default' |
| loading           | 加载状态              | boolean                 | false     |
| gutter            | Antd Row 的 gutter | number                  | 24        |
| labelWidth        | label 的宽度         | number                  | 80        |
| submitText        | 提交按钮文字            | string                  | '查询'      |
| resetText         | 重置按钮文字            | string                  | '重置'      |
| collapseRender    | 是否渲染折叠按钮          | boolean                 | false     |
| collapsed         | 折叠的状态             | boolean                 | true      |
| defaultRowsNumber | 折叠保留的行数           | number                  | 1         |

### 事件

| 事件名称       | 说明    | 回调参数            |
|------------|-------|-----------------|
| onCollapse | 折叠的回调 | Function(value) |

### 方法

| 名称                | 描述         |
|-------------------|------------|
| getFormInstance() | 获取 Form 实例 |
| getValues()       | 获取值        |




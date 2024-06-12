<h1 align="center">
Form - 表单
</h1>

Form 在原来的 [Antd Form](https://www.antdv.com/components/form-cn) 的基础上增加了一些语法糖，快速开发表单。

---

- 如果想要设置默认值，请使用 initialValues，任何直接使用组件 value 和 onChange 的方式都有可能导致 model 值绑定失效
- 如果想要监听某个值，建议使用 onValuesChange
- Form 只是 Antd Form 的封装，如果要使用自定义的组件可以用 Antd Form.Item 包裹后使用，支持混用

<script setup>
import { defineAsyncComponent } from 'vue'
import '../packages/style.css'

const FormDemoBasic = defineAsyncComponent(() => {
  return import('../demos/form/DemoBasic')
})
const FormDemoLayout = defineAsyncComponent(() => {
  return import('../demos/form/DemoLayout')
})
const FormDemoGrid = defineAsyncComponent(() => {
  return import('../demos/form/DemoGrid')
})
const FormDemoNamePath = defineAsyncComponent(() => {
  return import('../demos/form/DemoNamePath')
})
const FormDemoSubmitter = defineAsyncComponent(() => {
  return import('../demos/form/DemoSubmitter')
})
const FormDemoValidation = defineAsyncComponent(() => {
  return import('../demos/form/DemoValidation')
})
const FormDemoDependency = defineAsyncComponent(() => {
  return import('../demos/form/DemoDependency')
})
</script>

## 基本用法

<ClientOnly>
<FormDemoBasic></FormDemoBasic>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/form/DemoBasic.jsx

</details>

## 布局

<ClientOnly>
<FormDemoLayout></FormDemoLayout>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/form/DemoLayout.jsx

</details>

## 栅格化布局

<ClientOnly>
<FormDemoGrid></FormDemoGrid>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/form/DemoGrid.jsx

</details>

## 嵌套结构

<ClientOnly>
<FormDemoNamePath></FormDemoNamePath>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/form/DemoNamePath.jsx

</details>

## 自定义提交

<ClientOnly>
<FormDemoSubmitter></FormDemoSubmitter>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/form/DemoSubmitter.jsx

</details>

## 数据验证

<ClientOnly>
<FormDemoValidation></FormDemoValidation>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/form/DemoValidation.jsx

</details>

## 数据联动

<ClientOnly>
<FormDemoDependency></FormDemoDependency>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/form/DemoDependency.jsx

</details>

## API

### 属性

| 属性            | 说明                        | 类型       | 默认值                  |
|---------------|---------------------------|----------|----------------------|
| initialValues | 初始值 key 对应 Form.Item name | object   | -                    |
| submitOnReset | 提交后是否重置表单数据               | boolean  | false                |
| grid          | 开启 grid 模式                | boolean  | false                |
| rowProps      | grid 模式下传递给 Antd Row      | object   | { gutter: \[32, 0] } |
| transform     | onFinish 前对数据的处理          | function | function(values)     |

### 事件

| 事件名称           | 说明          | 回调参数             |
|----------------|-------------|------------------|
| onValuesChange | 数据变化时回调     | function(values) |
| onSubmit       | 提交时触发       | function(event)  |
| onFinish       | 提交并且校验通过的回调 | function(values) |
| onReset        | 重置表单回调      | function(values) |

### 方法

| 名称                | 描述         |
|-------------------|------------|
| getFormInstance() | 获取 Form 实例 |

### Form 实例

| 名称                                  | 描述         |
|-------------------------------------|------------|
| formInstanceRef                     | Form 实例对象  |
| model                               | 表单数据       |
| formProps                           | Form props |
| setModelValue(namePath, value)      | 设置表单数据     |
| getModelValue(namePath)             | 获取表单数据     |
| updateModelValue(namePath, updater) | 更新表单数据     |
| deleteModelValue(namePath)          | 删除表单数据     |
| submit()                            | 提交表单       |
| validate(names)                     | 校验表单       |
| resetFields(names)                  | 重置部分表单     |
| resetForm()                         | 重置整个表单     |

## Submitter

### 属性

| 属性                | 说明          | 类型      | 默认值   |
|-------------------|-------------|---------|-------|
| loading           | 确认按钮的记载状态   | boolean | false |
| space             | 两个按钮的间距     | number  | 8     |
| submitText        | 确认按钮的文本     | string  | '提交'  |
| resetText         | 重置按钮的文本     | string  | '重置'  |
| submitButtonProps | 确认按钮的 props | object  | -     |
| resetButtonProps  | 重置按钮的 props | object  | -     |

### 事件

| 事件名称       | 说明     | 回调参数            |
|------------|--------|-----------------|
| onSubmit   | 点击提交事件 | function(event) |
| onReset    | 点击重置事件 | function(event) |
| onKeyPress | 键盘事件   | function(event) |

## Form.Group

| 属性    | 说明         | 类型             | 默认值 |
|-------|------------|----------------|-----|
| title | 表单组的 title | string \| Slot | -   |

## Form.Dependency

| 属性       | 说明             | 类型     | 默认值 |
|----------|----------------|--------|-----|
| name     | 需要拿到的 namePath | array  | -   |
| colProps | Col 的参数 props  | object | -   |



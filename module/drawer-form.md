<h1 align="center">
DrawerForm - 抽屉表单
</h1>


DrawerForm 是 Form 的一个变体，表现与 Form 相同，是 Form 于 [Antd Drawer](https://www.antdv.com/components/drawer-cn) 的结合。
DrawerForm 本质上仍然是个表单，所以无法通过 footer 来自定义页脚。

---

- DrawerForm 提供了 trigger 来减少 state 的使用，如果你需要使用 state 来控制可以使用 open 和 close 来控制打开与关闭
- DrawerForm 的 onFinish 与 Form 不同，是个 Promise，如果你正常返回 Promise 会自动为你设置按钮的加载效果

<script setup>
import { defineAsyncComponent } from 'vue'
import '../packages/style.css'

const DrawerFormDemo1 = defineAsyncComponent(() => {
  return import('../demos/drawer-form/demo-1')
})
const DrawerFormDemo2 = defineAsyncComponent(() => {
  return import('../demos/drawer-form/demo-2')
})
</script>

## 基本用法

<ClientOnly>
<DrawerFormDemo1></DrawerFormDemo1>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/drawer-form/demo-1.jsx

</details>

## 可控的

<ClientOnly>
<DrawerFormDemo2></DrawerFormDemo2>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/drawer-form/demo-2.jsx

</details>

## API

### 属性

| 属性             | 说明                            | 类型               | 默认值        |
|----------------|-------------------------------|------------------|------------|
| layout         | 布局模式                          | string           | 'vertical' |
| open(v-model)  | 对话框是否可见                       | boolean          | false      |
| title          | 标题                            | string           | -          |
| width          | 弹框宽度                          | number           | 512        |
| maskClosable   | 点击蒙层是否关闭                      | boolean          | true       |
| destroyOnClose | 关闭是否销毁内容                      | boolean          | true       |
| extraProps     | Drawer 的 Props                | object           | -          |
| trigger        | 用于触发 Modal 打开的 dom，一般是 button | function \| slot | -          |
| submitter      | 提交按钮相关配置                      | object           | -          |

### 事件

| 事件名称            | 说明            | 回调参数            |
|-----------------|---------------|-----------------|
| onOpen          | 打开的回调         | function()      |
| onOpenChange    | open 变化的回调    | function(value) |
| onCancel        | 关闭的回调         | function()      |
| onAfterClose    | 关闭后的回调        | function()      |
| onLoadingChange | loading 变化的回调 | function(value) |

### 方法

| 名称                | 描述         |
|-------------------|------------|
| getFormInstance() | 获取 Form 实例 |
| open()            | 打开         |
| close()           | 关闭         |


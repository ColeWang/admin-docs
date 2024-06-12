<h1 align="center">
Fields - 表单项
</h1>

Form 自带了一些表单项, 这些组件本质上是 [Antd Form.Item](https://www.antdv.com/components/form-cn#form-item) 和 组件的结合。
可以把他们当成一个 Antd Form.Item 来使用，并且支持各种 props。
每个表单项都支持 fieldProps 属性来支持设置输入组件的 props。
支持了 placeholder 的透传，你可以直接在组件上设置 placeholder。

---

- Field 组件是 BaseField + Form.Item 的结合
- Field 的拓展组件可将 props 直接作用到 formItemProps，所以我们给 Field 拓展组件设置的 props 其实是 Antd Form.Item
  的，fieldProps 才是组件的
- width 指的是输入框的宽度，不包括 label

<script setup>
import { defineAsyncComponent } from 'vue'
import '../packages/style.css'

const FieldsDemoBasic = defineAsyncComponent(() => {
  return import('../demos/fields/DemoBasic')
})
</script>

## 基本用法 {#demo-basic}

<ClientOnly>
<FieldsDemoBasic></FieldsDemoBasic>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/fields/DemoBasic.jsx

</details>

## API {#api}

### 通用的属性 {#api-props}

| 属性            | 说明                      | 类型                                             | 默认值    |
|---------------|-------------------------|------------------------------------------------|--------|
| width         | Field 的宽度，支持了一些枚举       | number \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' | -      |
| mode          | 组件模式                    | 'read' \| 'edit'                               | 'edit' |
| text          | 显示文字 和 value 对称         | any                                            | -      |
| placeholder   | 占位符                     | string                                         | -      |
| valueEnum     | Select 的枚举值             | object                                         | -      |
| colProps      | 开启 grid 模式并传递给 Antd Col | object                                         | -      |
| fieldProps    | Antd 组件的 props          | object                                         | -      |
| formItemProps | Form.Item 组件的 props     | object                                         | -      |

```js
const SizeEnum = {
    xs: 104,
    sm: 216,
    md: 328,
    lg: 440,
    xl: 552
}
```

<h1 align="center">
Table - 表格
</h1>

Table 在 [Antd Table](https://www.antdv.com/components/table-cn) 上进行了一层封装，支持了一些预设，并且封装了一些行为。
Table 是为了解决项目中需要写很多 table 的样板代码的问题，所以在其中做了封装了很多常用的逻辑。
依托于 Form 的能力，Table 的搜索变得简单。request 是 Table 最重要的 API，request 会接收一个对象。对象中必须要有 data。
如果需要手动分页 total 也是必需的。 request 会接管 loading 的设置，同时在查询表单查询时和 params 参数发生修改时重新执行。
查询表单的值和 params 参数也会带入。

---

- 不需要请求数据的话，可以直接填入参数 dataSource

<script setup>
import { defineAsyncComponent } from 'vue'
import '../packages/style.css'

const TableDemoBasic = defineAsyncComponent(() => {
  return import('../demos/table/DemoBasic')
})
const TableDemoHideSearch = defineAsyncComponent(() => {
  return import('../demos/table/DemoHideSearch')
})
const TableDemoHideToolbar = defineAsyncComponent(() => {
  return import('../demos/table/DemoHideToolbar')
})
const TableDemoSelection = defineAsyncComponent(() => {
  return import('../demos/table/DemoSelection')
})
const TableDemoCustomSearch = defineAsyncComponent(() => {
  return import('../demos/table/DemoCustomSearch')
})
</script>

<style>
.ant-table-wrapper table {
  display: table !important;
  text-align: start !important;
  border-collapse: separate !important;
  margin: 0 !important;
  border-radius: 8px 8px 0 0 !important;
}

.ant-table-wrapper td, .ant-table-wrapper th {
  border: none !important;
}

.ant-table-wrapper a {
  text-decoration: none;
}

.ant-pagination-options {
  margin-top: 0 !important;
}
</style>

## 基本用法 {#demo-basic}

<ClientOnly>
<TableDemoBasic></TableDemoBasic>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/table/DemoBasic.jsx

</details>

## 隐藏搜索栏 {#demo-hide-search}

<ClientOnly>
<TableDemoHideSearch></TableDemoHideSearch>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/table/DemoHideSearch.jsx

</details>

## 隐藏工具栏 {#demo-hide-toolbar}

<ClientOnly>
<TableDemoHideToolbar></TableDemoHideToolbar>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/table/DemoHideToolbar.jsx

</details>

## 可选择的 {#demo-selection}

<ClientOnly>
<TableDemoSelection></TableDemoSelection>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/table/DemoSelection.jsx

</details>

## 自定义搜索栏 {#demo-custom-search}

<ClientOnly>
<TableDemoCustomSearch></TableDemoCustomSearch>
</ClientOnly>

<details>
<summary>显示代码</summary>

<<< @/demos/table/DemoCustomSearch.jsx

</details>


## API {#api}

### 属性 {#api-props}

| 属性                 | 说明                     | 类型                                                                                      | 默认值                    |
|--------------------|------------------------|-----------------------------------------------------------------------------------------|------------------------|
| title              | 表单 Title               | string \| Slot({ loading, pageData, pagination })                                       | -                      |
| rowSelection       | 行选择                    | object \| boolean                                                                       | false                  |
| scroll             | 滚动设置                   | object                                                                                  | \{ x: 'max-content' \} |
| emptyText          | 数据为空时的展示               | string                                                                                  | -                      |
| search             | 搜索表单, false 为不展示       | [object](./query-filter.html#api) \| Slot([props](./query-filter.html#api)) \| false    | -                      |
| manualRequest      | 是否需要手动触发首次请求           | boolean                                                                                 | false                  |
| request            | 数据的获取                  | (params, paginate, filter, sort) => Promise.resolve(\{ data, success, total })          | -                      |
| params             | request 的参数 修改之后会触发更新  | object                                                                                  | -                      |
| beforeSearchSubmit | 表单提交前的数据处理             | (values) => object                                                                      | -                      |
| postData           | 对 request 获取的数据进行处理    | (data, params, paginate, filter, sort) => array                                         | -                      |
| toolbar            | 是否显示工具栏                | boolean                                                                                 | true                   |
| options            | 设置栏的参数, false 为不展示     | object \| false                                                                         | -                      |
| actions            | 工具栏的扩展项, 显示在右侧, 设置栏的左侧 | ({ loading, pageData, pagination }) => VNode \| Slot({ loading, pageData, pagination }) | -                      |
| settings           | 自定义设置栏                 | ({ loading, pageData, pagination }) => VNode \| Slot({ loading, pageData, pagination }) | -                      |
| extra              | Table 上面的扩展栏           | ({ loading, pageData, pagination }) => VNode \| Slot({ loading, pageData, pagination }) | -                      |
| alert              | 自定义的, 选中后操作栏的左侧        | ({ keys, rows, cleanSelected }) => VNode \| Slot({ keys, rows, cleanSelected })         | -                      |
| alertOptions       | 选中后操作栏的右侧              | ({ keys, rows, cleanSelected }) => VNode \| Slot({ keys, rows, cleanSelected })         | -                      |

### Options {#api-props-options}

| 属性      | 说明       | 类型      | 默认值   |
|---------|----------|---------|-------|
| reload  | 显示刷新按钮   | boolean | true  |
| export  | 显示导出按钮   | boolean | false |
| density | 显示大小设置按钮 | boolean | true  |
| setting | 自定表头设置按钮 | boolean | true  |

### 事件 {#api-emit}

| 事件名称             | 说明            | 回调参数                                       |
|------------------|---------------|--------------------------------------------|
| onChange         | Table 数据变化的回调 | function(paginate, filters, sorter, extra) |
| onPaginateChange | 分页变化的回调       | function(paginate)                         |
| onFilterChange   | 过滤的回调         | function(filter)                           |
| onSortChange     | 排序变化的回调       | function(sort)                             |
| onLoadingChange  | loading 变化的回调 | function(value)                            |
| onExport         | 点击导出的回调       | function(params)                           |
| onSizeChange     | size 变化的回调    | function(size)                             |
| onColumnsChange  | 表头变化的回调       | function(columns)                          |
| onLoad           | 数据请求成功的回调     | function(data)                             |
| onRequestError   | 数据请求失败的回调     | function(error)                            |
| onFinish         | 表单提交回调        | function(values)                           |
| onReset          | 表单重置回调        | function(params)                           |

### 方法 {#api-event}

| 名称             | 描述                      | 参数                                |
|----------------|-------------------------|-----------------------------------|
| size           | size                    | -                                 |
| columns        | columns                 | -                                 |
| reload         | 重置表单 参数为 true 时分页回到 第一页 | (resetCurrent?: boolean ) => void |
| getRequestData | 获取筛选项的数据                | () => void                        |
| cleanSelected  | 取消选中                    | () => void                        |

## Columns 列定义 {#columns}

| 名称            | 描述                        | 类型                                     | 默认值    |
|---------------|---------------------------|----------------------------------------|--------|
| title         | 列头显示文字                    | string                                 | -      |
| dataIndex     | 列数据在数据项中对应的路径             | string                                 | -      |
| key           | dataIndex 的变体             | string                                 | -      |
| customRender  | 渲染函数                      | function(text, record, number, column) | -      |
| filters       | 表头的筛选菜单项                  | object\[]                              | -      |
| sorter        | 排序函数                      | function \| boolean                    | -      |
| onFilter      | 作为 filter 事件使用            | function                               | -      |
| fixed         | 固定列                       | 'left' \| 'right'                      | -      |
| width         | 列宽度                       | string \| number                       | -      |
| ellipsis      | 自动省略                      | boolean \| { showTitle?\: boolean }    | false  |
| copyable      | 可复制的                      | boolean                                | false  |
| disable       | 禁用表头的 显示隐藏                | boolean                                | false  |
| search        | 是否为搜索项                    | boolean                                | false  |
| hideInTable   | 在 Table 中隐藏               | boolean                                | false  |
| valueType     | 搜索的输入框类型                  | string                                 | 'text' |
| initialValue  | 初始值                       | all                                    | -      |
| valueEnum     | 选择框的枚举值 同时也根据 value 返回对应项 | object                                 | -      |
| fieldProps    | 输入框的 props                | object                                 | -      |
| formItemProps | Form.Item 的 props         | object                                 | -      |

## Action.Group {#action-group}

| 属性   | 说明                | 类型     | 默认值 |
|------|-------------------|--------|-----|
| max  | 子元素超过 max 将生成下拉菜单 | number | 2   |
| size | 间距                | number | 8   |

## Action {#action}

| 属性   | 说明 | 类型                                | 默认值       |
|------|----|-----------------------------------|-----------|
| type | 类型 | 'primary' \| 'warning' \| 'error' | 'primary' |


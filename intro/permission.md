<h1 align="center">
权限控制
</h1>


## Route 元信息

### 属性

| 属性         | 说明                      | 类型                   |
|------------|-------------------------|----------------------|
| title      | 导航栏 title               | string               |
| icon       | 导航栏 icon                | string \| () => Icon |
| hideInMenu | 设为 true 后在左侧菜单不会显示该页面选项 | boolean              |
| hltInName  | 非当前路由的 高亮菜单 name        | string               |
| access     | 可访问该页面的权限数组             | array                |
| notCache   | KeepAlive 不缓存此路由        | boolean              |

## 菜单权限

getMenuList 函数会处理菜单的权限逻辑，控制菜单的显示隐藏

```jsx
const routes = [
    {
        name: 'test',
        meta: {
            // 例如 此路由只有管理员可见
            access: ['admin']
        }
    }
]

// 登陆人员的权限
const userinfo = {
    access: ['admin']
}

// getMenuList 起到过滤权限的作用
const menus = getMenuList(routes, userinfo.access)
```

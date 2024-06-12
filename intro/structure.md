<h1 align="center">
目录结构
</h1>

```
├── assets                    公用资源
├── boot                      app initialization code
├── components                组件
│   ├─ base-field                 Field 原子组件
│   ├─ descriptions               Descriptions 组件
│   ├─ form                       Form 组件
│   ├─ icon                       Icon 组件
│   ├─ loading                    Loading 组件
│   ├─ locale-provider            LocaleProvider 组件
│   ├─ resize-observer            ResizeObserver 组件
│   ├─ table                      Table 组件
│   └─ transition                 Transition 组件
├── config                    配置项
├── css                       公用样式
├── layout                    布局文件
├── locale                    多语言
├── permission                权限相关
├── router                    路由
├── stores                    公用数据
├── utils                     工具库
├── views                     页面
├── App.tsx                   App
└── main.js                   入口文件
```

## Layout 目录结构

```
├── components                组件
│   ├─ avatar                     头像组件
│   ├─ breadcrumb                 面包屑组件
│   ├─ container                  页面容器组件
│   ├─ fullscreen                 全屏组件
│   ├─ language                   多语言组件
│   ├─ navbar                     导航组件
│   ├─ sidebar                    侧边栏组件
│   └─ tags-nav                   标签导航组件
├── hooks                     公用 hooks
├── style                     样式文件
├── Layout.jsx                整体布局处理
├── index.jsx                 处理组件间关联逻辑并与外部逻辑承接
└── utils.js                  工具库
```

<h1 align="center">
目录结构
</h1>

```
├── api                       后端请求
├── assets                    公用资源
├── common                    公用类库
├── components                组件
│   ├─ base-field                 Field 原子组件
│   ├─ form                       Form 组件
│   ├─ icon                       Icon 组件
│   ├─ loading                    Loading 组件
│   └─ table                      Table 组件
├── config                    配置项
├── hooks                     钩子函数库
├── icons                     自定义 SVG 的 Icon
├── lang                      多语言相关 (暂未使用)
├── layout                    布局文件 
├── permission                权限相关 (暂未使用)
├── router                    路由
├── store                     公用数据
├── styles                    公用样式
├── utils                     工具库
├── views                     页面
├── App.tsx                   App
└── main.js                   入口文件
```

## 布局视图

<img  src="@/layout.jpg"/>

## Layout 目录结构

```
├── components                组件
│   ├─ avatar                     头像组件
│   ├─ breadcrumb                 面包屑组件
│   ├─ fullscreen                 全屏组件
│   ├─ navbar                     导航组件
│   ├─ sidebar                    侧边栏组件
│   └─ tags-nav                   标签导航组件
├── style                     样式文件
├── AppContent.jsx            中心容器
├── AppMain.jsx               整体布局处理
├── index.jsx                  处理组件间关联逻辑并与外部逻辑承接
└── utils.js                  工具库
```

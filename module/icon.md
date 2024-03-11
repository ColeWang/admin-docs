<h1 align="center">
Icon - 图标
</h1>

自定义图标。

---

<script setup>
import { defineAsyncComponent } from 'vue';
import '../packages/style.css';

const ExitFullscreenOutlined = defineAsyncComponent(() => {
  return import('../demos/icons/ExitFullscreenOutlined')
});
const FullscreenOutlined = defineAsyncComponent(() => {
  return import('../demos/icons/FullscreenOutlined')
});
const HamburgerOutlined = defineAsyncComponent(() => {
  return import('../demos/icons/HamburgerOutlined')
});
const MenuOutlined = defineAsyncComponent(() => {
  return import('../demos/icons/MenuOutlined')
});
const PasswordFilled = defineAsyncComponent(() => {
  return import('../demos/icons/PasswordFilled')
});
const UserFilled = defineAsyncComponent(() => {
  return import('../demos/icons/UserFilled')
});
</script>
<style>
.icon-wrap {
width: 172px;
font-size: 32px;
text-align: center;
display: inline-block;
padding: 20px 0;
}
.name {
font-size: 14px;
margin: 10px 0;
}
</style>

<div class="icon-wrap">
<ExitFullscreenOutlined></ExitFullscreenOutlined>
<div class="name">ExitFullscreenOutlined</div>
</div>
<div class="icon-wrap">
<FullscreenOutlined></FullscreenOutlined>
<div class="name">FullscreenOutlined</div>
</div>
<div class="icon-wrap">
<HamburgerOutlined></HamburgerOutlined>
<div class="name">HamburgerOutlined</div>
</div>
<div class="icon-wrap">
<MenuOutlined></MenuOutlined>
<div class="name">MenuOutlined</div>
</div>
<div class="icon-wrap">
<PasswordFilled></PasswordFilled>
<div class="name">PasswordFilled</div>
</div>
<div class="icon-wrap">
<UserFilled></UserFilled>
<div class="name">UserFilled</div>
</div>

<h1 align="center">
Icon - 图标
</h1>

自定义图标。

---

<script setup>
import { defineComponent } from 'vue';
import {
ExitFullscreenOutlined,
FullscreenOutlined,
HamburgerOutlined,
MenuOutlined,
PasswordFilled,
UserFilled
} from '../packages/index.js';
import '../packages/style.css';
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

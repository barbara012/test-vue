<template>
<el-row class="park-nav">
  <el-col :span="15">
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <el-submenu index="1">
            <template slot="title">{{city}}</template>
            <el-menu-item index="city-全部-all">全部</el-menu-item>
            <el-menu-item index="city-广州-gz">广州</el-menu-item>
            <el-menu-item index="city-北京-bj">北京</el-menu-item>
          </el-submenu>
      <el-submenu index="2">
        <template slot="title">{{device}}</template>
        <el-menu-item index="device-1">设备</el-menu-item>
        <el-menu-item index="device-2">APPS</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><span>异常数据统计</span></el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="9">
    <div class="grid-content bg-purple-dark park-search">
      <el-input
        placeholder="输入设备号或者日期"
        icon="search"
        v-model="inputValue"
        :on-icon-click="handleIconClick">
      </el-input>
    </div>
  </el-col>
</el-row>
</template>
<script>
    export default {
      data () {
        return {
          activeIndex: '1',
          city: '选择城市',
          device: '管理',
          inputValue: ''
        }
      },
      methods: {
        handleSelect (key) {
          key = key.split('-')
          let name = key[0]
          let value = key[1]
          // let id = key[2]
          if (name === 'city') {
            this.city = value
          }
        },
        handleIconClick (ev) {
          console.log(ev)
        }
      }
    }
</script>

<template>
  <div class="common-page science-application">
    <div class="page-navbar">
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
      </mt-navbar>

      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
          <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
          <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
          <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'测试 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

  </div>
</template>

<script>
  import index from './index.js'

  export default index
</script>

<style lang="less">
  @import "index.less";
</style>

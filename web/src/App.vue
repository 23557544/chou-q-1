<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <div style="margin-top: 10px;">
          <el-button>
            <i class="el-icon-document-add"></i>
            <span>添加</span>
          </el-button>
          <el-button>
            <i class="el-icon-connection"></i>
            <span>连接</span>
          </el-button>
          <el-button>
            <i class="el-icon-link"></i>
            <span>断开</span>
          </el-button>
          <el-button>
            <i class="el-icon-delete"></i>
            <span>删除</span>
          </el-button>
        </div>
      </el-header>
      <el-container class="main">
        <el-aside class="aside">
          <el-tree :data="sources">
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <i :class="data.connect? 'el-icon-info text-success' : 'el-icon-info'"></i>
              <span :class="data.connect? 'text-success' : 'text-normal'" style="margin-left: 5px">{{ node.label }}</span>
            </span>
          </el-tree>
        </el-aside>
        <el-main style="margin: 0; padding: 0;">
          <el-tabs v-model="activeTab" type="border-card">
            <el-tab-pane label="武汉测试环境MySQL" name="first">武汉测试环境MySQL</el-tab-pane>
            <el-tab-pane label="武汉SIT环境MySQL" name="second">武汉SIT环境MySQL</el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
      <el-footer class="footer" style="height: 28px;">
        <p>中国电子系统技术有限公司 - 数据中台业务部 - 酬勤数据运维平台</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element)

export default {
  name: 'App',
  data() {
    return {
      sources: [{label: '武汉测试环境MySQL', connect: true}, {label: '武汉SIT环境MySQL', connect: false}],
      activeTab: 'first'
    }
  }
}
</script>

<style>
html, body {width: 100%; height: 100%; margin: 0; padding: 0;}
.header {background-color: #f0f0f0; border-bottom: 1px solid #bbbbbb;}
.main {position: absolute; width: 100%; top: 60px; bottom: 28px;}
.footer {position: absolute; width: 100%; bottom: 0; background-color: #f0f0f0; border-top: 1px solid #d7d7d7; line-height: 26px; text-align: center;}
.aside {border-right: 4px solid #f0f0f0;}
p {font-size: 12px; margin: 0;}
.custom-tree-node {font-size: 12px;}
.text-success {color: #67C23A;}
</style>

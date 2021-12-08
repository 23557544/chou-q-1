<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-header class="header">
        <div style="float: left; margin-top: 10px">
          <el-button @click="dialogVisible = true" icon="el-icon-document-add"> 添加 </el-button>
          <el-button icon="el-icon-connection"> 连接 </el-button>
          <el-button icon="el-icon-link"> 断开 </el-button>
          <el-button icon="el-icon-delete"> 删除 </el-button>
        </div>
        <div class="logo">
          <img :src="icon.logo" alt />
        </div>
      </el-header>
      <el-container class="main">
        <el-aside class="aside">
          <el-tree :data="sources" @node-click="openSource">
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <i :class="data.connect ? 'el-icon-info text-success' : 'el-icon-info'"></i>
              <span :class="data.connect ? 'text-success' : 'text-normal'" style="margin-left: 5px">{{ node.label }}</span>
            </span>
          </el-tree>
        </el-aside>
        <el-main style="margin: 0; padding: 0">
          <el-tabs v-model="activeTab" type="border-card" @tab-remove="closeSource" :closable="tabs.length > 1" style="height: calc(100% - 2px)">
            <el-tab-pane v-for="tab in tabs" :label="tab.label" :name="tab.id" :key="tab.id">
              <component :is="tab.component" v-bind="tab.bind" v-on="tab.on"></component>
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
      <el-footer class="footer" height="26px">
        <p>中国电子系统技术有限公司 - 数据中台业务部 - 酬勤数据运维平台</p>
      </el-footer>
    </el-container>
    <el-dialog title="添加数据源" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addSource">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Vue from "vue";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Element);

export default {
  name: "App",
  data() {
    return {
      icon: {
        logo: require('../src/assets/logo.svg')
      },
      sources: [
        { label: "武汉测试环境MySQL", connect: true, type: "MySQL" },
        { label: "武汉SIT环境MySQL", connect: false, type: "MySQL" },
        { label: "武汉SIT环境Redis", connect: false, type: "Redis" },
      ],
      tabs: [],
      activeTab: "",
      dialogVisible: false,
    };
  },
  methods: {
    addSource() {
      this.sources.push({ label: "武汉测试环境MySQL", connect: false });
      this.dialogVisible = false;
    },
    openSource(source, node) {
      console.log(source);
      let tab = this.tabs.find((t) => t.id == node.id);
      if (!tab) {
        // 首次打开
        source.id = node.id.toString();
        this.$set(source, "component", require(`@/components/${source.type}.vue`).default);
        this.tabs.push(source);
        tab = source;
      }
      this.activeTab = tab.id;
    },
    closeSource(id) {
      let index = this.tabs.findIndex((t) => t.id == id);
      this.tabs.splice(index, 1);
      if (index >= this.tabs.length) index = this.tabs.length - 1;
      this.activeTab = this.tabs[index].id;
    },
  },
};
</script>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
}
.header {
  background-color: #f0f0f0;
  border-bottom: 1px solid #bbbbbb;
}
.main {
}
.footer {
  width: 100%;
  bottom: 0;
  background-color: #f0f0f0;
  border-top: 1px solid #d7d7d7;
  text-align: center;
}
.el-tabs__content {
  height: calc(100%, 39px);
}
.aside {
  border-right: 4px solid #f0f0f0;
}
p {
  font-size: 12px;
  margin: 0;
}
.custom-tree-node {
  font-size: 12px;
}
.text-success {
  color: #67c23a;
}
.logo {float: right; width: 200px; height: auto; margin-top: -45px;}
</style>

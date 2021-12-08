<template>
  <div>
    <el-row>
      <el-select v-model="database" no-data-text="没有数据库">
        <el-option v-for="database in databases" :label="database.name" :value="database.name" :key="database.id"></el-option>
      </el-select>
      <el-button icon="el-icon-video-play" type="success">运行</el-button>
      <el-button icon="el-icon-video-pause" type="danger">停止</el-button>
    </el-row>
    <el-input v-model="command" type="textarea"></el-input>
    <el-tabs v-model="activeTab" type="border-card" @tab-remove="closeSource" :closable="tabs.length > 1">
      <el-tab-pane label="信息" name="info"> xxxx </el-tab-pane>
      <el-tab-pane label="结果" name="result">
        <el-table></el-table>
      </el-tab-pane>
      <el-tab-pane label="刨析" name="analysis">
        <el-table></el-table>
      </el-tab-pane>
      <el-tab-pane label="状态" name="status">
        <el-table></el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      command: "",
      database: {},
      databases: [],
      activeTab: "info",
    };
  },
};
</script>

<style></style>

<template>
  <div style="height: 100%">
    <div style="height: 50%">
      <el-row>
        <el-form :inline="true">
          <el-form-item label="数据库">
            <el-select v-model="database" no-data-text="没有数据库" size="small">
              <el-option v-for="database in databases" :label="database.name" :value="database.name" :key="database.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button @click="submit" icon="el-icon-video-play" type="success" size="small" round>运行</el-button>
          </el-form-item>
          <el-form-item>
            <el-button icon="el-icon-video-pause" type="danger" size="small" round>停止</el-button>
          </el-form-item>
        </el-form>
      </el-row>
      <el-input v-model="command" type="textarea" :rows="10" style="margin-top: 10px"></el-input>
    </div>
    <el-tabs v-model="activeTab" type="border-card" style="height: 50%">
      <el-tab-pane label="结果" name="result">
        <el-table height="100%"> </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import mysql from "mysql";
export default {
  data() {
    return {
      command: "",
      database: {},
      databases: [],
      activeTab: "result",
      connection: {},
    };
  },
  methods: {
    async connect() {
      var mysql = require("mysql");

      console.log(mysql);
      this.connection = mysql.createConnection({
        host: this.host,
        user: this.user,
        password: this.password,
        database: this.database,
        port: this.port,
      });
      await this.connection.connect();
      console.log(this.connection);
    },
    async submit() {
      let result = await this.connection.query(this.command);
      console.log(result);
    },
  },
  props: {
    host: {
      type: String,
    },
    user: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  created() {
    this.connect();
  },
};
</script>

<style>
.el-form-item {
  margin-bottom: 0;
}
</style>

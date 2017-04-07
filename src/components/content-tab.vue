<template>
  <div class="park-content">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="广州" name="city">
        <AllTable :cars="this.$store.getters.allParks" :cPage="this.$store.state.cPage"/>
      </el-tab-pane>
      <el-tab-pane label="空闲车位" class="firt" name="available">
        <AllTable :cars="this.$store.getters.availableParks" :cPage="this.$store.state.cPage"/>
      </el-tab-pane>
      <el-tab-pane label="使用中车位" name="using">
        <AllTable :cars="this.$store.getters.usingParks" :cPage="this.$store.state.cPage"/>
      </el-tab-pane>
      <el-tab-pane label="维护中车位" name="maintenance">
        <AllTable :cars="this.$store.getters.maintenanceParks" :cPage="this.$store.state.cPage"/>
      </el-tab-pane>
      <el-tab-pane label="停用车位" name="disabled">
        <AllTable :cars="this.$store.getters.disabledParks" :cPage="this.$store.state.cPage"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import AllTable from '@/components/all-table'
  export default {
    data () {
      return {
        activeName: 'city'
      }
    },
    components: {
      AllTable
    },
    methods: {
      handleClick () {
        this.$store.commit('updatePage', 0)
      }
    }
  }
</script>

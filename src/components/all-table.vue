<template>
  <div>
    <el-table
      :data="this.cars.slice(this.$store.state.cPage * pageSize, this.$store.state.cPage * pageSize + pageSize)"
      style="width: 100%">
        <el-table-column 
          prop="mark"
          label="标记状态"
          width="200"
          sortable >
        <template scope="scope">
           <el-radio-group v-model="scope.row.mark">
            <el-radio :label="1">有车</el-radio>
            <el-radio :label="0">没车</el-radio>
           </el-radio-group>
          <el-button size="mini">确认</el-button>
        </template>
        </el-table-column>
        <el-table-column 
          prop="carNumber"
          label="车位号"
          width="100"
          sortable />
        <el-table-column 
          label="车位状态"
          width="120"
          sortable>
          <template scope="scope">
            <span>{{scope.row.mark === 1 ? '有车' : '无车'}}</span>
          </template>
        </el-table-column>
        <el-table-column 
          prop="timeIn"
          label="入库时间"
          width="200"
          sortable>
          <template scope="scope">
            <el-icon name="time"></el-icon>
            <span style="margin-left: 2px">{{ scope.row.timeIn }}</span>
          </template>
        </el-table-column>
        <el-table-column 
          prop="timeOut"
          label="出库时间"
          width="200"
          sortable>
          <template scope="scope">
            <el-icon name="time"></el-icon>
            <span style="margin-left: 2px">{{ scope.row.timeOut }}</span>
          </template>
        </el-table-column>
        <el-table-column 
          prop="take"
          label="占用时长(天-时:分:秒)"
          width="200"
          sortable />
        <el-table-column 
          prop="electricity"
          label="电量"
          width="120"
          sortable />
        <el-table-column 
          prop="temperature"
          label="温度"
          width="120"
          sortable />
        <el-table-column 
          prop="latest"
          label="最新数据时间"
          width="200"
          sortable>
          <template scope="scope">
            <el-icon name="time"></el-icon>
            <span style="margin-left: 2px">{{ scope.row.latest }}</span>
          </template>
        </el-table-column>
    </el-table>
    <Pagination :length="this.cars.length" @fromPagination="updatePageSize" :cPage="this.cPage" :pageSize="pageSize"/>
  </div>
</template>

<script>
  import Pagination from '@/components/pagination'
  export default {
    data () {
      return {
        pageSize: 2
      }
    },
    props: ['cars', 'cPage'],
    components: {
      Pagination
    },
    methods: {
      updatePageSize (size) {
        this.pageSize = size
      }
    }
  }
</script>

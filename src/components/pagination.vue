<template>
	<div class="park-pagination">
	    <el-pagination
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page="currentPage1"
	      :page-sizes="[2, 3, 3, 4]"
	      :page-size="this.pageSize"
	      layout="sizes, prev, pager, next"
	      :total="this.length" />
	  </div>
</template>
<script>
    export default {
      methods: {
        handleSizeChange (val) {
          this.$emit('fromPagination', val)
        },
        handleCurrentChange (val) {
          this.currentPage = val
          this.$store.commit('updatePage', val - 1)
        }
      },
      props: ['length', 'cPage', 'pageSize'],
      data () {
        return {
          currentPage1: 1
        }
      }
    }
</script>

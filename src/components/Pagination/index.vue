<template>
  <div class="pagination">
    <button>上一页</button>
    <button>···</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>7</button>
    <button>···</button>
    <button>9</button>
    <button>上一页</button>

    <button style="margin-left: 30px">共{{ totalPage }} 条</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      myCurrent: this.currentPage
    }
  },
  props: {
    currentPage: {
      //当前页码
      type: Number,
      default: 1
    },
    pageSize: {
      //每页最大总数量
      type: Number,
      default: 10
    },
    showPageNo: {
      //连续最大页码数
      type: Number,
      default: 5,
      validator: function (value) {
        return value % 2 == 1
      }
    },
    total: {
      //所有数据的总数量
      type: Number,
      default: 0
    }
  },
  computed: {
    // 总页数
    totalPage() {
      const { total, pageSize } = this
      return Math.ceil(total / pageSize)
    },
    //连续页码数的开始页码和结束页码{start:xx,end:xx}
    startEnd() {
      let start, end
      const { myCurrentPage, showPageNo, totalPages } = this
      start = myCurrentPage - (showPageNo - 1) / 2
      if (start < 1) start = 1
      end = start + showPageNo - 1
      if (end > totalPages) {
        end = totalPages
        start = end - showPageNo + 1
        if (start < 1) start = 1
      }
      return { start, end }
    }
  }
}
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
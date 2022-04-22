<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">
      上一页
    </button>
    <button
      v-if="startPageNo != 1"
      @click="$emit('getPageNo', 1)"
      :class="{ active: pageNo == 1 }"
    >
      1
    </button>
    <button v-if="startPageNo != 1">···</button>
    <button
      v-for="(page, index) in continues"
      :key="index"
      @click="$emit('getPageNo', startPageNo + page - 1)"
      :class="{ active: pageNo == startPageNo + page - 1 }"
    >
      {{ startPageNo + page - 1 }}
    </button>
    <button v-if="startPageNo != this.totalPage - this.continues + 1">
      ···
    </button>
    <button
      v-if="startPageNo != this.totalPage - this.continues + 1"
      @click="$emit('getPageNo', totalPage)"
      :class="{ active: pageNo == totalPage }"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="pageNo == totalPage"
      @click="$emit('getPageNo', pageNo + 1)"
    >
      下一页
    </button>
    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startPageNo() {
      // 如果 no = 1 or 2 or 3 or 4
      if (this.pageNo <= Math.floor(this.continues / 2) + 2) {
        return 1;
      }
      // no = 28 or 29 or 30 or 31
      if (
        this.totalPage - Math.floor(this.continues / 2) - 1 <= this.pageNo &&
        this.pageNo <= this.totalPage
      ) {
        return this.totalPage - this.continues + 1;
      }

      if (this.pageNo >= 5 && this.pageNo <= 27) {
        return this.pageNo - Math.floor(this.continues / 2);
      }
      return 1
    },
  },
  props: ["total", "pageSize", "pageNo", "continues"],
};
// 1 2 3 4 5 ... 31     no = 1 or 2 or 3
// 1 ... 27 28 29 30 31  no = 31 or 30 or 29

// 1    2 3 4 5 6 ... 31   no = 4
// 1 ... 26 27 28 29 30 31  no = 28

//  1 ... 3 4 5 6 7 ... 31   no = 5 ~
//  1 ... 25 26 27 28 29 ... 31  no = ~ 27
</script>

<style lang="less" scoped>
.active {
  background-color: skyblue;
}
.pagination {
  text-align: center;

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
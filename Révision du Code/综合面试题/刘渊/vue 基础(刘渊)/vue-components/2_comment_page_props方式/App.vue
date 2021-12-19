<template>
  <div>
    <Header></Header>
    <div class="container">
      <Add :addComment="addComment"></Add>
      <!-- 传的是函数数据 -->
      <List :coms="comments" :deleteComment="deleteComment"></List>
      <!-- 传的是非函数数据 -->
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Add from './components/Add.vue'
import List from './components/List.vue'
export default {
  components: {
    Header,
    Add,
    List
  },
  methods: {
    addComment(comment) {
      this.comments.unshift(comment)
    },
    deleteComment(index) {
      this.comments.splice(index, 1)    }
  },
  data() {
    return {
      comments: [
        {id: 1, content: 'vue牛逼',username:'杨幂'},
        {id: 2, content: 'vue可以',username:'赵丽颖'},
        {id: 3, content: 'vue不错',username:'戚薇'},
      ]
    }
  }
  
}
</script>

<style>
</style>
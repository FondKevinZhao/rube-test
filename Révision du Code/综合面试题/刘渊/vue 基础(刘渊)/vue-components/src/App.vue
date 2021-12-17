<template>
  <div>
    <Header></Header>
    <div class="container">
      <Add></Add>
      <List :coms="comments"></List>
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
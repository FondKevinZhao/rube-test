<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MyButton msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import MyButton from '@/components/MyButton'

export default {
  name: 'App',
  components: {
    MyButton
  }
}
</script>

<style>
</style>

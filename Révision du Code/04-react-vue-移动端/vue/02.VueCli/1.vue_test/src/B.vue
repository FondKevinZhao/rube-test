<template>
  <div>
    <slot name="header" />
    <div>content BBBBB</div>
    <slot />
    <slot name="footer" />
  </div>
</template>

<script>
export default {
  name: "B",
};
</script>

<style>
</style>
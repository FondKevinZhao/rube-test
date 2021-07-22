<template>
  <div>
    <ul>
      <li>id: {{ message.id }}</li>
      <li>title: {{ message.title }}</li>
      <li>content: {{ message.content }}</li>
    </ul>
    <p>{{ name }} - {{ age }}</p>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "name", "age"],
  data() {
    return {
      messages: [
        { id: 1, title: "title001", content: "content001" },
        { id: 3, title: "title003", content: "content003" },
        { id: 5, title: "title005", content: "content005" },
      ],
    };
  },
  // mounted() {
  //   console.log(this.$route.params.id);
  // },
  computed: {
    message() {
      const id = +this.id;
      const message = this.messages.find((message) => message.id === id);
      return message;
    },
  },
};
</script>

<style>
</style>
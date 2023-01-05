<template>
  <div class="justify-center flex bg-blue-300 items-center h-screen">
    <div class="justify-center">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div class="text-4xl">
      <span>Hello Welcome to Tailwind Css</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

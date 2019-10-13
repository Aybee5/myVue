<template>
  <div id="app">
    <show-blogs />
  </div>
</template>

<script>
import blog from './components/blog.vue'
import showBlogs from './components/showBlogs.vue'
export default {
  name: 'app',
  components: {
    blog,
    showBlogs
  }
}
</script>

<style>
  body{
    margin: 0;
    font-family: 'Nunito SemiBold'
  }
</style>

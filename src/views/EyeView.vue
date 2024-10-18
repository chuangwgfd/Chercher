<template lang="pug">
  .news(v-loading="loading")
    img(:src="img")
</template>

<script>
import img from '@/assets/images/4.jpg'
export default {
  name: 'EyeView',
  components: {
  },
  data() {
    return {
      img,
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000);
  },
}
</script>

<style lang="scss" scoped>
  .news {
    width: 100%;
    height: 100vh;
    overflow: auto;
    img {
      width: 100%;
    }
  }
</style>

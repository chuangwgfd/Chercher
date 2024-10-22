<template lang="pug">
  .news.flex.center-center(v-loading="loading")
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
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: auto;
    img {
      // width: 100%;
      height: 100%;
    }
    &::before {
      content: " ";
      width: 100%;
      height: 71px;
      background: #212a31;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
</style>

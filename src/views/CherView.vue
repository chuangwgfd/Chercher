<template lang="pug">
  .cher.flex-col.align-items-center
    .logo
      img(:src="logo")
    .wrap(:class="{ 'extend': isInputTrigger }")
      .search.flex.align-items-center
        input.search-input(v-model="value" placeholder="Search")
        Icon.icon.pointer.cancel(v-show="value" icon="mi:close" @click.native="clearValue")
        Icon.icon.pointer(icon="mi:search" @click.native="toResult")
      .result(v-show="isInputTrigger")
        template(v-for="item in results")
          .result-items.flex.align-items-center.pointer
            Icon.icon(icon="mi:search")
            span {{ item }}

</template>

<script>
import { Icon } from "@iconify/vue2";
import logo from '@/assets/Logo.svg'

export default {
  name: "HomeView",
  components: {
    Icon,
  },
  data() {
    return {
      logo,
      value: "",
      results: [
        '李霏歌手',
        '李霏身高',
        '李霏熱門歌曲',
        '李霏新專輯',
        '李霏電影',
      ]
    };
  },
  computed: {
    isInputTrigger() {
      return this.value === "李霏";
      // return this.value === "1";
    },
  },
  methods: {
    clearValue() {
      this.value = ''
    },
    /**
     * 
     */
     toResult() {
      this.$router.push('/search?ssp=eJzj4tTP1TcwykvLKjBg_李霏');
    }
  },
};
</script>

<style lang="scss" scoped>
.cher {
  width: 100%;
  height: 100%;
  .logo {
    margin-top: 20%;
    margin-bottom: 2rem;
    width: 500px;
    img {
      width: 100%;
    }
  }
  .wrap {
    width: 450px;
    height: 48px;
    padding: 0.5rem 1.5rem;
    border: 1px solid #ccc;
    border-radius: 24px;

    &.extend {
      height: 236px;
    }
    .search {
      height: 30px;
      gap: .5rem;
      .icon {
        width: 30px;
        color: #999;
        font-size: 1.25rem;
      }
      .cancel {
        height: 100%;
        color: #666;
        padding-right: .5rem;
        border-right: 2px solid #ccc;
      }
    }
    input {
      flex: 1;
      height: 100%;
      font-size: 1rem;
      border: none;
      background: transparent;
      outline: 0;

      &:focus {
        border: none;
      }
    }

    .result {
      margin-top: .5rem;
      padding-top: .5rem;
      border-top: 1px solid #ccc;
      .result-items {
        padding: .35rem 0;
        .icon {
          color: #999;
          margin-right: .5rem;
        }
      }
    }
  }
}
</style>

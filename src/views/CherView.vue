<template lang="pug">
  .cher.flex.center-center
    .wrap(:class="{ 'extend': isInputTrigger }")
      .flex.align-items-center
        input(v-model="value")
        Icon.icon(icon="mi:close")
        Icon.icon(icon="mi:search")
      .result(v-show="isInputTrigger")
        template(v-for="item in results")
          .result-items.flex.align-items-center.pointer
            Icon.icon(icon="mi:search")
            span {{ item }}

</template>

<script>
import { Icon } from "@iconify/vue2";

export default {
  name: "HomeView",
  components: {
    Icon,
  },
  data() {
    return {
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
    },
  },
};
</script>

<style lang="scss" scoped>
.cher {
  .wrap {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 16px;
    &.extend {
      // height: 300px;
    }
    input {
      border: none;
      background: transparent;
      outline: 0;
      margin-bottom: .5rem;
      &:focus {
        border: none;
      }
    }

    .result {
      margin-top: .5rem;
      padding-top: .5rem;
      border-top: 1px solid #ccc;
      .result-items {
        padding: .25rem 0;
        .icon {
          color: #999;
          margin-right: .5rem;
        }
      }
    }
  }
}
</style>

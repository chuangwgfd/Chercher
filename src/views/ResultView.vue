<template lang="pug">
  .result(v-loading="loading")
    .header.flex-col.justify-content-between
      .flex.align-items-center
        .logo
          img(:src="logo")
        .search.flex.align-items-center
          span 李霏
          Icon.icon.pointer.cancel(icon="mi:close")
          Icon.icon.pointer(icon="mi:search")
        .account
          img(:src="accountImg")

      .menu.flex
        .menu-item.pointer.active 全部
        .menu-item.pointer 新聞
        .menu-item.pointer 圖片
        .menu-item.pointer 影片
        .menu-item.pointer 網頁
        .menu-item.pointer.more.flex.align-items-center
          Icon.icon(icon="pepicons-pencil:dots-y")
          span 更多

    .result-wrap(v-show="!loading")
      .img-under
        img(:src="searchImg")
        label.link-text.wiki.pointer 李霏 - 維基百科
        label.link-text.po1.pointer 《心跳的旋律》首秀發佈會不見李霏蹤影，引發熱議
        label.link-text.po2.pointer 李霏『放鳥』電影《心跳的旋律》首秀發佈會，粉絲心急如焚
        label.link-text.po3.pointer(@click="handleClickLink") 完美女神李霏放鳥首部電影發佈會，經紀人爸稱太過疲勞？
        label.link-text.po4.pointer 《心跳的旋律》發佈會被李霏大『放鳥』，外界傳與劇組關係不合
        label.link-text.po5.pointer 李霏電影首秀發佈會突缺席，被指控耍大牌
        label.link-text.po6.pointer 李霏電影首秀發佈會缺席，粉絲表達擔憂
        label.link-text.po7.pointer 李霏缺席《心跳的旋律》發佈會引發爭議，粉絲質疑其態度
        label.link-text.po8.pointer 李霏意外缺席發佈會，粉絲質疑大牌行為
    
</template>

<script>
import { Icon } from "@iconify/vue2";
import searchImg from '@/assets/images/5.jpg'
import accountImg from '@/assets/images/2.png'
import logo from '@/assets/logo.png'
import { Loading } from 'element-ui';

export default {
  name: 'ResultView',
  components: {
    Icon,
  },
  data() {
    return {
      logo,
      searchImg,
      accountImg,
      loading: true,
    }
  },
  mounted() {
    // let loading = this.$loading({fullscreen: true,})
    
    setTimeout(() => {
      this.loading = false
    }, 2000);
  },
  methods: {
     handleClickLink() {
      
    }
  },
}
</script>

<style lang="scss" scoped>
  .result {
    width: 100%;
    height: 100vh;
    overflow: auto;
    .header {
      padding: 1.75rem 170px 0;
      height: 140px;
      border-bottom: 1px solid #ccc;
      .logo, .account {
        height: 40px;
        img {
          height: 100%;
          display: inline-block;
        }
      }
      .account {
        flex: 1;
        text-align: right;
      }
      .search {
        width: 800px;
        height: 50px;
        background: #eee;
        margin-left: 2rem;
        padding: 0 1.5rem;
        border-radius: 14px;
        gap: 1rem;
        span {
          flex: 1;
        }
        .icon {
          width: 30px;
          color: #999;
          font-size: 1.25rem;
        }
        .cancel {
          color: #666;
          padding-right: .5rem;
          border-right: 2px solid #ccc;
        }
      }
      .menu {
        .menu-item {
          margin-right: .5rem;
          color: #666;
          padding: 4px .75rem;
          &.active {
            color: #333;
            border-bottom: 4px solid rgba(blue, .5);
          }
          &.more {
            margin-bottom: 3px;
          }
          .icon {
            font-size: 1.5rem;
          }
        }
      }
    }

    .result-wrap {
      width: 700px;
      margin-left: 180px;
      .img-under {
        position: relative;
        .link-text {
          position: absolute;
          width: 100%;
          left: 4px;
          color: #1a0dab;
          background: #fff;
          font-size: 18px;
          white-space: nowrap;
          &:hover {
            text-decoration: underline;
          }
          &.wiki {
            top: 53px;
          }
          &.po1 {
            top: 455px;
          }
          &.po2 {
            top: 581px;
          }
          &.po3 {
            top: 708px;
          }
          &.po4 {
            top: 832px;
          }
          &.po5 {
            top: 958px;
          }
          &.po6 {
            top: 1085px;
          }
          &.po7 {
            top: 1210px;
          }
          &.po8 {
            bottom: 43px;
          }
        }
      }
      img {
        width: 100%;
      }
    }
  }

</style>

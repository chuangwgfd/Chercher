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
      .photo-section
        .top
          label 李霏
          .tags
            span.pointer 歌曲
            span.pointer 專輯
            span.pointer 節目
            span.pointer 影片
            span.pointer 相關報導
        
        .singer 歌手 ⋮

        .photos.grid
          .imgWrap(:style="{gridArea: 'left'}")
            img.pointer(:src="photo3" )
          .imgWrap(:style="{gridArea: 'top'}")
            img.pointer(:src="photo1" )
          .imgWrap(:style="{gridArea: 'right'}")
            img.pointer(:src="photo4" )
          .imgWrap(:style="{gridArea: 'bot'}")
            img.pointer(:src="photo2" )

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
import photo1 from "@/assets/images/原圖_李霏照片_2-1.jpg"
import photo2 from "@/assets/images/原圖_李霏照片_2-2.jpg"
import photo3 from "@/assets/images/原圖_李霏照片_2-3.jpg"
import photo4 from "@/assets/images/原圖_李霏照片_2-4.jpg"

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
      photo1,
      photo2,
      photo3,
      photo4,
    }
  },
  mounted() {
    // let loading = this.$loading({fullscreen: true,})
    
    setTimeout(() => {
      this.loading = false
    }, 1000);
  },
  methods: {
     handleClickLink() {
      this.$router.push('/news?id=qkl1kl2j3k123k3590');
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
      margin-top: 3rem;
      .photo-section {
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #ccc;
        margin-bottom: .5rem;
        .top {
          margin-bottom: .5rem;
          label {
            font-size: 22px;
            display: inline-block;
            margin-right: 3rem;
          }
          .tags {
            display: inline-flex;
            gap: 1rem;
            >* {
              font-size: 10px;
              padding: .25rem .75rem;
              border: 1px solid #ccc;
              border-radius: 1rem;
              background: #e6e6e6;
            }
          }
        }
        .singer {
          font-size: 14px;
        }
        .photos {
          margin-top: 1rem;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-areas: 'left top right' 'left bot right';
          gap: 3px;
          .imgWrap {
            overflow: hidden;
            &:first-child {
              border-radius: .5rem 0 0 .5rem;
            }
            &:nth-child(3) {
              border-radius: 0 .5rem .5rem 0;
            }
          }
          img {
            object-fit: cover;
            min-width: 100%;
            min-height: 100%;
            transition: .3s;
            &:hover {
              scale: 1.1;
            }
          }
        }
      }
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

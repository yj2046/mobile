<template>
  <div class="dragArticle clearfix" id="dragArticle">
    <div class="journey-catalog">
      <ul>
        <li >行程一</li>
        <li>行程二</li>
        <li class="active">行程三</li>
        <li>行程四</li>
        <li>行程无</li>
        <li>行程四</li>
        <li>行程无</li>
        <li>行程四</li>
        <li>行程无</li>
      </ul>
    </div>
    <div class="journey-content">
      <div class="dragArticle-header clearfix">
        <p class="notice-big fl">拖拽可调整正文、图片顺序</p>
        <p class="notice-small fl">支持jpg、png、bmp格式的图片，图片单张大小不超过20M，<br>
          图片最小支持：320*800px，最大支持9999*9999px.
        </p>
        <a href="javascript:void(0);">关闭</a>
        <a href="javascript:void(0);">保存</a>
      </div>
      <ul class="clearfix">
        <li v-for="item in datas" class="dragArticle-item fl">
          <img v-if="item==1" src="http://img2.autoimg.cn/travelplat/g8/M13/6D/00/300x200_0_autohomecar__wKgHz1j2_UuAV7FfAAMoGnHBJl4942.jpg" alt="">
          <img v-if="item==2" src="" alt="">
          <a href="javascript:void(0);" class="del-icon">
            <img src="../../assets/editTool/deleteIcon-white.png" alt="">
          </a>
          <p v-if="item==1" class="update">修改正文</p>
          <p v-if="item==2" class="update">添加图注</p>
        </li>
        <a href="javascript:void(0);" class="fl">
          <img src="../../assets/editTool/addTextIcon.png" alt="">
          <span class="text">添加正文</span>
        </a>
        <a href="javascript:void(0);" class="fl">
          <img src="../../assets/editTool/addImgIcon.png" alt="">
          <span class="img-number">0/50</span>
          <span class="text">添加图片</span>
        </a>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        datas: [1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]/* 这里是数据，一定记住数据一定要放data中然后用return返回 */
      }
    },
    methods: {
      selectTags () {
        document.getElementById('tags-popup').style.display = 'inline-block'
        document.getElementById('shadow').style.display = 'block'
        document.getElementsByTagName('body')[0].style.position = 'fixed'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>/*  scoped的意思是这里的样式只对当前页面有效不会影响其他页面，还有可以设置lang="scss"就是支持css预编译，也就是支持sass或者less  */
@import 'reset.scss';
@import 'common.scss';
.dragArticle{
  width:100%;
  height:100%;
  overflow:hidden;
  position: fixed;
  top:0;
  bottom: 0;
  left:0;
  right:0;
  z-index: 8888;
  background: #fff;
  display:none;
  .journey-catalog{
    width:195px;
    position:absolute;
    top:0;
    left:0;
    overflow-y: scroll;
    height: 100%;
    li{
      height: 90px;
      line-height: 90px;
      font-size: 30px;
      color: #1A8CED;
      border-bottom: 1px solid #ccc;
      position: relative;

      &:hover{
        cursor: pointer;
      }
      &.active:after{
        content: '';
        position: absolute;
        background: #1A8CED;
        opacity: 0.2;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 2px;
        z-index:-9;
      }
    }

  }
  .journey-content{
    width:100%;
    margin-left:195px;
    padding:40px;
    position:relative;
    box-sizing:border-box;
    overflow-y: hidden;
    height: 100%;
    &:after{
       content: '';
       position: absolute;
       background: #1A8CED;
       opacity: 0.2;
       width: 100%;
       height: 100%;
       top: 0;
       left: 0;
       border-radius: 2px;
       z-index:-9;
       box-sizing:border-box;
    }
    .dragArticle-header{
      .notice-big{
        color: #666;
        font-size: 28px;
      }
    }
    ul{
      overflow-y: scroll;
      height: 100%;
      >a{
        width:126px;
        height:126px;
        border:2px dashed #1A8CED;
        box-sizing: border-box;
        margin-right:20px;
        color: $blue;
        position:relative;
        img{
          width:50px;
          margin:28px 38px 6px;
        }
        .text{
          font-size: 20px;
        }
        .img-number{
          font-size: 12px;
          position: absolute;
          top: 5px;
          right: 5px;
        }
      }
      .dragArticle-item {
        width: 126px;
        height: 126px;
        margin-right:20px;
        margin-bottom: 20px;
        position: relative;
        >img{
          width:100%;
          height:100%;
        }
        .update{
          height: 41px;
          position: absolute;
          bottom: 0;
          left: 0;
          color: #fff;
          font-size: 18px;
          width: 100%;
          line-height: 41px;
          &:after{
             content: '';
             width:100%;
             height:100%;
             background:#1B1B1B;
             opacity: 0.7;
             position: absolute;
             top:0;
             left:0;
  z-index: -9;
          }
        }
      }
      .del-icon{
        position: absolute;
        top:0;
        right:0;
        width:23px;
        height:23px;
        img{
          width:13px;
          margin-top:4px;
        }
        &:after{
          content: '';
          width:100%;
          height:100%;
          background:#1B1B1B;
          opacity: 0.4;
          position: absolute;
          top:0;
          right:0;
        }
      }
    }
  }
}
</style>

<template>
  <div class="main">
    <div class="content clearfix">
      <p class="crumbs">
        <a href="">游记首页</a>
        >写游记
      </p>
      <div class="left fl">
        <div class="head-img clearfix">
          <img src="../assets/editTool/headerImgIcon.png" alt="" class="fl">
          <div class="fl text">
            <p style="font-size: 16px">设置游记封面</p>
            <p>游记封面将会展示在列表页中，请认真选择哦～</p>
          </div>
          <a href="javascript:void(0);">上传封面图片
            <input name="upload_filename" type="file" accept=".jpg,.png,.bmp,jpeg">
          </a>
        </div>
        <div class="head-title">
          <div class="title-name">
            <input type="text" name="" placeholder="好标题，让你的游记脱颖而出！">
            <span class="limit">0/32</span>
            <span class="star">*</span>
          </div>
          <div class="place clearfix">
            <span class="fl title">出发地：</span>
            <input type="text" class="fl" placeholder="请输入出发地">
            <span class="limit">3/30</span>
            <ul class="place-list">
              <li>北京市</li>
              <li>北京市海淀区</li>
              <li>北京南站</li>
              <li>北京市信息酒店</li>
              <li>北京首都国际机场</li>
            </ul>
          </div>
        </div>
        <Journey></Journey>
      </div>
      <div class="right fl">
        <div class="feedback">
          <div class="imgbox"></div>
        </div>
        <div class="catalog-article">
          <div class="catalog">
            <img src="../assets/editTool/catalogIcon.png" alt="" class="catalog-icon">
            <span class="catalog-text">点击对应行程可快速切换</span>
            <ul>
              <li>
                01／北京收拾行囊，准备出发
              </li>
              <li>
                02/ 穿越沙漠的兄弟情之你是风
              </li>
              <li>
                03/ 今天天气好晴朗，处处好风光。
              </li>
            </ul>
          </div>
          <p class="dragArticleText">点击下方按钮可调整图文顺序</p>
          <a href="javascript:void(0);" class="dragArticleIcon" @click="showDragArticle()"></a>
        </div>

      </div>
    </div>
    <div class="edit-footer">
      <a href="javascript:void(0);">保存草稿</a>
      <a href="javascript:void(0);">游览</a>
      <a href="javascript:void(0);">发布游记</a>
    </div>
    <TagsPopup></TagsPopup>
    <dragArticle></dragArticle>
    <div class="shadow" id="shadow"></div>
  </div>
</template>
<script>
  import Journey from '../components/editTool/journey'
  import TagsPopup from '../components/editTool/tagsPopup'
  import dragArticle from '../components/editTool/dragArticle'
  export default {
    components: {Journey, TagsPopup, dragArticle},
    methods: {
      showDragArticle () {
        document.getElementById('dragArticle').style.display = 'block'
        document.getElementsByTagName('body')[0].style.position = 'fixed'
      }
    }
  }
</script>
<style lang="scss">
  @import '../components/editTool/reset.scss';
  @import '../components/editTool/common.scss';
  .content{
    width:1000px;
    margin:0 auto;
    padding-bottom: 66px;
    .crumbs{
      height:40px;
      line-height: 40px;
      font-size: 14px;
      text-align: left;
    }
    .right{
      margin-left:16px;
      width:292px;
      .feedback{
        border:2px solid #F58833;
        width:100%;
        height:120px;
        padding:6px;
        border-radius: 2px;
        box-sizing:border-box;
        .imgbox{
          background: url("../assets/editTool/feedback.png") no-repeat;
          background-size: 100% 100%;
          width: 100%;
          height: 100%;
        }
      }
      .catalog-article{
        position: relative;
        width:100%;
        padding:6px;
        box-sizing: border-box;
        margin-top:16px;
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
        }
        .catalog-icon{
          width:43px;
          height:32px;
        }
        .catalog-text{
          color: #999;
          font-size: 14px;
        }
        .dragArticleText{
          margin: 6px 0 2px 0;
          text-align: left;
          color: #999;
          font-size: 14px;
        }
        .catalog{
          background: #fff;
          border-radius: 2px;
          border: 1px solid #ccc;
          text-align: left;
          padding-left: 5px;
          ul{
            margin-left: 7px;
            margin-bottom: 10px;
          }
          li{
            height:26px;
            line-height: 26px;
            padding-left:11px;
            border-left:1px solid #999;
            font-size: 14px;
            color: #333;
            position:relative;
            &:after{
               content: '';
               width: 7px;
               height: 7px;
               border-radius: 50%;
               border: 2px solid #fff;
               position: absolute;
               top: 7px;
               left: -6px;
               background: #999;
            }

          }
        }
        .dragArticleIcon{
          background: url("../assets/editTool/dragArticle.png");
          display: block;
          width: 280px;
          height: 100px;
          background-size: cover;
        }
      }

    }
    .left{
      width:692px;
      .head-img{
        height:389px;
        margin-bottom:10px;
        background: #ccc;
        background: url("../assets/editTool/headerBg.jpg") no-repeat;
        background-size: 100% 100%;
        position:relative;
        img{
          width:36px;
          height:36px;
          margin-top:177px;
          margin-left:173px;
        }
        .text{
          margin-top: 173px;
          text-align: left;
          margin-left: 10px;
          color: #fff;
          font-size: 14px;
        }
        >a{
           position: absolute;
           bottom: 10px;
           right: 10px;
           color: #fff;
           font-size: 12px;
           width: 91px;
           height: 29px;
           border: 1px solid #fff;
           box-sizing: border-box;
           line-height: 29px;
           border-radius: 2px;
        }
        input{
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          &:hover{
            cursor: pointer;
          }
        }
      }
      .head-title{
        padding: 10px;
        height: 108px;
        box-sizing: border-box;
        box-shadow: $box-shadow;

        .place-list{
          display: none;
          position: absolute;
          top: 42px;
          left: 72px;
          width: 598px;
          height: 128px;
          box-sizing: border-box;
          padding: 6px 1px 1px 1px;
          color: #1A8CED;
          font-size: 14px;
          border: 1px solid #999;
          border-radius: 2px;
          background: #fff;
          z-index: 9;
          li{
            margin-bottom: 4px;
          }
        }
      }
      .add-journey{
        padding: 12px 0px;
        font-size: 18px;
        color: #1A8CED;
      }
    }
  }
  .edit-footer{
    position: fixed;
    bottom:0;
    width:100%;
    height:66px;
    line-height: 66px;
    background: #fff;
    border-top:1px solid #ccc;
    text-align: center;
    a{
      display: inline-block;
      width:130px;
      height:40px;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
      border:1px solid #1A8CEE;
      border-radius: 2px;
      color: #1A8CEE;
    &:hover{
       background: #1A8CEE;
       color: #fff;
       border:1px solid #1A8CEE;
     }
    }
  }
  .shadow{
    background: #333;
    opacity: 0.4;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    display: none;
  }
</style>

<template>
  <div class="main">
    <div class="content clearfix">
      <div class="left fl">
        <div class="head-img clearfix">
          <img src="../assets/editTool/headerImgIcon.png" alt="" class="fl">
          <div class="fl text">
            <p style="font-size: 16px">设置游记封面</p>
            <p>游记封面将会展示在列表页中，请认真选择哦～</p>
          </div>
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
        <div class="catalog">

        </div>
      </div>
    </div>
    <div class="edit-footer">
      <a href="javascript:void(0);">保存草稿</a>
      <a href="javascript:void(0);">游览</a>
      <a href="javascript:void(0);">发布游记</a>
    </div>
    <TagsPopup></TagsPopup>
    <div class="shadow" id="shadow"></div>
  </div>
</template>
<script>
  import Journey from '../components/editTool/journey'
  import TagsPopup from '../components/editTool/tagsPopup'
  export default {
    components: {Journey, TagsPopup}
  }
</script>
<style lang="scss">
  @import '../components/editTool/reset.scss';
  @import '../components/editTool/common.scss';
  .content{
    width:1000px;
    margin:0 auto;
    padding-bottom: 66px;
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
      .catalog{
        background: #1A8CED;
        width:100%;
        border-radius: 2px;
        padding:6px;
        box-sizing: border-box;
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

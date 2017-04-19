<template>
  <div class="tags-popup" id="tags-popup">
    <div class="popup-header">
      添加标签
      <img src="../../assets/editTool/popupClose.png" class="close" alt="">
    </div>
    <div class="popup-body">
      <p class="warm">可以选择或创建3个以内的标签，每个标签最多7个字，以空格键或回车键确认完成标签输入</p>
      <input type="text" placeholder="创建新标签">
      <span class="limit">3/30</span>
      <div class="selected-tags clearfix">
        <span class="fl">自然风貌<a href="javascript:void(0);" class="remove-tag">×</a></span>
        <span class="fl">自驾<a href="javascript:void(0);" class="remove-tag">×</a></span>
        <span class="fl">古镇<a href="javascript:void(0);" class="remove-tag">×</a></span>
      </div>
      <p class="common-tag">常用标签</p>
      <div class="tag clearfix more">
        <div class="tag-type fl more">游玩</div>
        <div class="tag-name fl">
          <span class="selected">自然风貌</span>
          <span>海岛</span>
          <span class="selected">自驾</span>
          <span>历史古迹</span>
          <span class="selected">古镇</span>
          <span>自然风貌</span>
          <span>自然风貌</span>
          <span>自然风貌</span>
          <span>自然风貌</span>
          <span>自然风貌</span>
          <span>自然风貌</span>
        </div>
      </div>
      <div class="tag clearfix">
        <div class="tag-type fl">美食</div>
        <div class="tag-name fl">
          <span>自然风貌</span>
          <span>海岛</span>
          <span>自然风貌</span>
          <span>自然风貌</span>
        </div>
      </div>
      <div class="tag clearfix">
        <div class="tag-type fl">美食</div>
        <div class="tag-name fl">
          <span>自然风貌</span>
          <span>海岛</span>
          <span>自然风貌</span>
          <span>自然风貌</span>
        </div>
      </div>
      <div class="tag clearfix">
        <div class="tag-type fl">美食</div>
        <div class="tag-name fl">
          <span>自然风貌</span>
          <span>海岛</span>
          <span>自然风貌</span>
          <span>自然风貌</span>
        </div>
      </div>
      <div class="tag clearfix">
        <div class="tag-type fl">美食</div>
        <div class="tag-name fl">
          <span>自然风貌</span>
          <span>海岛</span>
          <span>自然风貌</span>
          <span>自然风貌</span>
        </div>
      </div>
    </div>
    <div class="popup-footer">
      <a href="javascript:void(0);" class="add-btn">确认添加</a>
    </div>
  </div>
</template>
<script>

  export default {
    components: {}
  }
</script>
<style lang="scss">
  @import 'reset.scss';
  @import 'common.scss';
  .tags-popup{
    top: 50%;
    margin-top: -297px;
    display: none;
    width: 614px;
    z-index: 9999;
    position: fixed;
    background: #fff;
    left: 50%;
    margin-left: -307px;
    border-radius: 2px;

    .popup-header{
      height: 73px;
      line-height: 73px;
      text-align: center;
      border-bottom: 1px solid #ccc;
      font-size: 24px;
      color: #333;
      position: relative;
      .close{
        position: absolute;
        top: 14px;
        right: 14px;
        width: 15px;
        &:hover{
          cursor: pointer;
        }
      }
    }
    .popup-body{
      padding:0 40px;
      >input{
        padding-right: 40px;
        &:focus{
          border:1px solid $blue;
        }
      }
      .warm{
       font-size: 13px;
       color: #FA595C;
       margin: 10px 0;
       text-align: left;
      }
      .limit{
        top: 126px;
        right: 47px;
      }
      .selected-tags{
        font-size: 14px;
        margin-top: 10px;
        >span{
          float: left;
          border:1px solid #1A8CED;
          height:25px;
          line-height: 25px;
          padding: 0 19px 0 8px;
          box-sizing: border-box;
          margin-right:10px;
          border-radius: 2px;
          margin-top: 4px;
          color: #fff;
          background: $blue;
          position:relative;
          a{
            color: #fff;
            position: absolute;
            font-size: 23px;
            top: -1px;
            right: 1px;
          }
        }

      }
      .common-tag{
        font-size:20px ;
        text-align: left;
        margin:20px 0 10px 0;
      }
      .tag{
        height:32px;
        margin-bottom: 12px;

      }
      .tag.more{
        height:56px;
      }
      .tag-type{
        border:1px solid #333;
        height:30px;
        width:56px;
        line-height: 30px;
        text-align: center;
        border-radius: 2px;
      }
      .tag-type.more{
        margin-top: 15px;
      }
      .tag-name{
        width:472px;
      }
      .tag-name >span{
        float: left;
        color: #1A8CED;
        border:1px solid #1A8CED;
        height:25px;
        line-height: 25px;
        padding:0 8px;
        box-sizing: border-box;
        margin-left:10px;
        border-radius: 2px;
        margin-top: 4px;
        font-size:14px;
        &:hover{
          cursor: pointer;
        }
        &.selected{
          color: #fff;
          background: $blue;
         }
      }
    }
    .popup-footer{
      text-align: center;
      background: #F6F6F6;
      .add-btn{
        width:200px;
        height:44px;
        line-height: 44px;
        display: inline-block;
        background: $blue;
        color: #fff;
        font-size: 20px;
        border-radius: 2px;
        margin:20px auto;
      }
    }
    input{
    @include input(40px);
    }
  }
</style>

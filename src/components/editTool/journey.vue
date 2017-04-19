<template>
  <div>
    <p class="add-journey-btn">
      <img src="../../assets/editTool/add-journey.png" alt="">
      <span>添加行程</span>
    </p>
    <div class="journey">
      <div class="title-name">
        <input type="text" name="" placeholder="给这段旅程加个小标题~">
        <span class="limit">0/32</span>
        <span class="star">*</span>
      </div>
      <div class="tags">
        <div class="no-tags">
          <a href="javascript:void(0);" @click="selectTags">添加标签</a>
          <span>添加标签，有可能被加精哦～</span>
        </div>
        <ul class="has-tags clearfix">
          <li class="tag fl">自然风貌</li>
          <li class="tag fl">户外探险</li>
          <li class="tag fl">美食</li>
          <li class="tag fl" id="updateTags" @click="selectTags">修改标签</li>
        </ul>
      </div>
      <div class="place clearfix">
        <span class="fl title">目的地：</span>
        <input type="text" class="fl" placeholder="请输入目的地">
        <span class="limit">3/30</span>
      </div>
      <div class="spend clearfix">
        <div class="fl">
          本次行程花费：
          <input type="text" placeholder="最低" name="">
          <span>至</span>
          <input type="text" placeholder="最高" name="">
          <span class="limit limit_mix">1/30</span>
          <span class="limit limit_max">3/30</span>

        </div>
        <div class="fl date">
          旅行日期：
          <input type="text" placeholder="请选择出行日期" name="">
        </div>
      </div>
      <div class="content-text">
        <textarea placeholder="分享你的旅途故事~"></textarea>
        <p class="limit">300/2000</p>
      </div>
      <div class="content-text">
        <textarea placeholder="分享你的旅途故事">水电费师傅师傅水电费舒服的师傅师傅都是负担水电费水电费师傅师傅水电费水电费说的我问问的地方水电费师傅说的的方式冬虫夏草的发生的第三代</textarea>
        <p class="limit">300/2000</p>
      </div>
      <div class="content-image clearfix">
        <div class="image fl">
          <img src="http://img2.autoimg.cn/travelplat/g22/M0F/64/BE/838x471_0_autohomecar__wKjBwVjt-26AdqEyAAWGctpEtwk787.jpg">
          <div class="rotate"></div>
          <div class="rotate-text">
            <img src="../../assets/editTool/rotateIcon.png" alt="">
            <span>旋转90°</span>
          </div>
        </div>
        <div class="describe fl">
          <textarea placeholder="为图片添加描述~" ></textarea>
          <span class="limit">3/30</span>
        </div>
      </div>
      <div class="operate clearfix">

        <a href="" class="fl">
          <img src="../../assets/editTool/addTextIcon.png" alt="">
          <span class="text">添加正文</span>
        </a>
        <a href="" class="fl">
          <img src="../../assets/editTool/addImgIcon.png" alt="">
          <span class="img-number">0/50</span>
          <span class="text">添加图片</span>
        </a>
        <div class="fl warn">
          <p>单个行程最多添加50张图片</p>
          图片单张大小不超过20M<br>
          支持jpg、png、bmp格式的图片<br>
          图片最小支持：320*800px，最大支持9999*9999px
        </div>
      </div>
    </div>

    <p class="add-journey-btn">
      <img src="../../assets/editTool/add-journey.png" alt="">
      <span>添加行程</span>
    </p>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'/* 这里是数据，一定记住数据一定要放data中然后用return返回 */
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
.journey{
  padding: 20px 10px;
  box-shadow: 0 0 10px #CCC, 0 0px 10px #ccc;

  >.tags{
     margin-top:12px;
    .no-tags{
      display: none;
    }
    .has-tags{
      >li{
         height:25px;
         line-height: 25px;
         padding:0 8px;
         box-sizing: border-box;
         background: #e4f1fd;
         border-radius: 2px;
         color: #666;
         font-size: 14px;
         margin-right:10px;
      }
      >li:last-child{
         background: #1A8CED;
         color: #fff;
      &:hover{
        cursor: pointer;
      }
    }
    }
  }
  >.spend{
  >div{
     position: relative;
   }
  >.date{
     margin-left:53px;
  input{
    display: inline-block;
    width: 196px;
    height: 28px;
    line-height: 28px;
    text-indent: 4px;
    padding-right: 32px;
    box-sizing: border-box;
    border:1px solid #999;
  }
  }
  color: #333;
  font-size: 18px;
  margin-top:10px;
  input{
    width:83px;
    height:28px;
    line-height: 28px;
    border-radius: 2px;
    box-sizing: border-box;
    border:1px solid #999;
  }
  >span{
     width: 37px;
     text-align: center;
   }
  .limit_mix{
    top: 6px;
    right: 115px;
  }
  .limit_max{
    top: 6px;
    right: 4px;
  }
  }
  >.content-text{
    height:194px;
    border:$border;
    margin-top:10px;
    padding: 12px 17px 30px 5px;
    border-radius: 2px;
    position: relative;
    color: #333;
    font-size: 14px;
    >textarea{
      border:none;
      width:100%;
      height:100%;
   }
  .limit{
    position: absolute;
    top:inherit;
    right: 7px;
    font-size: 12px;
    color: #FD5554;
  }
  }
  >.content-image{
     border: $border;
     box-shadow:$box-shadow ;
     margin-top:10px;
     padding:10px;
    .image{
      width:180px;
      height:160px;
      background: #eee;
      position: relative;
    }
    .rotate{
      position: absolute;
      top:0;
      right:0;
      width:100%;
      height: 30px;
      background: #000;
      opacity: 0.5;
    }
    .rotate-text{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      color: #fff;
      height: 30px;
      text-align: right;
      padding-right: 4px;
      box-sizing: border-box;
      img{
        width:18px;
        height:18px;
        vertical-align: middle;
      }
      span{
        vertical-align: middle;
        margin-left: 5px;
        height: 30px;
        display: inline-block;
        line-height: 30px;
      }
    }
    img{
      width:100%;
    }
    .describe{
      width: 460px;
      position: relative;
      margin-left: 10px;
      textarea{
        height: 150px;
        border: none;
      }
      .limit{
        position: absolute;
        top: 152px;
        right: 0px;
        font-size: 12px;
        color: #999;
      }
    }
    textarea{
      width:100%;
    }
  }

}
.operate{
   height:146px;
   border: $border;
   margin-top:10px;
   padding:10px;
   box-sizing: border-box;
   color:#3F3F3F;
   font-size: 15px;
  a{
    width:126px;
    height:126px;
    border:2px dashed #1A8CED;
    box-sizing: border-box;
    margin-right:15px;
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
  p{
    color:#FD5554;
  }
  .warn{
    text-align: left;
    margin-left: 5px;
    margin-top: 23px;
    color: #3F3F3F;
  }
}
.add-journey-btn{
  text-align:left;
  margin:12px 0;
  color:$blue;
  font-size:18px;
  img{
    width: 18px;
    height: 18px;
    vertical-align: middle;
    margin: -1px 2px 2px 2px;
  }
}
</style>

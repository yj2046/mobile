<template lang="html">
  <div class="slide" id="PicSlide">
      <ul class="img">
        <li style="display: list-item;">
          <a href="http://sc.chinaz.com" target="_blank">
            <img src="../../assets/slide/thumb_640_360_1349779141347.jpg" width="499" height="281" alt="航行5300余海里驶抵亚丁湾。" data-pinit="registered">
          </a>
        </li>
        <li class="hidden" style="display: none;">
          <a href="http://sc.chinaz.com" target="_blank">
            <img src="../../assets/slide/thumb_640_360_1349779282588.jpg" width="499" height="281" alt="美国自然历史博物馆" data-pinit="registered">
          </a>
        </li>
        <li class="hidden" style="display: none;">
          <a href="http://sc.chinaz.com" target="_blank">
            <img src="../../assets/slide/thumb_640_360_1349776343282.jpg" width="499" height="281" alt="越南19日连续第三个周末发生反华抗议" data-pinit="registered">
          </a>
        </li>
        <li class="hidden" style="display: none;">
          <a href="http://sc.chinaz.com" target="_blank">
            <img src="../../assets/slide/thumb_640_360_1349778701818.jpg" width="499" height="281" alt="晚高峰拥堵路段峰值超140条" data-pinit="registered">
          </a>
        </li>
        <li class="hidden" style="display: none;">
          <a href="http://sc.chinaz.com" target="_blank">
            <img src="../../assets/slide/thumb_640_360_1349778567239.jpg" width="499" height="281" alt="这一数字仅为8.7万。" data-pinit="registered">
          </a>
        </li>
      </ul>
      <!-- 标题区 -->
      <div class="title">
        <p class="h3 pos-a">
          <a href="javascript:void(0);">和谐使命—2010,展开全方位的医疗服务。</a>
        </p>
        <div class="shadow">
        </div>
      </div>
      <!-- 缩略图 -->
      <div class="thumb">
        <ul>
          <li class="checked">
            <img src="../../assets/slide/thumb_120_60_1349779141347.jpg" width="88" height="50" alt=" 中国“和平方舟”号医院船抵达亚丁湾">
          </li>
          <li>
            <img src="../../assets/slide/thumb_120_60_1349779282588.jpg" width="88" height="50" alt="美国自然历史博物馆幕后鲜为人知的工作">
          </li>
          <li>
            <img src="../../assets/slide/thumb_120_60_1349776343282.jpg" width="88" height="50" alt="张召忠：解决南海争端时擦枪走火很正常">
          </li>
          <li>
            <img src="../../assets/slide/thumb_120_60_1349778701818.jpg" width="88" height="50" alt=" 北京市区17日拥堵路段峰值超140条创纪录">
          </li>
          <li>
            <img src="../../assets/slide/thumb_120_60_1349778567239.jpg" width="88" height="50" alt=" 全国141万人参加国考争1.6万岗位">
          </li>
        </ul>
        <div class="now-status">
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    mounted () {
      console.log(333)
    },
    data () {
      return {
        rootDom: null,
        l: 0,
        pigImg: null,
        thumb: null,
        nowStatus: null,
        thumbIMg: null,
        mainPart: 0,
        moveDistance: [],
        n: null,
        index: 0,
        interval: 6E3,
        thumbImgSize: 0,
        way: 'top'
      }
    },
    methods: {
      carousel () {
        this.l = window.setInterval(function () {
        }, this.interval)
      }
    }
  }
</script>
<style lang="scss">
  html, body, div, form, p, a, h1, h2, h3, h4, h5, h6, img, table, td, th, input, span, section, header, footer, nav, article, aside, fieldset, textarea, dl, dt, dd, blockquote, ul, ol { margin:0;padding:0;list-style: none;}
  body {font-size: 12px;background-color: #ffffff;}
  img {vertical-align:top;border:0;}
  a {text-decoration: none;color: #0B3B8C;}
  .clear {clear: both;}
  .pos-r {position: relative;}
  .pos-a {position: absolute;}
  .Opacity {opacity: .5;filter: alpha(opacity=50);}
  .slide{width:499px;height:351px;position:relative;margin:0 auto;}
  #PicSlide{width:499px;overflow:hidden;_zoom:1;height:351px;}
  #PicSlide .img{height:351px;overflow:hidden;_zoom:1;}
  #PicSlide .img a{
    display: block;
    width:499px;
    height:281px;
  }
  #PicSlide .title{bottom:70px;width:100%;position:absolute;overflow: hidden;}
  #PicSlide .shadow{
    width:100%;
    height:60px;
  }
  #PicSlide .title .h3{
    z-index: 30;
    line-height: 20px;
    padding: 22px 10px 10px 10px;
    width:100%;
    height:100%;
    box-sizing: border-box;
  }
  #PicSlide .title .h3:hover{cursor: pointer;}
  #PicSlide .title .h3 a{
    font-size: 20px;
    color: #F4F4F4;
  }
  #PicSlide .thumb{bottom:0;left:0;position:absolute;overflow:hidden;_zoom:1;height:70px;}
  #PicSlide .thumb ul{
    width: 499px;
    overflow: hidden;
    background: #eee;
    padding: 10px;
  }
  #PicSlide .thumb li{
    width:88px;
    height:50px;
    margin-right:10px;
    float:left;
    position: relative;
  }
  #PicSlide .thumb li:hover{cursor: pointer}
  #PicSlide .thumb li:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 88px;
    height: 50px;
    background: #000;
    opacity: 0.4;
    z-index: 99;
  }
  #PicSlide .thumb li.checked:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 88px;
    height: 50px;
    background: #000;
    opacity: 0;
    z-index: 99;
  }
  #PicSlide .thumb .now-status{
    width: 88px;
    height: 50px;
    position: absolute;
    top: 8px;
    left: 8px;
    border: 2px solid #F58833;
  }
  #PicSlide .thumb .now-status:after{
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    top: -9px;
    left: 41px;
    border-bottom: 7px solid #F58833;
    border-left: 5px solid #eeeeee;
    border-right: 5px solid #eeeeee;
  }
</style>

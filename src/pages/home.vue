<template lang="html">
  <div class="container">
    <!--<home-header>-->

    <!--</home-header>   &lt;!&ndash;  展示引入的header组件 &ndash;&gt;-->
    <router-link to="/demo" class="slide-component">
      <h2>轮播组件</h2>
    </router-link>
    <router-link to="/editTool" class="edit-component">
      <h2>编辑工具</h2>
    </router-link>
    <!--<div class="content">-->
      <!--<ul class="cont-ul">-->
        <!--&lt;!&ndash; list组件展示区，并用v-for来将数据遍历，:xx="xxx" 是用来给子组件传递数据的 &ndash;&gt;-->
        <!--<list v-for="item in items" :price="item.price" :title="item.title" :img="item.img"></list>-->
      <!--</ul>-->
    <!--</div>-->
    <!--<common-footer></common-footer>  &lt;!&ndash;  展示引入的footer组件 &ndash;&gt;-->
  </div>
</template>
<script>
  import HomeHeader from '../components/HomeHeader'   /* 本页面中用到了HomeHeader组件，所以就需要在这里引入一下 */
  import CommonFooter from '../components/commonFooter'
  import List from '../components/list'
  export default {
    data () {
      return {
        items: []   /* 定义一个空数组数据items */
      }
    },
    components: {
      HomeHeader,
      CommonFooter,
      List
    },
    created () {   /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
      this.$http.get('/api/goods').then((data) => {   /* 调用vue的ajax来请求数据，promise语法，并用es6的箭头函数 */
        this.items = data.body.data
      })
    }
  }
</script>

<style lang="css" scoped>
  .container {
    width: 100%;
    margin: 0 auto;
  }
  .content {
    margin-bottom: 1.8rem;
  }
  .cont-ul {
    padding-top: 0.5rem;
    background-color: #ccc;
  }
  .cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>

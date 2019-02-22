<template>
  <div id="app">
    <h2 class='title'>黑马买买买-商城
      <p>
        <router-link to="/goodslist">商品列表</router-link>
        <!-- <router-link to='/cart'>购物车({{$store.getters.getTotalCount}})</router-link> -->

        <router-link to='/cart'>购物车({{myCount}})</router-link>
      </p>
    </h2>
    <router-view></router-view>
  </div>
</template>

<script>
// 按需导入 & 结构赋值
import { mapGetters } from 'vuex'
export default {
  computed: {
    /** 
    ...mapGetters([
      'getTotalCount'
    ])
    */
   ...mapGetters({
     myCount:'getTotalCount'
   })
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
}

a {
  text-decoration: none;
}

.title{
  margin-top: 0;
  height: 200px;
  font-size:100px;
  font-weight: 900;
  background-color: hotpink;
  color:white;
}
.title p{
  font-size:20px;
}
.title p a{
  margin-right: 20px;
}

</style>

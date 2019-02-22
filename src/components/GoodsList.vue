<template>
  <div class="index-container">
    <ul>
      <li v-for="item in fruitList" :key="item.id">

          <img :src="item.url" alt>
          <p>商品名:{{item.name}}</p>
          <p>¥:{{item.price}}</p>
          <el-button @click="add2Cart(item)" style="margin-top:10px;" type="success">加入购物车</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapMutations,mapActions } from 'vuex'
export default {
  data() {
    return {
      fruitList: [
        {
          id:10001,
          num:1,
          url:
            "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=4ad42080aecc7cd9fa2d33df013a4602/42a98226cffc1e176cf9b75c4790f603738de91d.jpg",
          name: "苹果",
          price: 5
        },
        {
          id:10002,
          num:1,
          url:
            "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=607b103081d6277fe912353e1003780d/5d6034a85edf8db12c69f8ef0f23dd54574e74f2.jpg",
          name: "香蕉",
          price: 2.5
        },
        {
          id:10003,
          num:1,
          url:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=12aef9c102082838680ddb1280a2ce3c/8cb1cb1349540923e88531a09758d109b2de497b.jpg",
          name: "哈密瓜",
          price: 20
        },
        {
          id:10004,
          num:1,
          url:
            "https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=c708fc0ac41b9d168ac79d67cbe5d3b2/8601a18b87d6277f2fe15ced22381f30e824fc70.jpg",
          name: "榴莲",
          price: 35
        }
      ]
    };
  },
  // 方法
  methods: {
    ...mapMutations({
      add2Cart:'addGoods'
    })
    // ...mapActions({
    //   add2Cart:'asyncAddGoods'
    // })
    /**
    add2Cart(friut) {
      // 假设每次添加的时候，数量都是1
      friut.num = 1

      // 调用vuex中的mutations
      this.$store.commit('addGoods',JSON.parse(JSON.stringify(friut)))
      // this.$store.commit('addGoods',friut)

      // 调用vuex中的actions
      // this.$store.dispatch('asyncAddGoods',JSON.parse(JSON.stringify(friut)))
    }
     */
    //  ...mapMutations({
    //   add2Cart: 'addGoods' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    // })
  }
};
</script>
<style >
.index-container ul {
  display: flex;
}
.index-container ul li {
  width: 200px;
  height: 300px;
  border: 1px solid #000;
  margin: 10px;
  text-align: center;
}
.index-container ul li a {
  display: block;
}
.index-container ul li a p {
  background-color: #0094ff;
  color: white;
  padding-left: 20px;
}

.index-container ul li img {
  width: 180px;
  height: 180px;
  display: block;
  margin: 10px auto 0;
}
</style>

<template>
  <div style="margin-left:5px;">
    <el-table
      :data="cartList"
      style="width: 100%"
    >
      <el-table-column
        prop="name"
        label="名字"
        width="180"
      ></el-table-column>
      <el-table-column
        label="图片"
        width="180"
      >
        <template slot-scope="prop">
          <img
            class="icon"
            :src="prop.row.url"
            alt
          >
        </template>
      </el-table-column>
      <el-table-column
        label="数量"
        width="180"
      >
        <template slot-scope="prop">
          <el-input-number
            v-model="prop.row.num"
            size="small"
            :min="1"
            label="描述文字"
          ></el-input-number>
        </template>
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价"
        width="180"
      ></el-table-column>
      <el-table-column
        label="总价"
        width="180"
      >
        <template slot-scope="prop">{{prop.row.num*prop.row.price}}</template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="180"
      >
        <template slot-scope="prop">
          <el-button
            type="danger"
            @click="deleteGoods(prop.row.id)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 总价 -->
    <p>总价:{{totalPrice}}</p>
    <!-- 结算 -->
    <el-button style="margin-top:10px;margin-bottom:10px;" type='success'>结算</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartList: [],
    //   totalPrice: 0
    };
  },
  // 和Vuex没有半毛钱关系，之和当前Cart组件有关系
  computed:{
      totalPrice(){
          console.log("#################")
          let price = 0
           this.cartList.forEach(item => {
                price += item.num * item.price;
          });

          return price
      }
  },
  created() {
    this.cartList = this.$store.getters.getGoodsList;

    // this.cartList.forEach(item => {
    //   this.totalPrice += item.num * item.price;
    // });

    // console.log(this.cartList);
  },
  methods: {
    deleteGoods(id) {
      const index = this.cartList.findIndex(item => item.id === id);

      this.cartList.splice(index, 1);
    },
    // handleChange(){
    //     console.log("11111111111")
    //     this.cartList.forEach(item => {
    //         this.totalPrice += item.num * item.price;
    //     });
    // }
  }
};
</script>
